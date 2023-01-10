const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class Ninja {
	constructor(nombre, salud){
		this.nombre = nombre;
		this.salud = salud;
		velocidad = 3;
		fuerza = 3 ;

	}
	sayName(){
		console.log(`el nombre es ${this.nombre}`)
	}
	showStats(){
		console.log(`la fuerza es ${fuerza}, la velocidad es ${velocidad}, 
			y la salud es ${this.salud} `)
	}
	drinkSake(){
		this.salud += 10;
	}

}
