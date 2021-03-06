import React,{useState} from 'react';
import styled from 'styled-components';
import {motion } from 'framer-motion';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signup, signin } from '../actions/authActions';


const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [isLogin, setIsLogin] = useState(true);
    const [authData, setAuthData] = useState({ firstName:'', lastName:'', email:'a@gmail.com',password:'123',confirmPassword:'' });

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isLogin===true){
            dispatch(signin(authData, history));
        } else {
            dispatch(signup(authData,history));
        }
    }
    const handleChange=(e)=>{
        setAuthData({...authData, [e.target.name]:e.target.value})
    }

    const rotateVariants={
        hidden:{
            rotateX:90
        },
        visible:{
            rotateX:0,
            transition:{
                duration:0.5
            }
        }
    }

    return (
        <Wrapper  >
            
            &nbsp;
            <Container initial={{y:'-80vh'}} animate={{y:0}} transition={{duration:0.5, delay:0.2}} >                  
                <Form as={motion.form} onSubmit={handleSubmit} >
                {isLogin?<h2  >Login</h2>:
                <motion.h2 variants={rotateVariants} initial="hidden" animate="visible" >create a new account</motion.h2> }
                    {isLogin?null:<>
                        <motion.input initial={{rotateX:90}} animate={{rotateX:0}} transition={{duration:0.5}} type="text" name='firstName' onChange={handleChange} placeholder="First Name" />
                        <motion.input initial={{rotateX:90}} animate={{rotateX:0}} transition={{duration:0.5}} type="text" name="lastName" onChange={handleChange} placeholder="Last Name" />
                        </>
                    }
                    <input type="email" name='email' onChange={handleChange} placeholder="email" />
                    <input type="password" name='password' onChange={handleChange} placeholder="password" />
                    {isLogin?null:<motion.input variants={rotateVariants} initial="hidden" animate="visible" type="password" name="confirmPassword" onChange={handleChange} placeholder="confirm password" /> } 
                    <div>
                        <p>{isLogin?"Forgot Password":null} </p>
                        <p className="toggleLogin" onClick={()=>setIsLogin(!isLogin)} > {isLogin?"Not a Member yet":"Login" } </p>
                    </div>
                    <motion.button whileHover={{scale:1.1}} type="submit" >submit</motion.button>
                </Form> 
                
            </Container>

        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
background:#757474;
height:100vh;
`
const Container = styled(motion.div)`
width:34%;
margin:auto;
max-width:750px;
margin-top: 5rem;
@media (max-width: 820px) {
    width:62%;
  }
@media (max-width: 480px) {
    width:95%;
  }
  

`
const Form = styled.form`
div{
    display:flex;
    justify-content:space-between;
    width:80%;
    @media (max-width: 413px) {
    flex-direction:column;
  }
    }
display:flex;
flex-direction:column;
align-items:center;
background:#ececee;
padding:41px 18px;
input{
    width:80%;
    margin:10px 0;
    border-radius:6px;
    outline:none;
    padding:5px;
    border:1px solid grey;
    @media (max-width: 327px) {
    width:95%;
    padding:2px;
  }
}
button{
    text-transform:uppercase;
    border: none;
    background: #928d8d;
    padding: 3px 17px;
    color: white;
    border-radius: 6px;
    font-size: 1rem;
    outline:none;
    :hover{
        background:#7b7878;
        cursor: pointer;
    }   
}
.toggleLogin{
    cursor: pointer;
}
`