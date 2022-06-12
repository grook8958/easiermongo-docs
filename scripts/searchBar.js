const classesContainer = document.querySelector("[data-docs-classes-container]")
const typedefsContainer = document.querySelector("[data-docs-typedefs-container]")
const searchInput = document.querySelector("[data-search]")

//{name: 'string', href: 'link'}
import rawDocs from '../assets/docs_v1.json' assert {type: "json"};

let classes = [];
let typedefs = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  classes.forEach(docs => {
    const isVisible =
      docs.name.toLowerCase().includes(value) ||
      docs.href.toLowerCase().includes(value) ||
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
    rawDocs.classes.forEach(doc => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute('href', doc.href);
        link.textContent = doc.name;
        li.append(link);
        classesContainer.append(li);
        classes.push({ name: doc.name, href: doc.href, element: li })
    });

    rawDocs.typedefs.forEach(doc => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.setAttribute('href', doc.href);
        link.textContent = doc.name;
        li.append(link);
        typedefsContainer.append(li);
        typedefs.push({ name: doc.name, href: doc.href, element: li })
    });
});