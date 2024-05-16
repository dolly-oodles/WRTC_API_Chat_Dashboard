import React from "react";
import { SiPlausibleanalytics } from "react-icons/si";
import { IoCameraReverse } from "react-icons/io5";
import { TbApi } from "react-icons/tb";
import { BsChatDotsFill } from "react-icons/bs";
import { BiSolidCameraOff } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

function Sidebar({setCall}) {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          width: "15vw",
          borderTopLeftRadius: "20px",
          backgroundColor: "black",
          paddingTop: "15px",
        }}
      >
        <div
          className="main-icons"
          style={{
            cursor: "pointer",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <SiPlausibleanalytics size={"3rem"} />
          <FaCamera size={"1.6rem"} onClick={()=>setCall(true)}/>
          <BsChatDotsFill size={"1.6rem"} />
          <TbApi size={"1.8rem"} />
         
          {/* <BiSolidCameraOff size={"3rem"} /> */}
          {/* <FaMicrophone size={"3rem"} />
          <FaMicrophoneSlash size={"3rem"} /> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
