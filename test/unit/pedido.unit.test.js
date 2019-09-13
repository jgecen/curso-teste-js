const createPedido = require('../../src/pedido')
const sinon = require('sinon')

test('Teste unitário do pedido',  () => {
    const pedido = createPedido();
    
    const itemMock1 = {}
    itemMock1.subTotal = sinon.fake.returns(11.5)

    pedido.addItem(itemMock1)
    expect(pedido.getTotal()).toBe(11.5)

    const itemMock2 = {}
    itemMock2.subTotal = sinon.fake.returns(49)

    pedido.addItem(itemMock2)
    expect(pedido.getTotal()).toBe(60.5)

    pedido.remove(0)
    expect(pedido.getTotal()).toBe(49)
})