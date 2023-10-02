for (const notebook of document.getElementsByClassName('collapse')) {
    notebook.addEventListener('click', () => {
        notebook.classList.toggle('open')
    })
}
