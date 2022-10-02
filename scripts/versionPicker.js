const selectMenuContainer = document.getElementById('version-picker');
const button = selectMenuContainer.querySelector('.select-menu-button');
const arrowPath = selectMenuContainer.querySelector('.select-menu-arrow-path');


const selectMenuItemsList = ['v2.0'];

const selectData = {
    current: selectMenuItemsList[0],
    stored: selectMenuItemsList
}

/**
 * --STATE--
 * 0 = CLOSE;
 * 1 = OPEN;
 */

button.addEventListener('click', () => {
    toggleArrow();
    const state = getState();

    if (state === 0) closeSelectMenu();
    else if (state === 1) openSelectMenu();
})

const openSelectMenu = () => {
    //Create the container
    const newSelectMenuItemsContainer = document.createElement('div');
    newSelectMenuItemsContainer.classList.add('select-menu-items-container');
    selectMenuContainer.append(newSelectMenuItemsContainer);

    //Add the items
    setSelected(selectData.current);
    for (const item of selectData.stored) {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = item;
        newSelectMenuItemsContainer.append(itemDiv);
        itemDiv.addEventListener('click', () => handleClick(itemDiv));
    }

}

const handleClick = (element) => {
    //selectData.stored.splice(selectData.stored.indexOf(element.innerHTML), 1)
    //selectData.stored.push(selectData.current);
    selectData.current = element.innerHTML;
    closeSelectMenu()
    toggleArrow();
    setSelected(selectData.current);

}

const closeSelectMenu = () => {
    selectMenuContainer.querySelector('.select-menu-items-container').remove();
}

const setSelected = (value) => {
    const selected = button.querySelector('.selected');
    selected.innerHTML = value;
    selectMenuContainer.setAttribute('value', value)
}



const toggleArrow = (arrowPathElement = arrowPath) => {
    const facingUpArrowData = 'm5 15l7-7l7 7';
    const facingDownArrowData = 'm19 9l-7 7l-7-7';
    if (arrowPathElement.getAttribute('d') === facingDownArrowData) arrowPathElement.setAttribute('d', facingUpArrowData)
    else if (arrowPathElement.getAttribute('d') === facingUpArrowData) arrowPathElement.setAttribute('d', facingDownArrowData)
}

const getState = (arrowPathElement = arrowPath) => {
    const facingUpArrowData = 'm5 15l7-7l7 7';
    const facingDownArrowData = 'm19 9l-7 7l-7-7';
    if (arrowPathElement.getAttribute('d') === facingDownArrowData) return 1;
    else if (arrowPathElement.getAttribute('d') === facingUpArrowData) return 0;
}
