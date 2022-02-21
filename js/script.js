window.onload = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(0, 0, 1000);

    renderer.render(scene, camera);

    var 

}