var SC = ['XS','S','M','L','XL','XXL'];
var SB = ['XS','S','M','L','XL'];
var SP = ['10 anos','12 anos','14 anos','16 anos'];

var PRODUCTS = [
  {id:'TN', name:'Panties Tinni', cat:'calcinhas', colors:['Preto','Rosa'], sizes:SC,
   codes:{Preto:{XS:'PP-TN-XS-002',S:'PP-TN-S-002',M:'PP-TN-M-002',L:'PP-TN-L-002',XL:'PP-TN-XL-002',XXL:'PP-TN-XXL-002'},
          Rosa: {XS:'PP-TN-XS-003',S:'PP-TN-S-003',M:'PP-TN-M-003',L:'PP-TN-L-003',XL:'PP-TN-XL-003',XXL:'PP-TN-XXL-003'}}},
  {id:'GU', name:'Panties Igue', cat:'calcinhas', colors:['Preto','Rosa'], sizes:SC,
   codes:{Preto:{XS:'PP-GU-XS-002',S:'PP-GU-S-002',M:'PP-GU-M-002',L:'PP-GU-L-002',XL:'PP-GU-XL-002',XXL:'PP-GU-XXL-002'},
          Rosa: {XS:'PP-GU-XS-003',S:'PP-GU-S-003',M:'PP-GU-M-003',L:'PP-GU-L-003',XL:'PP-GU-XL-003',XXL:'PP-GU-XXL-003'}}},
  {id:'NA', name:'Panties Nati', cat:'calcinhas', colors:['Preto','Rosa'], sizes:SC,
   codes:{Preto:{XS:'PP-NA-XS-002',S:'PP-NA-S-002',M:'PP-NA-M-002',L:'PP-NA-L-002',XL:'PP-NA-XL-002',XXL:'PP-NA-XXL-002'},
          Rosa: {XS:'PP-NA-XS-003',S:'PP-NA-S-003',M:'PP-NA-M-003',L:'PP-NA-L-003',XL:'PP-NA-XL-003',XXL:'PP-NA-XXL-003'}}},
  {id:'MO', name:'Braga Momi', cat:'calcinhas', colors:['Preto'], sizes:SC,
   codes:{Preto:{XS:'PP-MO-XS-002',S:'PP-MO-S-002',M:'PP-MO-M-002',L:'PP-MO-L-002',XL:'PP-MO-XL-002',XXL:'PP-MO-XXL-002'}}},
  {id:'CE', name:'Biquini Celle', cat:'biquinis', colors:['Preto','Rosa'], sizes:SB,
   codes:{Preto:{XS:'PP-CE-XS-002',S:'PP-CE-S-002',M:'PP-CE-M-002',L:'PP-CE-L-002',XL:'PP-CE-XL-002'},
          Rosa: {XS:'PP-CE-XS-003',S:'PP-CE-S-003',M:'PP-CE-M-003',L:'PP-CE-L-003',XL:'PP-CE-XL-003'}}},
  {id:'MD', name:'Biquini Madu', cat:'biquinis', colors:['Preto','Rosa'], sizes:SB,
   codes:{Preto:{XS:'PP-MD-XS-002',S:'PP-MD-S-002',M:'PP-MD-M-002',L:'PP-MD-L-002',XL:'PP-MD-XL-002'},
          Rosa: {XS:'PP-MD-XS-003',S:'PP-MD-S-003',M:'PP-MD-M-003',L:'PP-MD-L-003',XL:'PP-MD-XL-003'}}},
  {id:'VN', name:'Biquini Vana', cat:'biquinis', colors:['Preto'], sizes:SB,
   codes:{Preto:{XS:'PP-VN-XS-002',S:'PP-VN-S-002',M:'PP-VN-M-002',L:'PP-VN-L-002',XL:'PP-VN-XL-002'}}},
  {id:'PE', name:'Biquini Pepa', cat:'biquinis', colors:['Rosa'], sizes:SP,
   codes:{Rosa:{'10 anos':'PP-PE-10-003','12 anos':'PP-PE-12-003','14 anos':'PP-PE-14-003','16 anos':'PP-PE-16-003'}}}
];

