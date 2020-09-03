window.onscroll = function (oEvent) {
if(document.documentElement.scrollTop>567){
	menu = document.getElementById('menu');
	menu.style.background = 'black';
	menu.style.opacity = 1;
}else{
	menu = document.getElementById('menu');
	menu.style.background = '#282A36FF';
	menu.style.opacity = 0.8;
}

}
function sobre(){
 
	var posicaoInicial = $('#sobre').position().top;
	console.log(posicaoInicial);
	window.scrollTo(posicaoInicial,document.body.scrollHeight);
    
}