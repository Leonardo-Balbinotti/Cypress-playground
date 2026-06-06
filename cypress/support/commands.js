Cypress.Commands.add('acessarPlayground', () => {
    cy.visit('https://playground-for-qa.vercel.app/')
    cy.get('[data-testid="nav-link-playground"]').click()
})