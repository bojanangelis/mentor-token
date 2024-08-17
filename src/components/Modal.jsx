import { useEffect, useState } from 'react'

const Modal = ({ onClose, isOpen, children }) => {
  const [activeModel, setActiveModel] = useState(false)
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }
  // Trigger the animation after the component mounts
  useEffect(() => {
    if (isOpen) {
      // A slight delay to trigger the CSS transition
      requestAnimationFrame(() => setActiveModel(true))
    } else {
      setActiveModel(false)
    }
  }, [isOpen])

  // When the modal is closing, wait for the animation to finish before unmounting
  const handleTransitionEnd = () => {
    if (!activeModel && !isOpen) {
      onClose()
    }
  }

  console.log('children here-->', children)

  if (!isOpen && !activeModel) return null
  return (
    <div
      className={`modal-overlay${activeModel ? ' active' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      onClick={handleOverlayClick}
    >
      <div className='modal modal_view' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          <img src={'src/assets/x-icon.svg'} alt='' />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
