import Image from "next/image"
import HeroImage from "../public/Images/HeroPhoto.png"

export default function Hero() {
    return (
        <div className="d-flex  flex-column flex-lg-row p-3 justify-content-around flex-fill">
            <div className="d-flex flex-column align-self-center">
                <div className="text-center text-lg-start">
                    <p className="text-title1 heroTitle">FRESH & ORGANIC</p>
                    <p className="text-title1 heroTitle">HONEY PRODUCTS</p>
                </div>
                <div className="heroDetails text-center text-lg-start ">
                    <p className="text-header1 ">From our farm to your home.</p>
                    <p className="text-body2">Gathered from our very own farm, you can <br/>rest assured knowing that only the 
                    highest <br/>quality of  honey products reaches your shelf.
                    </p>
                </div>
                <div className="heroButton text-center text-lg-start mb-5 mb-lg-0">
                    <button className="btn btn-primary mt-4" href="/honey">Learn More</button>
                </div>
            </div>
            <div className="flex-column align-self-center">
                <Image src={HeroImage} alt="HeroPhoto" fill="responsive" height={500} width={500}/>
            </div>

        </div>
    )
}