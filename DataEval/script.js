'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (descriptor.value) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

document.body.style.fontFamily = 'sans-serif';

var DataSet = (function () {
	function DataSet() {
		_classCallCheck(this, DataSet);

		this.args = arguments;
		this.fxnCount = 0;
		this.addCount = 0;
		this.subCount = 0;
		this.mulCount = 0;
		this.divCount = 0;
		this.avgCount = 0;
		this.sumCount = 0;
		this.library = [{ name: 'Input Data', value: this.args }];
	}

	_createClass(DataSet, [{
		key: 'record',

		/***********************\
     	 ARCHIVE METHODS
     	 (internal use)
  \***********************/
		// libary() {
		// 	let library = [{name:'Input Data',value:this.args}];
		// 	return library;
		// }
		value: function record(d, v) {
			var newRec = { name: d, value: v };
			var lib = this.library;
			lib.push(newRec);
			document.write('<p>Pushing ' + newRec.name + ' to Library</p>');
		}
	}, {
		key: 'add',

		/**********************\
     Simple operations
  \**********************/
		value: function add() {
			var args = arguments;
			var arr = [];
			for (var c = 0; c < args.length; c++) {
				arr.push(args[c]);
			}
			var evaluate = function evaluate() {
				for (var t = 0; t < arr.length; t++) {
					try {
						if (arr.indexOf(t) === undefined || arr.indexOf(t) < 0) ;
					} catch (e) {
						console.log({ message: 'Number not in DataSet', errorNum: t });
						return;
					}
				}
				var sum = 0;
				for (var c = 0; c < arr.length; c++) {
					sum += arr[c];
				}
				return sum;
			};
			// console.log(evaluate())
			if (evaluate() !== undefined && evaluate() !== NaN) {
				this.record('Evaluated sum: ' + evaluate() + ' | fxnCount: ' + this.fxnCount + ' | subCount: ' + this.subCount, evaluate());
				this.fxnCount += 1;
				this.addCount += 1;
			} else {
				console.log('ERROR: Evaluate() === Undefined || NaN');
			}
		}
	}, {
		key: 'sub',
		value: function sub(num, subtractor) {
			var args = this.args;
			var arr = [];
			for (var c = 0; c < args.length; c++) {
				arr.push(args[c]);
			}
			var evaluate = function evaluate() {
				try {
					if (arr.indexOf(num) === undefined || arr.indexOf(num) < 0 && arr.indexOf(subtractor) === undefined || arr.indexOf(subtractor) < 0) return;
					if (arr.indexOf(num) === undefined || arr.indexOf(num) < 0) throw console.log({ message: 'Number not in DataSet', errorNum: num });
					if (arr.indexOf(subtractor) === undefined || arr.indexOf(subtractor) < 0) throw console.log({ message: 'Subtractor not in DataSet', errorNum: subtractor });
				} catch (e) {
					return;
				}
				var diff = num - subtractor;
				return diff;
			};
			// console.log(evaluate())
			if (evaluate() !== undefined && evaluate() !== NaN) {
				this.record('Evaluated dif: ' + evaluate() + ' | fxnCount: ' + this.fxnCount + ' | subCount: ' + this.subCount, evaluate());
				this.fxnCount += 1;
				this.subCount += 1;
			} else {
				console.log('ERROR: Evaluate() === Undefined || NaN');
			}
		}
	}, {
		key: 'avg',

		/**********************\
     Complex operations
  \**********************/
		value: function avg() {
			var argArr = this.args;
			function avgSet(s, c, f) {
				average: s;
				ceiling: c;
				floor: f;
			}
			var evaluate = function evaluate() {
				var sum = 0;
				for (var c = 0; c < argArr.length; c++) {
					sum += argArr[c];
				}
				sum /= argArr.length;
				var ceil = Math.ceil(sum);
				var floor = Math.floor(sum);

				var avg = avgSet(sum, ceil, floor); //{average:sum,ceiling:ceil,floor:floor}
				return avg;
			};
			// console.log(evaluate())
			this.record('Evaluated avg: ' + evaluate().average + ' | fxnCount: ' + this.fxnCount + ' | avgCount: ' + this.avgCount, evaluate());
		}
	}, {
		key: 'sum',
		value: function sum() {
			var arr = this.args;
			var evaluate = function evaluate() {
				var sum = 0;
				for (var c = 0; c < arr.length; c++) {
					sum += arr[c];
				}
				return sum;
			};
			// console.log(evaluate())
			this.record('Evaluated sum: ' + evaluate() + ' | fxnCount: ' + this.fxnCount + ' | addCount: ' + this.addCount, evaluate());
			this.fxnCount += 1;
			// this.sumCount += 1;
		}
	}, {
		key: 'access',

		/*********************\
  	Utility Methods
     (Access archives)
  \*********************/
		value: function access(index, prop) {
			if (index === undefined && prop === undefined) {
				console.log(this.library);
			} else if (index !== undefined && prop === 'name') {
				console.log(this.library[index].name);
			} else if (index !== undefined && prop === 'value') {
				console.log(this.library[index].value);
			} else if (index !== undefined && prop === 'object' || prop === '' || prop === undefined) {
				console.log(this.library[index]);
			} else {
				try {
					if (typeof index !== 0 || index > this.library.length || index < 0) throw 'ERROR: Invalid index < ' + ('' + this.library.length);
					if (typeof prop !== '') throw 'ERROR: Invalid property';
				} catch (e) {
					console.log(e);
				}
			}
		}
	}]);

	return DataSet;
})();

var inputData = [];

for (var x = 0; x < 11; x++) {
	inputData.push(Math.floor(Math.random() * 100));
}

var data = new DataSet(inputData);

// function callHack(fxn) {
// 	return fxn.apply(this, [].slice.call(arguments, 0));
// }
/* arguments */
