import {
  Children,
  createContext,
  useContext,
} from "react";

const mediaContext = createContext();
function useMedia() {
  const media = useContext(mediaContext);
  return media;
}
function MediaContextProvider({ children }) {

  async function playVideoFromCamera() {
    try {
      // setTimeout(()=>{
      //     setLoading(true);
      // },1000);

      const constraints = { video: true, audio: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const videoElement = document.querySelector("video#localVideo");
      videoElement.srcObject = stream;
    } catch (error) {
      console.error("Error opening video camera.", error);
    }
  }
  async function stopVideoFromCamera(){
    try {
        const constraints = { video: false, audio: false };
        // const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector("video#localVideo");
        videoElement.srcObject = null;
      } catch (error) {
        console.error("Error stopping video camera.", error);
      }
  }
  async function MuteAudio(){
    try {
        const constraints = { video: true, audio: false };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector("video#localVideo");
        videoElement.srcObject = stream;
      } catch (error) {
        console.error("Error stopping video camera.", error);
      }
  }
  async function UnMuteAudio(){
    try {
        const constraints = { video: true, audio: true };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector("video#localVideo");
        videoElement.srcObject = stream;
      } catch (error) {
        console.error("Error stopping video camera.", error);
      }
  }
  return (
    <mediaContext.Provider
      value={{
        playVideoFromCamera,
        stopVideoFromCamera,
        MuteAudio,
        UnMuteAudio,
      }}
    >
      {children}
    </mediaContext.Provider>
  );
}

export default MediaContextProvider;
export { useMedia };
