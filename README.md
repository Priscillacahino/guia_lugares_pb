# Guia de Lugares — João Pessoa, Cabedelo e Conde

Versão mobile e independente, sem vínculo com marca ou hospedagem específica.

## Conteúdo
- 52 lugares importados da planilha-base.
- Filtros por cidade e categoria.
- Busca por nome, perfil, região e descrição.
- Favoritos salvos no próprio aparelho.
- Links para Google Maps e site/Instagram quando disponíveis.
- Interface responsiva para celular.
- PWA: após o primeiro acesso online, o conteúdo principal fica disponível offline.
- `guia_offline.html`: arquivo único que pode ser salvo e aberto diretamente no celular, sem internet.

## Arquivos
- `index.html` — versão principal para publicar online.
- `style.css`, `app.js`, `dados.js` — interface e dados.
- `manifest.webmanifest`, `sw.js`, `icon-*.png` — instalação/offline.
- `guia_offline.html` — versão portátil offline.
- `lugares.csv` — dados exportados para manutenção.

## Publicação em rede social
Perfis sociais normalmente não hospedam arquivos HTML. O fluxo recomendado é publicar esta pasta em um endereço HTTPS (por exemplo, Vercel/GitHub Pages) e colocar esse único link na bio.

