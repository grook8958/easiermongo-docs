export const copy = (tippy) => {
    document.getElementById("copy-button1").addEventListener("click", async () => {
        //Change the attributes of the button
        document.getElementById("copy-button1__icon__path").setAttribute("d", "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4");
        document.getElementById("copy-button1__icon").setAttribute("class", "inline-block button-active-color mb-1");

        //Copy the text to the clipboard
        const text = document.getElementById("npm-install-path").innerText;
        await navigator.clipboard.writeText(text);
        
        //Reset the element
        setTimeout(() => {
            document.getElementById("copy-button1__icon").setAttribute("class", "inline-block default-color mb-1");
            document.getElementById("copy-button1__icon__path").setAttribute("d", "M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3");
        }, 3000);
    })
}