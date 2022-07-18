<br />

# React AR Model Viewer Component

---

#### &nbsp; React AR Model Viewer Component based on @google/model-viewer

Offical documentation <br/>
https://modelviewer.dev/

## &nbsp; Getting Started

---

```npm install react-ar-viewer```\
\
```yarn add react-ar-viewer ```
---

### &nbsp; &nbsp; Props

&nbsp; ``` width : String ``` (100vw)\
&nbsp; Css property
100% , 50vh, 20rem  etc.

&nbsp; ``` height : String ``` (100vh)\
&nbsp; Css property

&nbsp; ``` buttonImage : Image ```\
&nbsp; AR Button Image

&nbsp; ```buttonText: String```\
&nbsp; Set ar button text. Default value is 'View'

&nbsp; ```src : String ```\
&nbsp; The URL to the 3D model. Only glTF/GLB models are supported.

&nbsp; ```iosSrc: String```\
&nbsp; IOS source file, usdz extension

&nbsp; ```poster: String```\
&nbsp; Displays an image instead of the model, useful for showing the user something before a model is loaded and ready to render.

&nbsp; ```alt: String```\
Configures the model with custom text that will be used to describe the model to viewers who use a screen reader or otherwise depend on additional semantic context to understand what they are viewing.

&nbsp; ```loading: String``` ( auto| lazy | eager )\
&nbsp; An enumerable attribute describing under what conditions the model &nbsp; should be preloaded.

&nbsp; ```reveal: Number``` ( auto | interaction | manual )\
&nbsp; This attribute controls when the model should be revealed. It currently supports three values: "auto", "interaction", and "manual".

&nbsp; ```modelCacheSize: Number``` (5)\
&nbsp; This static, writable property sets <model-viewer>'s internal glTF model cache size, controlling number of individual models that should be cached.

&nbsp; ```powerPreference: String``` ( high-performance | low-power | default )\
&nbsp; This static, writable property sets <model-viewer>'s power preference value. Model-viewer sets this property to high-performance if no value is provided.

&nbsp; ```ar: Boolean```\
Enable the ability to launch AR experiences on supported devices.

&nbsp; ```arModes: String``` (webxr scene-viewer and quick-look)\
&nbsp; A prioritized list of the types of AR experiences to enable. Allowed values are "webxr", to launch the AR experience in the browser, "scene-viewer", to launch the Scene Viewer app, "quick-look", to launch the iOS Quick Look app

```arScale: String``` (auto | fixed)\
Controls the scaling behavior in AR mode. Set to "fixed" to disable scaling of the model, which sets it to always be at 100% scale. Defaults to "auto" which allows the model to be resized by pinch.

```arPlacement: String``` ( floor | wall)\
Selects whether to place the object on the floor (horizontal surface) or a wall (vertical surface) in AR. The back (negative Z) of the object's bounding box will be placed against the wall and the shadow will be put on this surface as well. Note that the different AR modes handle the placement UX differently.

```autoPlay: Boolean```\
If this is true and a model has animations, an animation will automatically begin to play when this attribute is set (or when the property is set to true). If no animation-name is specified, plays the first animation.

```autoRotate: Boolean```\
Enables the auto-rotation of the model.

```autoRotateDelay: Number``` (3000)\
Sets the delay before auto-rotation begins. The format of the value is a number in milliseconds.

```interactionPromptThresold``` (3000)\
When camera-controls are enabled, <model-viewer> will prompt the user visually (and audibly, for screen readers) to interact if they focus it but don't interact with it for some time. This attribute allows you to set how long <model-viewer> should wait (in milliseconds) before prompting to interact. Defaults to 3000.

```cameraControls : Boolean```\

```cameraOrbit: String``` ( 0deg 75deg 105% )\
Set the starting and/or subsequent orbital position of the camera. You can control the azimuthal, theta, and polar, phi, angles (phi is measured down from the top), and the radius from the center of the model. Accepts values of the form "$theta $phi $radius", like "10deg 75deg 1.5m". Also supports units in radians ("rad") for angles and centimeters ("cm") or millimeters ("mm") for camera distance. Camera distance can also be set as a percentage ('%'), where 100% gives the model tight framing within any window based on all possible theta and phi values

```cameraTarget: String``` ( auto auto auto )\
Set the starting and/or subsequent point the camera orbits around. Accepts values of the form "$X $Y $Z", like "0m 1.5m -0.5m". Also supports units in centimeters ("cm") or millimeters ("mm"). A special value "auto" can be used, which sets the target to the center of the model's bounding box in that dimension. Any time this value changes from its initially configured value, the camera will interpolate from its current position to the new value.

```exposure: Number``` (1)\
Controls the exposure of both the model and skybox, for use primarily with HDR environments.

```shadowIntensity: Number``` (0)\
Controls the opacity of the shadow. Set to 0 to turn off the shadow entirely.

```shadowSoftness: Number``` (1)\
Controls the blurriness of the shadow. Set to 0 for hard shadows. Softness should not be changed every frame as it incurs a performance cost. Softer shadows render faster.

### &nbsp; Example Usage
```
const Component = () => {
    return <ModelViewer
        arButtonText={'View in your space'}
        width={'100vw'}
        height={'100vh'}
        src={''}
        iosSrc={''}
        poster={''}
        alt={'Sample usage on component'}
        cameraControls={true}
        ar={true}
        cameraTarget={''}
        cameraOrbit={''}
        exposure={1}
        shadowSoftness={0}
        autoPlay={true}
    />
}
```
<br />

## &nbsp; &nbsp; License
&nbsp; MIT © [OnurTosyalioglu](https://github.com/OnurTosyalioglu)

<br />