var IS = {
  'PP-TN-XS-002':{a:125,c:19},'PP-TN-S-002':{a:123,c:4},'PP-TN-M-002':{a:148,c:9},'PP-TN-L-002':{a:120,c:1},'PP-TN-XL-002':{a:52,c:7},'PP-TN-XXL-002':{a:33,c:6},
  'PP-TN-XS-003':{a:35,c:5},'PP-TN-S-003':{a:21,c:3},'PP-TN-M-003':{a:89,c:7},'PP-TN-L-003':{a:60,c:3},'PP-TN-XL-003':{a:50,c:2},'PP-TN-XXL-003':{a:66,c:4},
  'PP-GU-XS-002':{a:22,c:0},'PP-GU-S-002':{a:17,c:1},'PP-GU-M-002':{a:83,c:0},'PP-GU-L-002':{a:69,c:2},'PP-GU-XL-002':{a:55,c:0},'PP-GU-XXL-002':{a:54,c:1},
  'PP-GU-XS-003':{a:80,c:0},'PP-GU-S-003':{a:63,c:4},'PP-GU-M-003':{a:130,c:7},'PP-GU-L-003':{a:85,c:4},'PP-GU-XL-003':{a:60,c:1},'PP-GU-XXL-003':{a:54,c:2},
  'PP-NA-XS-002':{a:34,c:3},'PP-NA-S-002':{a:16,c:0},'PP-NA-M-002':{a:60,c:2},'PP-NA-L-002':{a:34,c:8},'PP-NA-XL-002':{a:42,c:1},'PP-NA-XXL-002':{a:50,c:2},
  'PP-NA-XS-003':{a:46,c:3},'PP-NA-S-003':{a:69,c:2},'PP-NA-M-003':{a:131,c:0},'PP-NA-L-003':{a:72,c:5},'PP-NA-XL-003':{a:54,c:4},'PP-NA-XXL-003':{a:53,c:2},
  'PP-MO-XS-002':{a:73,c:5},'PP-MO-S-002':{a:130,c:5},'PP-MO-M-002':{a:123,c:5},'PP-MO-L-002':{a:62,c:1},'PP-MO-XL-002':{a:13,c:2},'PP-MO-XXL-002':{a:16,c:1},
  'PP-CE-XS-002':{a:5,c:8},'PP-CE-S-002':{a:4,c:11},'PP-CE-M-002':{a:1,c:12},'PP-CE-L-002':{a:0,c:3},'PP-CE-XL-002':{a:2,c:1},
  'PP-CE-XS-003':{a:0,c:4},'PP-CE-S-003':{a:0,c:3},'PP-CE-M-003':{a:0,c:5},'PP-CE-L-003':{a:0,c:4},'PP-CE-XL-003':{a:0,c:5},
  'PP-MD-XS-002':{a:7,c:0},'PP-MD-S-002':{a:13,c:0},'PP-MD-M-002':{a:9,c:5},'PP-MD-L-002':{a:0,c:0},'PP-MD-XL-002':{a:3,c:0},
  'PP-MD-XS-003':{a:0,c:4},'PP-MD-S-003':{a:0,c:5},'PP-MD-M-003':{a:0,c:6},'PP-MD-L-003':{a:0,c:4},'PP-MD-XL-003':{a:0,c:4},
  'PP-VN-XS-002':{a:7,c:0},'PP-VN-S-002':{a:8,c:0},'PP-VN-M-002':{a:5,c:0},'PP-VN-L-002':{a:4,c:0},'PP-VN-XL-002':{a:3,c:0},
  'PP-PE-10-003':{a:0,c:7},'PP-PE-12-003':{a:0,c:4},'PP-PE-14-003':{a:0,c:1},'PP-PE-16-003':{a:0,c:1}
};

