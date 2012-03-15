/*
 * guiManager handles screen - drawing and resizing
 */
var guiManager = function(){
	this.defaultWidth = 960;
	this.defaultHeight = 640;
	
	this.main;
	
	this.foreground;
	this.foreground_ctx;
	
	this.background;
	this.background_ctx;
	
	this.init();
}

guiManager.init = function(){
	this.main = document.getElementById('main');
	
	this.foreground = document.getElementById('foreground');
	this.foreground_ctx = this.foreground.getContext('2d');
	
	this.background = document.getElementById('background');
	this.background_ctx = this.background.getContext('2d');
}

guiManager.resize = function(){
	this.main = document.getElementById('main');

	var ratio = this.defaultWidth/this.defaultHeight;

	var width = window.innerWidth;
	var height = window.innerHeight;

	var currRatio = width/height;

	if (currRatio > ratio){
		width = height*ratio;
		this.main.style.width = width + 'px';
		this.main.style.height = height + 'px';
	} else {
		height = width/ratio;
		this.main.style.width = width + 'px';
		this.main.style.height = height + 'px';
	}

	this.main.style.marginTop = (-height/2) + 'px';
	this.main.style.marginLeft = (-width/2) + 'px';

	//TODO: add some font resize
	
	this.main.width = width;
	this.main.height = height;
	this.foreground.width = width;
	this.foreground.height = height;
	
}

window.addEventListener('resize', guiManager.resize, false);
window.addEventListener('orientationchange', guiManager.resize, false);