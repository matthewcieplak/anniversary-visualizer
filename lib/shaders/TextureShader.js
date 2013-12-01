/**
 * @author mrdoob (adapted from render-to-texture demo http://threejs.org/examples/webgl_rtt.html)
 *
 * Texture shader for rendering a scene to a texture
 */

THREE.TextureShader = {

	uniforms: {
		"tDiffuse": { type: "t", value: null },
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}",

	].join("\n"),

	fragmentShader: [

		"varying vec2 vUv;",
		"uniform sampler2D tDiffuse;",

		"void main() {",

			"gl_FragColor = texture2D( tDiffuse, vUv );",

		"}"

	].join("\n"),

	depthWrite : false

};
