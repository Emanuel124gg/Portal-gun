const links=document.querySelectorAll('a[href^="#"]');
links.forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}}));

const search=document.querySelector('#search');
const cards=[...document.querySelectorAll('.searchable .research-card')];
if(search){search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();cards.forEach(card=>{card.hidden=q && !((card.dataset.search||'')+' '+card.textContent).toLowerCase().includes(q)})})}

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('article,.node,.stat,.step').forEach(el=>observer.observe(el));
