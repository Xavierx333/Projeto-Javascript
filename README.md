# ✈️ ExploreMundo - Agência de Viagens

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge" alt="Status Concluído">
  <img src="https://img.shields.io/badge/Tecnologias-3-blue?style=for-the-badge" alt="Tecnologias">
</p>

O **ExploreMundo** é uma landing page moderna e responsiva para uma agência de viagens fictícia. O projeto conta com uma vitrine de pacotes turísticos em destaque e um **Simulador de Orçamento Interativo** que calcula em tempo real o valor estimado da viagem com base no destino e na quantidade de viajantes selecionados.

---

## 🚀 Funcionalidades

- **Design Responsivo:** Layout adaptável para dispositivos móveis, tablets e computadores.
- **Seção Hero:** Banner principal dinâmico com imagem de fundo otimizada via CSS.
- **Vitrine de Destinos:** Grid estruturado exibindo os pacotes mais populares (Paris, Maldivas e Rio de Janeiro).
- **Simulador Interativo (JavaScript):**
  - Seleção dinâmica de destinos com diferentes valores base.
  - Validação de entrada para impedir números negativos ou inválidos de viajantes.
  - Cálculo automático ao clicar no botão.
  - Exibição do resultado formatado automaticamente no padrão de moeda brasileira (`R$ - pt-BR`).

---

## 🛠️ Tecnologias Utilizadas

Para a construção deste projeto, foram utilizadas as tecnologias fundamentais do desenvolvimento Web (Vanilla Web Stack):

- 🌐 **HTML5:** Estruturação semântica de todas as seções (header, section, footer, formulários).
- 🎨 **CSS3:** Estilização moderna utilizando CSS Grid, Flexbox, efeitos de transição (`transition: transform`) e posicionamento fixo (`position: sticky`).
- ⚡ **JavaScript (ES6):** Manipulação da árvore de elementos (DOM), escuta de eventos (`addEventListener`) e lógica de cálculo matemático/validação.

---

## 📁 Estrutura de Arquivos

A arquitetura do projeto foi organizada de maneira limpa e direta:

```text
site-viagens/
│
├── index.html     # Estruturação e conteúdo do site
├── style.css      # Identidade visual, cores e layout responsivo
└── script.js      # Lógica de programação e interatividade do simulador
