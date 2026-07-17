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
    it('Preencher o campo de numeros com spinner', () => {
        // 1. Gera um número aleatório (ex: entre 10 e 50) usando o Faker
        const numeroInicial = faker.number.int({ min: 10, max: 50 });

        // 2. Calcula a matemática do que esperamos ver no final
        const numeroEsperado = numeroInicial + 5;

        // 3. Digita o número inicial no campo
        cy.get('[data-testid="input-number"]').clear().type(numeroInicial);

        // 4. Pressiona a seta do teclado para cima 5 vezes
        // O '.repeat(5)' vai gerar: '{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}'
        cy.get('[data-testid="input-number"]').type('{uparrow}'.repeat(5));

        // 5. Valida se o campo bate com o numero esperado
        // have.value sempre compara com texto (string), então converte o número esperado
        cy.get('[data-testid="input-number"]').should('have.value', numeroEsperado.toString());
    })
    it.only('Clicar no check para apresentar o campo de dependente', () => {
        // 1. Clica no checkbox
        cy.get('[data-testid="toggle-dependent"]').check()
        // 2. Valida se o campo de dependente está visível
        cy.get('[data-testid="input-dependent"]').should('be.visible')
        // 3. Preenche o campo de dependente
        const nomeDependente = faker.person.firstName();
        cy.get('[data-testid="input-dependent"]').type(nomeDependente)
        // 4. Deve clicar em Enviar
        cy.get('[data-testid="submit-complex-form"]').click()
        // 5. Deve desmarcar o checkbox
        cy.get('[data-testid="toggle-dependent"]').uncheck()
        // 6. Valida se o campo de dependente está invisível
        cy.get('[data-testid="input-dependent"]').should('not.exist')
    })
})