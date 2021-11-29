(() => {
  function playSound({ code }) {
    const audio = document.querySelector(`audio[data-key="${code}"]`)
    const key = document.querySelector(`.key[data-key="${code}"]`)

    if (!audio) return

    audio.currentTime = 0
    audio.play()

    key.classList.add('playing')
  }

  function removeTransition({ propertyName }) {
    if (propertyName != 'transform') return

    this.classList.remove('playing')
  }

  window.addEventListener('keydown', playSound)

  const keys = document.querySelectorAll('.key')

  keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
  })
})()
