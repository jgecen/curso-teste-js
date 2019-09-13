const createProduto = require('../../src/produto')
const createItem = require('../../src/item')

test('Teste de integração do Item', ()=>{
    const produto = createProduto('Mouse', 10, 45.20, 100)//90.4

    //90.4 x 10 = 904
    const item = createItem( produto, 10);
    expect(item.subTotal()).toBe(904)

    

})