document.body.style.fontFamily = 'sans-serif';

class DataSet {
	constructor(/* arguments */){
		this.args = arguments;
		this.fxnCount = 0;
		this.addCount = 0;
		this.subCount = 0;
		this.mulCount = 0;
		this.divCount = 0;
		this.avgCount = 0;
		this.sumCount = 0;
		this.library = [{name:'Input Data',value:this.args}];
	}
	/***********************\
	   	 ARCHIVE METHODS
	   	 (internal use)
	\***********************/
		// libary() {
		// 	let library = [{name:'Input Data',value:this.args}];
		// 	return library;
		// }
		record(d,v){
			let newRec = {name:d,value:v}
			let lib = this.library;
			lib.push(newRec);
			document.write(`<p>Pushing ${newRec.name} to Library</p>`);
		}
	/**********************\
	   Simple operations
	\**********************/
	add() {
		let args = arguments;
		let arr = [];
		for(let c=0;c<args.length;c++) {
			arr.push(args[c])
		}
		let evaluate = function() {
			for(let t=0;t<arr.length;t++) {
				try {
					if(arr.indexOf(t) === undefined || arr.indexOf(t) < 0);
				} catch(e) {
					console.log({message:"Number not in DataSet",errorNum: t})
					return;
				}	
			}
			let sum = 0;
			for(let c=0;c<arr.length;c++) {
				sum += arr[c];
			}
			return sum;
		}
		// console.log(evaluate())
		if(evaluate() !== undefined && evaluate() !== NaN) {
			this.record(`Evaluated sum: ${evaluate()} | fxnCount: ${this.fxnCount} | subCount: ${this.subCount}`,evaluate());
			this.fxnCount += 1;
			this.addCount += 1;
		} else {
			console.log('ERROR: Evaluate() === Undefined || NaN')
		}
	}
	sub(num,subtractor) {
		let args = this.args;
		let arr = [];
		for(let c=0;c<args.length;c++) {
			arr.push(args[c])
		}
		let evaluate = function() {
			try {
				if(arr.indexOf(num) === undefined || arr.indexOf(num) < 0 && arr.indexOf(subtractor) === undefined || arr.indexOf(subtractor) < 0) return;
				if(arr.indexOf(num) === undefined || arr.indexOf(num) < 0) throw console.log({message:"Number not in DataSet",errorNum: num});
				if(arr.indexOf(subtractor) === undefined || arr.indexOf(subtractor) < 0) throw console.log({message:"Subtractor not in DataSet",errorNum: subtractor});
			} catch(e) {
				return
			}
				let diff = num - subtractor;
				return diff
		}
		// console.log(evaluate())
		if(evaluate() !== undefined && evaluate() !== NaN) {
			this.record(`Evaluated dif: ${evaluate()} | fxnCount: ${this.fxnCount} | subCount: ${this.subCount}`,evaluate());
			this.fxnCount += 1;
			this.subCount += 1;
		} else {
			console.log('ERROR: Evaluate() === Undefined || NaN')
		}
	}
	/**********************\
	   Complex operations
	\**********************/
	avg() {
		let argArr = this.args;
		function avgSet(s,c,f) {
			average: s;
			ceiling: c;
			floor: f;
		}
		let evaluate = function() {
			let sum = 0;
			for(let c=0;c<argArr.length;c++) {
				sum += argArr[c];
			}
			sum /= argArr.length
			let ceil = Math.ceil(sum)
			let floor = Math.floor(sum)

			let avg = avgSet(sum,ceil,floor); //{average:sum,ceiling:ceil,floor:floor}
			return avg;
		};
		// console.log(evaluate())
		this.record(`Evaluated avg: ${evaluate().average} | fxnCount: ${this.fxnCount} | avgCount: ${this.avgCount}`,evaluate());
	}
	sum() {
		let arr = this.args;
		let evaluate = function() {
			let sum = 0;
			for(let c=0;c<arr.length;c++) {
				sum += arr[c];
			}
			return sum;
		};
		// console.log(evaluate())
		this.record(`Evaluated sum: ${evaluate()} | fxnCount: ${this.fxnCount} | addCount: ${this.addCount}`,evaluate());
		this.fxnCount += 1;
		// this.sumCount += 1;
	}
	/*********************\
		Utility Methods
	   (Access archives)
	\*********************/
	access(index,prop) {
		if(index === undefined && prop === undefined) {
			console.log(this.library);
		} else if(index !== undefined && prop === 'name') {
			console.log(this.library[index].name)
		} else if (index !== undefined && prop === 'value') {
			console.log(this.library[index].value)
		} else if (index !== undefined && prop === 'object' || prop === '' || prop === undefined) {
			console.log(this.library[index])
		} else {
			try{
				if(typeof index !== 0 || index > this.library.length || index < 0) throw "ERROR: Invalid index < "+`${this.library.length}`;
				if(typeof prop !== '') throw "ERROR: Invalid property";
			}
			catch(e) {
				console.log(e);
			}
		}
	}
}

let inputData = [];

for(let x=0;x<11;x++) {
	inputData.push(Math.floor(Math.random() * 100));
}

let data = new DataSet(inputData);

// function callHack(fxn) {
// 	return fxn.apply(this, [].slice.call(arguments, 0));
// }