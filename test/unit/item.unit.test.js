const sinon = require('sinon')
const createItem = require('../../src/item')
const createProduto = require('../../src/produto')

test('Teste unitário do item', () => {

    const mockProduto = {}
    mockProduto.precoVenda = sinon.fake.returns(11.9)

    const item = createItem( mockProduto, 10);
    expect(item.subTotal()).toBe(119.0)
    expect(mockProduto.precoVenda.callCount).toBe(1)
})