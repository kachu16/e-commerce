import Signup from "../features/auth/components/Signup";
import Navbar from "../features/navbar/Navbar";
function SignupPage () {
    return (
        <div>
            <Navbar>
               <Signup/>
            </Navbar>
        </div>
    )
}

export default SignupPage;