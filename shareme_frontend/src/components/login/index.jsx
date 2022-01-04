import React from "react"
import { useNavigate } from "react-router-dom"
import { GoogleLogin } from "react-google-login"
import { FcGoogle } from "react-icons/fc"

import shareVideo from "../../assets/share.mp4"
import logo from "../../assets/logowhite.png"

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          controls={false}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"></video>

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 m-5 rounded-md font-bold outline-none">
                  <FcGoogle className="mr-5" />
                  Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
