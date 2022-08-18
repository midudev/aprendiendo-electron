const $ = selector => document.querySelector(selector)

const $count = $('#count')
const $button = $('button')

$button.addEventListener('click', () => {
  const count = +$count.innerHTML
  $count.innerHTML = (count + 1).toString()
})

window.electronAPI.onUpdateTheme((event, theme) => {
  const root = document.documentElement
  console.log({ theme })
  root.style.setProperty('--scheme', theme)
})
