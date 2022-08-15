import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"



export default function Register() {
  return (
    <>
        <Navbar />
        <div className="bg-p1Primary d-flex justify-content-center py-5">
            <div className="">
                <p className="text-center text-title2 mb-4">Create Account</p>
                <form className="d-flex flex-column mb-5">
                    <input 
                        type="text" 
                        id="userFName" 
                        name="userFName"
                        className="cadieInputbox cadieInputText" 
                        required  
                    />
                    <label htmlFor="userFName" className="text-header3 p1Dark d-inline text-start mb-4">FIRST NAME</label>
                    <input 
                        type="text" 
                        id="userLName" 
                        name="userLName"
                        className="cadieInputbox cadieInputText" 
                        required  
                    />
                    <label htmlFor="userLName" className="text-header3 p1Dark d-inline text-start mb-4">LAST NAME</label>
                    <input 
                        type="number" 
                        id="userContact" 
                        name="userContact"
                        className="cadieInputbox cadieInputText" 
                        required  
                    />
                    <label htmlFor="userContact" className="text-header3 p1Dark d-inline text-start mb-4">CONTACT NUMBER</label>
                    <input 
                        type="email" 
                        id="userEmail" 
                        name="userEmail"
                        className="cadieInputbox cadieInputText" 
                        required  
                    />
                    <label htmlFor="userEmail" className="text-header3 p1Dark d-inline text-start mb-4">EMAIL</label>
                    <input 
                        type="password" 
                        id="userPasword" 
                        name="userPasword"
                        className="cadieInputbox cadieInputText mt-2" 
                        required
                    />
                    <label htmlFor="userPasword" className="text-header3 p1Dark d-inline mb-4">PASSWORD</label>
                    <input type="submit" value="Create" className="mt-5 cadieInputSubmit text-header3 align-self-center"></input>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}
