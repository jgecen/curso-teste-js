var createPedido = function(){
	var _total = 0.0;
	var _itens = [];
	
	var _addItem = function(item){
		_itens.push(item);
		_total = _total + item.subTotal();
	};
	
	var _remove = function(indice){
		_total = _total - _itens[indice].subTotal();
		_itens.splice(indice, 1);
	};
	
	var _getTotal = function(){
		return _total;
	};
	
	return {
		addItem: _addItem,
		remove: _remove,
		getTotal: _getTotal
	}
}
module.exports = createPedido