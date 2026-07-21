describe('Alertas e modais', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })

    it('Deve clicar em Mostrar Alert)a', () => {
        // Clicar no botão para mostrar o alerta
        cy.on('window:alert', (str) => {
            // Validar o texto do alerta
            expect(str).to.equal('Este é um alerta simples!');
            //Retornar true para aceitar o alerta
            //Retornar false para cancelar o alerta
            return true
        });
        cy.get('[data-testid="button-alert"]').click();
    })

    it('Deve clicar em Mostrar Confirm', () => {
        // Clicar no botão para mostrar o confirm
        cy.on('window:confirm', (str) => {
            // Validar o texto do confirm
            expect(str).to.equal('Você confirma esta ação?');
            //Retornar true para aceitar o confirm
            //Retornar false para cancelar o confirm
            return true
        });
        //
        cy.get('[data-testid="button-confirm"]').click();
        cy.get('[data-testid="toast-message"]').should('have.text', 'Confirmado!');
    })

    it('Deve clicar em Mostrar Prompt', () => {
        // Clicar no botão para mostrar o prompt
        cy.window().then((win) => {
            cy.stub(win, 'prompt').as('promptEspiao').returns('Cypress Test');
        })
        // Clicar no botão para mostrar o prompt
        cy.get('[data-testid="button-prompt"]').click();
        // Validar o texto do prompt
        cy.get('@promptEspiao').should('have.been.calledWith', 'Digite seu nome:');
    })

    it.only('Deve clicar em Abrir Modal', () => {
        // Clicar no botão para abrir o modal
        cy.get('[data-testid="button-modal"]').click();
        //Validar o conteúdo do modal
                cy.contains('Este é um modal personalizado com overlay e botão de fechar.').should('exist');
        //Fechar o modal
        cy.get('[data-testid="modal-close-button"]').click();
    })
})