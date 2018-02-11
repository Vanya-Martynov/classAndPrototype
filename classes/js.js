(function () {
	


	
	class Car {
		constructor(weight, tank, power){
			this.weight = weight;
			this.tank = tank;
			this.power = power;
			this.fuelConsumption = ((this.tank * 0.75 + this.weight)/this.power)/6;
			this.maxSpeed = ((this.tank * 0.75 + this.weight) / this.power)*4;
			this.accelerationTime = (this.tank * 0.75 + this.weight)/this.power;
		}
		
		race(road){
			let fullTime = road/this.maxSpeed,
			hours = Math.floor(fullTime),
			timeWithoutHours = fullTime - hours,
			minites = Math.floor((fullTime - hours)*60),
			timeWithoutMinutes = timeWithoutHours - minites/60,
			seconds = Math.floor((timeWithoutMinutes)*60*60),
			timeWithoutSeconds = timeWithoutMinutes - seconds/3600,
			miliseconds = Math.floor((timeWithoutSeconds)*60*60*1000);
		
		let conclusiion = hours + ':' + minites + ':' + seconds + '.' + miliseconds;

		console.log(conclusiion);
		
		return conclusiion; 
		}
	}



	

	
	let test = new Car(1500, 75,68);
	console.log(test);
	test.race(15000);

}());