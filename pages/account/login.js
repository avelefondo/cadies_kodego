import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from "next/link"


export default function Login() {

  return (
    <>
        <Navbar />
        <div className="bg-p1Primary d-flex justify-content-center py-5">
            <div className="">
                <p className="text-center text-title2 mb-4">Login</p>
                <form className="d-flex flex-column mb-5">
                    <input 
                        type="email" 
                        id="userEmail" 
                        name="userEmail"
                        className="cadieInputbox cadieInputText d-block" 
                        required  
                    />
                    <label htmlFor="userEmail" className="text-header3 p1Dark d-inline text-start mb-4">EMAIL</label>
                    <input 
                        type="password" 
                        id="userPasword" 
                        name="userPasword"
                        className="cadieInputbox cadieInputText d-block mt-2" 
                        required
                    />
                    <label htmlFor="userPasword" className="text-header3 p1Dark d-inline mb-4">PASSWORD</label>
                    <Link href="/account">
                        <input type="submit" value="Sign In" className="mt-5 cadieInputSubmit text-header3 align-self-center"></input>
                    </Link>
                </form>
                <Link href="/account/register">
                    <p className="text-center cadieTextLink">Create Account</p> 
                </Link>
                

            </div>
        </div>
        <Footer/>
    </>
  )
}
