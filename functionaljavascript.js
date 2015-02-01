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

function countWords(inputWords) {
	inputWords.reduce(function() {
		
	})
}

module.exports = countWords


