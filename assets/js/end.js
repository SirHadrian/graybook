for (const notebook of document.getElementsByClassName('collapse')) {
    notebook.addEventListener('click', () => {
        notebook.classList.toggle('open')
    })
}

for (const codeblock of document.querySelectorAll('pre')) {
    const item = document.createElement("div")
    item.innerHTML = "Click to copy";
    codeblock.appendChild(item)

    codeblock.addEventListener("click", () => {
        codeblock.childNodes[1].innerHTML = ""
        const el = document.createElement('textarea');
        el.value = codeblock.textContent;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        codeblock.childNodes[1].innerHTML = "Copyed!"
    })
}
