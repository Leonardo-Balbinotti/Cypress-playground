describe('Checkboxes e Radios', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })
    it('Deve interagir com checkboxes', () => {
        // Interagir com checkboxes
        // Marcar a opção 1
        cy.get('[data-testid="checkbox-option1"]').check().should('be.checked')
        // Marcar a opção 2
        cy.get('[data-testid="checkbox-option1"]').uncheck().should('not.be.checked')
        // Marcar a opção 2 e 3
        cy.get('[data-testid="checkbox-option2"]').check().should('be.checked')
        cy.get('[data-testid="checkbox-option3"]').check().should('be.checked')
        // Validar o número de checkboxes marcados
        cy.get('[data-testid="checkbox-count"]').should('contain', '2')
        // Marcar e desmarcar todas as opções
        cy.get('[data-testid="checkbox-select-all"]').check().should('be.checked')
        cy.get('[data-testid="checkbox-select-all"]').uncheck().should('not.be.checked')
        // Validar o número de checkboxes marcados
        cy.get('[data-testid="checkbox-count"]').should('contain', '0')
    })
    it('Deve interagir com radios', () => {
        // Interagir com radios
        // Selecionar a opção 1
        cy.get('[data-testid="radio-radio1"]').check().should('be.checked')
        // Validar opção selecionada
        cy.get('[data-testid="radio-output"]').should('contain', 'Selecionado: radio1')
        // Selecionar a opção 2
        cy.get('[data-testid="radio-radio2"]').check().should('be.checsked')
        // Validar opção selecionada
        cy.get('[data-testid="radio-output"]').should('contain', 'Selecionado: radio2')
         // Selecionar a opção 3
        cy.get('[data-testid="radio-radio3"]').check().should('be.checked')
        // Validar opção selecionada
        cy.get('[data-testid="radio-output"]').should('contain', 'Selecionado: radio3')
    })
})