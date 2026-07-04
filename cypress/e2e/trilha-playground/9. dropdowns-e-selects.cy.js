describe('Testar dropdowns e selects', () => {
    beforeEach(() => {
        cy.acessarPlayground();
    })
    it('Selecionar uma opção do select', () => {
        // Selecionar o select
        cy.get('[data-testid="select-input"]').eq(1).click();
        // Selecionar a opção desejada
        cy.get('[data-testid="select-option-cypress"]').click();
        // Verificar se a opção foi selecionada corretamente
        cy.get('[data-testid="select-input"]').eq(1).should('contain', 'Cypress');
    })
    it('Selecionar uma opção do dropdown', () => {
        // Selecionar o dropdown
        cy.get('[data-testid="dropdown-trigger"]').click();
        // Selecionar a opção desejada
        cy.get('[data-testid="dropdown-option-opção-a"]').click();
        // Verificar se a opção foi selecionada corretamente
        cy.get('[data-testid="dropdown-trigger"]').should('contain', 'Opção A');
    })

})