
// array example

// var array = [1, "hello", true, ["Another", "Array"], {}];

// index example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
//                  0          1        2           3

// filter example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// var shortNames = names.filter( name => name.length <= 6);

// reduce example

// var nums = [10, 20, 30];

// adds each element in the array together and returns the total

// var total = nums.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// }, 0)

// map example

// var nums = [1, 2, 3, 4, 5];
// var squaredNums = nums.map(num => num * num);

// forEach example
// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// names.forEach(name => console.log(name))

// join example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// var sayTheNames = `Hello ${names.join(", ")}`

// every example

// var nums = [2, 4, 6, 8, 10];
// var isEven = nums.every(num => num % 2 === 0);
// console.log(isEven === true);

// some example

// var nums = [1, 3, 5, 7, 9, 10];
// var anyEven = nums.some(num => num % 2 === 0)
// console.log(anyEven === true)

// includes example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// var includesTaylor = names.includes("Taylor")
// console.log(includesTaylor)

// slice example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// console.log(names.slice(2))
// ['Carly', 'Charlotte']
// console.log(names.slice(0, 2))
// ['Taylor', 'Jackson']
// console.log(names.slice(1))
// ['Jackson', 'Carly', 'Charlotte']

// splice example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// names.splice(2, 0, "Aaron");
// console.log(names);
// ['Taylor', 'Jackson', 'Aaron', 'Carly', 'Charlotte']
// names.splice(4, 1, "Madeline");
// console.log(names);
// ['Taylor', 'Jackson', 'Aaron', 'Carly', 'Madeline']

// concat example

// var nums1 = [1, 2, 3];
// var nums2 = [4, 5, 6];
// var nums3 = nums1.concat(nums2);
// console.log(nums3);

// sort example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// var sortedNames = names.sort();
// console.log(sortedNames);
// ['Carly', 'Charlotte', 'Jackson', 'Taylor']

// var nums = [10, 27, 1000, 62, 45, 400];
// var sortedNums = nums.sort();
// console.log(sortedNums);
// [10, 1000, 27, 400, 45, 62]

// nums sorted from smallest to largest

// var nums = [10, 27, 1000, 62, 45, 400];
// var sortedNums = nums.sort((a, b) => a - b)
// console.log(sortedNums)
// [10, 27, 45, 62, 400, 1000]

// reverse example

// var names = ["Taylor", "Jackson", "Carly", "Charlotte"];
// console.log(names)
// ['Taylor', 'Jackson', 'Carly', 'Charlotte']
// names.reverse()
// console.log(names)
// ['Charlotte', 'Carly', 'Jackson', 'Taylor']