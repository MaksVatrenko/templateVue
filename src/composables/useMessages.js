import { reactive } from 'vue'

const modal = reactive({
  componentName: '',
  isModalActive: false,
  isAnimated: false,
  modalData: null
})

export function useMessages() {
  function lockScroll() {
    document.body.style.overflow = 'hidden'
  }

  function unlockScroll() {
    document.body.style.overflow = ''
  }

  function openModal(name, data = null) {
    lockScroll()
    modal.componentName = name
    modal.modalData = data
    modal.isModalActive = true
    modal.isAnimated = true
  }

  function finishModalAnimation() {
    modal.isAnimated = false
    setTimeout(() => {
      modal.isModalActive = false
      unlockScroll()
    }, 500)
  }

  function closeModal() {
    modal.componentName = ''
    modal.modalData = null
    modal.isAnimated = false
    modal.isModalActive = false
    unlockScroll()
  }

  return {
    modal,
    openModal,
    finishModalAnimation,
    closeModal
  }
}
