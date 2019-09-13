const createProduto = require('../../src/produto')
const createItem = require('../../src/item')
const createPedido = require('../../src/pedido')

test('Teste de integração do Pedido', ()=>{
    const pedido = createPedido();
    
    //45.2 + 100% = 90.4
    const produto = createProduto('Mouse', 10, 45.20, 100)
    //90.4 x 10 = 904
    const item = createItem( produto, 10);

    pedido.addItem(item)
    expect(pedido.getTotal()).toBe(904)

    //30 + 100% = 60
    const produto1 = createProduto('Mouse', 10, 30, 100)
    //60 x 10 = 600
    const item1 = createItem( produto1, 10);

    pedido.addItem(item1)
    expect(pedido.getTotal()).toBe(1504)
    
})