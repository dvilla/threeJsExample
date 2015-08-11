//initiating the scen, camara and render

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//creating the cubes
var geometry = new THREE.BoxGeometry( 2, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0x2323d4, wireframe: true} );
var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material );
var cube3 = new THREE.Mesh( geometry, material );
var cube4 = new THREE.Mesh( new THREE.BoxGeometry( 1, 2, 1 ), new THREE.MeshBasicMaterial( {color: 0x2323d4, wireframe: true} ) )

//adding cubes to the scene
scene.add(cube);
scene.add(cube2);
scene.add(cube3);

camera.position.z = 9;

cube2.position.x = 5.34;
cube3.position.x = -5.34;

//moving function

function movingCube(cube){
  if(cube.position.x < 2.7 && cube.position.y == 0){
    cube.position.x += 0.11;
  }
  else if(cube.position.x > 2.7 && cube.position.y > -4){
    cube.position.y += -0.11;
  }
  else if(cube.position.y < -4 && cube.position.x > 0){
    cube.position.x += -0.11;
  }
  else if(cube.position.y < 0 && cube.position.x < 0){
    cube.position.y += 0.11;
  }
}

//Zooming out and in
function zommingOutAndIn(cube){
  if(cube.position.z < 5){
    cube.position.z += 0.01;
  }
}

//render function

function render() {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  movingCube(cube);
  movingCube(cube2);
  movingCube(cube3);

  zommingOutAndIn(cube);

  cube2.rotation.x += 0.02;

  cube3.rotation.y += 0.02;

  cube4.rotation.y += 0.02;

  renderer.render( scene, camera );
}
render();
