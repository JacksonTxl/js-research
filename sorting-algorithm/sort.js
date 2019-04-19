/**
 *  @license
 *  Copyright 2018
 *  @author
 *  fei. zhang
 *  @time
 *  2019-04-19 09:30
 */
/**
 * 冒泡排序
 * @param arr
 */
function bubbleSort (arr) {
	let length = arr.length;
   for (let i = length; i >= 2; i--) {
   	 for (let j = 0; j <= i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
		 }
   	 console.log(arr);
	 }
}

/**
 * 选择排序
 * @param arr
 */
function selectionSort (arr) {
	let length = arr.length;
	for (let i = 0; i <= length - 2; i++) {
		for (let j = i + 1; j <= length - 1; j++) {
			if (arr[j] < arr[i]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
		console.log(arr);
	}
}


/**
 * 测试排序方法
 */
function testSort () {
	let arr = [10, 8, 3, 2, 2, 4, 9, 5, 4, 3];
	selectionSort(arr);
	console.log(arr);
}
testSort();