(function(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); } });
  },{threshold:.28});
  document.querySelectorAll('.step,.reveal').forEach(function(el){io.observe(el)});
  var links=[].slice.call(document.querySelectorAll('#rail a'));
  var targets=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  var spy=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ var i=targets.indexOf(e.target); links.forEach(function(a,j){a.classList.toggle('on',j===i)}); } });
  },{rootMargin:'-50% 0px -50% 0px'});
  targets.forEach(function(t){ if(t) spy.observe(t) });
  var sw=document.getElementById("switch"); if(sw)
  sw.addEventListener('click',function(){
    var on=document.documentElement.classList.toggle('changed');
    sw.setAttribute('aria-pressed',on);
  });
})();
