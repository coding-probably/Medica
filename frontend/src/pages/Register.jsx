import { useState } from "react";


const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
    });

    const handelInput = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        let name = event.target.name;
        let value = event.target.value;
        setUser({
            ...user,
            [name]: value,
        })
    };

    const handelSubmit = () => {
        console.log(user);
    }

    return (
        <>

            <section>
                <main>
                    <div className="container-main">
                        <div className="container">
                         
                            
                            <div className="login-div">
                                <h2>Register User</h2>
                                <form onSubmit={handelSubmit}>
                            
                                    <div className="coolinput">
                                        <label className="input" htmlFor="username">username</label>
                                        <input className="input" type="text" name="username" placeholder="username" id="username" required autoComplete="off" value={user.username} onChange={handelInput} />
                                    </div>
                                    <div className="coolinput">
                                        <label className="input" htmlFor="email">email</label>
                                        <input className="input" type="text" name="email" placeholder="email" id="email" required autoComplete="off" value={user.email} onChange={handelInput} />
                                    </div>
                                    <div className="coolinput">
                                        <label className="input" htmlFor="phone">phone</label>
                                        <input className="input" type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off" value={user.phone} onChange={handelInput} />
                                    </div>
                                    <div className="coolinput">
                                        <label className="input" htmlFor="password">password</label>
                                        <input className="input" type="text" name="password" placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handelInput} />
                                    </div>
                                    <div className="loginsumbmitbutton">
                                        <button type="submit">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>





        </>
    )
}

export default Register