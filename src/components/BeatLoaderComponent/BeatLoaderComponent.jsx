import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

export default function BeatLoaderComponent() {
  return (
    <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <BeatLoader color='#ffffff'/>
    </div>
  )
}
