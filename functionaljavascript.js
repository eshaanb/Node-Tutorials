//program 1 - create a function that upper cases an input

/*
function upperCaser(input) {
	return input.toUpperCase()
}

module.exports = upperCaser*/

//program 2 - create a function that takes a function and a number
// and executes the function the given number of times
/*
function runFunc(func, num) {
	if (num == 0) return;
	func()
	runFunc(func, --num)
}

module.exports = runFunc*/

//program 3 - double each number in an array using Array#map
/*
function doubleAll(numArray) {
	return numArray.map(function(num) {
		return num * 2
	})
}
module.exports = doubleAll*/

//program 4 - use array#filter to filter an array of objects containing messages
//into an array of the messages less than 50
/*
function getShortMessages(messages) {
	return messages.filter(function(item) {
		return item.message.length < 50
	}).map(function(item) {
		return item.message
	})
}
module.exports = getShortMessages*/

//program 5 - write a function that takes a list of users and returns a function
// which returns true if all supplied users exist in the original list of users
//SOME is like an ANY function for an array
/*
function checkUsersValid(goodUsers) {
	return function(submittedUsers) {
    	return submittedUsers.every(function(submittedUser) {
    		return goodUsers.some(function(goodUser) {
    			return goodUser.id == submittedUser.id
    		})
    	})
  	}
}
    
module.exports = checkUsersValid*/

//program 6 - given an array of strings return an object with a count of each one
/*
function countWords(inputWords) {
	return inputWords.reduce(function(reducedObj, word) {
		if (reducedObj[word] == null) {
			reducedObj[word] = 0
		}
		reducedObj[word]++
		return reducedObj
	}, {}) //initial reduced obj 
}

module.exports = countWords

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
countWords(inputWords)*/

//program 7 - write a recursive function that will do reduce with an initial value
/*
function reduce(arr, fn, initial) {
	var idx = 0
	var returned = recur(idx, initial, arr, fn)
	return returned
}

function recur(idx, initial, arr, fn) {
	if (idx == arr.length) {
		return initial
	}
	initial = fn(initial, arr[idx], idx, arr)
	idx++
	return recur(idx, initial, arr, fn)
}

module.exports = reduce

/*reduce([0,1,2], function(prev, curr, index, arr) {
	return prev + curr
}, 0)*/

//program 8 - write a function duckCount that returns the number of args passed to it which have a property quack

/*function duckCount() {
	return Array.prototype.slice.call(arguments).reduce(function(reducedObj, obj) {
		// console.log("checking: "+obj.toString())
		if ((Object.getPrototypeOf(obj) == Object.prototype && obj.hasOwnProperty('quack')) || Object.prototype.hasOwnProperty.call(obj, 'quack')) {
			reducedObj++
		}
		return reducedObj
	}, 0)
}

// var notDuck = Object.create({quack: true})
// var duck = {quack: true}
//console.log(duckCount(duck, notDuck))
module.exports = duckCount*/

//program 9 - write a logger function that prepends the given tag to the input and logs it

/*var slice = Array.prototype.slice
var join = Array.prototype.join

function logger(namespace) {
	return function() {
		console.log(namespace, slice.call(arguments).join(" "))
	}
}

// var warn = logger("warn")

// console.log(warn('hello', 'hi'))

module.exports = logger*/

//problem 10 - implement array.map using array.reduce
/*
module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(endArray, obj) {
		endArray.push(fn(obj))
		return endArray
	}, [])
}

// console.log(module.exports([1, 2, 3, 4, 5], function(item) {
	// return item * 2
// }))*/

//problem 11 - create a spy function that keeps track of how many times a function is called

/*function Spy(targetObj, methodName) {
	var count = {count : 0}
	var oldFunc = targetObj[methodName]
	targetObj[methodName] = function() {
		count.count++
		return oldFunc.apply(this, arguments);
	}
	return count
}

module.exports = Spy*/

//problem 12 - modify repeat function to be asynchronous

function repeat(operation, num) {
  setTimeout(function()) {
	if (num <= 0) return
	operation()
	repeat(operation, --num)
  }
}
// repeat(function() {
	// console.log('repeating')
// }, 10)

module.exports = setImmediate(repeat)