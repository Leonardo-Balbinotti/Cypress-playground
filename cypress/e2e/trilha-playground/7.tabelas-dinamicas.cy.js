describe('Teste de tabelas dinamicas', () => {
    beforeEach(() => {
        // Acessa a página do playground antes de cada teste
        cy.acessarPlayground()
    })
    it('Testar o filtro da tabela procurando por nome e email', () => {
        // Implementar o teste de filtro da tabela
        cy.get('[data-testid="table-search"]').type('João Silva')
        //  Pega todas as linhas visíveis do corpo da tabela
        cy.get('tbody tr').each(($linha) => {
            // 3. Garante que dentro dessa linha existe o texto "João"
            cy.wrap($linha).should('contain.text', 'João')
        })
    })

    it('Testar o checkbox selecionando 3 cadastros e depois desmarcando 1 e após isso clicar no checkbox pra selecionar todos', () => {
        // Implementar o teste de checkbox
        cy.get('[data-testid="select-row-1"]').check()
        cy.get('[data-testid="select-row-2"]').check()
        cy.get('[data-testid="select-row-3"]').check()
        cy.get('[data-testid="select-row-2"]').uncheck()
        cy.get('[data-testid="select-all"]').check()
        cy.contains('5 de 5 linha(s) selecionada(s)').should('be.visible')
    })

    it('Testar a coluna de ação editar e excluir', () => {
        // Implementar o teste de ação editar e excluir
        cy.get('[data-testid="edit-1"]').click()
        // Verificar se o modal de edição está visível 
        cy.contains('Editando João Silva').should('be.visible')
        // Clicar no botão Excluir 
        cy.get('[data-testid="delete-1"]').click()
        // Verificar se o modal de confirmação de exclusão está visível 
        cy.get('[data-testid="table-toast"]').should('be.visible')
    })

    it('Testar ordenação das colunas', () => {
        // 1. Clica no título da coluna para acionar a ordenação
        cy.get('th').contains('Name').click()

        // Cria uma lista vazia para guardar os nomes que vamos ler
        let nomesNaTela = []

        // 2. Pega todas as células da coluna Name
        // Pelo seu print anterior, o Checkbox é a coluna 1, então o Name é a coluna 2 (nth-child(2))
        cy.get('tbody tr td:nth-child(2)').each(($celula) => {

            // Extrai o texto, remove espaços em branco (trim) e guarda na lista
            nomesNaTela.push($celula.text().trim())

        }).then(() => {
            // 3. O .then() garante que só vamos validar DEPOIS de ler todas as linhas

            // Cria uma cópia da nossa lista e pede pro JavaScript ordenar alfabeticamente
            const nomesOrdenadosPeloJs = [...nomesNaTela].sort()

            // 4. A prova real: Compara as duas listas!
            // Usamos o 'deep.equal' porque estamos comparando arrays e não textos simples
            expect(nomesNaTela).to.deep.equal(nomesOrdenadosPeloJs)
        })
    })
})





// 1. Testar o filtro da tabela procurando por nome e email
// 2. Testar  o checkbox selecionando 3 cadastros e depois  desmarcando 1 e após isso clicar no checkbox pra selecionar todos
//  3. Testar a coluna de ação editar e excluir
// 4. Testar a ordenação de todas as colunas 