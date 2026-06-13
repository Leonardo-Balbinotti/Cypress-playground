describe('Alertas e modais', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })

    it('Deve clicar em Mostrar Alert)a', () => {
        // Clicar no botão para mostrar o alerta
        cy.on('window:alert', (str) => {
            // Validar o texto do alerta
            expect(str).to.equal('Este é um alerta simples!')
            //Retornar true para aceitar o alerta
            //Retornar false para cancelar o alerta
            return true
        });
        cy.get('[data-testid="button-alert"]').click()
    })

    it.only('Deve clicar em Mostrar Confirm', () => {
        // Clicar no botão para mostrar o confirm
        cy.on('window:confirm', (str) => {
            // Validar o texto do confirm
            expect(str).to.equal('Você confirma esta ação?')
            //Retornar true para aceitar o confirm
            //Retornar false para cancelar o confirm
            return true
        });
        cy.get('[data-testid="button-confirm"]').click().
            cy.get('[data-testid="toast-message"]').should('have.text', 'Confirmado!')
    })

})