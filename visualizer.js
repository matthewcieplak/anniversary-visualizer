var Visualizer = function(options) {

	this.canvas = options.canvas;
	this.width    = this.canvas.width;
    this.height   = this.canvas.height;


	this.renderer = new THREE.WebGLRenderer({ canvas : this.canvas });
	this.renderer.setClearColor( 0x000000, 1 );
	this.renderer.setSize( this.height, this.width );
	this.renderer.autoClear = true;
	  
	this.scene = new THREE.Scene();
	this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 0.1, 1000 );
	this.camera.position.set( 0, 00, 200 );


	this.init = function(){
		this.setupPlaneGeometry();

		this.render();
	}


	this.setupPlaneGeometry = function(){

	}

}