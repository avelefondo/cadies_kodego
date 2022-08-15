import Navbar from "../components/Navbar"
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <div className="heroHeight bg-p1Dark d-flex flex-column">
                <Navbar />
                <PageBanner />
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}