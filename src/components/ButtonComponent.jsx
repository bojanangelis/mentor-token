import PropTypes from 'prop-types'
import './ButtonStyle.scss'

const ButtonComponent = ({ text, icon, className, disabled, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`button-primary ${className}`}>
      {icon && <img width={18} height={18} src={icon} />}

      {text}
    </button>
  )
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
ButtonComponent.defaultProps = {
  icon: null,
  className: '',
  disabled: false,
  onClick: null,
}

export default ButtonComponent
