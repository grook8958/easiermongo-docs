class HTMLSelectMenu {
    /**
     * A custom HTML Select Menu.
     * @param {string} containerId 
     * @param {Array<string>} data 
     * @param {(item: HTMLElement) => {}}
     */
    constructor(containerId, data, onSelected = (item) => { return undefined }) {
        /**
         * Raw arguments passed into the constructor.
         */
        this.rawArgs = { containerId, data, onSelected };

        /**
         * The container 
         */
        this.container = document.getElementById(containerId);

        /**
         * @typedef {Object} HTMLSelectMenuData
         * @property {string} selected The current selected item
         * @property {Array<string>} stored The other items currently stored
         */

        /**
         * The parsed SelectMenuData
         * @type {HTMLSelectMenuData}
         */
        this.data = this._parseData(data);

        /**
         * The function to run when an item is selected
         * @type {(item: HTMLElement) => {}}
         */
        this.onSelected = onSelected;

        this.childElements = {
            itemContainer: null,
            button: this.container.querySelector('.select-menu-button'),
            arrowPath: this.container.querySelector('.select-menu-arrow-path'),
        }

        //Validate the options
        this._validate();

        //Initialize the function
        this.init();
    }

    /**
     * Initialize the SelectMenu
     * @private
     */
    init() {
        this.container.querySelector('.select-menu-button').addEventListener('click', () => {
            this._toggleArrow()
            const state = this.getState();
            if (state === 0) this.closeSelectMenu();
            else if (state === 1) this.openSelectMenu();
        })
    }

    /**
     * Open the SelectMenu
     */
    openSelectMenu() {
        const newSelectMenuItemsContainer = document.createElement('div');
        newSelectMenuItemsContainer.classList.add('select-menu-items-container');
        this.container.append(newSelectMenuItemsContainer);
        this.childElements.itemContainer = newSelectMenuItemsContainer;

        //Add the items
        this.setSelected(this.data.selected);
        for (const item of this.data.stored) {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = item;
            newSelectMenuItemsContainer.append(itemDiv);
            itemDiv.addEventListener('click', () => this.handleClick(itemDiv));
        }
    }

    /**
     * Handle the event of a click on an item.
     * @param {HTMLElement} element 
     */
    handleClick(element) {
        this.data.current = element.innerHTML;
        this.closeSelectMenu();
        this._toggleArrow();
        this.setSelected(this.data.current);

        this.onSelected(element);
    }

    /**
     * Close the SelectMenu
     */
    closeSelectMenu() {
        return this.childElements.itemContainer.remove(); 
    }

    /**
     * Set the selected value.
     * @param {string} value 
     * @returns 
     */
    setSelected(value) {
        const selected = this.childElements.button.querySelector('.selected');
        selected.innerHTML = value;
        this.container.setAttribute('value', value);
        return selected;
    }

    /**
     * Get the state of the SelectMenu
     * * `0` : **Closed**
     * * `1` : **Opened**
     * @param {HTMLElement} arrowPathElement 
     * @returns 
     */
    getState(arrowPathElement = this.container.querySelector('.select-menu-arrow-path')) {
        const facingUpArrowData = 'm5 15l7-7l7 7';
        const facingDownArrowData = 'm19 9l-7 7l-7-7';
        if (arrowPathElement.getAttribute('d') === facingDownArrowData) return 1;
        else if (arrowPathElement.getAttribute('d') === facingUpArrowData) return 0;
    }

    /**
     * Toggle the arrow
     * @param {HTMLElement} arrowPathElement 
     */
    _toggleArrow(arrowPathElement = this.container.querySelector('.select-menu-arrow-path')) {
        const facingUpArrowData = 'm5 15l7-7l7 7';
        const facingDownArrowData = 'm19 9l-7 7l-7-7';
        if (arrowPathElement.getAttribute('d') === facingDownArrowData) arrowPathElement.setAttribute('d', facingUpArrowData);
        else if (arrowPathElement.getAttribute('d') === facingUpArrowData) arrowPathElement.setAttribute('d', facingDownArrowData);
    }

    /**
     * Parse raw data.
     * @param {Array<string>} data 
     * @returns 
     */
    _parseData(data = this._data) {
        return { selected: data[0], stored: data};
    }

    /**
     * Validate the options.
     */
    _validate() {
        if (typeof this.rawArgs.onSelected !== 'function') throw new TypeError('[INVALID_TYPE] The "onSelected" option must be a function.');
        if (typeof this.rawArgs.containerId !== 'string') throw new TypeError('[INVALID_TYPE] The "containerId" option must be a string.');
        if (!Array.isArray(this.rawArgs.data)) throw new TypeError('[INVALID_TYPE] The "data" option must be an Array of strings.');
        if (!this.container) throw new RangeError('[INVALID_ID] The id passed to the constructor is invalid.');
        for (const key in this.childElements) {
            if (key === 'itemContainer') continue;
            if (!this.childElements[key]) throw new RangeError(`[MISSING_ELEMENT] The "${key}" element is missing.`);
        }
    }
}

export default HTMLSelectMenu;