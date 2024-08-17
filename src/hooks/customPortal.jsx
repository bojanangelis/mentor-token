import ReactDOM from 'react-dom'

const CustomPortal = ({ children }) => {
  // The element to portal children to
  const modalRoot = document.getElementById('custom-portal')

  // Return null if 'custom-portal' doesn't exist
  if (!modalRoot) return null

  return ReactDOM.createPortal(children, modalRoot)
}

export default CustomPortal
