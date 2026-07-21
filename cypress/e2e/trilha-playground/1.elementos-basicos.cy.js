describe('Clics e inputs', () => {

    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })

    it('Deve clicar no botão', () => {
        // Executa o clique simples 5 vezes
        Cypress._.times(5, () => {
            cy.get('[data-testid="click-button"]').click();
        })
    })

    it('Deve clicar no botão de duplo clique', () => {
        // Executa o clique duplo 5 vezes
        Cypress._.times(5, () => {
            cy.get('[data-testid="double-click-button"]').dblclick();
        })
    })

    it('Deve respeitar o limite de caracteres do campo', () => {
        // Define o limite máximo de caracteres permitido
        const limite = 40;

        // Gera um texto com 5 caracteres acima do limite
        const textoExcedente = 'A'.repeat(limite + 5);

        // Preenche o campo com o texto excedente
        cy.get('[data-testid="text-input"]').type(textoExcedente);

        // Valida se o campo truncou o texto respeitando o limite definido
        cy.get('[data-testid="text-input"]').should('have.value', 'A'.repeat(limite));
    })

    it('Deve selecionar uma opção no campo de seleção', () => {
        // Abre o menu de seleção
        cy.get('[data-testid="select-input"]').eq(0).click();
        // Seleciona a opção com o texto 'Cypress'
        cy.contains('Cypress').click();
    })

    it('Deve mover o slider de forma simples', () => {
        // Define o valor do slider como 75
        cy.get('[data-testid="range-input"]').invoke('val', 75);
        // Dispara o evento de entrada para atualizar a UI
        cy.get('[data-testid="range-input"]').trigger('input', { force: true });
        // Dispara o evento de mudança para confirmar a alteração
        cy.get('[data-testid="range-input"]').trigger('change', { force: true });

        // Valida se o valor do slider é igual a 75
        cy.get('[data-testid="range-input"]').should('have.value', '75');
    })
    
    it('Deve marcar o toggle switch', () => {
        // Clica no toggle switch para marcar
        cy.get('[data-testid="toggle-switch"]').click();
    })
}) // Fechamento correto do 'describe'