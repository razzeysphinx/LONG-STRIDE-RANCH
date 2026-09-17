
const header=document.querySelector('.header');
function head(){if(header&&!header.classList.contains('inner'))header.classList.toggle('scrolled',scrollY>30)}
head();addEventListener('scroll',head,{passive:true});
const mb=document.querySelector('.mobile-btn'),mm=document.querySelector('.mobile');
if(mb)mb.addEventListener('click',()=>mm.classList.toggle('open'));
mm?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mm.classList.remove('open')));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Demo inquiry ready. Connect this form to Long Stride email/CRM for production.');}));
