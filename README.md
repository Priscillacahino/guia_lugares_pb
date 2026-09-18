<div align="center">

<img src="./venus-gata.jpeg" alt="Casa de Praia Vênus" width="95">

# 🌴 Guia de Lugares PB

### Casa de Praia Vênus

Um guia gratuito e pensado para celular com sugestões de lugares para conhecer em **João Pessoa, Cabedelo e Conde — Paraíba**.

Praias, gastronomia, bares, passeios, pontos turísticos e experiências locais reunidos em um único lugar.

[🌐 Acessar o Guia](https://guia-lugares-pb.vercel.app) •
[📷 Instagram Casa de Praia Vênus](https://www.instagram.com/venuscasadepraiapb/)

</div>

---

## 💡 Sobre o projeto

O **Guia de Lugares PB** surgiu da ideia de reunir, de forma simples e prática, lugares que podem ajudar moradores, turistas e visitantes a descobrir diferentes experiências na região de João Pessoa e no litoral paraibano.

A proposta inicial nasceu como uma planilha de indicações pessoais. Com a evolução do projeto, o conteúdo foi transformado em uma aplicação web responsiva, priorizando principalmente o uso pelo celular.

Hoje o guia funciona como uma **PWA (Progressive Web App)**, podendo ser acessado pelo navegador e adicionado à tela inicial do celular.

O projeto passou a integrar a identidade da **Casa de Praia Vênus**, como um conteúdo gratuito disponibilizado para hóspedes, seguidores e visitantes.

---

## 📍 Regiões disponíveis

Atualmente o guia contempla:

- **João Pessoa**
- **Cabedelo**
- **Conde**

São **52 lugares cadastrados**, distribuídos entre praias, restaurantes, bares, passeios, pontos turísticos, cultura e experiências locais.

---

## ✨ Funcionalidades

O guia possui:

- 🔎 Busca por nome, local, categoria ou característica
- 📍 Filtro por cidade
- 🗂️ Filtro por categoria
- ⭐ Sistema de favoritos salvo no próprio dispositivo
- 📱 Interface responsiva e otimizada para celular
- 🗺️ Acesso direto à localização pelo Google Maps
- 📷 Links para Instagram, site ou fonte oficial
- 📲 Possibilidade de instalação na tela inicial do celular
- 📴 Consulta ao conteúdo principal mesmo sem conexão após o primeiro carregamento
- 🔄 Atualização automática pela versão publicada na Vercel

> Os serviços externos, como Google Maps, Instagram e sites de terceiros, necessitam de conexão com a internet.

---

## ✅ Fontes e validação

Todos os lugares cadastrados possuem pelo menos uma referência associada, priorizando:

1. sites oficiais de turismo;
2. páginas de prefeituras e órgãos públicos;
3. sites oficiais dos estabelecimentos;
4. perfis oficiais em redes sociais.

O arquivo [`CHECKLIST_FONTES.md`](./CHECKLIST_FONTES.md) mantém o acompanhamento das fontes utilizadas no projeto.

As informações podem sofrer alterações ao longo do tempo. Horários, funcionamento, preços, eventos, condições de acesso e disponibilidade devem sempre ser confirmados diretamente com o estabelecimento ou canal oficial.

---

## 📱 Experiência Mobile First

O projeto foi desenvolvido priorizando a navegação pelo celular.

Em vez de exigir a instalação de um aplicativo tradicional, o usuário pode acessar:

### 🌐 https://guia-lugares-pb.vercel.app

Em navegadores compatíveis, o guia também pode ser adicionado à tela inicial e utilizado com aparência semelhante à de um aplicativo.

---

## 📴 Funcionamento offline

O projeto utiliza **Service Worker** para armazenar os principais arquivos da aplicação no dispositivo.

Após o primeiro acesso com internet, elementos como:

- interface;
- lista de lugares;
- descrições;
- filtros;
- busca;
- favoritos;

podem continuar disponíveis mesmo quando o aparelho estiver temporariamente sem conexão.

Links externos continuam dependendo de internet.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Interface responsiva e identidade visual |
| JavaScript | Busca, filtros, favoritos e interação |
| LocalStorage | Armazenamento dos favoritos |
| Web App Manifest | Configuração da PWA |
| Service Worker | Cache e funcionamento offline |
| Git / GitHub | Versionamento do projeto |
| Vercel | Hospedagem e publicação contínua |

---

## 📂 Estrutura do projeto

```text
guia_lugares_pb/
│
├── index.html
├── style.css
├── app.js
├── dados.js
├── manifest.webmanifest
├── sw.js
│
├── icon-192.png
├── icon-512.png
├── venus-gata.jpeg
│
├── lugares.csv
├── guia_offline.html
│
├── CHECKLIST_FONTES.md
└── README.md
