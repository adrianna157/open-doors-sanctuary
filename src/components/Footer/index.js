import React, { useState } from 'react'
import moment from 'moment'

const Footer = () => {
  const [year] = useState(moment().format('YYYY'))

  return (
    <footer className="bg-hacky-200 w-screen lg:h-auto lg:bottom-0 block h-21pr px-3 py-1 mt-auto ">
      <div className="flex w-full justify-center md:justify-between items-center flex-col md:flex-row font-medium">
        <div className="text-white header-text-font font-semibold text-xs lg:text-xl">
          When crisis strikes, A door to Sanctuary Opens
        </div>
        <div className="text-white block font-normal lg:text-right text-xs lg:text-xl standard-text-font lg:m-0">
          <p>Copyright {year} &copy;Open Doors Sanctuary</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
