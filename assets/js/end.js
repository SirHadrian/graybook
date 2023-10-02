for (const notebook of document.getElementsByClassName('collapse')) {
    notebook.addEventListener('click', () => {
        notebook.classList.toggle('open')
    })
}

for (const codeblock of document.querySelectorAll('pre')) {
    const item = document.createElement("div")
    item.innerHTML = "Click to copy";
    codeblock.appendChild(item)
}
