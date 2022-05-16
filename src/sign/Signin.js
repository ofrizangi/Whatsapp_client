import { Link, useNavigate } from 'react-router-dom'
import { React, useState } from 'react';
import {  users } from '../Users';
import logo from '../wenLogo.jpg'
import './sign.css'
import '../project.css'

function Signin() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function serverSignIn(user) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        };
        const respone = await fetch('https://localhost:7271/api/User/Login', requestOptions);
        const data = await respone.json();
        console.log(data);
        return data;
    }

    
    const goToChatPage = (event) => {
        event.preventDefault();
        let transfer = false;
        const stat = serverSignIn({userName: userName, password: password});
        // if(stat === 200){
        //     navigate('/chats', { state:{index:i}});
        // }
        // else{
        //     alert('user name or password are incorrect')

        // }

        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === userName && users[i].password === password) {

                navigate('/chats', { state:{index:i}});
                transfer = true
            }
        }
        if (!transfer)
            alert('user name or password are incorrect')
    }


    return (
        <div>
            <img id="logo" alt="logo" src={logo}></img>
            <div id="sign" className='col-6 center shadow-lg p-3 mb-5 bg-white rounded'>

                    <h1> Sign in</h1>
                    <form method="post">
                        <div className="form-floating sign">
                            <input type="text" className="form-control" id="lname" name="lname" placeholder="User Name"
                             onChange={event => setUserName(event.target.value)}></input>
                            <label htmlFor='lname'><i className="bi bi-person-fill"></i> User Name</label>
                        </div>
                        <br></br>
                        <div className="form-floating sign">
                            <input type="password" className="form-control" id="pass" name="pass" placeholder="Password"
                             onChange={event => setPassword(event.target.value)}></input>
                            <label htmlFor='lname'><i className="bi bi-lock-fill"></i>Password</label>
                        </div>
            
                        <button type="submit" id="btn" className="btn btn_start btn-primary" onClick={goToChatPage} > Login</button>

                        <div className="link">
                            Don't have an account? Click here to&nbsp;
                            <Link to='/register'>register</Link>
                        </div>
                    </form>
                </div>
                
        </div>

    );
}
export default Signin;