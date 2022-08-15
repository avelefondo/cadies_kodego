import { useRouter } from "next/router"

export default function PageBanner() {
    const currentRoute = useRouter().route
    const  bannerTitle = currentRoute == "/ourfarm" ? "Our Farm" : "Contact Us"    

    return (
        <div className="bg-banner text-center py-3">
                <p className="container-fluid text-title2 p1Primary">{bannerTitle}</p>
        </div>
    )
}