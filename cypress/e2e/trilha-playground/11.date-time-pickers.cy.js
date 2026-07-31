describe('Date and Time Pickers', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })
    it('Deve selecionar uma data no date picker', () => {
        // Digita a data diretamente no input
        cy.get('[data-testid="input-date"]').type('2024-05-11');
        // Valida se a data foi preenchida corretamente
        cy.get('[data-testid="input-date"]').should('have.value', '2024-05-11');
        // Validar na mensagem se está apresentando a data correta
        cy.get('[data-testid="date-output"]').should('contain', 'Data selecionada: 2024-05-11');
    })
    it('Deve selecionar uma hora no time picker', () => {
        // Digita a hora diretamente no input
        cy.get('[data-testid="input-time"]').type('14:30');
        // Valida se a hora foi preenchida corretamente
        cy.get('[data-testid="input-time"]').should('have.value', '14:30');
        // Validar na mensagem se está apresentando a hora correta
       cy.get('[data-testid="time-output"]').should('contain', 'Horário selecionado: 14:30');
    })
    it('Deve selecionar uma data inicio e uma data fim' , () => {
        // Digita a data de início e a data de fim diretamente nos inputs
        cy.get('[data-testid="input-range-start"]').type('2024-05-11');
        cy.get('[data-testid="input-range-end"]').type('2099-05-15');
        // Valida se a mensagem apresenta as datas corretas
        cy.get('[data-testid="range-output"]').should('contain', 'Período: 2024-05-11 até 2099-05-15');
    })
})