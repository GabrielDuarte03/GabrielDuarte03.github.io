/*window.onscroll = function (oEvent) {
if(document.documentElement.scrollTop>567){
	
}
*/
$(document).on('scroll', function() {
 	var total = $(window).height();
 	total = total - total * 0.03;
  if ($(this).scrollTop() >= total) {
    menu = document.getElementById('menu');
	menu.style.background = 'black';
	menu.style.opacity = 1;
  }else{
	menu = document.getElementById('menu');
	menu.style.background = '#282A36FF';
	menu.style.opacity = 0.8;
}
});
/*
function sobre(){
 




	var posicao = $('#sobre').position().top;
	console.log(posicaoInicial);
	window.scrollTo(100,document.body.scrollHeight);
    
}*/