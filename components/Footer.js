import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookSquare, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image"
import Link from "next/link"
import Logo from "../public/Images/ApiaryLogo.svg"


export default function Footer() {
    return (
        <footer className="bg-p1Accent py-3 py-md-3 mt-auto">
            <div className="container">
                <div className="row align-items-center gy-3 gy-md-2">
                    <div className="col-md-4 order-3 order-md-1">
                        <Link href="#">
                        <p className="text-header3 p1Dark text-center">About The Developer</p>
                        </Link>
                    </div>
                    <div className="col-md-4 order-1 order-md-2 text-center">
                        <Link href="/">
                        <Image className="img-fluid footer-img image-fluid" src={Logo} alt="CadiesLogo"/>            
                        </Link>
                    </div>
                    <div className="col-md-4 text-center order-2 order-md-3">
                        <p className="text-header3 p1Primary">Connect With Us</p>
                        <Link href="#">
                            <FontAwesomeIcon
                                className="m-2"
                                icon={faFacebookSquare}
                                style={{ fontSize: 20, color: "#F5F1D4" }}
                            />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon
                                className="m-2"
                                icon={faInstagram}
                                style={{ fontSize: 20, color: "#F5F1D4" }}
                            />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon
                                className="m-2"
                                icon={faTwitter}
                                style={{ fontSize: 20, color: "#F5F1D4" }}
                            />
                        </Link>
                        <Link href="#">
                            <FontAwesomeIcon
                                className="m-2"
                                icon={faTiktok}
                                style={{ fontSize: 20, color: "#F5F1D4" }}
                            />
                        </Link>
                    </div>
                </div> 
            </div>
        </footer>
    )
}