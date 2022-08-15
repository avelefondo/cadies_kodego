
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import Image from "next/image";
import HB150 from "../public/Images/HB1504x.png"

export default function Cart() {
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
    <>
        <Navbar />
        <div className="heroHeight bg-p1Secondary d-flex py-5">
          <div className="row container-fluid">
            <div className="col-8">
              <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <Image className="img-fluid cProductImg1 px-3" src={HB150} alt="honey160g" height={90} width={160}></Image>
                </div>
                <div className="col-4">
                    <p className="text-header2 mb-3">Cadie&apos;s Dark Wildflower Liquid Honey - 150g</p>
                    <p className="text-body2">UNIT PRICES:</p>
                    <p className="text-body2">300.00php</p>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-7">
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
                        <div className="col-5 mt-2 ">
                        <FontAwesomeIcon
                            className ="p-1"
                            icon={faTrashAlt}
                            style={{ fontSize: 15 }}
                        />
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-4">
                <div className="" >
                  <p className="text-header3 mb-2">Sub Total</p>
                  <p className="text-header2 mb-4">300.00php</p>
                  <div className="mb-4">
                    <p className="text-header3 mb-2">Shipping Fee:</p>
                    <p className="text-header2">200.00php</p>
                  </div>
                  <div>
                    <p className="text-header2">Total:</p>
                    <p className="text-header1">500.00php</p>
                  </div>
  
                  <div className="mt-4">
                    <button className="btn-primary">Check Out</button><br/>
                  </div>          
                </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}
