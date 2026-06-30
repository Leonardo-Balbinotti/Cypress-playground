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
    it ('Deve ocultar a mensagem', () => {
        // Clicar no botão Alternar elemento para ocultar a mensagem
        cy.get('[data-testid="toggle-visibility"]').click()
        // Validar que a mensagem está oculta
        cy.get('[data-testid="toggleable-element"]').should('not.exist')
    })
    it ('Deve aguardar carregar os dados', () => {
        // Clicar no botão para carregar os dados
        cy.get('[data-testid="slow-load-button"]').click().wait(3000)
        // Validar que os dados foram carregados corretamente
        cy.get('[data-testid="loaded-data"]').should('contain', 'Dados carregados após 3 segundos!')
    })
})