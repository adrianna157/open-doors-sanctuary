import React, { useState } from 'react'
import moment from 'moment'

const Footer = () => {
  const [year] = useState(moment().format('YYYY'))

  return (
    <footer className="greyed-bg w-screen lg:h-auto lg:bottom-0 block h-21pr py-h2pr ">
      <div className="lg:flex h-full w-full lg:justify-between font-medium">
        <div className="text-white header-text-font text-xs lg:text-4xl lg:mt-h4pr ml-w4pr lg:ml-w6pr">
          <p className="inline font-bold">P</p>eople <p className="inline font-bold">U</p>nited <p className="inline font-bold">R</p>esponsibly <p className="inline font-bold">S</p>uppressing <p className="inline font-bold">U</p>nderage <p className="inline font-bold">I</p>llicit <p className="inline font-bold">T</p>rafficking
        </div>
        <div className="text-white block ml-w4pr lg:ml-w6pr lg:text-right text-xs lg:text-xl standard-text-font font-semibold my-auto mr-6pr mt-h4pr lg:m-0">
          <p className="mb-1pr">Copyright {year} &copy;Guardian Group</p>
          <p className="mb-1pr"><a href = "/#terms_of_use">Terms of Use</a>|<a href = "/#privacy">Privacy Policy</a></p>
          <p>www.GuardianGroup.org</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
