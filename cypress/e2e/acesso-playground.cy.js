describe('Acessando o site Playground', () => {
   
    it('Deve acessar o site Playground', () => {
        // Acessar o site Playground
        cy.visit('https://playground-for-qa.vercel.app/playground')
        cy.url().should('include', '/playground')
    });
});