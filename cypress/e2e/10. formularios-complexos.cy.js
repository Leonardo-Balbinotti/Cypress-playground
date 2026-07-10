import { faker } from '@faker-js/faker';

describe('Preencher campos do formulário', () => {
    beforeEach(() => {
        cy.acessarPlayground();
    }) 
    it('Preencher o campo de Telefone corretamente', () => {
        //Gerar um número de telefone aleatório usando o Faker
        const ddd = faker.string.numeric(2)
        const primeiraParte = faker.string.numeric(5)
        const segundaParte = faker.string.numeric(4)

        // Formatar o número de telefone no formato (XX) XXXXX-XXXX
        const telefoneFormatado = `(${ddd}) ${primeiraParte}-${segundaParte}`

        // Preencher o campo de telefone
        cy.get('[data-testid="input-phone"]').type(telefoneFormatado, { delay: 50 })
        // Verificar se o campo de telefone foi preenchido corretamente
        cy.get('[data-testid="input-phone"]').should('have.value', telefoneFormatado)
    })
    it('Preencher o campo de Telefone incorretamente', () => {
        // Gerar um número de telefone aleatório usando o Faker
        const ddd = faker.string.numeric(2)
        const primeiraParte = faker.string.numeric(5)
        const segundaParte = faker.string.numeric(3)
        // Formatar o número de telefone no formato (XX) XXXXX-XXX
        const telefoneFormatado = `(${ddd}) ${primeiraParte}-${segundaParte}`
        // Preencher o campo de telefone
        cy.get('[data-testid="input-phone"]').type(telefoneFormatado, { delay: 50 })
        // Verificar se o campo de telefone foi preenchido corretamente
        cy.get('[data-testid="input-phone"]').should('have.value', telefoneFormatado)
        // Validar mensagem de erro
        cy.get('[data-testid="card"]').should('be.visible')
    })
})