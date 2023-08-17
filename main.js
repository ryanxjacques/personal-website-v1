import './style.css'

import * as THREE from 'three';

// A scene is a container that holds all objects, cameras, and lights 
const scene = new THREE.scene();

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

// Render (draw) the screen and camera
renderer.render(scene, camera);