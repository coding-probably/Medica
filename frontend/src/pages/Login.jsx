import { useState } from "react"
import './Login.css'


const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });


    const handelInput = (event) => {
        event.preventDefault();
        console.log(event.target.value);

        let name = event.target.name;
        let value = event.target.value;

        setUser({
            ...user,
            [name]: value
        }

        )
        
    };

    const handelSubmit = () => {
        console.log(user);
    }





    return (
        <>
        <div className="container-main" id="logindiv">
            <div className="login-div">
                <h2>Register the user</h2>
                <form onSubmit={handelSubmit}>
                    <div className="form-area">
                        <div className="coolinput">
                            <label className="input" htmlFor="email">Email</label>
                            <input className="input" type="text" name="email" placeholder="email" id="email" required autoComplete="off" value={user.email} onChange={handelInput}/>
                        </div>
                        <div className="coolinput">
                            <label className="input" htmlFor="password">Password</label>
                            <input className="input" type="text" name="password" placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handelInput}/>
                        </div>
                    </div>
                    <div className="loginsumbmitbutton">
                        <button type="submit">Submit</button>
                    </div>




                </form>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Login