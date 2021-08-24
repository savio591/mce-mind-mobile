<a href="https://mindconsulting.com.br/education/"><img src="https://user-images.githubusercontent.com/3879613/125519551-d46b63ee-50c5-4ead-be19-a911043df2a6.png" /></a>

![Next JS](https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?logo=vercel&logoColor=white)
[![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![mce](https://badgen.net/badge/icon/mind%20coding%20experience/red?icon=https://savilexperiments.com.br/assets/mce-icon-12px.svg&label)](https://conteudos.provi.com.br/mind-coding-experience/)

# MCE - Case 2 - Plataforma de agendamento para personal trainers

Segundo case do programa [Mind Coding Experience(MCE)](https://conteudos.provi.com.br/mind-coding-experience/), feito pela [Mind Consulting](https://mindconsulting.com.br/) em parceria com a fintech [Provi](https://provi.com.br), com o intuito de evoluir as habilidades técnicas participando de projetos e recebendo acompanhamento de profissionais do mercado.

## A proposta do case 2: Storytelling

> Será desenvolvido um sistema para agendamentos de horários para personal trainers. A plataforma deve ser composta por um aplicativo e versão web, ambas com especificidades próprias e conter um CRM para controle CRUD dos clientes da plataforma. Os personal trainers podem criar sua conta e disponibilizar seus horários disponíveis, enquanto os alunos podem marcar os agendamentos pelo app.

## Funcionalidades:

### CRUD Usuários:

O crud de usuários se baseia em ser possível realizar o cadastro e edição de dados referentes aos usuários.

Os dados necessários para realizar o cadastro dos usuários são:
* Nome
* Senha
* Email
* Foto
* Telefone
* Nível de acesso

### CRUD Personais:

Os dados necessários para realizar o cadastro dos usuários são:
* Nome
* Senha
* Email
* Foto
* Nível de acesso

### Sistema agendamento:

O sistema de agendamento torna possível que o usuários agendem horários e que os personais verifiquem os horários que foram agendados.

**Para usuários:** O usuários após terem efetuado o login poderão agendar os horários, para isso deverão selecionar o dá e o horário disponível, e enfim confirmar o agendamento. Também haverá uma listagem com todos os horários que ele tem agendado.

**Para os personais:** Os personais poderão verificar os horários que foram agendados, através do dashboard administrativo.

**Status:** Reservado e Agendado É necessário deixar indicado que foi agendado o horário em especifico Os horários de trabalhos dos personais se iniciam as 8 h e finalizam as 20:00h, com uma pausa para o almoço de 1 hora ao 12:00h

### Desenvolvimento dashboard:

O dashboard administrativo poderá ser acessado pelo personais e pelas academias. Esse permitirá a visualização e controle das informações relacionadas aos agendamentos

### Sistema de perfil:

Os usuários poderão editar seus respectivos perfis, através do aplicativo, conseguindo alterar, seu nome, email, senha e foto

### Níveis de acesso:

Os viveis de acesso farão a diferenciação entre os personais e alunos. Sendo que: Os alunos: Conseguirão agendar horários com os personais disponibilizadas no sistema, através do aplicativo Os personais: Poderão verificar Através do dasboard administraitvo e app, os horarários que forces agendados

### Dashboard:

O dashboard permitirá apenas o controle dos agendamentos pelo login dos personais Deve ser constituido de duas abas
* Agendamentos
* Perfil

### APP:

O aplicativo permitirá os agendamentos dos usuários, e a visualização dos agendamentos por parte dos personais.

Todos os usuários cadastrados pelo APP terão nível de acesso de alunos

### Sistema de notificação:

O sistema de notificação será necessário para toda vez que um aluno agendar oro horário, o personal que teve o horário agendado recebe uma notificação, alertando que o horário foi agendado e informações referente ao aluno que agendou.

* Agendamentos
* Perfil

## Links do projeto:

* Protótipo: [Figma](https://www.figma.com/file/9HhQUDxESVIvBC0tJJszt8/Case-MCE?node-id=0%3A1?)

* Front-end web: [Página](https://mce-mind.vercel.app) - [Repositório](https://github.com/savio591/mce-mind-web)

## Requisitos para o desenvolvimento:
* **Node:** v12+

## Como rodar o projeto na máquina local:
Usado com [Expo](https://expo.io), logo, para abrir em ambiente de desenvolvimeno, `yarn start` ou `expo start`. Veja a documentação do expo para detalhes.

**Agradecimentos à PROVI por todo o suporte e motivação e a Mind Consulting pelo programa, a oportunidade dada e especialmente às mentorias! <3**
