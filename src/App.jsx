
// import './App.css'
import { useState } from 'react'
import MediaDevices from './components/MediaDevices'
import Sidebar from './components/Sidebar'
import MediaContextProvider from './contextAPI/MediaContextProvider';

function App() {

  return (
    <>
    <MediaContextProvider>
    <div style={{display:"flex"}}>
      <Sidebar />
      <MediaDevices/>
     </div>
    </MediaContextProvider>
    </>
  )
}

export default App
