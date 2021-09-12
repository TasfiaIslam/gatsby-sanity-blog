import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Layout from "./layout"

const Header = ({ siteTitle }) => (
  <header className="nav-outer-wrapper">
    <div className="w-5/6 lg:w-4/6 mx-auto items-center flex justify-between">
      <h1 className="leading-none text-2xl">
        <Link
          to="/"
          className="no-underline text-white font-bold hover:text-secondary cursor-pointer"
        >
          Home
        </Link>
      </h1>
      <div className="flex justify-center items-center">
        <ul className="flex justify-center items-center space-x-4">
          <li className="">
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li className="">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="">
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
