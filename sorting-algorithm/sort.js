/**
 *  @license
 *  Copyright 2018
 *  @author
 *  fei. zhang
 *  @time
 *  2019-04-19 09:30
 */
/**
 * 冒泡排序 慢
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
 * 选择排序 中
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
 * 插入排序 方法最快
 * @param arr
 */
function insertionSort (arr) {
	let length = arr.length;
	for (let i = 1; i <= length - 1; i++) {
		let temp = arr[i];
		let j = i;
		while(j > 0 && arr[j - 1] >= temp){
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = temp;
		console.log(arr);
	}
}

/**
 * 快速排序
 * @param arr
 * @returns {*}
 */
function qSort(arr) {
	if (arr.length === 0) {
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
}


/**
 * 测试排序方法
 */
function testSort () {
	let arr = [10, 8, 3, 2, 2, 4, 9, 5, 4, 3];
	const arrm = qSort(arr);
	console.log(arrm);
}
testSort();