import VideoCall from "./VideoCall";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
const [call,setCall] = useState(false);
  return (

    <div style={{display:"flex"}}>
    <Sidebar setCall={setCall}/>
     {call && <VideoCall/>}
     </div>     
  );
}

export default App