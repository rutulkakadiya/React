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
            
            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
            <FontAwesomeIcon icon={faBars} />
            </button>

            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="staticBackdropLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <div>
                  <p className='text-[24px]'>Attar</p>
                  <p className='text-[24px] mt-3'>Perfume Spray</p>
                  <p className='text-[24px] mt-3'>Body Spray</p>
                  <p className='text-[24px] mt-3'>Bakhoor</p>
                  <p className='text-[24px] mt-3'>Incense Sticks</p>
                  <p className='text-[24px] mt-3'>New Arrival</p>
                  <p className='text-[24px] mt-3'>Diffuse Oil</p>
                  <p className='text-[24px] mt-3'>Track Order</p>
                  <p className='text-[24px] mt-3'>Return Your Order</p>
                  <p className='text-[24px] mt-3'>Store Locator</p>
                </div>
              </div>
            </div>
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

