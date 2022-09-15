const propertiesDropdownBtn = document.getElementById('properties-dropdown-btn');
const methodsDropdownBtn = document.getElementById('methods-dropdown-btn');
const eventsDropdownBtn = document.getElementById('events-dropdown-btn');

const propertiesDropdownList = document.getElementById('properties-dropdown-list');
const methodsDropdownList = document.getElementById('methods-dropdown-list');
const eventsDropdownList = document.getElementById('events-dropdown-list');

if (propertiesDropdownBtn) propertiesDropdownBtn.addEventListener('click', () => toggleDropdown(propertiesDropdownList));
if (methodsDropdownBtn) methodsDropdownBtn.addEventListener('click', () => toggleDropdown(methodsDropdownList));
if (eventsDropdownBtn) eventsDropdownBtn.addEventListener('click', () => toggleDropdown(eventsDropdownList));

function toggleDropdown(dropdown) {
    const type = dropdown.id.replace('-list', '')
    const arrowUp = document.getElementById(`${type}-btn__icon__hide`);
    const arrowDown = document.getElementById(`${type}-btn__icon__show`);
    if (arrowUp && arrowDown && arrowDown.hasAttribute('hide') && arrowDown.attributes.getNamedItem('hide').value == "true") {
        arrowDown.removeAttribute('hide')
        arrowUp.setAttribute('hide', 'true')
        dropdown.removeAttribute('hide')
    } else {
        arrowDown.setAttribute('hide', 'true')
        arrowUp.removeAttribute('hide')
        dropdown.setAttribute('hide', 'true')
    }
}

//m19 9l-7 7l-7-7