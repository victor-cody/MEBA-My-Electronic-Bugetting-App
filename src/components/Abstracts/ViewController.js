// Function to format our numbers to follow a defined pattern 
export const formatNumber =  (num) => {
	let numSplit, intiger, decimal;
	/**
	 * appending exactly 2 decimal points after each no
	 * and a comma seprating the thousands
	 */

	num = Math.abs(num);
	num = num.toFixed(2);

	numSplit = num.split('.');
	intiger = numSplit[0];
	if (intiger.length > 3) {
		intiger = `${intiger.substr(0, intiger.length - 3)},${intiger.substr(intiger.length - 3, intiger.length)}`; //2354000 => 23,540//
	}
	if (intiger.length > 7) {
		intiger = `${intiger.substr(0, intiger.length - 7)},${intiger.substr(intiger.length - 7, intiger.length)}`; //2354000 => 23,540//
	}
	

	decimal = `.${numSplit[1]}`;
	return `${intiger + decimal}`;
}
