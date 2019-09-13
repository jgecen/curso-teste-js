var createProduto = function(nome, quantidade, custo, porcentagemLucro){
	var _nome = nome;
	var _quantidade = quantidade;
	var _custo = custo;
	var _porcentagemLucro = porcentagemLucro;
	
	var _getNome = function(){
		return _nome;
	};
	
	var _setNome = function(nome){
		_nome = nome;
	};
	
	var _precoVenda = function(){
		return (_custo * _porcentagemLucro/100) + _custo;
	};
	
	return {
		getNome: _getNome,
		setNome: _setNome,
		precoVenda: _precoVenda
	};
};
module.exports = createProduto;