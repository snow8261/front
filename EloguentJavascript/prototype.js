function Rabbit( type ) {
   this.type = type ;
}
Rabbit.prototype.speak = function(line) {
	console.log("The "+this.type+" rabbit says'" +line+"'");
};
Rabbit.prototype.teeth="small";
var killerRabbit =new Rabbit('killer');
var blackRabbit=new Rabbit('black');
killerRabbit.teeth='killer';
console.log(blackRabbit.type);
blackRabbit.speak('doom');
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
