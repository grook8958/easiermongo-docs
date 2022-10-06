import HTMLSelectMenu from "./HTMLSelectMenu.js";

export const versionPicker = new HTMLSelectMenu('version-picker', ['v2.0']);

/* FUNCTIONS */
export function getVersion() {
    return document.getElementById('version-picker').getAttribute('value');
}