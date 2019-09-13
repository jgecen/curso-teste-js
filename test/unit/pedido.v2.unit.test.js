const createPedido = require('../../src/pedido')
const sinon = require('sinon')

const createItemMock = (total) => {
    const mock = {}
    mock.subTotal = sinon.fake.returns(total)
    return mock
}

test('Teste unitário do pedido',  () => {
    const pedido = createPedido();
    
    pedido.addItem(createItemMock(11.5))
    expect(pedido.getTotal()).toBe(11.5)

    pedido.addItem(createItemMock(49))
    expect(pedido.getTotal()).toBe(60.5)

    pedido.remove(0)
    expect(pedido.getTotal()).toBe(49)


})