# 💣 Campo Minado (Minesweeper)

Um clone moderno do clássico jogo Campo Minado, construído com React e Material UI. Projeto desenvolvido para portfólio, com foco em lógica de jogo, gerenciamento de estado e UI responsiva.

🔗 **Repositório:** [github.com/httpsGabrielle/campo-minado-reactjs](https://github.com/httpsGabrielle/campo-minado-reactjs)

## ✨ Funcionalidades

- 🎮 Três níveis de dificuldade: **Fácil** (9x9, 10 minas), **Médio** (16x16, 40 minas) e **Difícil** (16x30, 99 minas)
- 🛡️ Primeiro clique sempre seguro — o tabuleiro é gerado garantindo que a célula clicada nunca seja uma mina
- 🌊 Abertura em cascata (flood fill) de células sem minas vizinhas
- 🚩 Marcação de células com bandeira (clique direito)
- 📊 Contador de minas restantes em tempo real
- 🔄 Reinício rápido de partida
- 📱 Layout responsivo, adaptado para diferentes tamanhos de tela

## 🛠️ Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) — gerenciamento de estado do jogo
- [React Router](https://reactrouter.com/)
- [Iconify](https://iconify.design/) — ícones

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/httpsGabrielle/campo-minado-reactjs.git

# Entre na pasta do projeto
cd campo-minado-reactjs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Outros scripts disponíveis

```bash
npm run build     # Gera a build de produção
npm run preview   # Pré-visualiza a build de produção
npm run lint      # Executa o linter (ESLint)
npm run host      # Inicia o servidor de dev exposto na rede local
```

## 🎯 Como jogar

1. Clique com o botão esquerdo para abrir uma célula
2. Clique com o botão direito para marcar/desmarcar uma célula com bandeira 🚩
3. Números indicam quantas minas existem nas células vizinhas
4. O objetivo é abrir todas as células que não contêm minas, sem detonar nenhuma
5. Escolha o nível de dificuldade e reinicie a partida a qualquer momento pelo painel superior

## 📁 Estrutura do projeto

```
src/
├── assets/          # Imagens, logo e background
├── components/      # Componentes de UI (Board, Cell, GameStats)
├── layout/          # Layout base e cabeçalho da aplicação
├── pages/           # Páginas da aplicação
├── routes/          # Configuração de rotas
├── store/           # Estado global do jogo (Zustand)
├── theme/           # Tema customizado do Material UI
└── utils/           # Lógica do jogo (geração do tabuleiro, abertura de células)
```

## 👩‍💻 Autora

Desenvolvido por [Gabrielle Oliveira](https://github.com/httpsGabrielle).
