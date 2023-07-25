import React from 'react'
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { Audio } from 'react-loader-spinner'
function MainButton({text,isDisabled}) {
  const loading = useSelector((state) => state.authReducer.loading);
  return (
    <button
    className={`main-button  u-block ${isDisabled ? "main-button--disabled" : ""} u-margin-top-big`}
    type="submit"
    // onClick={() => setScreen(screen)}
    disabled={isDisabled}
  >
    {loading ? (
      <Oval
height={50}
width={50}
color="#ffffff"
wrapperStyle={{}}
wrapperClass="loader"
ariaLabel='oval-loading'
secondaryColor="#4fa94d"
strokeWidth={4}
strokeWidthSecondary={4}

/>
    ) : (
      text
    )}
  </button>

  )
}

export default MainButton
