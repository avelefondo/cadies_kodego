import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLocationDot, faPhone  } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
    return (
        <div className="d-flex flex-fill align-items-center bg-p1Primary p-4">
            <div className="row px-4">
                <div className="col-12 col-md-5">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-title2 p1Accent text-center text-md-start">HAVING QUESTIONS?</p>
                        </div>
                        <div className="col-12">
                            <p className="text-header2 p1Dark text-center text-md-start">We&apos;ve Got The Answers!</p>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-3 mb-1">
                            <div className="d-inline">
                                <FontAwesomeIcon
                                    className="m-2"
                                    icon={faLocationDot}
                                    style={{ fontSize: 20, color: "#212121" }}
                                />
                            </div>
                            <div className="d-inline px-2">
                                <p className="text-body2 p1Dark">Purok 1 Barangay, Daet, 4600 Camarines Norte</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center mt-1 mb-3">
                            <div className="d-inline">
                                <FontAwesomeIcon
                                    className="m-2"
                                    icon={faPhone}
                                    style={{ fontSize: 20, color: "#212121" }}
                                />
                            </div>
                            <div className="d-inline px-2">
                                <p className="text-body2 p1Dark">+63 549 12 58</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <form className="row g-2 d-flex align-items-center">
                        <div className="col-md-6">
                            <label htmlFor="formGroupExampleInput" className="form-label text-header3">Full Name</label>
                            <input type="text" className="form-control bg-p1Secondary text-body2" id="formGroupExampleInput" placeholder="Your Full Name"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="formGroupExampleInput" className="form-label text-header3">Email</label>
                            <input type="email" className="form-control bg-p1Secondary text-body2" id="formGroupExampleInput" placeholder="Your Email"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label text-header3">Message</label>
                            <textarea className="form-control bg-p1Secondary text-body2" id="exampleFormControlTextarea1" rows="5" placeholder="Your suggestions"></textarea>
                        </div>
                        <div className="col-3 mx-auto mx-md-0">
                            <button type="submit" className="btn btn-primary mt-2 mt-md-4 ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}