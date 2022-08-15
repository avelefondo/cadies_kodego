import Link from "next/link";
import Image from "next/image";
import Ornament from "../public/Images/Ornament.png"

export default function Farm() {
    return (
        <div className="heroHeight d-flex align-items-center bg-p1Secondary">
            <div className="py-4 px-3 container-xl">
                <div className="text-center ourFarmDiv">
                    <Image className="img-fluid" src={Ornament} alt="ornament"/>
                    <h2 className="text-title2">Our Farm</h2>
                    <Image className="img-fluid pb-md-5" src={Ornament} alt="ornament"/>
                    <h4 className="text-header2 my-3">EXPERIENCE GREATNESS WITH CADIE’S APIARY </h4>
                    <p className="text-body2 px-md-5 pb-md-3 text-break mt-3">Beyond the pure deliciousness of raw honey, the pure health and nutritional 
                        benefits continue to amaze us as more and more research uncovers the benefits of raw honey. 
                        Here at Cadie’s Apiary, it is very rewarding to hear comments from many of our regular customers 
                        allergies. In addition to our honey, you can always find organic, free-range eggs in our refrigerator. 
                        We much prefer the taste and understand the health benefits of organic eggs. We take pride in caring for 
                        not only our bees but also our customers.
                    </p>
                    <div className="text-center">
                        <Link href="/ourfarm">
                            <a role="button" className="btn btn-primary my-4">Learn More</a>
                        </Link>
                        
                        <Image className="img-fluid ornaments" src={Ornament} alt="ornament"/>
                    </div>
                </div>
            </div>
        </div>
    )
}