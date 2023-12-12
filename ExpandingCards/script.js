const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeSelectedClasses()
    panel.classList.add('selected')
  })
})

function removeSelectedClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('selected')
  })
}

console.log(panels)