function initStock() {
  var s = {};
  PRODUCTS.forEach(function(p) {
    p.colors.forEach(function(c) {
      p.sizes.forEach(function(sz) {
        var code = p.codes[c][sz];
        if (!code) return;
        var d = IS[code] || {a:0, c:0};
        s[code] = {armazem: d.a, casa: d.c};
      });
    });
  });
  return s;
}

var stock = {}, vendas = [], saleItems = [];

function load() {
  try { stock = JSON.parse(localStorage.getItem('pp_s') || 'null') || initStock(); } catch(e) { stock = initStock(); }
  try { vendas = JSON.parse(localStorage.getItem('pp_v') || '[]'); } catch(e) { vendas = []; }
}
function save() {
  try { localStorage.setItem('pp_s', JSON.stringify(stock)); localStorage.setItem('pp_v', JSON.stringify(vendas)); } catch(e) {}
}

var PAGES = ['stock','vendas','historico','financeiro','ajuste','sheets'];

function showPage(p) {
  document.querySelectorAll('.page').forEach(function(el) { el.classList.remove('active'); });
  document.querySelectorAll('.nb').forEach(function(el, i) { el.classList.toggle('active', PAGES[i] === p); });
  document.getElementById('page-' + p).classList.add('active');
  if (p === 'stock') renderStock();
  if (p === 'historico') renderHistorico();
  if (p === 'financeiro') renderFinanceiro();
  if (p === 'ajuste') renderAjuste();
}

function renderStock() {
  var cat = document.getElementById('filter-cat').value;
  var local = document.getElementById('filter-local').value;
  var tA = 0, tC = 0;
  Object.keys(stock).forEach(function(k) { tA += stock[k].armazem || 0; tC += stock[k].casa || 0; });
  document.getElementById('stock-metrics').innerHTML =
    '<div class="met"><div class="ml">Total geral</div><div class="mv">' + (tA+tC) + '</div><div class="ms">unidades em stock</div></div>' +
    '<div class="met"><div class="ml">Arm\u00e9m (Jonas)</div><div class="mv">' + tA + '</div><div class="ms">unidades</div></div>' +
    '<div class="met"><div class="ml">Casa</div><div class="mv">' + tC + '</div><div class="ms">unidades</div></div>' +
    '<div class="met"><div class="ml">Vendas</div><div class="mv">' + vendas.length + '</div><div class="ms">registradas</div></div>';
  var prods = cat === 'all' ? PRODUCTS : PRODUCTS.filter(function(p) { return p.cat === cat; });
  var html = '';
  ['calcinhas','biquinis'].forEach(function(ck) {
    var cp = prods.filter(function(p) { return p.cat === ck; });
    if (!cp.length) return;
    html += '<h3 style="margin:1rem 0 .5rem">' + (ck === 'calcinhas' ? 'Calcinhas' : 'Biquinis') + '</h3>';
    cp.forEach(function(p) {
      p.colors.forEach(function(color) {
        var codes = p.codes[color]; if (!codes) return;
        html += '<div class="card" style="margin-bottom:.5rem"><div class="ph"><div class="cd ' + (color === 'Preto' ? 'bk' : 'pk') + '"></div>' +
                '<strong style="font-size:13px">' + p.name + ' \u2014 ' + color + '</strong>' +
                '<span style="margin-left:auto;font-size:11px;color:var(--text3);font-family:sans-serif">' + p.cat + '</span></div><div class="szg">';
        p.sizes.forEach(function(sz) {
          var code = codes[sz]; if (!code) return;
          var s = stock[code] || {armazem:0, casa:0};
          var val = local === 'armazem' ? s.armazem : local === 'casa' ? s.casa : (s.armazem + s.casa);
          var cls = val === 0 ? 'zero' : val < 5 ? 'low' : '';
          html += '<div class="szc"><div class="szl">' + sz + '</div>' +
                  '<div class="szv ' + cls + '" onclick="showDetail(\'' + code + '\')">' + val + '</div></div>';
        });
        html += '</div></div>';
      });
    });
  });
  document.getElementById('stock-cards').innerHTML = html;
}

