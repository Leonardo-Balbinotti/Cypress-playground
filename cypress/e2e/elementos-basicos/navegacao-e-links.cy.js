describe('Navegação e links', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })
    it('Deve navegar entre as paginas disponiveis', () => {
        // Definir limite de cliques
        const limite = 3;

        cy.get('[data-testid="link-about"]').click();
        cy.get('[data-testid="link-contact"]').click();
        cy.get('[data-testid="link-products"]').click();
        cy.get('[data-testid="button-back"]').click();

        //Clicar no botão para retornar
        Cypress._.times(limite, (i) => {
            cy.get('[data-testid="button-back"]').click();
        })
    })
});