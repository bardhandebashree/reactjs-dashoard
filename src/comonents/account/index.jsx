import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { LoginForm } from './login';
import {motion, transform} from "framer-motion";
// import { AccountContent } from './context';
import { SignupForm } from './singup';
import { PicturesAccount } from './picturesAccount';




const BoxContainer=styled.div`
  width: 500px;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  border-radius:19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15,15,15,0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer=styled.div`
  width: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  /* padding-bottom:  ; */
`;


const Backdrop=styled(motion.div)`
  width: 150%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column; 
  border-radius:75%;
  top: -160px;
  left: -70px;
  transform: rotate(60deg);
  background: #2ecc71;
background: linear-gradient(58deg, #f1c40f 0%,#16a085 35%, #2ecc71 100%);
`;

const HeaderContainer=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const HeaderText=styled.h2`
  font-size: 50px;
  font-weight: 1000;
  line-height: 0.24;
  z-index: 10;
  color: #fff;
  position: absolute;
  top: 30px;
  right: 100px;
  `;

  const Information=styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 35px;
    z-index: 10;
    position: absolute;
  top: 150px;
  right: 100px;
  `;

const InnerContainer =styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 5em ;
`;

const backgroundVariations={
  expanded:{
    width:"500%",
    height: "2000px",
    borderRadius:"20%",
    transform:"rotate(30deg)"

  },
  collapsed:{
    width:"160%",
    height: "550px",
    borderRadius:"50%",
    transform:"rotate(60deg)"
  }

}


export function Account(props){
const [isExpanded, setExpanded]= useState(false);
const [active,setActive]=useState("login");

const expansion= () => {
  setExpanded(true);
  setTimeout(()=>{
    setExpanded(false);
  },2000);
};

const switchToSignup=(e)=>{
  console.log("SIGNUP called");
  expansion();
  setActive("signup");
}
const switchToLogin=(e1)=>{
  console.log("LOGGIN called");
  expansion();
  setActive("login");
}


const contextValue={switchToSignup, switchToLogin};
return (

<BoxContainer>
    <TopContainer>
        <Backdrop animate={isExpanded?"expanded": "collapsed"} variants={backgroundVariations}/>
        {active==='login' &&
        <HeaderContainer>
            <HeaderText>Welcome Back</HeaderText>
            <Information>Please Log in!</Information>
        </HeaderContainer>}
        {active==='signup' &&
        <HeaderContainer>
            <HeaderText>Create Account</HeaderText>
            <Information>Please Sign up!</Information>
        </HeaderContainer>}
    </TopContainer>
    <InnerContainer> 
      {active === 'login' && <LoginForm switchToSignup={(e)=>switchToSignup(e)}/>}
      {active === 'signup' && <SignupForm switchToLogin={(e1)=>switchToLogin(e1)}/>}
    </InnerContainer>
</BoxContainer>

)
}