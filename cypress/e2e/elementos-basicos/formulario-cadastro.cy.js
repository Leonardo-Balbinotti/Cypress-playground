import { faker } from '@faker-js/faker';

describe('Preencher campos do formulário', () => {

    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })

    // Gerar dados falsos para o formulário para cada execução do teste
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    it('Deve preencher os campos do formulário de cadastro', () => {

        cy.get('[data-testid="input-name"]').type(nome);
        cy.get('[data-testid="input-email"]').type(email);
        cy.get('[data-testid="input-password"]').type(senha);
        cy.get('[data-testid="input-confirm-password"]').type(senha);

        // Validar se os campos foram preenchidos corretamente
        cy.get('[data-testid="input-name"]').should('have.value', nome);
        cy.get('[data-testid="input-email"]').should('have.value', email);
        cy.get('[data-testid="input-password"]').should('have.value', senha);
        cy.get('[data-testid="input-confirm-password"]').should('have.value', senha);

        //Marcar o checkbox de termos de uso
        cy.get('[data-testid="checkbox-terms"]').check().should('be.checked');

        // Clicar no botão de cadastro
        cy.get('[data-testid="submit-button"]').click();
    })

    it('Deve validar os erros de preenchimento do formulário', () => {
        // Clicar no botão de cadastro sem preencher os campos
        cy.get('[data-testid="submit-button"]').click();
        cy.wait(500); // Esperar um pouco para as mensagens de erro aparecerem

        // Validar as mensagens de erro para cada campo obrigatório
        cy.contains('Nome é obrigatório').should('be.visible');
        cy.contains('Email é obrigatório').should('be.visible');
        cy.contains('Senha é obrigatória').should('be.visible');
        cy.contains('Você deve aceitar os termos').should('be.visible');
    })

    it('Deve preencher os campos e clicar em Limpar', () => {

        // Validar se os campos foram preenchidos corretamente        
        cy.get('[data-testid="input-name"]').type(nome);
        cy.get('[data-testid="input-email"]').type(email);
        cy.get('[data-testid="input-password"]').type(senha);
        cy.get('[data-testid="input-confirm-password"]').type(senha);

        //Marcar o checkbox de termos de uso
        cy.get('[data-testid="checkbox-terms"]').check().should('be.checked');

        // Clicar no botão de limpar
        cy.get('[data-testid="clear-button"]').click();
    })
});
