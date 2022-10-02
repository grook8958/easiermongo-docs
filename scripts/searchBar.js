const classesContainer = document.querySelector("[data-docs-classes-container]")
const typedefsContainer = document.querySelector("[data-docs-typedefs-container]")
const searchInput = document.querySelector("[data-search]")

import docsMap_v2 from '../assets/docsMap_v2.js';


let classes = [];
let typedefs = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value.toUpperCase();
  classes.forEach(docs => {
    const isVisible =
      docs.name.toUpperCase().substring(0, value.length) == value ||
      //docs.href.toLowerCase().includes(value) ||
    console.log(docs)
    if (!isVisible) docs.element.setAttribute("class", "hide");
    else if (isVisible) docs.element.removeAttribute("class", "hide");
  });

  typedefs.forEach(docs => {
    const isVisible =
      docs.name.toLowerCase().includes(value) ||
      docs.href.toLowerCase().includes(value) ||
    console.log(docs)
    if (!isVisible) docs.element.setAttribute("class", "hide");
    else if (isVisible) docs.element.removeAttribute("class", "hide");
  });
});

window.addEventListener('load', () => {
    docsMap_v2.docs.forEach(doc => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute('href', doc.href);
        link.textContent = doc.name;
        li.append(link);
        if (doc.type === 'class') {
          classesContainer.append(li);
          classes.push({ name: doc.name, href: doc.href, element: li })
        } else if (doc.type === 'typedef') {
          typedefsContainer.append(li)
          typedefs.push({ name: doc.name, href: doc.href, element: li })
        }
        
    });
});