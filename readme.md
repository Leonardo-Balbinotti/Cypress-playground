# 🧪 Cypress Automation Studio - QA Playground

Este repositório foi estruturado com o objetivo de registrar o passo a passo completo para a configuração de um ambiente de automação de testes utilizando **Cypress** do zero em sistemas Linux (focado no Linux Mint). 

Ele serve como um excelente portfólio para o GitHub e também como um guia rápido (cheat sheet) para futuras consultas ou onboarding em novos desafios profissionais, garantindo eficiência e padronização no setup inicial.

---

## 🎯 Alvo das Automações
Os cenários de testes e scripts desenvolvidos neste projeto utilizam como base os desafios práticos do [QA Playground](https://playground-for-qa.vercel.app/playground), cobrindo validações de elementos web como formulários, botões, tabelas e fluxos dinâmicos.

---

## 🚀 Guia de Instalação e Configuração (Do Zero)

Siga as etapas abaixo no terminal (`Ctrl + Alt + T`) para preparar o ambiente local e inicializar o projeto com as melhores práticas de mercado.

### 1. ⚙️ Pré-requisitos: Configurando o Node.js via NVM
Para evitar conflitos de versões de pacotes globais e bugs de compatibilidade com o Cypress moderno, a prática recomendada no ecossistema Linux é utilizar o **NVM (Node Version Manager)** para gerenciar o Node.js.

```bash
# 1. Remover versões legadas do Node/NPM do sistema (evita conflitos)
sudo apt remove nodejs npm -y
sudo apt autoremove -y

# 2. Baixar e instalar o script oficial do NVM
curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh) | bash

# 3. Atualizar e recarregar as configurações do terminal
source ~/.bashrc

# 4. Instalar a versão estável e compatível do Node.js (LTS v20 ou superior)
nvm install 20

# 5. Validar se a instalação foi bem-sucedida
node -v
npm -v

2. 📂 Inicializando a Estrutura do Projeto
Crie uma pasta dedicada para o projeto, abra-a no seu editor de código (como o VS Code) e inicialize o gerenciador de pacotes local:

# Criar a pasta do repositório
mkdir estudos-cypress-playground
cd estudos-cypress-playground

# Inicializar o arquivo package.json com as configurações padrão
npm init -y

3. 📦 Instalação do Cypress
Adicione o framework Cypress como uma dependência de desenvolvimento (devDependencies) para que ele fique isolado e mapeado no escopo do seu projeto:

npm install cypress --save-dev

Na interface gráfica aberta:

Selecione a opção E2E Testing.

Aceite a criação automática dos arquivos de configuração padrão (cypress.config.js, etc).

Escolha o navegador de sua preferência (ex: Chrome ou Electron) e clique em Start E2E Testing.

Crie seu primeiro arquivo de especificações (ex: home.cy.js) ou explore os exemplos padrão.

💻 Comandos Úteis de Execução
Após estruturar seus arquivos de testes dentro da pasta cypress/e2e/, utilize os seguintes comandos conforme a necessidade:

Modo Interativo (Interface Gráfica / Modo Assistido)
Ideal para o desenvolvimento e depuração (debug) dos testes em tempo real:

npx cypress open

Modo Headless (Linha de Comando / CI/CD)
Ideal para execuções rápidas em planos de fundo, gerando relatórios diretamente no terminal (essencial para pipelines como Jenkins ou GitHub Actions):

npx cypress run


🛠️ Stack Tecnológica Utilizada
Sistema Operacional: Linux Mint (Base Debian/Ubuntu)

Ambiente de Execução: Node.js v20+

Gerenciador de Pacotes: NPM / NVM

Framework de Testes: Cypress v13+

IDE Recomendada: Visual Studio Code

Ao clonar este repositório em uma nova máquina ou nova empresa, você não precisará reinstalar tudo manualmente. Caso já possua o Node.js v20+, basta rodar npm install na raiz do projeto para que o NPM configure todas as dependências automaticamente!