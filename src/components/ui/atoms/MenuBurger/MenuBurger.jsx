import React from 'react'
import './menuBurger.css'
import PropTypes from 'prop-types'
import burger from '../../../../assets/burger.svg'
import burgerClose from '../../../../assets/burger_close.svg'

function MenuBurger({ open, onClick }) {
  return (
    <div
      className="menu-burger"
      onClick={onClick}
      onKeyPress={onClick}
      role="menu"
      tabIndex={0}
    >
      <img src={open ? burgerClose : burger} alt="menu" />
    </div>
  )
}

MenuBurger.defaultProps = {
  onClick: () => {},
}

MenuBurger.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
}

export default MenuBurger
