module.exports.register = function (Handlebars, options, params) {
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {

			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	Handlebars.registerHelper('eachRandom', function (items, options) {
		var newArray = shuffle(items);
		var total = newArray.length;
		var buffer = "";
		// Better performance: http://jsperf.com/for-vs-forEach/2
		var i = 0;
		var j = total;
		while (i < j) {
			// stick an index property onto the item, starting
			// with 1, may make configurable later
			var item = newArray[i];
			item['index'] = i + 1;
			item['_total'] = total;
			item['isFirst'] = i === 0;
			item['isLast'] = i === (total - 1);
			// show the inside of the block
			buffer += options.fn(item);
			i++;
		}
		// return the finished buffer
		return buffer;
	});
};
