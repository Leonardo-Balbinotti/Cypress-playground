describe('Conteudo dinâmico', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })
    it ('Deve esperar o conteúdo dinâmico carregar', () => {
        // Validar o texto inicial
        cy.get('[data-testid="dynamic-text"]').should('contain', 'Texto inicial')
        // Clicar no botão para iniciar a contagem regressiva e esperar o resultado
        cy.get('[data-testid="start-countdown"]').click().wait(5000)
        // Validar o texto final após a contagem regressiva
        cy.get('[data-testid="dynamic-text"]').should('contain', 'Contagem finalizada!')
    })
    it.only ('Deve ocultar a mensagem', () => {
        // Clicar no botão Alternar elemento para ocultar a mensagem
        cy.get('[data-testid="toggle-visibility"]').click()
        // Validar que a mensagem está oculta
        cy.get('[data-testid="toggleable-element"]').should('not.be.visible')
    })  
})