import React from 'react'

import ModelViewer from 'react-ar-viewer'
import 'react-ar-viewer/dist/index.css'

const App = () => {
  return <ModelViewer
    src={'https://media.cloud.sharpar.co/sharpar/models/eames_chair.glb'}
    width={'100vw'}
    height={'97vh'}
    cameraControls={true}
    autoPlay={true}
    autoRotate={true}
    ar={true}
    />
}

export default App
