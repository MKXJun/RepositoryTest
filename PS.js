// 顶点着色器
precision mediump float;	// 将精度设置为中等精度

uniform sampler2D u_image;	// 纹理

varying vec2 v_tex;			// 纹理坐标

void main() {
	gl_FragColor = texture2D(u_image, v_tex);
}