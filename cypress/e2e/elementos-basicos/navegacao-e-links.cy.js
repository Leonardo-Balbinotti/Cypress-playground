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
        Cypress._.times(limite, () => {
            cy.get('[data-testid="button-back"]').click();

            //Clicar no botão para retornar
            cy.contains('4 página(s)').should('be.visible');
        })

        // 1. Preparar uma função window.open para validar o link externo
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        // 2. Clicamos no link
        cy.get('[data-testid="link-external"]').click();

        // 3. Verificamos se o espião foi chamado com a URL correta
        cy.get('@windowOpen').should('be.calledWith', 'https://github.com/qamichaelmaia');
    })
});