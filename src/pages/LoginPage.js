import Login from "../features/auth/components/Login";
import Navbar from "../features/navbar/Navbar";

function LoginPage () {
    return (
        <div>
            <Navbar>
               <Login/>
            </Navbar>
        </div>
    )
}

export default LoginPage;