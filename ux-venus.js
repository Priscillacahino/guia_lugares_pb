
(() => {
  'use strict';

  let language = localStorage.getItem('guia-venus-lang') || 'pt';

  const ES_DESC = {"1":"Conjunto histórico para caminar y conocer la arquitectura colonial.","2":"Monumento histórico en Ladeira São Francisco.","3":"Galería histórica con vista al río Sanhauá y al atardecer.","4":"Complejo barroco del Centro Histórico.","5":"Una de las iglesias históricas más antiguas de la capital.","6":"Conjunto histórico en el centro de la ciudad.","7":"Comida y cerveza, con samba, jazz y pagode en vivo, en una casona antigua de estilo rústico y vista panorámica.","8":"Restaurante de cocina regional, con ambiente acogedor y música en vivo por la noche.","9":"Bar, galería de tiendas, cafetería y eventos, con vista panorámica al atardecer.","10":"Bar y restaurante con ambiente relajado y opciones de gastronomía y cócteles.","11":"Bar y espacio cultural con tiendas, cafetería, música y eventos.","12":"Proyecto cultural gratuito con presentaciones musicales los sábados en Praça Rio Branco.","13":"Paseo marítimo animado, con comercio, bares, restaurantes y acceso a excursiones marítimas.","14":"Paseo marítimo extenso, restaurantes y acceso al área del Farol do Cabo Branco.","15":"Tramo de mar más tranquilo, con bares y restaurantes en la zona.","16":"Buena combinación de paseo marítimo, hoteles, comercio y gastronomía.","17":"Área del extremo oriental de las Américas y punto de salida hacia piscinas naturales.","18":"Paseo marítimo sujeto a las condiciones del mar y de la marea.","19":"Centro cultural y científico cerca del litoral de Cabo Branco.","20":"Espacio con restaurante, piscina, mirador y tiendas de recuerdos regionales.","21":"Lugar emblemático cerca de la barrera de Cabo Branco.","22":"Restaurante/bar conocido en el paseo marítimo de Cabo Branco.","23":"Restaurante de pescados y mariscos en la zona de Manaíra.","24":"Restaurante de cocina regional paraibana en Manaíra.","25":"Bar en una azotea de Altiplano, con vista panorámica.","26":"Bar y cafetería en la zona de Tambaú, orientado a la noche y a los cócteles.","27":"Pub en la zona de Manaíra.","28":"Calle gastronómica con bares, restaurantes, pizzerías, hamburgueserías, panaderías, cafeterías y pastelerías.","29":"Quiosco frente al mar con pescados y mariscos, aperitivos, bebidas y música en vivo.","30":"Espacio gastronómico frente al mar con food trucks y diferentes opciones de comida.","31":"Forró do Turista se realiza los lunes, con forró pé de serra y espacio para bailar.","32":"Una de las principales atracciones del litoral sur; cuenta con un área oficial de naturismo.","33":"Playa de aguas claras, cocoteros y acantilados, con infraestructura gastronómica.","34":"Playa del litoral sur con acantilados y miradores naturales.","35":"Tramo del litoral sur con acantilados y piscinas naturales según la marea.","36":"Principal zona balnearia de Conde, con comercio, bares y restaurantes.","37":"Playa conocida por una formación rocosa asociada a la forma de un arco/corazón.","38":"Área de acantilados de colores con vistas al litoral.","39":"Restaurante en el área de Praia de Coqueirinho.","40":"Restaurante italiano en Jacumã.","41":"Descripción no informada en la fuente.","42":"Hamburguesas artesanales, pizzas y esfihas.","43":"Pizzas artesanales hechas en horno de leña.","44":"Playa urbana conocida por sus olas, bares y restaurantes.","45":"Tramo de litoral con restaurantes e infraestructura de playa.","46":"Una de las playas más buscadas de Cabedelo, con aguas generalmente tranquilas.","47":"Tramo tradicional del litoral de Cabedelo.","48":"Playa del litoral de Cabedelo, cerca de la zona central.","49":"Isla/banco de arena accesible mediante paseos en barco según la marea y las condiciones locales.","50":"Lugar tradicional para ver el atardecer a orillas del río Paraíba.","51":"Restaurante frente al mar en Camboinha.","52":"Restaurante de cocina japonesa en la zona de Intermares.","53":"Restaurante especializado en pescados y mariscos, ubicado en Conde.","54":"Acarajé y cocina bahiana en João Pessoa.","55":"Gastrobar de inspiración cubana en Tambaú, con gastronomía, cócteles y ambiente temático."};
  const ES_PROFILE = {"Centro histórico":"Centro histórico","História/cultura":"Historia/cultura","História/pôr do sol":"Historia/atardecer","História/arte":"Historia/arte","História/religião":"Historia/religión","História/arquitetura":"Historia/arquitectura","Vida Diurna e noturna":"Vida diurna y nocturna","Comida regional":"Comida regional","Vida noturna":"Vida nocturna","Vida Diurna":"Vida diurna","Praia urbana":"Playa urbana","Natureza":"Naturaleza","Piscinas naturais":"Piscinas naturales","Cultura/arquitetura":"Cultura/arquitectura","Mirante/paisagem":"Mirador/paisaje","Gastronomia":"Gastronomía","Frutos do mar":"Pescados y mariscos","Drinks/vista":"Cócteles/vista","Falésias/naturismo":"Acantilados/naturismo","Falésias/praia":"Acantilados/playa","Falésias/paisagem":"Acantilados/paisaje","Piscinas naturais/praia":"Piscinas naturales/playa","Paisagem":"Paisaje","Frutos do mar/praia":"Pescados y mariscos/playa","Italiana":"Italiana","Comida/vida noturna":"Comida/vida nocturna","Comida":"Comida","Surf/praia":"Surf/playa","Praia/estrutura":"Playa/infraestructura","Praia/piscinas":"Playa/piscinas","Praia/relaxamento":"Playa/relajación","Banco de areia/piscinas":"Banco de arena/piscinas","Pôr do sol":"Atardecer","Sushi":"Sushi","Peixes e frutos do mar":"Pescados y mariscos","Comida baiana / acarajé":"Comida bahiana / acarajé","Culinária cubana / drinks":"Cocina cubana / cócteles"};

  const tr=(pt,es)=>language==='es'?es:pt;

  const PT_DESC_FIX={
    7:'Comida e cervejas, com samba, jazz e pagode ao vivo, em casarão antigo com estilo rústico e vista panorâmica.',
    31:'Forró do Turista realizado às segundas-feiras, com forró pé de serra e espaço para dançar.',
    41:'Descrição não informada na fonte.',
    43:'Pizzas artesanais no forno a lenha.'
  };

  const PT_NAME_FIX={10:'Loca Como Tu Madre – Centro'};

  function placeName(p){return PT_NAME_FIX[p.id]||p.lugar;}
  function placeDescPt(p){return PT_DESC_FIX[p.id]??(p.descricao||'Descrição não informada na fonte.');}
  function placeDesc(p){return language==='es'?(ES_DESC[p.id]||placeDescPt(p)):placeDescPt(p);}
  function profileLabel(p){return language==='es'?(ES_PROFILE[p.perfil]||p.perfil):String(p.perfil||'').replace('Vida Diurna','Vida diurna');}

  function categoryLabel(cat){
    const c=String(cat||'').replace(/\s*\/\s*/g,'/').trim();
    if(language!=='es')return c;
    const map={
      'Ponto turístico':'Punto turístico','Bar/Restaurante':'Bar/Restaurante','Restaurante':'Restaurante',
      'Bar':'Bar','Evento aos sábados':'Evento de los sábados','Praia':'Playa','Passeio':'Paseo'
    };
    return map[c]||c;
  }

  function regionLabel(region){
    if(language!=='es')return region;
    if(region==='Centro da cidade')return 'Centro de la ciudad';
    if(region==='Zona litorânea')return 'Zona costera';
    return region;
  }

  function typeLinkLabel(tipo){
    const t=String(tipo||'');
    if(language!=='es') return t;
    return t
      .replace('Prefeitura de João Pessoa / Funjope','Ayuntamiento de João Pessoa / Funjope')
      .replace('Prefeitura de João Pessoa','Ayuntamiento de João Pessoa')
      .replace('Prefeitura de Conde','Ayuntamiento de Conde')
      .replace('Prefeitura de Cabedelo','Ayuntamiento de Cabedelo')
      .replace('Operador/site','Operador/sitio')
      .replace('Instagram/site','Instagram/sitio')
      .replace('Turismo oficial','Turismo oficial');
  }

  function sourceLabel(url,tipo){
    if(!url)return tr('Sem link','Sin enlace');
    if(url.includes('instagram.com'))return 'Instagram';
    if((tipo||'').toLowerCase().includes('turismo'))return tr('Fonte oficial','Fuente oficial');
    if((tipo||'').toLowerCase().includes('prefeitura'))return tr('Prefeitura','Ayuntamiento');
    return tr('Site / fonte','Sitio / fuente');
  }

  function installGuideControls(){
    document.body.id='inicio';
    document.querySelector('.filters')?.setAttribute('id','buscar');
    document.querySelector('.footer')?.setAttribute('id','aviso');

    const hero=document.querySelector('.hero-inner');
    if(hero&&!document.querySelector('#guideUxControls')){
      const bar=document.createElement('div');
      bar.id='guideUxControls';
      bar.className='guide-ux-controls';
      bar.innerHTML=`
        <strong class="guide-ux-title">Guia Vênus</strong>
        <div class="guide-ux-actions">
          <div class="guide-language" role="group" aria-label="Seleção de idioma">
            <button id="guideLangPt" class="guide-lang" type="button" title="Português" aria-label="Português">🇧🇷</button>
            <button id="guideLangEs" class="guide-lang" type="button" title="Español" aria-label="Español">🇪🇸</button>
          </div>
          <button id="guideMenuButton" class="guide-menu-button" type="button" aria-controls="guideNav" aria-expanded="false" aria-label="Abrir menu">☰</button>
        </div>`;
      hero.prepend(bar);

      const nav=document.createElement('nav');
      nav.id='guideNav';
      nav.className='guide-nav';
      nav.setAttribute('aria-label','Navegação principal');
      nav.innerHTML=`
        <a href="#inicio" data-pt="Início" data-es="Inicio">Início</a>
        <a href="#buscar" data-pt="Buscar" data-es="Buscar">Buscar</a>
        <a href="#cards" data-pt="Lugares" data-es="Lugares">Lugares</a>
        <a href="#aviso" data-pt="Aviso" data-es="Aviso">Aviso</a>`;
      bar.insertAdjacentElement('afterend',nav);
    }

    if(!document.querySelector('#guideBackTop')){
      const back=document.createElement('button');
      back.id='guideBackTop';
      back.className='guide-back-top';
      back.type='button';
      back.textContent='↑';
      back.setAttribute('aria-label','Voltar ao topo');
      document.body.appendChild(back);
    }

    bindGuideControls();
    applyGuideLanguage();
  }

  function bindGuideControls(){
    document.querySelector('#guideLangPt')?.addEventListener('click',()=>setGuideLanguage('pt'));
    document.querySelector('#guideLangEs')?.addEventListener('click',()=>setGuideLanguage('es'));

    document.querySelector('#guideMenuButton')?.addEventListener('click',()=>{
      const nav=document.querySelector('#guideNav'),btn=document.querySelector('#guideMenuButton');
      if(!nav||!btn)return;
      const open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',String(open));
      btn.textContent=open?'×':'☰';
      btn.setAttribute('aria-label',open?tr('Fechar menu','Cerrar menú'):tr('Abrir menu','Abrir menú'));
    });

    document.querySelectorAll('#guideNav a').forEach(a=>a.addEventListener('click',closeGuideMenu));
    document.querySelector('#guideBackTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
    window.addEventListener('scroll',()=>{
      document.querySelector('#guideBackTop')?.classList.toggle('show',window.scrollY>550);
    },{passive:true});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeGuideMenu();});
  }

  function closeGuideMenu(){
    document.querySelector('#guideNav')?.classList.remove('open');
    const btn=document.querySelector('#guideMenuButton');
    if(btn){btn.textContent='☰';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label',tr('Abrir menu','Abrir menú'));}
  }

  function setupFiltersUx(){
    const cities=['Todas',...uniq(PLACES.map(p=>p.cidade))];
    const categories=['Todas',...uniq(PLACES.map(p=>p.categoria.replace(/\s*\/\s*/g,'/').trim()))];
    const city=el('cidade'),cat=el('categoria');
    if(city){
      city.innerHTML=cities.map(x=>`<option value="${attr(x)}">${x==='Todas'?tr('Todas','Todas'):escapeHtml(x)}</option>`).join('');
      city.value=state.cidade;
    }
    if(cat){
      cat.innerHTML=categories.map(x=>`<option value="${attr(x)}">${x==='Todas'?tr('Todas','Todas'):escapeHtml(categoryLabel(x))}</option>`).join('');
      cat.value=state.categoria;
    }
  }

  function cardUx(p){
    const fav=favs.has(p.id);
    const siteOk=!!p.site;
    return `<article class="card" data-id="${p.id}">
      <div class="card-head">
        <div>
          <div class="badges">
            <span class="badge">${escapeHtml(p.cidade)}</span>
            <span class="badge sand">${escapeHtml(categoryLabel(p.categoria))}</span>
          </div>
          <h2>${escapeHtml(placeName(p))}</h2>
          <p class="profile">${escapeHtml(profileLabel(p)||regionLabel(p.regiao))}</p>
        </div>
        <button class="fav ${fav?'on':''}" aria-label="${fav?tr('Remover dos favoritos','Quitar de favoritos'):tr('Adicionar aos favoritos','Añadir a favoritos')}" aria-pressed="${fav}" onclick="toggleFav(${p.id},event)">${fav?'★':'☆'}</button>
      </div>
      <div class="details" id="details-${p.id}">
        <p class="desc">${escapeHtml(placeDesc(p))}</p>
        <p class="meta">📍 ${escapeHtml(regionLabel(p.regiao))}</p>
        ${p.tipoLink?`<p class="meta">${tr('Fonte/canal','Fuente/canal')}: ${escapeHtml(typeLinkLabel(p.tipoLink))}</p>`:''}
        <div class="buttons">
          ${p.maps?`<a class="btn primary" href="${attr(p.maps)}" target="_blank" rel="noopener">📍 Maps</a>`:`<span class="btn disabled">📍 Maps</span>`}
          ${siteOk?`<a class="btn" href="${attr(p.site)}" target="_blank" rel="noopener">↗ ${escapeHtml(sourceLabel(p.site,p.tipoLink))}</a>`:`<span class="btn disabled">↗ ${tr('Sem link','Sin enlace')}</span>`}
        </div>
      </div>
      <button class="toggle" type="button" aria-expanded="false" aria-controls="details-${p.id}" onclick="toggleCard(${p.id})"><span>${tr('Ver detalhes','Ver detalles')}</span><span aria-hidden="true">⌄</span></button>
    </article>`;
  }

  function renderUx(){
    const items=PLACES.filter(matchPlace);
    el('count').textContent=`${items.length} ${items.length===1?tr('lugar encontrado','lugar encontrado'):tr('lugares encontrados','lugares encontrados')}`;
    el('cards').innerHTML=items.length?items.map(cardUx).join(''):`<div class="empty">${tr('Nenhum lugar encontrado com esses filtros.','No se encontró ningún lugar con esos filtros.')}</div>`;
    el('favFilter').classList.toggle('active',state.favoritos);
    el('favFilter').setAttribute('aria-pressed',String(state.favoritos));
  }

  function toggleCardUx(id){
    const c=document.querySelector(`.card[data-id="${id}"]`);if(!c)return;
    c.classList.toggle('open');
    const toggle=c.querySelector('.toggle'),open=c.classList.contains('open');
    toggle?.setAttribute('aria-expanded',String(open));
    const spans=toggle?.querySelectorAll('span');
    if(spans?.[0])spans[0].textContent=open?tr('Ocultar detalhes','Ocultar detalles'):tr('Ver detalhes','Ver detalles');
    if(spans?.[1])spans[1].textContent=open?'⌃':'⌄';
  }

  function applyGuideLanguage(){
    document.documentElement.lang=language==='es'?'es':'pt-BR';
    document.title=language==='es'?'Guía Vênus — João Pessoa, Cabedelo y Conde':'Guia Vênus — João Pessoa, Cabedelo e Conde';

    document.querySelectorAll('.guide-lang').forEach(btn=>btn.classList.toggle('active',btn.id===(language==='es'?'guideLangEs':'guideLangPt')));
    document.querySelectorAll('#guideNav [data-pt]').forEach(elm=>elm.textContent=language==='es'?elm.dataset.es:elm.dataset.pt);

    const eyebrow=document.querySelector('.hero .eyebrow');if(eyebrow)eyebrow.textContent=tr('Vênus Casa de Praia - PB • Guia gratuito','Vênus Casa de Praia - PB • Guía gratuito');
    const h1=document.querySelector('.hero h1');if(h1)h1.textContent=tr('João Pessoa, Cabedelo & Conde','João Pessoa, Cabedelo y Conde');
    const sub=document.querySelector('.hero .subtitle');if(sub)sub.textContent=tr('Praias, gastronomia, passeios e lugares para conhecer.','Playas, gastronomía, paseos y lugares para conocer.');
    const search=el('search');if(search)search.placeholder=tr('Buscar praia, restaurante, passeio...','Buscar playa, restaurante, paseo...');
    document.querySelector('#clear')?.setAttribute('aria-label',tr('Limpar busca e filtros','Limpiar búsqueda y filtros'));
    document.querySelector('#clear')?.setAttribute('title',tr('Limpar filtros','Limpiar filtros'));

    const labels=document.querySelectorAll('.filters label');
    if(labels[0])labels[0].textContent=tr('Cidade','Ciudad');
    if(labels[1])labels[1].textContent=tr('Categoria','Categoría');
    if(el('favFilter'))el('favFilter').textContent=tr('★ Meus favoritos','★ Mis favoritos');
    const clearPill=[...document.querySelectorAll('.actions .pill')].find(b=>b!==el('favFilter'));if(clearPill)clearPill.textContent=tr('Limpar filtros','Limpiar filtros');

    const footerBrand=document.querySelector('.footer-brand');
    if(footerBrand)footerBrand.innerHTML=tr(
      'Indicações gratuitas da <strong>Vênus Casa de Praia - PB</strong> • João Pessoa, Cabedelo e Conde — PB<br><a href="https://www.instagram.com/venuscasadepraiapb/" target="_blank" rel="noopener">@venuscasadepraiapb</a>',
      'Recomendaciones gratuitas de <strong>Vênus Casa de Praia - PB</strong> • João Pessoa, Cabedelo y Conde — PB<br><a href="https://www.instagram.com/venuscasadepraiapb/" target="_blank" rel="noopener">@venuscasadepraiapb</a>'
    );
    const warning=document.querySelector('.footer-warning');
    if(warning)warning.innerHTML=`<strong>⚠️ ${tr('Aviso','Aviso')}</strong>
      <p>${tr('Este guia reúne indicações independentes e gratuitas para ajudar visitantes. O Guia não recebe pagamento, comissão, benefício ou contrapartida pela inclusão de estabelecimentos, serviços ou atrações.','Esta guía reúne recomendaciones independientes y gratuitas para ayudar a los visitantes. La Guía no recibe pagos, comisiones, beneficios ni contraprestaciones por incluir establecimientos, servicios o atracciones.')}</p>
      <p>${tr('Horários, valores, programação, condições climáticas, marés e disponibilidade podem mudar. Consulte sempre o canal original antes da visita.','Los horarios, precios, programación, condiciones climáticas, mareas y disponibilidad pueden cambiar. Consulta siempre el canal original antes de la visita.')}</p>`;
    const linksNote=document.querySelector('.footer-links-note');if(linksNote)linksNote.textContent=tr('Os links abrem os respectivos serviços, fontes oficiais ou redes sociais quando disponíveis.','Los enlaces abren los respectivos servicios, fuentes oficiales o redes sociales cuando están disponibles.');

    if(el('install'))el('install').textContent=tr('＋ Instalar guia no celular','＋ Instalar guía en el móvil');

    setupFiltersUx();
    renderUx();

    const btn=document.querySelector('#guideMenuButton');if(btn)btn.setAttribute('aria-label',document.querySelector('#guideNav')?.classList.contains('open')?tr('Fechar menu','Cerrar menú'):tr('Abrir menu','Abrir menú'));
    document.querySelector('#guideNav')?.setAttribute('aria-label',tr('Navegação principal','Navegación principal'));
    document.querySelector('.guide-language')?.setAttribute('aria-label',tr('Seleção de idioma','Selección de idioma'));
    document.querySelector('.venus-logo-link')?.setAttribute('aria-label',tr('Instagram da Vênus Casa de Praia - PB','Instagram de Vênus Casa de Praia - PB'));
    document.querySelector('.venus-logo')?.setAttribute('alt',tr('Mascote da Vênus Casa de Praia - PB','Mascota de Vênus Casa de Praia - PB'));
    document.querySelector('#guideBackTop')?.setAttribute('aria-label',tr('Voltar ao topo','Volver arriba'));
  }

  function setGuideLanguage(lang){
    language=lang;
    localStorage.setItem('guia-venus-lang',lang);
    applyGuideLanguage();
  }

  try {
    setupFilters=setupFiltersUx;
    card=cardUx;
    render=renderUx;
    toggleCard=toggleCardUx;
    labelSite=sourceLabel;
  } catch(e) {
    console.error('Não foi possível ativar a camada de UX do Guia Vênus.',e);
  }

  installGuideControls();
})();
