"use client";
import "./style/css/module.style.css";
import "./style/css/bootstrap.min.css";
import "./style/fonts/icomoon/style.css";
import "./style/css/owl.carousel.min.css";

import image from "./style/images/female.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function getData() {
    const response = await fetch("http://127.0.0.1:8000/api/token", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${res.statusText}`);
    } else {
      response.json().then((data) => {
        localStorage.setItem("token", data.access);
        localStorage.setItem("refresh", data.refresh);
      });
    }
  }

  return (
    <div className='content'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 order-md-2'>
            <Image src={image} alt='Image' className='img-fluid' />
          </div>
          <div className='col-md-6 contents'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='mb-4'>
                  <h3>
                    Login in to <br></br>
                    <strong style={{ color: "rgb(43 183 144)" }}>
                      Pharmacy Store Management System
                    </strong>
                  </h3>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    getData();
                  }}>
                  <div className='form-group first'>
                    <input
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      placeholder='username'
                      type='text'
                      className='form-control'
                      id='username'
                    />
                  </div>
                  <div className='form-group last mb-4'>
                    <input
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder='Password'
                      type='password'
                      className='form-control'
                      id='password'
                    />
                  </div>

                  <div className='d-flex mb-5 align-items-center'>
                    <label className='control control--checkbox mb-0'>
                      <span className='caption'>Remember me</span>
                      <input type='checkbox' checked='checked' />
                      <div className='control__indicator'></div>
                    </label>
                    <span className='ml-auto'>
                      <a href='#' className='forgot-pass'>
                        Forgot Password
                      </a>
                    </span>
                  </div>

                  {/* <Link href='/'> */}
                  <button
                    type='submit'
                    className='btn text-white btn-block btn-primary'>
                    Log In
                  </button>
                  {/* </Link> */}
                  <span className='d-block text-left my-4 text-muted'>
                    {" "}
                    or sign in with
                  </span>

                  <div className='social-login'>
                    <a href='#' className='facebook'>
                      <span className='icon-facebook mr-3'></span>
                    </a>
                    <a href='#' className='twitter'>
                      <span className='icon-twitter mr-3'></span>
                    </a>
                    <a href='#' className='google'>
                      <span className='icon-google mr-3'></span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