function showDetail(code) {
  var s = stock[code]; if (!s) return;
  var pname = '', color = '', sz = '';
  PRODUCTS.forEach(function(p) { p.colors.forEach(function(c) { p.sizes.forEach(function(si) { if (p.codes[c][si] === code) { pname = p.name; color = c; sz = si; } }); }); });
  document.getElementById('modal-title').textContent = code;
  document.getElementById('modal-body').innerHTML =
    '<p style="font-size:13px;color:var(--text3);margin-bottom:1rem;font-family:sans-serif">' + pname + ' \u00b7 ' + color + ' \u00b7 ' + sz + '</p>' +
    '<div class="g2" style="margin-bottom:.75rem"><div class="met"><div class="ml">Arm\u00e9m</div><div class="mv">' + s.armazem + '</div></div>' +
    '<div class="met"><div class="ml">Casa</div><div class="mv">' + s.casa + '</div></div></div>' +
    '<div class="met"><div class="ml">Total</div><div class="mv">' + (s.armazem + s.casa) + '</div></div>';
  document.getElementById('modal').style.display = 'block';
}

function populateProd() {
  var sel = document.getElementById('item-prod');
  sel.innerHTML = '<option value="">\u2014 selecione produto \u2014</option>';
  PRODUCTS.forEach(function(p) {
    p.colors.forEach(function(c) {
      var o = document.createElement('option');
      o.value = p.id + '|' + c;
      o.textContent = p.name + ' \u2014 ' + c;
      sel.appendChild(o);
    });
  });
}

function updateSizes() {
  var v = document.getElementById('item-prod').value;
  var sel = document.getElementById('item-sz');
  sel.innerHTML = '<option value="">\u2014 tamanho \u2014</option>';
  if (!v) return;
  var parts = v.split('|'); var pid = parts[0]; var color = parts[1];
  var p = null; PRODUCTS.forEach(function(x) { if (x.id === pid) p = x; }); if (!p) return;
  var local = document.getElementById('v-local').value;
  p.sizes.forEach(function(sz) {
    var code = p.codes[color][sz]; if (!code) return;
    var s = stock[code] || {armazem:0, casa:0};
    var disp = local === 'armazem' ? s.armazem : s.casa;
    var o = document.createElement('option'); o.value = sz; o.textContent = sz + ' (disp: ' + disp + ')'; sel.appendChild(o);
  });
}

function addItem() {
  var v = document.getElementById('item-prod').value;
  var sz = document.getElementById('item-sz').value;
  var qty = parseInt(document.getElementById('item-qty').value) || 1;
  if (!v || !sz) { alert('Selecione produto e tamanho.'); return; }
  var parts = v.split('|'); var pid = parts[0]; var color = parts[1];
  var p = null; PRODUCTS.forEach(function(x) { if (x.id === pid) p = x; });
  var code = p.codes[color][sz];
  saleItems.push({code: code, name: p.name + ' \u2014 ' + color + ' \u2014 ' + sz, qty: qty});
  renderItems();
  document.getElementById('item-prod').value = '';
  document.getElementById('item-sz').innerHTML = '<option>\u2014 tamanho \u2014</option>';
  document.getElementById('item-qty').value = 1;
}

function renderItems() {
  var w = document.getElementById('items-wrap');
  if (!saleItems.length) { w.style.display = 'none'; return; }
  w.style.display = 'block';
  document.getElementById('items-list').innerHTML = saleItems.map(function(it, i) {
    return '<div class="si"><span style="font-size:11px;color:var(--text3)">' + it.code + '</span><span>' + it.name + '</span>' +
           '<span style="margin-left:auto;font-weight:500">\u00d7' + it.qty + '</span>' +
           '<button class="sir" onclick="removeItem(' + i + ')">\u00d7</button></div>';
  }).join('');
  var val = parseFloat(document.getElementById('v-valor').value) || 0;
  var frt = parseFloat(document.getElementById('v-frete').value) || 0;
  document.getElementById('tot-n').textContent = saleItems.reduce(function(a, i) { return a + i.qty; }, 0);
  document.getElementById('tot-v').textContent = '\u20ac' + val.toFixed(2);
  document.getElementById('tot-f').textContent = '\u20ac' + frt.toFixed(2);
  document.getElementById('tot-l').textContent = '\u20ac' + (val - frt).toFixed(2);
}

