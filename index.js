function Checkout() {
	this.items = [];
}

Checkout.prototype.scan = function scan(item) {
	this.items.push(item);
	return price(item);
};

Checkout.prototype.getTotal = function add() {
	return this.items.reduce(function(accumulator, item) {
		return accumulator + price(item);
	}, 0);
};

function price(item) {
	var itemPrices = { A: 50, B: 30, C: 20, D: 15 };

	return itemPrices[item] ? itemPrices[item] : 0;
}

module.exports = Checkout;