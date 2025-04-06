import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Art gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link px-2 text-body-secondary">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-body-secondary">
                contact us
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 Company, Art Gallery</p>
        </footer>
    </>
  )
}