function removeItem(i) { saleItems.splice(i, 1); renderItems(); }

function salvarVenda() {
  var nome = document.getElementById('v-nome').value.trim();
  var data = document.getElementById('v-data').value;
  if (!nome || !data) { alert('Preencha data e nome.'); return; }
  if (!saleItems.length) { alert('Adicione pelo menos um item.'); return; }
  var local = document.getElementById('v-local').value;
  var warns = [];
  saleItems.forEach(function(it) {
    var s = stock[it.code] || {armazem:0, casa:0};
    var d = local === 'armazem' ? s.armazem : s.casa;
    if (d < it.qty) warns.push(it.code + ': disp ' + d + ', pedido ' + it.qty);
  });
  var we = document.getElementById('vwarn');
  if (warns.length) { we.style.display = 'block'; we.textContent = 'Stock insuficiente: ' + warns.join('; '); return; }
  we.style.display = 'none';
  saleItems.forEach(function(it) { if (!stock[it.code]) stock[it.code] = {armazem:0, casa:0}; stock[it.code][local] -= it.qty; });
  var val = parseFloat(document.getElementById('v-valor').value) || 0;
  var frt = parseFloat(document.getElementById('v-frete').value) || 0;
  vendas.push({id: Date.now(), data: data, pedido: document.getElementById('v-pedido').value.trim(),
    nome: nome, meio: document.getElementById('v-meio').value, valor: val, frete: frt,
    pagtoStatus: document.getElementById('v-pstatus').value, freteStatus: document.getElementById('v-fstatus').value,
    local: local, items: saleItems.slice(), liquido: val - frt});
  saleItems = []; save(); renderItems();
  document.getElementById('v-nome').value = '';
  document.getElementById('v-pedido').value = '';
  document.getElementById('v-valor').value = '';
  document.getElementById('v-frete').value = '';
  alert('Venda registrada!');
}

function tagMeio(m) {
  var map = {Bizum:'tbz', PayPal:'tpp', 'Cart\u00e3o':'tca', 'Transfer\u00eancia':'ttr'};
  return '<span class="tag ' + (map[m] || 'ttr') + '">' + m + '</span>';
}

