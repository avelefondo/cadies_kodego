import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from "next/link"

export default function Account() {
  return (
    <>
        <Navbar />
        <div className="heroHeight bg-p1Secondary d-flex align-items-center">
          <div className="row container-fluid">
            <div className="col-8">
              <div className="p-4 mb-3">
                <p className="text-header0">Your Current Orders:</p>
              </div>
              <div className="p-4">
                <p className="text-header0">Order History:</p>
              </div>
            </div>
            <div className="col-4">
                <div >
                  <p className="text-header0">Account Details</p>
                  <div>
                    <p className="text-body2">Avel Efondo</p>
                    <p className="text-body2">avelefondo@gmail.com</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-body3">Avel Efondo</p>
                    <p className="text-body3">09296979712</p>
                    <p className="text-body3">14 Adia St. Bagumbayan</p>
                    <p className="text-body3">Taguig, Metro Manila, 1632</p>
                  </div>      
                  <div className="mt-4">
                    <button className="btn-primary">Edit Address</button><br/>
                    <Link href="/">
                      <button className="btn-primary mt-2">Log out</button>
                    </Link>
                  </div>          
                </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}
