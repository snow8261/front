var ex6=function(){
	function Vector(x,y){
		this.x=x;
		this.y=y;
	}
	Vector.prototype.plus = function(other) {
		return new Vector(this.x + other.x, this.y + other.y);
	};

	Vector.prototype.minus=function(another){
		var left=new Vector(0,0);
		left.x=this.x - another.x;
		left.y=this.y - another.y;
		return left;
	}
	Object.defineProperty(Vector.prototype,"length",{
		get:function(){
			return Math.sqrt(this.x*this.x+this.y*this.y);
		   } 	
	});
	var StretchCell=function(inner,width,height){
		this.inner=inner;
		this.width=width;
		this.height=height;
	};
	StretchCell.prototype.minHeight=function(){
		return Math.max(this.height,this.inner.minHeight());
	}
	StretchCell.prototype.minWidth=function(){
		return Math.max(this.width,this.inner.minWidth());
	}
		
	StretchCell.prototype.draw=function(width,height){
		 return this.inner.draw(width, height);
	}
	//console.log(new String("11"));
	var vectorx=new Vector(1,2);

	var Interface=function(collection){

	};
	Interface.prototype.next=function(){

	}
 	//seq interface Next method 返回下一个值，hasNext判断是否有下一个值
	var logFive=function(seq){
		var count=0;
		while(seq.hasNext()&&count<5){			
			console.log(seq.next());			
			count++;
		} 

    }
	var ArraySeq=function(arr){
		this.current=0;
		this.arr=arr;
	}
	ArraySeq.prototype.next=function(){
		var ob=this.arr[this.current];
		this.current++;
		return ob;
	};
	ArraySeq.prototype.hasNext=function(){
		return this.arr.length>this.current;
	};

	var RangeSeq=function(from,to){
		this.current=from;
		this.to=to;
	}
	RangeSeq.prototype.next=function(){
		var value=this.current;
		this.current++;
		return value;
	}
	RangeSeq.prototype.hasNext=function(){
		return this.to>this.current;
	};

	function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence != null; i++) {
    console.log(sequence.head());
    sequence = sequence.rest();
  }
}

function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
ArraySeq2.prototype.rest = function() {
  return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function() {
  return this.array[this.offset];
};
ArraySeq2.make = function(array, offset) {
  if (offset == null) offset = 0;
  if (offset >= array.length)
    return null;
  else
    return new ArraySeq2(array, offset);
};

function RangeSeq2(from, to) {
  this.from = from;
  this.to = to;
}
RangeSeq2.prototype.rest = function() {
  return RangeSeq2.make(this.from + 1, this.to);
};
RangeSeq2.prototype.head = function() {
  return this.from;
};
RangeSeq2.make = function(from, to) {
  if (from > to)
    return null;
  else
    return new RangeSeq2(from, to);
};

	console.log(logFive(new RangeSeq(100,1000)));
	// console.log(vectorx.x+":"+vectorx.y);
	// console.log(new Vector(1, 2).plus(new Vector(2, 3)));
 //    // → Vector{x: 3, y: 5}
 //    console.log(new Vector(1, 2).minus(new Vector(2, 3)));
 //    // → Vector{x: -1, y: -1}
 //    console.log(new Vector(3, 4).length);
    // → 5
};
ex6();