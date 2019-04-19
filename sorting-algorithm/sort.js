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
					var temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
		 }
	 }
}
function testSort () {
	let arr = [10, 8, 3, 2, 2, 4, 9, 5, 4, 3];
	bubbleSort(arr);
	console.log(arr);
}
testSort();