// 顶点着色器
attribute vec3 a_pos;	// 顶点位置
attribute vec2 a_tex;	// 顶点纹理

uniform mat4 u_World;	// 世界矩阵
uniform mat4 u_View;	// 观察矩阵
uniform mat4 u_Proj;	// 投影矩阵

varying vec2 v_tex;

void main() {
	mat4 worldViewProj = u_Proj * u_View * u_World;
	
    gl_Position = worldViewProj * a_position;
	v_tex = a_tex;
}