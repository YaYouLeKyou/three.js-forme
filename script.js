//Canvas
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.5,
  1000
);
camera.position.z = 100;

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Forme
let forme = new THREE.Group();
let geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
let material = new THREE.MeshNormalMaterial({
  color: 0xff000,
  transparent: true,
  opacity: 1,
  wireframe: true,
  wireframeLinewidth: 5,
  wireframeLinejoin: "round",
  wireframeLinecap: "round",
});

let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
