import Image from "next/image"
import Apiarist1 from "../public/Images/apiarist1.png"
import Apiarist2 from "../public/Images/apiarist2.png"
import Apiarist3 from "../public/Images/apiarist3.png"

export default function FarmBody() {
    return (
        <div>
            <div className="heroHeight bg-p1Secondary d-flex align-items-center p-4">
                <div className="row">
                    <div className="row col-12 col-lg-6">
                        <div className="row col-6 ">
                            <div className="col-12 d-flex align-items-start">
                                <Image className="img-fluid" src={Apiarist1} alt="apiarist1"/>
                            </div>
                            <div className="col-12 d-flex align-items-end">
                                <Image className="img-fluid" src={Apiarist2} alt="apiarist2"/>
                            </div>
                        </div>
                        <div className="col-6">
                            <Image className="img-fluid" src={Apiarist3} alt="apiarist2"/>
                        </div> 
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="row d-flex align-items-center">
                            <div className="col-12">
                                <p className="text-title2 p1Accent text-center text-lg-start">THE KEEPER</p>
                                <p className="text-body2 text-center text-lg-start">
                                    If you&apos;re wondering how a man who has worked most of 
                                    his adult life in the corporate world now runs a 
                                    successful bee farm, I don&apos;t blame you! But actually, 
                                    I am a certified Cornell Mastered beekeeper and I 
                                    have been caring for bees for many years of my life. 
                                    Now, I choose to educate others who are looking to 
                                    become beekeepers. Not only do I choose to educate the 
                                    public about beekeeping, but I also stress the importance 
                                    of focusing on the health and welfare of the bees as your 
                                    top priority. When you do that, the bees live happier, 
                                    healthier more productive lives, which in return enhances 
                                    everything we do.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="heroHeight p-4 bg-p1Primary d-flex align-items-center">
                <div className="row d-flex flex-fill justify-content-around">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center">
                        <h3 className="text-title2 p1Accent my-3">
                        GIVE US A VISIT
                        </h3>
                        <div className="text-align-center">
                            <iframe
                                src="https://maps.google.com/maps?q=Mary's%20Farmville&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                scrolling="no" marginHeight="0" marginWidth="0"  className="img-fluid p1border gmaps my-3">
                            </iframe>
                        </div>
                        <p className="text-header2 px-3 mb-4">WE WOULD LOVE TO SEE YOU HERE</p>
                        <p className="text-body2 px-3 mb-3">
                            We&apos;re located at Purok 1 Barangay, Daet, 4600 Camarines Norte. We and our 
                            hard working bees will love you see you here. See you!
                        </p>
                    </div>
                    <div className="col-md-2"></div>
                </div>


            </div>
        </div>
    )
}