function renderHistorico() {
  var busca = (document.getElementById('h-busca').value || '').toLowerCase();
  var status = document.getElementById('h-status').value;
  var meio = document.getElementById('h-meio').value;
  var fil = vendas.slice().reverse().filter(function(v) {
    var mb = !busca || (v.nome||'').toLowerCase().indexOf(busca) >= 0 || (v.pedido||'').indexOf(busca) >= 0;
    return mb && (status === 'all' || v.pagtoStatus === status) && (meio === 'all' || v.meio === meio);
  });
  if (!fil.length) { document.getElementById('historico-list').innerHTML = '<div class="empty">Nenhuma venda encontrada.</div>'; return; }
  document.getElementById('historico-list').innerHTML = fil.map(function(v) {
    return '<div class="card" style="margin-bottom:.5rem">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap">' +
      '<span style="font-weight:500;font-size:14px">' + v.nome + '</span>' +
      (v.pedido ? '<span style="font-size:12px;color:var(--text3);font-family:sans-serif">#' + v.pedido + '</span>' : '') +
      '<span style="margin-left:auto;font-size:12px;color:var(--text3);font-family:sans-serif">' + v.data + '</span></div>' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">' + tagMeio(v.meio) +
      '<span class="tag ' + (v.pagtoStatus==='Pago'?'tpg':v.pagtoStatus==='Parcial'?'tpc':'tpd') + '">Compra: ' + v.pagtoStatus + '</span>' +
      '<span class="tag ' + (v.freteStatus==='Pago'?'tpg':'tpd') + '">Frete: ' + v.freteStatus + '</span>' +
      '<span class="badge ' + (v.local==='armazem'?'ba':'bc') + '">' + (v.local==='armazem'?'Arm\u00e9m':'Casa') + '</span></div>' +
      '<div style="display:flex;gap:1rem;font-size:13px;font-family:sans-serif;flex-wrap:wrap">' +
      'Venda: <strong>\u20ac' + (v.valor||0).toFixed(2) + '</strong>&nbsp;&nbsp;' +
      '<span style="color:var(--rtxt)">Frete: <strong>\u2212\u20ac' + (v.frete||0).toFixed(2) + '</strong></span>&nbsp;&nbsp;' +
      '<span style="color:var(--btxt)">L\u00edquido: <strong>\u20ac' + ((v.valor||0)-(v.frete||0)).toFixed(2) + '</strong></span></div>' +
      (v.items&&v.items.length ? '<div style="margin-top:5px;font-size:12px;color:var(--text3);font-family:sans-serif">' + v.items.map(function(i){return i.code+'\u00d7'+i.qty;}).join(' \u00b7 ') + '</div>' : '') +
      '</div>';
  }).join('');
}

function renderFinanceiro() {
  var tV = vendas.reduce(function(a,v){return a+(v.valor||0);}, 0);
  var tF = vendas.reduce(function(a,v){return a+(v.frete||0);}, 0);
  document.getElementById('fin-summary').innerHTML =
    '<div class="fc v"><div class="fla">Total vendas</div><div class="flv">\u20ac' + tV.toFixed(2) + '</div></div>' +
    '<div class="fc f"><div class="fla">Total frete</div><div class="flv">\u2212\u20ac' + tF.toFixed(2) + '</div></div>' +
    '<div class="fc l"><div class="fla">L\u00edquido</div><div class="flv">\u20ac' + (tV-tF).toFixed(2) + '</div></div>';
  var tbody = document.getElementById('fin-tbody');
  if (!vendas.length) { tbody.innerHTML = '<tr><td colspan="8" class="empty">Sem vendas.</td></tr>'; return; }
  tbody.innerHTML = vendas.slice().reverse().map(function(v) {
    return '<tr><td>' + v.data + '</td><td>' + (v.pedido||'\u2014') + '</td><td title="' + v.nome + '">' + v.nome + '</td>' +
      '<td>' + tagMeio(v.meio) + '</td>' +
      '<td>\u20ac' + (v.valor||0).toFixed(2) + '</td>' +
      '<td style="color:var(--rtxt)">\u2212\u20ac' + (v.frete||0).toFixed(2) + '</td>' +
      '<td style="color:var(--btxt);font-weight:500">\u20ac' + ((v.valor||0)-(v.frete||0)).toFixed(2) + '</td>' +
      '<td><span class="tag ' + (v.pagtoStatus==='Pago'?'tpg':v.pagtoStatus==='Parcial'?'tpc':'tpd') + '">' + v.pagtoStatus + '</span></td></tr>';
  }).join('');
}

