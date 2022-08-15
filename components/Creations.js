import Link from "next/link";
import Image from "next/image";
import MeadRec from "../public/Images/MeadRec.png"
import HoneyRec from "../public/Images/HoneyRec.png"

export default function Creations() {
    return (
        <div className="heroHeight p-3 bg-p1Primary">
            <div className="row mb-lg-4">
                <div className="col-lg-2"></div>
                <div className="col-12 col-lg-8 text-center mb-5">
                    <p className="text-title2 titleTextHeight my-4">OUR HoNEY CREATIONS</p>
                    <p className="text-body2 text-wrap px-5">
                        To get your hands on some of our amazing honey 
                        creations listed above, buzz on over to our shop 
                        page and browse all of our available honey and products. 
                        Thank you for supporting Cadie’s Apiary!
                    </p>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-12">
                    <div className="row">
                        <span className="col-lg-1"></span>
                        <div className="col-12 col-lg-5">
                            <div className="card">
                                <Image src={HoneyRec} className="card-img-top" alt="Honey"/>
                                <div className="card-body bg-p1Secondary px-3">
                                    <p className="card-text text-center text-body2">The dark nectar of plants such as Sunflowers, Japanese Knotweed, 
                                        Asters & Golden Rod contribute to this rich and robust honey.
                                    </p>
                                </div>
                                <div className="cardbuttoncontainer text-center  bg-p1Secondary">
                                    <Link href="/honey">
                                        <a className="btn btn-primary">Shop now!</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="card">
                                <Image src={MeadRec} className="card-img-top" alt="..."/>
                                <div className="card-body card-body bg-p1Secondary px-3">
                                    <p className="card-text text-center text-wrap text-body2">Bright and fresh, with hints of 
                                        sweet berries. We&apos;ve crafted Valhalla for more than 2 years. It defies traditional mead styles.
                                    </p>
                                </div>
                                <div className="cardbuttoncontainer text-center  bg-p1Secondary">
                                    <Link href="/valhalla">
                                        <a className="btn btn-primary">Shop now!</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <span className="col-lg-1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}