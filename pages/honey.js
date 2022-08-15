import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import HB150 from "../public/Images/HB1504x.png"

export default function Honey() {
  const [value,setValue] = useState(1)

  const clickHandlerAdd = () => {
    return (
      setValue(prevState => prevState + 1)
    )
  }

  const clickHandlerMinus = () => {
    return (
      setValue(prevState => prevState - 1)
    )
  }



  return (
    <div>
      <Navbar />
      <div className="heroHeight d-flex align-items-center bg-p1Primary">
          <div className="container-fluid p-4">
            <div className="row gx-4">
              <div className="c0l-12 col-lg-4 p-2">
                <div className="row gy-4">
                  <div className="col-12">
                    <p className="text-header0 text-center text-lg-start">Cadie&apos;s Dark Wildflower Liquid Honey - 150g</p>
                    <p className="text-body2 mt-4 text-center text-lg-start ">
                        The dark nectar of plants such as Sunflowers, Japanese Knotweed, 
                       Asters & Golden Rod contribute to this rich and robust honey.
                    </p>
                  </div>
                  <div className="col-12">
                    <p className="text-body1 pe-5">Reviews
                      <FontAwesomeIcon
                        className ="pe-2 ps-4"
                        icon={faStar}
                        style={{ fontSize: 15 }}
                      />
                      <FontAwesomeIcon
                        className ="pe-2"
                        icon={faStar}
                        style={{ fontSize: 15 }}
                      />
                      <FontAwesomeIcon
                        className ="pe-2"
                        icon={faStar}
                        style={{ fontSize: 15 }}
                      />
                      <FontAwesomeIcon
                        className ="pe-2"
                        icon={faStar}
                        style={{ fontSize: 15 }}
                      />
                      <FontAwesomeIcon
                        className ="pe-2"
                        icon={faStar}
                        style={{ fontSize: 15 }}
                      />
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="accordion2  accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <p className="text-header4 p1Dark">Ingredients & Nutrition</p>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-body3">
                                  PURE ALL NATURAL GRADE A HONEY: This honey is pure, all natural & 
                                  has just one ingredient: honey. It&apos;s the standard all honey is judged by, 
                                  & the name that&apos;s been known & trusted for generations.
                                </div>
                                <p className="text-header3">Nutrition Information</p>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <p className="text-header4 p1Dark">Shipping & Returns</p>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-body3">
                                Tax included. 250php standard shipping on Bicol Region, 400php for all outside of Bicol Region 
                                deliveries. Please see our return policy.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <p className="text-header4 p1Dark">Storage Info</p>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-body3">
                                  Honey is best kept in a sealed container at room temperature. Refrigeration 
                                  preserves honey very well but also promotes granulation, yielding a semi-solid 
                                  mass. Freezing, on the other hand, preserves honey well and does not promote 
                                  granulation, but makes dispensing difficult. Avoid temperatures above room 
                                  temperature because they promote the darkening of the honey, along with subtle 
                                  flavor changes.
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                <Image src={HB150} alt="product1" className="productImg1 img-fluid" />
              </div>
              <div className="col-12 col-lg-4 mt-5 mt-lg-0 text-center text-lg-start">
                <div className="row gy-5">
                  <div className="col-12">
                    <div className="row">
                        <div className="col-12"><p className="text-header4 p1Dark">Size</p></div>
                        <div className="col-4">
                          <button className="formBtn" disabled>150g</button>                        
                        </div>
                        <div className="col-4">
                          <Link href="/honey450">
                            <button className="formBtn2" >450g</button>
                          </Link>
                        </div>
                        <div className="col-4">
                          <Link href="honey1Kg">
                            <button className="formBtn2">1.3Kg</button>
                          </Link>
                        </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="text-header0">300.00php</p>
                  </div>
                  <div className="col-8 col-lg-6">
                    <p className="text-header4 p1Dark">Quantity</p>
                    <div className="input-group mb-3">
                      <button className="qtyBtn" type="button" id="button-addon1" onClick={clickHandlerMinus}>
                      <FontAwesomeIcon
                          className ="p-1"
                          icon={faMinus}
                          style={{ fontSize: 15 }}
                        />
                      </button>
                      <input type="text" className="qtyInputBox text-center text-body2" value={value} onChange={e => setValue(e.target.value)} min="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                      <button className="qtyBtn" type="button" id="button-addon2" onClick={clickHandlerAdd}>
                        <FontAwesomeIcon
                          className ="p-1"
                          icon={faPlus}
                          style={{ fontSize: 15 }}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn-primary">Add To Cart</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
      </div>
      <Footer />
    </div>
  )
}