function renderAjuste() {
  var html = '';
  PRODUCTS.forEach(function(p) {
    p.colors.forEach(function(color) {
      var codes = p.codes[color]; if (!codes) return;
      html += '<div class="card" style="margin-bottom:.5rem"><div class="ph"><div class="cd ' + (color==='Preto'?'bk':'pk') + '"></div>' +
              '<strong style="font-size:13px">' + p.name + ' \u2014 ' + color + '</strong></div>';
      p.sizes.forEach(function(sz) {
        var code = codes[sz]; if (!code) return;
        var s = stock[code] || {armazem:0, casa:0};
        html += '<div style="display:flex;align-items:center;gap:10px;padding:5px 0;border-bottom:.5px solid var(--border);font-size:13px;font-family:sans-serif">' +
                '<span style="width:44px;color:var(--text3)">' + sz + '</span>' +
                '<span style="font-size:11px;color:var(--text3)">Arm:</span>' +
                '<input type="number" class="ai" data-code="' + code + '" data-local="armazem" value="' + s.armazem + '" min="0">' +
                '<span style="font-size:11px;color:var(--text3)">Casa:</span>' +
                '<input type="number" class="ai" data-code="' + code + '" data-local="casa" value="' + s.casa + '" min="0">' +
                '<span style="margin-left:auto;font-size:12px;color:var(--text3)">Total: ' + (s.armazem+s.casa) + '</span></div>';
      });
      html += '</div>';
    });
  });
  document.getElementById('ajuste-cards').innerHTML = html;
}

function salvarAjuste() {
  document.querySelectorAll('.ai').forEach(function(inp) {
    var code = inp.dataset.code; var local = inp.dataset.local;
    if (!stock[code]) stock[code] = {armazem:0, casa:0};
    stock[code][local] = parseInt(inp.value) || 0;
  });
  save(); renderStock(); alert('Ajustes salvos!');
}

function csvEsc(v) { var s = String(v == null ? '' : v); return (s.indexOf(',')>=0||s.indexOf('"')>=0||s.indexOf('\n')>=0) ? '"'+s.replace(/"/g,'""')+'"' : s; }
function toCSV(rows) { return rows.map(function(r){return r.map(csvEsc).join(',');}).join('\n'); }
function dlCSV(content, fn) { var blob = new Blob(['\uFEFF'+content],{type:'text/csv;charset=utf-8;'}); var url = URL.createObjectURL(blob); var a = document.createElement('a'); a.href = url; a.download = fn; a.click(); URL.revokeObjectURL(url); }

function exportStock() {
  var rows = [['codigo','armazem','casa','total','produto','cor','tamanho']];
  PRODUCTS.forEach(function(p){p.colors.forEach(function(c){p.sizes.forEach(function(sz){
    var code = p.codes[c][sz]; if (!code) return;
    var s = stock[code] || {armazem:0,casa:0};
    rows.push([code,s.armazem,s.casa,s.armazem+s.casa,p.name,c,sz]);
  });});});
  dlCSV(toCSV(rows), 'stock_' + new Date().toISOString().slice(0,10) + '.csv');
}
function exportVendas() {
  var rows = [['id','data','pedido','nome','meio','valor','frete','pagtoStatus','freteStatus','local','liquido','itens']];
  vendas.forEach(function(v){rows.push([v.id,v.data,v.pedido||'',v.nome,v.meio,(v.valor||0).toFixed(2),(v.frete||0).toFixed(2),v.pagtoStatus,v.freteStatus,v.local,((v.valor||0)-(v.frete||0)).toFixed(2),(v.items||[]).map(function(i){return i.code+'\u00d7'+i.qty;}).join('|')]);});
  dlCSV(toCSV(rows), 'vendas_' + new Date().toISOString().slice(0,10) + '.csv');
}
function exportTudo() { exportStock(); setTimeout(exportVendas, 400); }

function parseCSV(text) {
  var lines = text.trim().split(/\r?\n/);
  return lines.map(function(line) {
    var cells=[], cur='', inQ=false;
    for (var i=0; i<line.length; i++) {
      var ch = line[i];
      if (ch==='"' && !inQ) inQ=true;
      else if (ch==='"' && inQ && line[i+1]==='"') { cur+='"'; i++; }
      else if (ch==='"' && inQ) inQ=false;
      else if (ch===',' && !inQ) { cells.push(cur); cur=''; }
      else cur+=ch;
    }
    cells.push(cur); return cells;
  });
}

function showIR(msg, ok) {
  var el = document.getElementById('import-result'); el.style.display='block';
  el.style.cssText = 'display:block;padding:.5rem .75rem;border-radius:8px;border:.5px solid;font-family:sans-serif;font-size:13px;' + (ok?'background:var(--gbg);border-color:#c0dd97;color:var(--gtxt);':'background:var(--rbg);border-color:#f7c1c1;color:var(--rtxt);');
  el.textContent = msg;
}

function importStock(input) {
  var file = input.files[0]; if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var rows = parseCSV(e.target.result);
      var h = rows[0].map(function(x){return x.trim().toLowerCase();});
      var ci=h.indexOf('codigo'), ai=h.indexOf('armazem'), ci2=h.indexOf('casa');
      if (ci<0||ai<0||ci2<0) { showIR('Erro: colunas nao encontradas.',false); return; }
      var count=0;
      rows.slice(1).forEach(function(row) {
        var code=(row[ci]||'').trim(); if (!code) return;
        if (!stock[code]) stock[code]={armazem:0,casa:0};
        stock[code].armazem=parseInt(row[ai])||0; stock[code].casa=parseInt(row[ci2])||0; count++;
      });
      save(); showIR(count + ' itens importados.', true);
    } catch(err) { showIR('Erro: '+err.message, false); }
    input.value='';
  };
  reader.readAsText(file, 'UTF-8');
}

