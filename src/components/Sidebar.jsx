import React from "react";

import { SiPlausibleanalytics } from "react-icons/si";
import { IoCameraReverse } from "react-icons/io5";
import { TbApi } from "react-icons/tb";

import { BsChatDotsFill } from "react-icons/bs";


function Sidebar(){
    return(
        <>
            <div style={{height:"100vh", display:"flex",justifyContent:"center", width:"10%", borderTopLeftRadius:"20px",backgroundColor:"black", paddingTop:"15px" }}>
              
                <div className="main-icons" style={{ color:"white",display:"flex", flexDirection:"column", gap:"4rem", alignItems:"center"}}>
                <SiPlausibleanalytics size={"3rem"} />
                <IoCameraReverse size={"1.6rem"} />
                <TbApi size={"1.8rem"} />
                <BsChatDotsFill size={"1.6rem"}/>
                </div>
               
            </div>
        </>
    )
}

export default Sidebar;