describe('Clics e inputs', () => {

    beforeEach(() => {
        cy.acessarPlayground()
    })

    it('Deve clicar no botão', () => {
        Cypress._.times(5, () => {
            cy.get('[data-testid="click-button"]').click()
        })
    })
    it('Deve clicar no botão de duplo clique', () => {
        Cypress._.times(5, () => {
            cy.get('[data-testid="double-click-button"]').dblclick()
        })
    })
    it('Deve respeitar o limite de caracteres do campo', () => {
        //limite do campo seja 40
        const limite = 40;

        // Gera uma string com 45 letras 'A' (ou seja, 5 a mais que o limite)
        const textoExcedente = 'A'.repeat(limite + 5);

        // Preenche o campo
        cy.get('[data-testid="text-input"]').type(textoExcedente);

        // verifica se o valor final no campo TEM exatamente o tamanho do limite
        // Mesmo tentando digitar 45, o sistema deve ter barrado nos 40
        cy.get('[data-testid="text-input"]').should('have.value', 'A'.repeat(limite));
    })
    it('Deve selecionar uma opção no campo de seleção', () => {
        // Clicar no campo de seleção para abrir as opções (eq(0) para selecionar o primeiro campo de seleção)
        cy.get('[data-testid="select-input"]').eq(0).click()
        cy.contains('Cypress').click()
    }('Deve mover o slider de forma simples', () => {
        cy.get('[data-testid="range-input"]')
            .invoke('val', 75)            // 1. Define o valor matemático
            .trigger('input', { force: true })  // 2. Dispara o evento de entrada (forçando a atualização da UI)
            .trigger('change', { force: true }); // 3. Dispara o evento de mudança (para validar a alteração)

        // Validação
        cy.get('[data-testid="range-input"]').should('have.value', '75');
    });
})
W