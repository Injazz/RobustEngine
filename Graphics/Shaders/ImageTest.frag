#version 330 core
 
in vec2 TexCoord;
in vec4 Color;

uniform sampler2D BoundTexture;

out vec4 FragColor;

void main()
{
    FragColor = Color * texture2D(BoundTexture,TexCoord);
	//FragColor = vec4(1,0,0,1);
}
