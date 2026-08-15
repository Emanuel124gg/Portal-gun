document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
const search=document.querySelector('#search');
const cards=[...document.querySelectorAll('.research-card')];
search?.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();cards.forEach(c=>{const text=((c.dataset.search||'')+' '+c.textContent).toLowerCase();c.hidden=!!q&&!text.includes(q)})});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('article,.node,.road,.pipeline div').forEach(e=>io.observe(e));
