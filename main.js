import './style.css'

import * as THREE from 'three';

// A scene is a container that holds all objects, cameras, and lights 
const scene = new THREE.Scene();

// Camera is the view of the scene. 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Reneder the elements displayed in the scene
const renderer = new THREE.WebGLRenderer({
    // Attach the renderer to the background 
    canvas : document.querySelector('#bg'),
});

// Intalize the renderer pixel ratio and canvas size 
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Place the camera along the Z axis
camera.position.setZ(30);

// Createa custom sin curve for the tube to follow, extending the THREE.Curve base class
class CustomSinCurve extends THREE.Curve {

    constructor (scale  = 1) {
        super();
        this.scale = scale;
    }

    getPoint(t, optionalTarget = new THREE.Vector3()) {
        // Determines the movement along the x-axis
        const tx = t * 3 - 1.5;
        // Creates the sinusoidal variance of the tube
        const ty = Math.sin(2 * Math.PI * t);
        // No 3D movement
        const tz = 0; 
        return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
    }
}
// Initalize custom sin curve object
const curve = new CustomSinCurve(10);

// Create tubes for background
const geometry = new THREE.TubeGeometry(curve ,20, 2, 8, false);
// Wrap the tube in a basic mesh
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: false});
// Combine the material and geometry to make the tube 
const tube = new THREE.Mesh(geometry, material);
scene.add(tube)

// Recursive function to render in objects
function animate(){
    requestAnimationFrame(animate); 
    // Render (draw) the screen and camera
    renderer.render(scene, camera);
}

animate()