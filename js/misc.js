function Vector(){
	this.x = 0;
	this.y = 0;
	
	if( arguments.length = 2){
		this.x = arguments[0];
		this.y = arguments[1];
	}
}

Vector.prototype.set = function(_x, _y){
	this.x = _x;
	this.y = _y;
}

Vector.prototype.setX = function(_x){
	this.x = _x;
}

Vector.prototype.setY = function(_y){
	this.y = _y;
}

Vector.prototype.getX = function(){
	return this.x;
}

Vector.prototype.getY = function(){
	return this.y;
}

Vector.prototype.length = function(){
	return sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2) );
}

Vector.prototype.rotate = function(angle){
	var x = this.x;
	var y = this.y;
	
	this.x = x*Math.cos(angle) - y*Math.sin(angle);
	this.y = x*Math.sin(angle) + y*Math.cos(angle);
}

Vector.prototype.dotProduct = function(vec){
	return this.x*vec.x+this.y*vec.y;
}

Vector.prototype.muliply = function(a){
	this.x *= a;
	this.y *= a;
}

Vector.prototype.getNormalized = function(){
	var length = this.length();
	
	var normalizedVector = new Vector( this.x/length, this.y/length );
	
	return normalizedVector;
}
