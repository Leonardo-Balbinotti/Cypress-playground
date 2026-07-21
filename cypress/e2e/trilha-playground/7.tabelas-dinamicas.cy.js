describe('Teste de tabelas dinamicas', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })

    it('Testar o filtro da tabela procurando por nome e email', () => {
        // Implementar o teste de filtro da tabela
        cy.get('[data-testid="table-search"]').type('João Silva');
        //  Pega todas as linhas visíveis do corpo da tabela
        cy.get('tbody tr').each(($linha) => {
            // 3. Garante que dentro dessa linha existe o texto "João"
            cy.wrap($linha).should('contain.text', 'João');
    })

    it('Testar o checkbox selecionando 3 cadastros e depois desmarcando 1 e após isso clicar no checkbox pra selecionar todos', () => {
        // Implementar o teste de checkbox
        cy.get('[data-testid="select-row-1"]').check();
        cy.get('[data-testid="select-row-2"]').check();
        cy.get('[data-testid="select-row-3"]').check();
        cy.get('[data-testid="select-row-2"]').uncheck();
        cy.get('[data-testid="select-all"]').check();
        cy.contains('5 de 5 linha(s) selecionada(s)').should('be.visible');
    })

    it('Testar a coluna de ação editar e excluir', () => {
        // Implementar o teste de ação editar e excluir
        cy.get('[data-testid="edit-1"]').click();
        // Verificar se o modal de edição está visível 
        cy.contains('Editando João Silva').should('be.visible');
        // Clicar no botão Excluir 
        cy.get('[data-testid="delete-1"]').click();
        // Verificar se o modal de confirmação de exclusão está visível 
        cy.get('[data-testid="table-toast"]').should('be.visible');
    })

    it('Testar ordenação da coluna Nome', () => {
        // 1. Clica no título da coluna para acionar a ordenação
        cy.get('th').contains('Name').click();

        // Cria uma lista vazia para guardar os nomes que vai ser lido
        let nomesNaTela = []

        // 2. Pega todas as células da coluna Name
        cy.get('tbody tr td:nth-child(2)').each(($celula) => {

            // Extrai o texto, remove espaços em branco (trim) e guarda na lista
            nomesNaTela.push($celula.text().trim());

        }).then(() => {
            // 3. O .then() garante que só vamos validar depois de ler todas as linhas

            // Cria uma cópia da lista e pede pro JS ordenar alfabeticamente
            const nomesOrdenadosPeloJs = [...nomesNaTela].sort();

            // 4. Compara as duas listas!
            // Utiliza o 'deep.equal' para comparar arrays e não textos simples
            expect(nomesNaTela).to.deep.equal(nomesOrdenadosPeloJs);
        })
    })
  
    it('Testar ordenação da coluna Email', () => {
        // 1. Clica no título da coluna  para acionar a ordenação
        cy.get('th').contains('Email').click();

        //Criar uma lista vazia para guardar os emails que vai ser lido
        let emailsNaTela = []

        // 2. Pega todas as células da coluna Email
        cy.get('tbody tr td:nth-child(3)').each(($celula) => {

            //Extrai o texto, remove espaços em branco (trim) e guarda na lista
            emailsNaTela.push($celula.text().trim ());

        }).then(() => {
            //3. o .then() garante que só vali validar depois de ler todas as linhas

            // Cria uma cópia da lista e pede pro JS ordenar alfabeticamente
            const nomeOrdenadosPeloJs = [...emailsNaTela].sort();

            // 4. Compara as duas listas!
            // Utiliza o 'deep.equal' para comparar arrays e não textos simples
            expect(emailsNaTela).to.deep.equal(emailsNaTela.sort());

        })
    })
    it('Testar a ordenação da coluna Role', () => {
        // 1. Clica no título da coluna para acionar a ordenação
        cy.get('th').contains('Role').click();

        // Cria uma lista vazia para guardar os nomes que vai ser lido
        let rolesNaTela = []

        // 2. Pega todas as células da coluna Role
        cy.get('tbody tr td:nth-child(4)').each(($celula) => {

            // Extrai o texto, remove espaços em branco (trim) e guarda na lista
            rolesNaTela.push($celula.text().trim());
        }).then(() => {
            // 3. O .then() garante que só vamos validar depois de ler todas as linhas
            
            // Cria uma cópia da lista e pede pro JS ordenar alfabeticamente
            const rolesOrdenadosPeloJs = [...rolesNaTela].sort();
            // Utiliza o 'deep.equal' para comparar arrays e não textos simples
            expect(rolesNaTela).to.deep.equal(rolesOrdenadosPeloJs);
        })
        
    it('Testar a ordenação da coluna Status', () => {
        // 1. Clica no título da coluna para acionar a ordenação
        cy.get('th').contains('Status').click();
        // Cria uma lista vazia para guardar os nomes que vai ser lido
        let statusNaTela = []
        // 2. Cria um loop para ler todos os nomes da tabela
        cy.get('tbody tr td:nth-child(5)').each(($celula) => {
            // Extrai o texto, remove espaços em branco (trim) e guarda na lista
            statusNaTela.push($celula.text().trim());
        }).then(() => {
            // 3. O .then() garante que só vamos validar depois de ler todas as linhas
            // Cria uma cópia da lista e pede pro JS ordenar alfabeticamente
            const statusOrdenadosPeloJs = [...statusNaTela].sort();
            // 4. Compara as duas listas!
            // Utiliza o 'deep.equal' para comparar arrays e não textos simples
            expect(statusNaTela).to.deep.equal(statusOrdenadosPeloJs);
        })

    })
    })
    it('Validar botões da coluna Ação', () => {
        // 1. Clica no botão de Editar da primeira linha
        cy.get('[data-testid="edit-1"]').click();
        // 2. Verifica se a mensagem de edição está visível
        cy.get('[data-testid="table-toast"]').should('be.visible');
        // 3. Clica no botão de Excluir da primeira linha
        cy.get('[data-testid="delete-1"]').click();
        // 4. Verifica se a mensagem de exclusão está visível
        cy.get('[data-testid="table-toast"]').should('be.visible');

    })
 })
})
