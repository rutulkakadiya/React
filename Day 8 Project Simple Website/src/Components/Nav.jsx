import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <div>
      <header className='h-[80px] flex justify-center'>
        <nav className='h-[100%] w-[97%] flex justify-between items-center'>
          <div className="nav1">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="nav1">
            <img src="/Logo_290x.png" className='h-[30px]' alt="" />
          </div>
          <div className="nav1">
            <FontAwesomeIcon className='mx-2' icon={faSearch} />
            <FontAwesomeIcon className='mx-2' icon={faUser} />
            <FontAwesomeIcon className='ms-2' icon={faCartShopping} />
          </div>
        </nav>
      </header>
    </div>
  )
}

