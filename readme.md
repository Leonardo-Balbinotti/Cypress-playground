# Cypress Automation - QA Playground

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Linux Mint](https://img.shields.io/badge/Linux_Mint-87C53F?style=for-the-badge&logo=linux-mint&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Este repositório foi estruturado com o objetivo de registrar o passo a passo completo para a configuração de um ambiente de automação de testes E2E utilizando **Cypress** do zero, com foco em ambientes Linux. 

Ele serve como um portfólio prático de automação e também como um **Guia Rápido (Cheat Sheet)** para futuras consultas e *onboardings* em novos desafios profissionais, garantindo eficiência e padronização no setup inicial de qualquer projeto.

---

## Alvo das Automações

Os cenários de testes e scripts desenvolvidos neste projeto utilizam como base os desafios práticos do [QA Playground](https://playground-for-qa.vercel.app/playground), cobrindo validações de elementos web complexos, tais como:
* Formulários dinâmicos e validações de input.
* Interação com botões e iframes.
* Manipulação de tabelas e extração de dados.
* Fluxos dinâmicos e Shadow DOM.

---

## Stack Tecnológica & Ambiente

* **Sistema Operacional:** Linux  (Base Debian/Ubuntu)
* **Ambiente de Execução:** Node.js (v20+ LTS)
* **Gerenciador de Pacotes:** NPM / NVM (Node Version Manager)
* **Framework de Testes:** Cypress v13+
* **Geração de Dados:** Faker.js
* **IDE Recomendada:** Visual Studio Code (VS Code)

> **Dica:** Ao clonar este repositório em uma nova máquina, você não precisará reinstalar tudo manualmente. Caso já possua o Node.js configurado, basta rodar `npm install` na raiz do projeto para baixar todas as dependências automaticamente!

---

## Guia de Instalação e Configuração (Do Zero)

Siga as etapas abaixo no terminal (`Ctrl + Alt + T`) para preparar o ambiente local.

### 1. Configurando o Node.js via NVM
Para evitar conflitos de versões de pacotes globais e bugs de compatibilidade, a prática recomendada no ecossistema Linux é utilizar o NVM.

```bash
# 1. Remover versões legadas do Node/NPM do sistema
sudo apt remove nodejs npm -y
sudo apt autoremove -y
```
```bash
# 2. Baixar e instalar o script oficial do NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
```bash
# 3. Atualizar e recarregar as configurações do terminal
source ~/.bashrc
```
```bash
# 4. Instalar a versão estável e compatível do Node.js (LTS v20)
nvm install 20
```
```bash
# 5. Validar a instalação
node -v
npm -v
```

### 2. Inicializando o Projeto
Crie a pasta dedicada para o projeto e inicialize o gerenciador de pacotes:

```bash
mkdir estudos-cypress-playground
cd estudos-cypress-playground
```
# Inicializar o package.json com configurações padrão
```bash
npm init -y
```

### 3. Instalação do Cypress e Dependências
Adicione o Cypress e o Faker.js como dependências de desenvolvimento (devDependencies), mantendo o ambiente isolado:

```bash
# Instalar o Cypress
npm install cypress --save-dev
```

### Instalar o Faker.js para geração de dados aleatórios (Massa de Teste)
```bash
npm install @faker-js/faker --save-dev
```

### Instalar o Drag and Drop Para automatizar cenários de clicar e arrastar (como movimentação de cartões em quadros Kanban)
```bash
npm install --save-dev @4tw/cypress-drag-drop
```
Após instalar o Drag-drop habilite o plugin importando-o no arquivo de suporte do Cypress (cypress/support/e2e.js):
```bash
// Adicione esta linha no arquivo e2e.js
require('@4tw/cypress-drag-drop')
```

Após a instalação, abra o Cypress pela primeira vez para gerar a estrutura de pastas:

```bash
npx cypress open
```
Na interface gráfica: Selecione E2E Testing > Aceite a criação dos arquivos de configuração > Escolha o navegador (Chrome/Electron) > Crie sua primeira spec.

### Comandos Úteis e Scripts (NPM Scripts)
Para facilitar a execução diária, os comandos abaixo foram mapeados no package.json.
(Dica no VS Code: Utilize a aba "NPM Scripts" no menu lateral para rodar com um clique).

```bash
json
"scripts": {
  "cy:open": "cypress open", 
  "cy:run": "cypress run"
}
```

npm run cy:open (Modo Interativo): Abre a interface gráfica. Ideal para desenvolvimento e depuração (debug) visual em tempo real.

npm run cy:run (Modo Headless): Executa os testes em segundo plano (terminal). Essencial para pipelines de CI/CD (GitHub Actions, Jenkins), gerando relatórios de forma rápida.

### Extensões VS Code e Navegador

Para garantir produtividade na escrita dos testes, mantenha as seguintes extensões instaladas (vscode e navegador):

* Cypress Snippets (Cliff Su): Autocomplete rápido para comandos do Cypress.

* Recorder Extensão do Google chrome para mapear um cenário de teste, mapeando cada clique e ação realizada enquanto está ativo.

* CSS Selector Helper: Auxilia na identificação, teste e cópia de seletores complexos.

* Continue: Widget de IA integrado à IDE.

### Setup do Assistente de IA Local (Ollama)
Utilizado o modelo local qwen2.5-coder:1.5b-base integrado ao Continue para suporte na escrita de código sem dependência de internet.

```bash
# Rodar o Modelo (Carregar a IA)
ollama run qwen2.5-coder:1.5b-base
```
```bash
# Verificar se o serviço está rodando em segundo plano
systemctl status ollama
```

### Integração Contínua (CI/CD) com GitHub Actions
A infraestrutura deste repositório foi projetada para garantir a validação constante da qualidade do código.

Gatilhos de Execução: Os testes rodam automaticamente em cada Pull Request direcionado à branch main e através de Nightly Builds (agendados de segunda a sexta-feira).

Segurança (Branch Protection): Regras configuradas na main exigem a aprovação da pipeline do Cypress (status checks) antes de permitir o merge do código.

Gestão de Evidências: Geração de Artifacts ao fim das execuções, salvando automaticamente vídeos e screenshots de testes falhos no servidor do GitHub.

Notificações: Integração via Webhook com o Discord para alertas em tempo real sobre o status das execuções.

### Fluxo de Trabalho Git
Siga este roteiro para garantir um versionamento limpo e seguro ao criar novos testes:

1. Preparar uma nova bateria de testes (Garantir que a base está atualizada):

```Bash
git checkout main
git pull
```
2. Criar o desvio (Nova branch para a funcionalidade):

```Bash
git checkout -b feature/nome-da-sua-branch
```
3. Salvar as alterações feitas no código (Commit):

```Bash
git add .
git commit -m "chore: descrição clara do que foi automatizado"
```
4. Enviar para o GitHub pela primeira vez:

```Bash
git push -u origin feature/nome-da-sua-branch
```
Neste momento, abra o Pull Request no GitHub, aguarde a pipeline do Cypress passar e, se tudo estiver verde, clique em Merge.

5. Limpeza local (Pós-Merge):

```Bash
git checkout main
git pull
git branch -d feature/nome-da-sua-branch
git fetch -p
```