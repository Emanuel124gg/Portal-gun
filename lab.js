const KEY='portal-gun-lab-v1';
let data=JSON.parse(localStorage.getItem(KEY)||'{"hypotheses":[],"notes":[],"experiments":[]}');
const save=()=>localStorage.setItem(KEY,JSON.stringify(data));
const esc=s=>String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function render(type,id){const el=document.getElementById(id);const list=data[type];el.innerHTML=list.length?list.slice().reverse().map(x=>`<div class="item"><strong>${esc(x.title)}</strong><small>${new Date(x.date).toLocaleString('pt-BR')} ${x.result?`• ${esc(x.result)}`:''}</small><p>${esc(x.body)}</p></div>`).join(''):'<div class="empty">Nenhum registro ainda.</div>'}
function renderAll(){render('hypotheses','hypotheses');render('notes','notes');render('experiments','experiments')}
function add(form,type,titleId,bodyId,resultId){document.getElementById(form).addEventListener('submit',e=>{e.preventDefault();data[type].push({title:document.getElementById(titleId).value.trim(),body:document.getElementById(bodyId).value.trim(),result:resultId?document.getElementById(resultId).value:'',date:new Date().toISOString()});save();e.target.reset();renderAll()})}
add('hypothesisForm','hypotheses','hTitle','hBody');
add('noteForm','notes','nTitle','nBody');
add('experimentForm','experiments','eTitle','eBody','eResult');
document.getElementById('export').onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`portal-gun-lab-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)};
document.getElementById('clear').onclick=()=>{if(confirm('Apagar todos os registros locais?')){data={hypotheses:[],notes:[],experiments:[]};save();renderAll()}};
renderAll();