# Projeto Santa Dieta

O **Santa Dieta** é um projeto web desenvolvido para apresentar informações nutricionais de alimentos de forma simples, organizada e acessível.

O projeto está sendo desenvolvido inicialmente com **HTML, CSS e JavaScript**, com previsão de evolução para um sistema com backend, banco de dados e área administrativa.

---

## 🎯 Objetivo do projeto

Criar uma plataforma onde o usuário possa consultar informações nutricionais de alimentos.

A ideia principal é permitir que um alimento seja identificado através de um **QR Code ou código de barras**, direcionando o usuário diretamente para sua ficha nutricional.

O projeto também contará futuramente com uma **área administrativa**, permitindo o gerenciamento dos alimentos cadastrados.

---

## 🛠️ Tecnologias

### Atualmente utilizadas

- HTML5
- CSS3
- JavaScript

### Futuramente

- Node.js
- Express
- MongoDB
- API REST
- Sistema de autenticação
- QR Code / Código de barras

---

## 📂 Estrutura do projeto

```text
Santa-Dieta/
│
├── index.html              ← Página inicial pública
├── alimento.html           ← Ficha nutricional
├── login.html              ← Página de login
├── style.css               ← Estilos do projeto
├── script.js               ← JavaScript da aplicação
│
├── admin/
│   ├── index.html          ← Painel administrativo
│   └── admin.js            ← JavaScript da área administrativa
│
└── imagens/
    ├── banana.webp
    ├── maca.webp
    └── ...