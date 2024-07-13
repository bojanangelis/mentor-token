import PropTypes from 'prop-types'
import './ButtonStyle.scss'

const ButtonComponent = ({ text, icon }) => {
  return (
    <button className='button-primary'>
      {icon && <img width={18} height={18} src={icon} />}

      {text}
    </button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
}
ButtonComponent.defaultProps = {
  icon: null,
}

export default ButtonComponent
