import React from "react";
import { useMedia } from "../contextAPI/MediaContextProvider";
import { BiSolidCameraOff } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";


function MediaDevices() {
  const {MuteAudio,UnMuteAudio, playVideoFromCamera, stopVideoFromCamera } = useMedia();
  return (
    <>
      <video id="localVideo" autoPlay playsInline controls={true} />
      <FaCamera  size={"3rem"} onClick={playVideoFromCamera}/>
      <BiSolidCameraOff size={"3rem"} onClick={stopVideoFromCamera}/>
      <FaMicrophone size={"3rem"} onClick={UnMuteAudio}/>
      <FaMicrophoneSlash size={"3rem"} onClick={MuteAudio}/>

    </>
  );
}
export default MediaDevices;
