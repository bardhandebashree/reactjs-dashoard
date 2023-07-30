import React, { Component, useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContent } from "./context";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

export function SignupForm({ props, switchToLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [validation, setValidation] = useState("true");
  // const [error, setError] = useState("");

  // const schema = yup.object().shape({
  //   fullName: yup
  //     .string()
  //     .required(setError("Please enter some value."))
  //     .min(4, setError("Add minimum 4 characters")),
  //   email: yup.string().required(setError("Email id is mendatory")).email(),
  //   password: yup.string().min(4).max(15).required(),
  //   confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    console.log("submitted");
    console.log(data);
    try {
      //fetch - starts a request and returns a promise https://httpbin.org/post
      const signupPost = new URL(`http://localhost:8080/signup/postdata`);
      let res = await fetch(signupPost, {
        method: "POST",
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        let resJson = await res.json();
        console.log(resJson);
        if (resJson.confirmSubmit) {
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          console.log(fullName, email, password, confirmPassword);
        }
        setMessage(resJson.message);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit(submitForm)}>
        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="form-control"
          // onChange={handleUserInput}
          {...register("fullName", { required: true, minLength: 3 })}
        />
        {errors.fullName && toast("Please enter Full Name")}

        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && toast("Please enter correct format of email")}

        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          {...register("password", {
            required: true,
          })}
        />
        {errors.password && toast("please enter correct format of password")}
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-control"
          {...register("confirmPassword")}
        />
        {/* <p>{errors?.confirmPassword && "Passwords should match"}</p> */}
        {/* </FormContainer> */}
        <Marginer direction="vertical" margin={30} />
        <MutedLink href="a">Forgot your password? </MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton
          type="submit"
          id="submit"
          onClick={() => {
            handleSubmit(submitForm);
          }}
        >
          Sign In
        </SubmitButton>
        <div className="message">{message ? <p>{message}</p> : null}</div>
        <MutedLink>
          Signed up please log in!
          <BoldLink onClick={(e1) => switchToLogin(e1)}> Log In</BoldLink>
        </MutedLink>
        {/* <BoldLink  onClick={(e1)=>switchToLogin(e1)}>  Log In</BoldLink> */}
      </FormContainer>
    </BoxContainer>
  );
}
