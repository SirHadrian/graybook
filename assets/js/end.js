let visibile_sidebar = true

const notebook = document.getElementById('notebook')
notebook.addEventListener('click', () => {

  const page = document.getElementById('page')
  if (visibile_sidebar == true) {
    page.style.display = 'flex'
    page.style.flexDirection = 'column'
    visibile_sidebar = false
  } else {
    page.style.display = 'grid'
    visibile_sidebar = true
  }

  sidebar.classList.toggle("close")
})

for (const notebook of document.getElementsByClassName('collapse')) {
  notebook.addEventListener('click', (event) => {
    event.stopPropagation()
    notebook.classList.toggle('open')
  })
}

for (const codeblock of document.getElementsByClassName('highlight')) {
  const item = document.createElement("span")
  item.classList.add("btn-copy")
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
    codeblock.childNodes[1].innerHTML = "Copied!"
  })

  codeblock.addEventListener('mouseout', () => {
    codeblock.childNodes[1].innerHTML = "Click to copy"
  })
}
