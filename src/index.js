import React, { Fragment } from 'react'
import classes from './styles.module.css'
import props from './props'
import defaultProps from './default.props'
import logo from 'assets/logo.png'

import '@google/model-viewer/dist/model-viewer'

const ModelViewer = (props) => {
  return (
    <Fragment>
      <model-viewer
        src={props.src}
        ios-src={props.iosSrc}
        poster={props.poster}
        alt={props.alt}
        loading={props.loading}
        reveal={props.reveal}
        modelCacheSize={props.modelCacheSize}
        powerPreference={props.powerPreference}
        ar={props.ar ? props.ar : null}
        ar-modes={props.arModes}
        ar-scale={props.arScale}
        ar-placement={props.arPlacement}
        autoplay={props.autoPlay ? props.autoPlay : null}
        auto-rotate={props.autoRotate ? props.autoRotate : null}
        auto-rotate-delay={props.autoRotateDelay}
        interaction-prompt-style={props.interactionPromptStyle}
        interaction-prompt-threshold={props.interactionPromptThresold}
        camera-controls={props.cameraControls ? props.cameraControls : null}
        camera-target={props.cameraControls}
        camera-orbit={props.cameraOrbit}
        exposure={props.exposure}
        shadow-intensity={props.shadowIntensity}
        shadow-softness={props.shadowSoftness}
        style={{ width: props.width, height: props.height }}
      >
        <button className={classes.arButton} slot={'ar-button'}>
          <img
            src={props.buttonLogo ? props.buttonLogo : logo}
            alt={'augmented reality'}
            className={classes.image}
          />
            <div className={classes.text}>
              {props.buttonText}
            </div>
        </button>
      </model-viewer>
    </Fragment>
  )
}

ModelViewer.propTypes = props
ModelViewer.defaultProps = defaultProps

export default ModelViewer
