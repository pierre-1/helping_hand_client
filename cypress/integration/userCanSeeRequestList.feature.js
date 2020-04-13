describe('when products are visible', () => {
    before(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/products',
        response: 'fixture:products.json'
      })
      cy.visit('/')
    })
    it('successfully', () => {
      cy.get("#product").within(() => {
        cy.contains('Potatoes'); //product
        cy.contains('98'); //price
      })
    })
  });