
let deferredPrompt;
const state = { cidade:"Todas", categoria:"Todas", busca:"", favoritos:false };
const favs = new Set(JSON.parse(localStorage.getItem("guiaFavoritos")||"[]"));

const el = id => document.getElementById(id);
const normalize = s => (s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

function labelSite(url, tipo){
  if(!url) return "Sem link";
  if(url.includes("instagram.com")) return "Instagram";
  if((tipo||"").toLowerCase().includes("turismo")) return "Fonte oficial";
  if((tipo||"").toLowerCase().includes("prefeitura")) return "Prefeitura";
  return "Site / fonte";
}
function uniq(list){ return [...new Set(list.filter(Boolean))].sort((a,b)=>a.localeCompare(b,"pt-BR")); }

function setupFilters(){
  const cidades = ["Todas", ...uniq(PLACES.map(p=>p.cidade))];
  const cats = ["Todas", ...uniq(PLACES.map(p=>p.categoria.replace(/\s*\/\s*/g,"/").trim()))];
  el("cidade").innerHTML = cidades.map(x=>`<option>${x}</option>`).join("");
  el("categoria").innerHTML = cats.map(x=>`<option>${x}</option>`).join("");
}

function matchPlace(p){
  const cat = p.categoria.replace(/\s*\/\s*/g,"/").trim();
  if(state.cidade!=="Todas" && p.cidade!==state.cidade) return false;
  if(state.categoria!=="Todas" && cat!==state.categoria) return false;
  if(state.favoritos && !favs.has(p.id)) return false;
  const hay = normalize([p.lugar,p.cidade,p.regiao,p.categoria,p.perfil,p.descricao].join(" "));
  return !state.busca || hay.includes(normalize(state.busca));
}

function card(p){
  const fav = favs.has(p.id);
  const siteOk = !!p.site;
  const desc = p.descricao || "Sem descrição adicional cadastrada.";
  const tipo = p.tipoLink ? `<p class="meta">Fonte/canal: ${escapeHtml(p.tipoLink)}</p>` : "";
  return `<article class="card" data-id="${p.id}">
    <div class="card-head">
      <div>
        <div class="badges">
          <span class="badge">${escapeHtml(p.cidade)}</span>
          <span class="badge sand">${escapeHtml(p.categoria)}</span>
        </div>
        <h2>${escapeHtml(p.lugar)}</h2>
        <p class="profile">${escapeHtml(p.perfil || p.regiao)}</p>
      </div>
      <button class="fav ${fav?"on":""}" aria-label="Favoritar" onclick="toggleFav(${p.id},event)">${fav?"★":"☆"}</button>
    </div>
    <div class="details">
      <p class="desc">${escapeHtml(desc)}</p>
      <p class="meta">📍 ${escapeHtml(p.regiao)}</p>
      ${tipo}
      <div class="buttons">
        ${p.maps ? `<a class="btn primary" href="${attr(p.maps)}" target="_blank" rel="noopener">📍 Maps</a>` : `<span class="btn disabled">📍 Maps</span>`}
        ${siteOk ? `<a class="btn" href="${attr(p.site)}" target="_blank" rel="noopener">↗ ${escapeHtml(labelSite(p.site,p.tipoLink))}</a>` : `<span class="btn disabled">↗ Sem link</span>`}
      </div>
    </div>
    <div class="toggle" onclick="toggleCard(${p.id})"><span>Ver detalhes</span><span>⌄</span></div>
  </article>`;
}
function escapeHtml(s){ return (s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m])); }
function attr(s){ return escapeHtml(s); }

function render(){
  const items = PLACES.filter(matchPlace);
  el("count").textContent = `${items.length} ${items.length===1?"lugar encontrado":"lugares encontrados"}`;
  el("cards").innerHTML = items.length ? items.map(card).join("") :
    `<div class="empty">Nenhum lugar encontrado com esses filtros.</div>`;
  el("favFilter").classList.toggle("active", state.favoritos);
}

function toggleCard(id){
  const c = document.querySelector(`.card[data-id="${id}"]`);
  if(!c) return;
  c.classList.toggle("open");
  const t = c.querySelector(".toggle span:first-child");
  const a = c.querySelector(".toggle span:last-child");
  const open = c.classList.contains("open");
  t.textContent = open ? "Ocultar detalhes" : "Ver detalhes";
  a.textContent = open ? "⌃" : "⌄";
}
function toggleFav(id,e){
  e.stopPropagation();
  favs.has(id) ? favs.delete(id) : favs.add(id);
  localStorage.setItem("guiaFavoritos", JSON.stringify([...favs]));
  render();
}
function clearAll(){
  state.cidade="Todas"; state.categoria="Todas"; state.busca=""; state.favoritos=false;
  el("cidade").value="Todas"; el("categoria").value="Todas"; el("search").value="";
  render();
}

window.addEventListener("beforeinstallprompt", e=>{
  e.preventDefault(); deferredPrompt=e;
  el("install").style.display="block";
});
el("install")?.addEventListener("click", async ()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt=null;
  el("install").style.display="none";
});

document.addEventListener("DOMContentLoaded",()=>{
  setupFilters();
  el("cidade").addEventListener("change",e=>{state.cidade=e.target.value;render()});
  el("categoria").addEventListener("change",e=>{state.categoria=e.target.value;render()});
  el("search").addEventListener("input",e=>{state.busca=e.target.value;render()});
  el("clear").addEventListener("click",clearAll);
  el("favFilter").addEventListener("click",()=>{state.favoritos=!state.favoritos;render()});
  render();
});
