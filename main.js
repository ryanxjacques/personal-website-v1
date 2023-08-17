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


// Create a quadratic curve for the tubes to follow 
const curve = new THREE.QuadraticBezierCurve(
	new THREE.Vector2( -10, 0 ),
	new THREE.Vector2( 20, 15 ),
	new THREE.Vector2( 10, 0 )
);

// Create tubes for background
const geometry = new THREE.TubeGeometry(curve, 20, 2, 8, true);
// Wrap the tube in a basic mesh
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
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