var createItem = function(produto, quantidade){
	
	var _produto = produto;
	var _quantidade = quantidade;
	
	var _subTotal = function(){
		return _produto.precoVenda() * _quantidade;
	};

	var _nome = function(){
		return _produto.getNome();
	}
	return {
		subTotal: _subTotal,
		nome: _nome
	}
}

module.exports = createItem;