import React, { Component, useContext ,useState} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PicturesAccount } from "./picturesAccount";

// import { AccountContent } from './context';
export function LoginForm({ props, switchToSignup, showAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history=useNavigate();

  const submitForm = async (data) => {
    console.log("log in submit");
    console.log(data);
    try {
      //fetch - starts a request and returns a promise 
      const loginPost = new URL(`http://localhost:8080/login/postdata`);
      let res = await fetch(loginPost, {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        let resJson = await res.json();
        console.log(resJson);
        if (resJson.confirmSubmit) { 
          console.log( email, password);
          console.log("Move to home page");
          //switchroute to upload picture
          history('/picturesaccount')
        }
        setMessage(resJson.message);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
// , {replace: true}



  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
      <Input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && toast("Please enter email")}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && toast("please enter  password")}
        <Marginer direction="vertical" margin={30} />
        <MutedLink href="a">Forgot your password? </MutedLink>
        <Marginer direction="vertical" margin="1em" />
        {/* <SubmitButton type='submit'>Log In</SubmitButton> */}

        <SubmitButton  
          type="submit"
          id="submit"
          onClick={() => {
            handleSubmit(submitForm);
          }}>
          Log In
        </SubmitButton>
        <div className="message">{message ? <p>{message}</p> : null}</div>
        <MutedLink>
          Dont have an account?{" "}
          <BoldLink onClick={(e) => switchToSignup(e)}> Sign Up?</BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}
