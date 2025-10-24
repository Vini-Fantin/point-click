Cuidados & Saúde — jogo educativo

Resumo
------
Este repositório contém um protótipo de jogo educativo point-and-click para aprender boas práticas de cuidado e saúde dentro de casa. O jogador seleciona itens em cômodos (sala, banheiro, cozinha), acumula pontos e aparece em um ranking.

Estrutura relevante
- `front-end/`: aplicação Next.js + React do jogo.
- `back/`: API e backend em Laravel (endpoints para leaderboard, items, places).

Como rodar (front-end)
----------------------
No diretório `front-end`:

```powershell
npm install
npm run dev
```

Abra http://localhost:3000/jogar

Notas
-----
O UI está em português e prioriza acessibilidade e legibilidade para públicos mais velhos. Ajustes adicionais de contraste e tamanhos de fonte são recomendados conforme testes com usuários.
