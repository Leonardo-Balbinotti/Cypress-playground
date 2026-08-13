describe('Testar o Drag and drop', () => {
    beforeEach(() => {
        cy.acessarPlayground();
    })
    const cartao1 = '[data-testid="kanban-item-1"]';
    const cartao2 = '[data-testid="kanban-item-2"]';
    const cartao3 = '[data-testid="kanban-item-3"]';
    const cartao4 = '[data-testid="kanban-item-4"]';
    const cartao5 = '[data-testid="kanban-item-5"]';
    const colunabacklog = '[data-testid="kanban-column-backlog"]';
    const colunatodo = '[data-testid="kanban-column-todo"]';
    const columnInProgress = '[data-testid="kanban-column-inProgress"]';
    const colunadone = '[data-testid="kanban-column-done"]';
    const cartao6 = '[data-testid="kanban-item-6"]';

    it('Teste movendo os cartões até done e retornando par backlog', () => {
        //Arrastar os cartões para a coluna To Do
        // Arrastar o cartão 1 para a coluna "To Do"
        cy.get(cartao1).drag(colunatodo);
        // Validar se o cartão 1 foi movido para a coluna "To Do"
        cy.get(colunatodo).should('contain', 'Configurar ambiente');
        // Arrastar o cartão 2 para a coluna "To Do"
        cy.get(cartao2).drag(colunatodo);
        // Validar se o cartão 2 foi movido para a coluna "To Do"
        cy.get(colunatodo).should('contain', 'Escrever testes');
        // Arrastar o cartão 3 para a coluna "To Do"
        cy.get(cartao3).drag(colunatodo);
        // Validar se o cartão 3 foi movido para a coluna "To Do"
        cy.get(colunatodo).should('contain', 'Revisar código');
        // Arrastar o cartão 5 para a coluna "To Do"
        cy.get(cartao5).drag(colunatodo);
        // Validar se o cartão 5 foi movido para a coluna "To Do"
        cy.get(colunatodo).should('contain', 'Documentação');
        cy.get(colunatodo).should('contain', '5/5');

        // Arrastar o cartão 4 para a coluna "In progress"
        // Arrastar o cartão 1 para a coluna "In Progress"
        cy.get(cartao1).drag(columnInProgress);
        // Validar se o cartão 1 foi movido para a coluna "In Progress"
        cy.get(columnInProgress).should('contain', 'Configurar ambiente');
        // Arrastar o cartão 2 para a coluna "In Progress"
        cy.get(cartao2).drag(columnInProgress);
        // Validar se o cartão 2 foi movido para a coluna "In Progress"
        cy.get(columnInProgress).should('contain', 'Escrever testes');
        // Arrastar o cartão 3 para a coluna "In Progress"
        cy.get(cartao3).drag(columnInProgress);
        // Validar se o cartão 3 foi movido para a coluna "In Progress"
        cy.get(columnInProgress).should('contain', 'Revisar código');
        cy.get(columnInProgress).should('contain', '3/3');

        //Arrastar os cartões para Done
        // Arrastar o cartão 4 para a coluna "Done"
        cy.get(cartao4).drag(colunadone);
        // Validar se o cartão 4 foi movido para a coluna "Done"
        cy.get(colunadone).should('contain', 'Deploy em staging');
        // Arrastar o cartão 5 para a coluna "Done"
        cy.get(cartao5).drag(colunadone);
        // Validar se o cartão 5 foi movido para a coluna "Done"
        cy.get(colunadone).should('contain', 'Documentação');
        cy.get(colunadone).should('contain', '2/20');

        // Arrastar os cartões de volta para In Progress
        // Arrastar o cartão 5 para a coluna "In Progress"
        cy.get(cartao5).drag(colunatodo);
        // Validar se o cartão 5 foi movido para a coluna "In Progress"
        cy.get(colunatodo).should('contain', 'Documentação');
        // Arrastar o cartão 4 para a coluna "In Progress"
        cy.get(cartao4).drag(colunatodo);
        // Validar se o cartão 4 foi movido para a coluna "In Progress"
        cy.get(colunatodo).should('contain', 'Deploy em staging');
        //Arrastar o cartão 3 para a coluna "In progress"
        cy.get(cartao3).drag(colunatodo);
        // Validar se o cartão 3 foi movido para a coluna "In Progress"
        cy.get(colunatodo).should('contain', 'Revisar código');
        // Arrastar o cartão 2 para a coluna "In Progress" 
        cy.get(cartao2).drag(colunatodo);
        // Validar se o cartão 2 foi movido para a coluna "In Progress"
        cy.get(colunatodo).should('contain', 'Escrever testes');
        // Arrastar o cartão 1 para a coluna "In Progress"
        cy.get(cartao1).drag(colunatodo);
        // Validar se o cartão 1 foi movido para a coluna "In Progress" 
        cy.get(colunatodo).should('contain', 'Configurar ambiente');
        cy.get(colunatodo).should('contain', '5/5');

        //Arrastar os cartões de volta para Backlog
        //Arrastar o cartão 1 para a coluna "Backlog"
        cy.get(cartao1).drag(colunabacklog);
        // Validar se o cartão 1 foi movido para a coluna "Backlog" 
        cy.get(colunabacklog).should('contain', 'Configurar ambiente');
        // Arrastar o cartão 2 para a coluna "Backlog"
        cy.get(cartao2).drag(colunabacklog);
        // Validar se o cartão 2 foi movido para a coluna "Backlog" 
        cy.get(colunabacklog).should('contain', 'Escrever testes');
        // Arrastar o cartão 3 para a coluna "In Progress"
        cy.get(cartao3).drag(colunabacklog);
        // Validar se o cartão 3 foi movido para a coluna "Backlog" 
        cy.get(colunabacklog).should('contain', 'Revisar código');
        // Arrastar o cartão 4 para a coluna "In Progress"
        cy.get(cartao4).drag(colunabacklog);
        // Validar se o cartão 4 foi movido para a coluna "Backlog" 
        cy.get(colunabacklog).should('contain', 'Deploy em staging');
        // Arrastar o cartão 5 para a coluna "In Progress"
        cy.get(cartao5).drag(colunabacklog);
        // Validar se o cartão 5 foi movido para a coluna "Backlog" 
        cy.get(colunabacklog).should('contain', 'Documentação');
        //cy.get(colunabacklog).should('contain', '5/10');
    })

    it('Testar cartão bloqueado', () => {
        // Arrastar o cartão 6 para a coluna "In Progress"
        cy.get(cartao6).drag(colunatodo);
        // Validar se o cartão 6 não foi movido para a coluna "In Progress"
        cy.get(colunatodo).should('not.contain', 'Cartão bloqueado');
        cy.get(colunabacklog).should('contain', '5/10');
    })

    it('Testar arrastar os cartões para done e clicar em Resetar board', () => {
        it('Teste movendo os cartões até done e retornando par backlog', () => {
            //Arrastar os cartões para a coluna To Do
            // Arrastar o cartão 1 para a coluna "To Do"
            cy.get(cartao1).drag(colunatodo);
            // Validar se o cartão 1 foi movido para a coluna "To Do"
            cy.get(colunatodo).should('contain', 'Configurar ambiente');
            // Arrastar o cartão 2 para a coluna "To Do"
            cy.get(cartao2).drag(colunatodo);
            // Validar se o cartão 2 foi movido para a coluna "To Do"
            cy.get(colunatodo).should('contain', 'Escrever testes');
            // Arrastar o cartão 3 para a coluna "To Do"
            cy.get(cartao3).drag(colunatodo);
            // Validar se o cartão 3 foi movido para a coluna "To Do"
            cy.get(colunatodo).should('contain', 'Revisar código');
            // Arrastar o cartão 5 para a coluna "To Do"
            cy.get(cartao5).drag(colunatodo);
            // Validar se o cartão 5 foi movido para a coluna "To Do"
            cy.get(colunatodo).should('contain', 'Documentação');
            cy.get(colunatodo).should('contain', '5/5');

            // Arrastar o cartão 4 para a coluna "In progress"
            // Arrastar o cartão 1 para a coluna "In Progress"
            cy.get(cartao1).drag(columnInProgress);
            // Validar se o cartão 1 foi movido para a coluna "In Progress"
            cy.get(columnInProgress).should('contain', 'Configurar ambiente');
            // Arrastar o cartão 2 para a coluna "In Progress"
            cy.get(cartao2).drag(columnInProgress);
            // Validar se o cartão 2 foi movido para a coluna "In Progress"
            cy.get(columnInProgress).should('contain', 'Escrever testes');
            // Arrastar o cartão 3 para a coluna "In Progress"
            cy.get(cartao3).drag(columnInProgress);
            // Validar se o cartão 3 foi movido para a coluna "In Progress"
            cy.get(columnInProgress).should('contain', 'Revisar código');
            cy.get(columnInProgress).should('contain', '3/3');

            //Arrastar os cartões para Done
            // Arrastar o cartão 4 para a coluna "Done"
            cy.get(cartao4).drag(colunadone);
            // Validar se o cartão 4 foi movido para a coluna "Done"
            cy.get(colunadone).should('contain', 'Deploy em staging');
            // Arrastar o cartão 5 para a coluna "Done"
            cy.get(cartao5).drag(colunadone);
            // Validar se o cartão 5 foi movido para a coluna "Done"
            cy.get(colunadone).should('contain', 'Documentação');
            cy.get(colunadone).should('contain', '2/20');
            // Clicar no botão "Resetar board"
            cy.get('[data-testid="reset-board"]').click();
            cy.get(colunabacklog).should('contain', 'Documentação');
            //cy.get(colunabacklog).should('contain', '5/10');
        })
    })
})  