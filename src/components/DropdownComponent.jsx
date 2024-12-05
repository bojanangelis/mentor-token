import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GoChevronDown } from 'react-icons/go'
import useOutsideClick from '../hooks/useOutsideClick'
import './DropdownComponent.scss'

const Dropdown = ({
  id,
  title = 'Select',
  data,
  position = 'bottom-left',
  hasImage,
  style,
  selectedId,
  onSelect,
  icon,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  )

  const handleChange = (item) => {
    setSelectedItem(item)
    onSelect && onSelect(item.id)
    setIsOpen(false)
  }

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId)
      newSelectedItem && setSelectedItem(newSelectedItem)
    } else {
      setSelectedItem(undefined)
    }
  }, [selectedId, data])

  const dropdownRef = useRef(null)
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  })

  return (
    <div ref={dropdownRef} className={`dropdown ${className}`}>
      <button
        id={id}
        aria-label='Toggle dropdown'
        aria-haspopup='true'
        aria-expanded={isOpen}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className={`${'dropdown__button'} ${style}`}
      >
        {icon && icon}
        <span>{selectedItem?.name || title}</span>
        <GoChevronDown
          size={20}
          className={`${'dropdown__icon'} ${isOpen ? 'dropdown__icon--open' : ''}`}
        />
      </button>
      {isOpen && (
        <div
          aria-label='Dropdown menu'
          className={`${'dropdown__menu'} ${`dropdown__menu--${position}`}`}
        >
          <ul role='menu' aria-labelledby={id} aria-orientation='vertical'>
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={`${'dropdown__item'} ${
                  selectedItem?.id === item.id ? 'dropdown__item--selected' : ''
                }`}
              >
                {hasImage && (
                  <img
                    src={item.imageUrl}
                    alt='image'
                    loading='lazy'
                    className={'dropdown__item__image'}
                  />
                )}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
  position: PropTypes.oneOf(['bottom-right', 'bottom-left', 'top-right', 'top-left']),
  hasImage: PropTypes.bool,
  style: PropTypes.string,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func,
  className: PropTypes.string,
}

export default Dropdown