function importVendas(input) {
  var file = input.files[0]; if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var rows = parseCSV(e.target.result);
      var h = rows[0].map(function(x){return x.trim().toLowerCase();});
      var fi = {id:h.indexOf('id'),data:h.indexOf('data'),pedido:h.indexOf('pedido'),nome:h.indexOf('nome'),meio:h.indexOf('meio'),valor:h.indexOf('valor'),frete:h.indexOf('frete'),pst:h.indexOf('pagtostatus'),fst:h.indexOf('fretestatus'),local:h.indexOf('local'),liq:h.indexOf('liquido'),itens:h.indexOf('itens')};
      if (fi.nome<0||fi.data<0) { showIR('Erro: colunas obrigatorias nao encontradas.',false); return; }
      var count=0, ex={};
      vendas.forEach(function(v){ex[String(v.id)]=1;});
      rows.slice(1).forEach(function(row) {
        var id = String((row[fi.id]||'').trim()); if (ex[id]) return;
        var iraw = (fi.itens>=0 && row[fi.itens]||'').trim();
        var items = iraw ? iraw.split('|').map(function(s){var p=s.split('\u00d7');return{code:(p[0]||'').trim(),qty:parseInt(p[1])||1,name:(p[0]||'').trim()};}).filter(function(i){return i.code;}) : [];
        vendas.push({id:id||Date.now(),data:(row[fi.data]||'').trim(),pedido:(row[fi.pedido]||'').trim(),nome:(row[fi.nome]||'').trim(),meio:(row[fi.meio]||'').trim(),valor:parseFloat((row[fi.valor]||'0').replace(',','.'))||0,frete:parseFloat((row[fi.frete]||'0').replace(',','.'))||0,pagtoStatus:(row[fi.pst]||'').trim(),freteStatus:(row[fi.fst]||'').trim(),local:(row[fi.local]||'armazem').trim(),liquido:parseFloat((row[fi.liq]||'0').replace(',','.'))||0,items:items});
        ex[id]=1; count++;
      });
      save(); showIR(count + ' vendas adicionadas.', true);
    } catch(err) { showIR('Erro: '+err.message, false); }
    input.value='';
  };
  reader.readAsText(file, 'UTF-8');
}

var deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault(); deferredPrompt = e;
  document.getElementById('instbanner').style.display = 'flex';
});
function installApp() {
  if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.then(function(){ deferredPrompt=null; document.getElementById('instbanner').style.display='none'; }); }
}

document.getElementById('v-valor').addEventListener('input', renderItems);
document.getElementById('v-frete').addEventListener('input', renderItems);
document.getElementById('v-local').addEventListener('change', updateSizes);

load();
populateProd();
document.getElementById('v-data').value = new Date().toISOString().split('T')[0];
renderStock();
