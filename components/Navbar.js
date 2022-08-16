import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircleUser, faBagShopping  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Images/ApiaryLogo.svg"

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-p1Accent d-flex flex-row justify-content-around">
        <div className=" px-3 my-2 container-fluid">
          <div className="d-block d-sm-block d-md-none">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="d-none d-md-inline">
            <ul className="navbar-nav flex-row align-items-center">
              <li className="nav-item dropdown">
                  <Link href="#">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link href="/honey"><a className="dropdown-item" >Honey</a></Link></li>
                    <li><Link href="/valhalla"><a className="dropdown-item" >Mead</a></Link></li>
                  </ul>
              </li>
              <li className="nav-item flex-row">
                <Link className="nav-link" href="/ourfarm">Our Farm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link className="navbar-brand" href="/">
            <Image src={Logo} alt="Cadie'S Logo" className="imgLink" />
          </Link>
          <ul className="navbar-nav d-flex flex-column flex-md-row">
            <li className="nav-item imgLink">
              <Link className="nav-link" href="/account/login">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{ fontSize: 30 }}
                />
              </Link>
            </li>
            <li className="nav-item imgLink">
              <Link className="nav-link" href="/cart">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  style={{ fontSize: 30 }}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse" id="navbarToggleExternalContent">
            <ul className="navbar-nav flex-row align-items-center">
              <li className="nav-item dropdown">
                  <Link href="#">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Shop
                    </a>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link href="/honey"><a className="dropdown-item" >Honey</a></Link></li>
                    <li><Link href="/mead"><a className="dropdown-item" >Mead</a></Link></li>
                  </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ourfarm">Our Farm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
      </nav>
    )
  }