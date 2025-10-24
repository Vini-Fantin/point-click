## Cuidados & Saúde — Jogo educativo web

Aplicação web educativa estilo point-and-click para identificar itens em cômodos da casa e aprender boas práticas de saúde e cuidados domésticos. Interface simples, responsiva e focada em legibilidade.

### Sumário
- **Stack**
- **Requisitos**
- **Configuração** (ambiente e banco de dados)
- **Como rodar** (dev e produção)
- **Scripts**
- **API** (`/api/leaderboard`)
- **Modelos de dados**
- **Estrutura do projeto**
- **Dúvidas comuns**

## Stack
- **Next.js 15** (App Router) com Turbopack
- **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Prisma** (MySQL) — client gerado em `lib/generated/prisma`
- **SweetAlert2** para diálogos

## Requisitos
- Node.js 18.18+ (recomendado 20 LTS)
- npm 9+
- Banco MySQL acessível (local ou remoto)

## Configuração
1) Crie um arquivo `.env` na raiz com a URL do banco:

```env
DATABASE_URL="mysql://usuario:senha@host:3306/nome_do_banco"
```

2) Opcional (apenas se você alterar o schema em `prisma/schema.prisma`):

```powershell
# Gerar o client do Prisma (saída em lib/generated/prisma)
npx prisma generate

# Aplicar o schema no banco (cria/atualiza tabelas)
npx prisma db push
```

Observação: o client Prisma já está versionado no repositório em `lib/generated/prisma`. Só é necessário rodar `generate` se você mudar o schema.

## Como rodar
### Desenvolvimento
```powershell
npm install
npm run dev
```
Abra `http://localhost:3000/jogar`.

### Produção
```powershell
npm run build
npm start
```
Certifique-se de que `DATABASE_URL` esteja configurada no ambiente de produção.

## Scripts
- `npm run dev`: inicia o servidor de desenvolvimento (Turbopack)
- `npm run build`: build de produção (Turbopack)
- `npm start`: inicia a aplicação compilada

## API — Leaderboard
Endpoint REST para o placar de líderes.

- **GET** `GET /api/leaderboard`
  - Retorna os 10 melhores scores (ordem decrescente)
  - Exemplo de resposta:

```json
{
  "data": [
    { "id": 1, "name": "Alice", "score": 120 },
    { "id": 2, "name": "Bob", "score": 95 }
  ]
}
```

- **POST** `POST /api/leaderboard`
  - Corpo esperado:

```json
{ "nome": "Alice", "score": 120 }
```

  - Regras:
    - Nomes vazios e `"teste"` são ignorados.
    - Se o nome já existir, o score só é atualizado se for maior.
    - A tabela mantém no máximo 10 entradas; a menor pode ser substituída por um score maior.

Implementação: veja `app/api/leaderboard/route.ts`.

## Modelos de dados (Prisma)
Modelos principais no arquivo `prisma/schema.prisma`:
- `rooms` (cômodos)
- `places` (locais dentro do cômodo)
- `items` (itens clicáveis com valor de `score`)
- `leaderboard` (nome e `score`)

Funções server-side auxiliares (Server Actions):
- `app/api/rooms.ts`: `getRooms`, `getRoom`
- `app/api/place.ts`: `getPlaces`
- `app/api/item.ts`: `getItems`, `getItemById`

## Estrutura do projeto
- `app/`: rotas e páginas App Router (`/jogar`, API de leaderboard)
- `components/pages/`: páginas de alto nível do jogo (menu, telas por cômodo, leaderboard)
- `components/ui/`: componentes de UI (HUD, botões, loaders, etc.)
- `lib/prisma.ts`: inicialização do Prisma Client
- `prisma/`: `schema.prisma`
- `public/`: imagens dos cenários e itens

Rota principal do jogo: `app/jogar/page.jsx` (carrega dados com `getRooms` e renderiza `JogarPage`).

## Dúvidas comuns
- **Erro de conexão do Prisma/MySQL**: verifique a variável `DATABASE_URL` no `.env`.
- **Alterei o schema e nada mudou**: rode `npx prisma generate` e `npx prisma db push`.
- **Página inicial**: acesse diretamente `http://localhost:3000/jogar` durante o desenvolvimento.

---

Feito com Next.js + React. Contribuições são bem-vindas!
