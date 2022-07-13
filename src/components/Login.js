import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    let useName =useRef("");
    let [userVal , setUserval]=useState("");
    let [userPassword , setUsePassword]=useState("")
    let history=useHistory();

    const handleLogin=(e)=>{
        e.preventDefault();
        fetch("http://localhost:6050/users")
        .then((res)=> res.json)
        .then((data)=>{
            let [user] = data.filter(user =>(user.userName===userVal || user.mailid===userVal) );
            if (user != undefined && user.password===userPassword) {
                // alert("login sucsessfully");
                history.push("/addtask");
            }
            else if(user !=undefined && user.password!==userPassword ){
                alert("wrong password");
            }
            
            else{
                alert("User not found");
            }
        })

    }
    return ( 
    <div className="login">
        <div className="logi-box">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" name="" id="" placeholder="User Name or mail id" value={userVal} 
                onChange={(e)=>setUserval(e.target.value)} /> <br/> <br/>
                <input type="password" name="" id="" placeholder="Password" value={userPassword} 
                onChange={(e)=>setUsePassword(e.target.value)}/> <br/> <br/>
                <input type="submit" />
            </form>
        </div>
    </div> 
    );
}
export default Login;