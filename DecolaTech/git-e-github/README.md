# Comandos básicos do git

## Comandos iniciais
 - git init
   * Iniciar repositório na pasta

 - git branch -M "main"
   * Mudança da branch principal "master" para "main"

 - git status
 
 - git add <"files names">
   * Manda os arquivos para stading (pré commit)
   * "files names" pode incluir pastas, arquivos, * (todas as alterações) e outros
 
 - git commit -m <"mensage">
   * O objeto commit engloba os arquivos em stading
   * Ocorre no repositório local

### Envio dos commits para o repositório remoto
 - git remote add origin https://github.com/user/repository.git
   * git remote (conexão com o GitHub) 
   * add (stading) 
   * origin (alias do repositório) https://github.com/user/repository.git
 
 - git remote -v
   * Listagem de repositórios remotos cadastrados

 - git push -u origin main
   * git push (mandar para o GitHub)
   * -u origin (alias do repositório) 
   * main (branch)
   
   * Caso ocorra algum erro, resetar o link:
     * git remote set-url origin https://github.com/user/repository.git
     * git push -u origin main

## Para realizar outros commits
 - git add <"files names">
   * Mandar arquivos alterados para o stading

 - git commit -m <"mensage">

 - git push origin main
   * Não precisa do remote
   * Não precisa do -u
   * Requisição do username e do token

## Funcionamento do Branch
 - git checkout -b <"newBranchName">
   * Criação de nova branch e mudança para a branch "newBranchName"

### Switch entre branches
 - git checkout main
 - git checkout newBranchName

## Funcionamento do Merge
Tem a função de unir branches
 - git merge newBranch
   * main + newBranch

## Git Clone
 - git clone https://github.com/user/repository.git
   * Clonar repositório via HTTPS (pode acontecer via SSH ou usar o token na senha do HTTPS)
   * Ocorrendo alterações no código fonte, os arquivos remotos precisarão ser atualizados

 - git pull
   * Atualização do repositório local com as alterações do repostório remoto

## Pull Request
Quando alterações de terceiros são realizados, você manda um request e a pessoa escolhe se quer ou não fazer o pull.
