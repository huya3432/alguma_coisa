//o FABRIC.JS é uma extensão de códigos para a criação de jogos


//aqui o canvas recebe a referência com fabric.Canvas() 
canvas = new fabric.Canvas("myCanvas");
//variável utilizada para armazenar o objeto da imagem do personagem.
playerObject = "";
//definir a width e height iniciais das imagens dos blocos
blockImageHeight = 30;
blockImagewidth = 30;
//definição das coordenadas x e y iniciais para o personagem
playerX = 10;
playerY = 10;
//Agora, adicionaremos uma função chamada playerUpdate() para adicionar a imagem do personagem
function playerUpdate(){
	//lembrando que o fabric é da biblioteca que foi chamada no html 
	//o image diz que enviamos uma imagem.
	//fromURL contém a URL da imagem e a função para enviar imagens.
	//o player.png é a imagem que será carregada 
	//o  function(Img) é a função que enviará player.png ao canvas. Img: Esse é o objeto da imagem definida por padrão.
	fabric.Image.fromURL("player.png", function(Img){
	playerObject = Img;
	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
		top: playerY,
		left:playerX
	});
	canvas.add(playerObject);
});
}

function newImage(getImage){
	fabric.Image.fromURL(getImage, function(Img){
		blockImageObject = Img;
		blockImageObject.scaleToWidth(blockImagewidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
				top: playerY,
				left:playerX
			});
			canvas.add(blockImageObject);
		});
}
window.addEventListener("keydown", Mykeydown)
function Mykeydown(e)
{
	keyPressed = e.keyCode;
console.log(keyPressed);
if (e.shiftKey == true&&keyPressed == '80')
{
	console.log("p e shift foram pressados")
	blockImagewidth = blockImagewidth + 10;
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("currentWidth").innerHTML = blockImagewidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}
if (e.shiftKey == true&&keyPressed == '77')
{
	console.log("M e shift foram pressados")
	blockImagewidth = blockImagewidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("currentWidth").innerHTML = blockImagewidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}
if (keyPressed == '38')
{
	console.log("CIMA!")
	up()
}
if (keyPressed == '40')
{
	console.log("BAIXO!")
	down()
}
if (keyPressed == '37')
{
	console.log("ESQUERDA!")
	left()
}
if (keyPressed == '39')
{
	console.log("DIREITA!")
	right()
}
if (keyPressed == '87')
{
	console.log("W-PAREDE!")
	newImage("wall.jpg")
}
if (keyPressed == '71')
{
	console.log("G-Ground!")
	newImage("ground.png")
}
if(keyPressed == '68'){
	newImage("dark_green.png");
	console.log("D - lodo");
}



if(keyPressed == '76'){
	newImage("light_green.png");
	console.log("L - grama clara");
}

if(keyPressed == '84'){
	newImage("trunk.jpg");
	console.log("T - madeira");
}

if(keyPressed == '82'){
	newImage("roof.jpg");
	console.log("R - Telhado");
}

if(keyPressed == '89'){
	newImage("yellow_wall.png");
	console.log("Y - Parede Amarela");
}

if(keyPressed == '85'){
	newImage("unique.png");
	console.log("U - Bloco Único");
}

if(keyPressed == '67'){
	newImage("cloud.jpg");
	console.log("C - Nuvem");
}
}
function up()
{
if (playerY >= 0)
{
playerY = playerY - blockImageHeight;
console.log("altura da imagem" + blockImageHeight);
console.log("quando a tecla direcional ciima for pressionada,x" +playerX + ",y" +playerY);
canvas.remove(playerObject);	
playerUpdate();
}

}
function down()
{
if (playerY <= 500)
{
playerY = playerY + blockImageHeight;
console.log("altura da imagem" + blockImageHeight);
console.log("quando a tecla direcional baixo for pressionada,x" +playerX + ",y" +playerY);
canvas.remove(playerObject);	
playerUpdate();
}

function left(){
    if(playerX >=0){
                playerX = playerX - blockImageWidth;
        
        console.log("altura da imagem do bloco = " + blockImageWidth)
        
        console.log("Quando a tecla direcional ESQUERDA for pressionada, X = " + playerX + " , Y" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if(playerX <=850){
        playerX = playerX + 30;
        console.log("altura da imagem do bloco = " + blockImageWidth)
        console.log("Quando a tecla direcional DIREITA for pressionada, X = " + playerX + " , Y" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
}
