# Guia Vênus — João Pessoa, Cabedelo e Conde

Guia mobile/PWA da **Casa de Praia Vênus**, com indicações gratuitas de praias, gastronomia, passeios e pontos turísticos.

## Identidade
- Perfil: [@venuscasadepraiapb](https://www.instagram.com/venuscasadepraiapb/)
- Mascote: gatinha da Casa de Praia Vênus, exibida discretamente no canto superior do guia.
- A imagem da mascote também é usada nos ícones do PWA.

## Conteúdo
- 52 lugares.
- **52/52** com fonte oficial, site ou rede social cadastrada.
- Filtros por cidade e categoria.
- Busca por nome, perfil, região e descrição.
- Favoritos salvos no próprio aparelho.
- Links para Google Maps e para a fonte/rede social de cada lugar.
- Interface responsiva para celular.
- PWA com cache do conteúdo principal para uso offline após o primeiro acesso.

## Auditoria
Veja [`CHECKLIST_FONTES.md`](CHECKLIST_FONTES.md) para a relação completa de fontes e redes sociais.

## Publicação
O projeto é estático e está preparado para Vercel. Basta enviar os arquivos para a branch `main`; a Vercel conectada ao repositório fará um novo deploy automaticamente.

## Arquivos principais
- `index.html`
- `style.css`
- `app.js`
- `dados.js`
- `manifest.webmanifest`
- `sw.js`
- `venus-gata.jpeg`
- `icon-192.png`
- `icon-512.png`
- `lugares.csv`
- `CHECKLIST_FONTES.md`
