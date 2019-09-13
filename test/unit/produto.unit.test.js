const createProduto = require('../../src/produto')

test('Teste unitário ', () => {

    const produto = createProduto('Mouse', 10, 45.20, 100)

    expect(produto.precoVenda()).toBe(90.40)

})