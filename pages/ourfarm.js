import Navbar from "../components/Navbar"
import PageBanner from "../components/PageBanner";
import Story from "../components/Story";
import FarmBody from "../components/FarmBody";
import Footer from "../components/Footer";

export default function OurFarm() {
    return (
        <div>
            <div className="heroHeight heroHeight d-flex flex-column">
                <Navbar />
                <PageBanner />
                <Story />
            </div>
            <FarmBody />
            <Footer />
        </div>
    )
}