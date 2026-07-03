describe('Testar o Upload de arquivos', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })

it('Deve fazer upload de um arquivo com sucesso clicando', () => {  
    // Clica no botão para anexar o arquivo de teste e faz o upload
    cy.get('[data-testid="file-input"]').selectFile('cypress/fixtures/teste.jpg', { force: true });
})
it('Deve fazer upload de um arquivo com sucesso com drag-drop', () => {
    // Arrasta e solta o arquivo de teste no dropzone
    cy.get('[data-testid="dropzone"]').selectFile('cypress/fixtures/teste.jpg', { action: 'drag-drop' });
})
})