window.onload = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var render = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x000000);

}