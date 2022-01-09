import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './menu.css'
import disableScroll from 'disable-scroll'

import MenuBurger from '../../atoms/MenuBurger/MenuBurger'

const order = ['landing', 'event']

function Menu() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('landing')

  const handleScroll = () => {
    setActive(order[Math.floor((window.scrollY + 10) / window.innerHeight)])
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [open])

  return (
    <div>
      <MenuBurger open={open} onClick={() => setOpen(!open)} />
      <div className={`menu-content${open ? ' visible' : ''}`}>
        <div className="menu-left">
          <Link
            activeClass="active"
            to="landing-section"
            spy
            smooth
            offset={0}
            duration={500}
            onClick={() => setOpen(false)}
          >
            <h3 className="actif">Accueil</h3>
          </Link>
          <Link
            activeClass="active"
            to="event-section"
            spy
            smooth
            offset={0}
            duration={500}
            onClick={() => setOpen(false)}
          >
            <h3
              className={`${
                order.indexOf(active) >= order.indexOf('event') ? 'actif' : ''
              }`}
            >
              L&apos;évènement
            </h3>
          </Link>
        </div>
        <div className="menu-right">
          <svg height="16" width="16" className="circle one">
            <circle cx="8" cy="8" r="8" fill="#02FEB0" />
          </svg>
          <svg height="60" width="11" className="bar one">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="60"
              style={{
                stroke:
                  order.indexOf(active) >= order.indexOf('event')
                    ? '#02FEB0'
                    : '#EF767A',
                strokeWidth: 11,
              }}
            />
          </svg>
          <svg height="16" width="16" className="circle two">
            <circle
              cx="8"
              cy="8"
              r="8"
              fill={`${
                order.indexOf(active) >= order.indexOf('event')
                  ? '#02FEB0'
                  : '#EF767A'
              }`}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Menu
