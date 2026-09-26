(() => {
  'use strict';
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const config=window.PORTFOLIO_CONTENT||{};
  const safeURL=value=>{if(!value||typeof value!=='string')return null;try{const u=new URL(value,document.baseURI);return ['http:','https:','file:'].includes(u.protocol)?u.href:null;}catch{return null;}};
  // All text replacements are plain text, never injected HTML.
  const projectData=config.projects||[];
  const selectedProjects=projectData.filter(project=>project.group==='selected');
  const moreProjects=projectData.filter(project=>project.group==='more');
  $('.more-heading>span').textContent=moreProjects.length+' PROJECTS';
  const element=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text)node.textContent=text;return node;};
  function projectImage(data){const img=element('img');img.src=data.image;img.alt=data.imageAlt;img.width=1440;img.height=900;img.loading='lazy';img.decoding='async';return img;}
  const educationProjects=projectData.filter(project=>project.group==='education');
  if(educationProjects.length){
    const section=element('section','education-projects section'),heading=element('h2','','EDUCATION PROJECTS');
    section.id='education-projects';heading.id='education-title';section.setAttribute('aria-labelledby',heading.id);section.append(heading);
    educationProjects.forEach(data=>{
      const article=element('article','education-project'),copy=element('div','education-copy'),title=element('h3','',data.title);
      article.id='project-'+data.id;
      copy.append(element('span','eyebrow',data.category),title);
      if(data.visibility)copy.append(element('span','education-visibility',data.visibility));
      if(data.description)copy.append(element('p','education-description',data.description));
      const rows=[['담당 범위',data.role],['기여도',data.contribution],['사용 기술',data.tech],['주요 구현 포인트',data.highlights]];
      const facts=element('dl','project-facts');
      rows.forEach(([label,value])=>{
        const values=(Array.isArray(value)?value:[value]).filter(item=>typeof item==='string'&&item.trim());
        if(!values.length)return;
        const row=element('div');row.append(element('dt','',label),element('dd','',values.join(' · ')));facts.append(row);
      });
      if(facts.childElementCount)copy.append(facts);
      const links=element('div','education-links');
      (data.links||[]).forEach(link=>{
        const url=safeURL(link.url);if(!url)return;
        const anchor=element('a','text-link',link.label+' ↗');anchor.href=url;anchor.target='_blank';anchor.rel='noopener noreferrer';anchor.setAttribute('aria-label',data.title+' '+link.label+' (새 탭)');links.append(anchor);
      });
      if(links.childElementCount)copy.append(links);
      if(data.linkNote)copy.append(element('p','education-note',data.linkNote));
      article.append(copy);
      if(data.image&&safeURL(data.image)){article.classList.add('has-image');article.append(projectImage(data));}
      section.append(article);
    });
    $('#more-projects').before(section);
  }
  selectedProjects.forEach((data,index)=>{
    const card=element('article','project'),link=element('a','project-visual'),caption=element('div','project-caption'),copy=element('div');
    card.dataset.project=data.id;link.href='#project-'+data.id;link.setAttribute('aria-controls','featured');
    copy.append(element('span','',data.category),element('h3','',data.title));
    const arrow=element('span','circle','↗');arrow.setAttribute('aria-hidden','true');
    caption.append(copy,arrow);link.append(projectImage(data),element('span','project-number',String(index+1).padStart(2,'0')),caption);card.append(link);$('.works-track').append(card);
  });
  moreProjects.forEach((data,index)=>{
    const card=element('a','more-card'),copy=element('div','more-card-copy'),arrow=element('span','more-arrow','↗');
    card.href=safeURL(data.url);card.target='_blank';card.rel='noopener noreferrer';card.setAttribute('aria-label',data.title+' · '+data.category+' (새 탭)');card.hidden=index>=6;
    arrow.setAttribute('aria-hidden','true');copy.append(element('h3','',data.title),element('span','',data.category),arrow);
    if(data.image&&safeURL(data.image))card.append(projectImage(data));
    else {const cover=element('div','more-text-cover',data.title);cover.setAttribute('aria-hidden','true');card.append(cover);}
    card.append(copy);$('#more-grid').append(card);
  });
  const moreToggle=$('.more-toggle');
  moreToggle.hidden=moreProjects.length<=6;
  moreToggle.addEventListener('click',()=>{
    const expanded=moreToggle.getAttribute('aria-expanded')!=='true';
    $$('.more-card').forEach((card,index)=>{card.hidden=!expanded&&index>=6;if(expanded&&index>=6&&!matchMedia('(prefers-reduced-motion: reduce)').matches)card.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,delay:(index-6)*40,fill:'backwards'});});
    moreToggle.setAttribute('aria-expanded',String(expanded));moreToggle.textContent=expanded?'프로젝트 접기 −':'프로젝트 더 보기 ＋';
    $('#more-status').textContent=expanded?`추가 프로젝트 ${moreProjects.length-6}개가 펼쳐졌습니다. 전체 ${moreProjects.length}개 프로젝트 표시 중.`:'6개 프로젝트 표시 중.';
    if(expanded)$$('.more-card')[6]?.focus({preventScroll:true});
    window.ScrollTrigger?.refresh();
  });
  const cards=$$('[data-project]');
  let worksSwiper=null;
  const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
  // Swiper is a progressive enhancement: retain the static grid if CDN is offline.
  function initWorksSwiper(){
    const viewport=$('.works-window'),track=$('.works-track');
    viewport.classList.add('swiper');track.classList.add('swiper-wrapper');
    cards.forEach(card=>card.classList.add('swiper-slide'));
    const controls=document.createElement('div');controls.className='works-controls';
    const prev=document.createElement('button'),next=document.createElement('button'),count=document.createElement('span');
    prev.type=next.type='button';prev.className=next.className='circle';
    prev.setAttribute('aria-label','이전 작품 슬라이드');next.setAttribute('aria-label','다음 작품 슬라이드');
    prev.textContent='←';next.textContent='→';count.className='works-slide-count';
    controls.append(count,prev,next);$('.works-foot').append(controls);
    $('.works-foot > span:last-of-type').textContent='DRAG OR SWIPE ⟷';
    $('.works').classList.add('has-swiper');
    worksSwiper=new window.Swiper(viewport,{
      initialSlide:featureIndex,slidesPerView:1.12,spaceBetween:16,speed:motionPreference.matches?0:550,
      grabCursor:true,loop:false,watchOverflow:true,watchSlidesProgress:true,
      preventClicks:true,preventClicksPropagation:true,threshold:8,
      navigation:{prevEl:prev,nextEl:next},
      a11y:{enabled:true,containerMessage:'선택한 프로젝트 슬라이드',containerRoleDescriptionMessage:'캐러셀',itemRoleDescriptionMessage:'슬라이드',slideLabelMessage:'전체 {{slidesLength}}개 중 {{index}}번째 작품',prevSlideMessage:'이전 작품',nextSlideMessage:'다음 작품',firstSlideMessage:'첫 번째 작품입니다',lastSlideMessage:'마지막 작품입니다',scrollOnFocus:false},
      breakpoints:{700:{slidesPerView:2.15,spaceBetween:20},1000:{slidesPerView:3.2,spaceBetween:24},1400:{slidesPerView:4.2,spaceBetween:24}},
      on:{init:swiper=>updateCount(swiper),slideChange:swiper=>updateCount(swiper),resize:swiper=>updateCount(swiper)}
    });
    function updateCount(swiper){count.textContent=`${String(swiper.activeIndex+1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;}
    let pointerFocus=false;
    document.addEventListener('pointerdown',()=>{pointerFocus=true;},true);
    document.addEventListener('keydown',()=>{pointerFocus=false;},true);
    viewport.addEventListener('focusin',e=>{
      // A pointer click must not move its target before the click is delivered.
      if(pointerFocus)return;
      const i=cards.indexOf(e.target.closest('.project'));
      if(i>=0){viewport.scrollLeft=0;worksSwiper.slideTo(i,0);}
    });
    viewport.addEventListener('keydown',e=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
      const i=cards.indexOf(e.target.closest('.project'));if(i<0)return;
      const target=e.key==='Home'?0:e.key==='End'?cards.length-1:Math.max(0,Math.min(cards.length-1,i+(e.key==='ArrowRight'?1:-1)));
      e.preventDefault();worksSwiper.slideTo(target,motionPreference.matches?0:550);
      $('.project-visual',cards[target]).focus({preventScroll:true});
    });
    motionPreference.addEventListener('change',()=>{worksSwiper.params.speed=motionPreference.matches?0:550;});
    window.ScrollTrigger?.refresh();
  }
  const swiperCSS=document.createElement('link');swiperCSS.rel='stylesheet';swiperCSS.href='https://cdn.jsdelivr.net/npm/swiper@11.2.10/swiper-bundle.min.css';
  const swiperJS=document.createElement('script');swiperJS.src='https://cdn.jsdelivr.net/npm/swiper@11.2.10/swiper-bundle.min.js';swiperJS.async=true;
  const ready=element=>new Promise((resolve,reject)=>{element.onload=resolve;element.onerror=reject;});
  Promise.all([ready(swiperCSS),ready(swiperJS)]).then(initWorksSwiper).catch(()=>{/* The complete static grid remains usable. */});
  document.head.append(swiperCSS,swiperJS);
  const links=[];
  const contactLinks=$('#contact-links');
  if(config.contactDraft){
    contactLinks.replaceChildren();
    const note=document.createElement('span');note.className='contact-draft';note.textContent='연락처 샘플 · 실제 정보로 교체 예정';contactLinks.append(note);
    [config.email,config.phone].filter(Boolean).forEach(value=>{const span=document.createElement('span');span.className='contact-value';span.textContent=value;contactLinks.append(span);});
  }
  if(!config.contactDraft&&typeof config.phone==='string'&&/^[+\d() -]{7,22}$/.test(config.phone))links.push([config.phone,'tel:'+config.phone.replace(/[^+\d]/g,'')]);
  if(!config.contactDraft&&typeof config.email==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email))links.push([config.email,`mailto:${encodeURIComponent(config.email).replace('%40','@')}`]);
  if(safeURL(config.github))links.push(['GITHUB',safeURL(config.github)]);
  if(safeURL(config.resume))links.push(['RESUME',safeURL(config.resume)]);
  if(links.length)$('#contact-links').replaceChildren(...links.map(([label,url])=>{const a=document.createElement('a');a.textContent=label;a.href=url;return a;}));

  // Disclosure navigation: Escape and outside click close it; normal Tab order.
  const menu=$('#menu-panel'), toggle=$('.menu-toggle');
  function setMenu(open,restore=false){menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'전체 메뉴 닫기':'전체 메뉴 열기');if(restore)toggle.focus();}
  toggle.addEventListener('click',()=>setMenu(menu.hidden));
  menu.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
  document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!toggle.contains(e.target))setMenu(false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden)setMenu(false,true);});
  document.addEventListener('focusin',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!toggle.contains(e.target))setMenu(false);});

  // Accessible tabs: roving tabindex, arrows, Home and End.
  const tabs=$$('[role=tab]'), panel=$('#about-panel');
  function selectTab(tab,focus=false){
    tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;});
    panel.setAttribute('aria-labelledby',tab.id);
    if(tab.dataset.tab==='experience'&&config.careers?.length){
      const list=document.createElement('ol');list.className='career-list';
      config.careers.forEach(career=>{
        const row=document.createElement('li'),period=document.createElement('span'),title=document.createElement('h3'),role=document.createElement('p'),tasks=document.createElement('ul');
        period.className='career-period';period.textContent=career.period;title.textContent=career.company;role.textContent=career.position+(career.draft?' · 작성 예시':'');
        (career.tasks||[]).forEach(text=>{const item=document.createElement('li');item.textContent=text;tasks.append(item);});
        row.append(period,title,role,tasks);list.append(row);
      });
      panel.replaceChildren(list);if(focus)tab.focus();window.ScrollTrigger?.refresh();return;
    }
    const list=document.createElement('ol');list.className='experience-list';
    (config.tabs?.[tab.dataset.tab]||[]).forEach((text,i)=>{const li=document.createElement('li'),n=document.createElement('span'),p=document.createElement('p');n.textContent=String(i+1).padStart(2,'0');p.textContent=text;p.style.whiteSpace='pre-line';li.append(n,p);list.append(li);});
    panel.replaceChildren(list);if(focus)tab.focus();window.ScrollTrigger?.refresh();
  }
  tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();selectTab(tabs[n],true);}});});

  selectTab(tabs[0]);

  // One detail panel shared by the cards and manual previous/next controls.
  $('.featured-copy > .eyebrow').textContent='PROJECT DETAIL';
  const detailPanel=$('#featured'), detailTitle=$('#featured-title');
  detailTitle.tabIndex=-1;
  const facts=document.createElement('dl');facts.className='project-facts';
  $('.featured-description').insertBefore(facts,$('#feature-link'));
  const menuDetail=$('#menu-panel a[href="#featured"]');
  if(menuDetail)menuDetail.textContent='Project Detail';
  let featureIndex=0;
  function showFeature(index,announce=true){
    featureIndex=(index+cards.length)%cards.length;
    const card=cards[featureIndex],data=selectedProjects[featureIndex]||{},img=$('img',card);
    const number=String(featureIndex+1).padStart(2,'0');
    const content={'#feature-number':number,'#featured-title':data.featuredTitle||$('h3',card).textContent,'#feature-category':data.category||'','#feature-count':`${number} / ${String(cards.length).padStart(2,'0')}`,'#feature-project-name':$('h3',card).textContent};
    Object.entries(content).forEach(([s,text])=>{$(s).textContent=text;$(s).style.whiteSpace='pre-line';});
    $('#feature-image').src=safeURL(data.image)?data.image:img.getAttribute('src');$('#feature-image').alt=data.imageAlt||img.alt;
    cards.forEach((item,i)=>{item.classList.toggle('is-selected',i===featureIndex);const a=$('.project-visual',item);if(i===featureIndex)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
    worksSwiper?.slideTo(featureIndex,motionPreference.matches?0:550);
    const rows=[['담당 범위',data.role],['기여도',data.contribution],['사용 기술',data.tech],['주요 구현 포인트',data.highlights]];
    const visibleRows=rows.filter(([,value])=>Array.isArray(value)?value.some(item=>item.trim()):typeof value==='string'&&value.trim());
    facts.hidden=!visibleRows.length;
    facts.replaceChildren(...visibleRows.map(([label,value])=>{
      const row=element('div'),dt=element('dt','',label),dd=element('dd');
      if(label==='주요 구현 포인트'&&Array.isArray(value)){const list=element('ul');value.filter(item=>item.trim()).slice(0,3).forEach(item=>list.append(element('li','',item)));dd.append(list);}else dd.textContent=Array.isArray(value)?value.filter(Boolean).join(' · '):value;
      row.append(dt,dd);return row;
    }));
    const site=safeURL(data.url),siteLink=$('#feature-link');
    siteLink.hidden=!site;siteLink.textContent='사이트 바로가기 ↗';
    if(site){siteLink.href=site;siteLink.target='_blank';siteLink.rel='noopener noreferrer';siteLink.setAttribute('aria-label',`${$('h3',card).textContent} 사이트 보기 (새 창)`);}else siteLink.removeAttribute('href');
    if(announce){
      $('#feature-status').textContent=`${featureIndex+1}번째 프로젝트: ${data.featuredTitle||$('h3',card).textContent}`;
      if(!motionPreference.matches){
        [detailTitle,$('#feature-image')].forEach(element=>{
          element.getAnimations().forEach(animation=>animation.cancel());
          element.animate([{opacity:.25,translate:'0 14px'},{opacity:1,translate:'0 0'}],{duration:550,easing:'cubic-bezier(.2,.7,.2,1)'});
        });
      }
    }
    window.ScrollTrigger?.refresh();
  }
  function rememberProject(){history.replaceState(null,'',`#project-${cards[featureIndex].dataset.project}`);}
  $('#feature-prev').addEventListener('click',()=>{showFeature(featureIndex-1);rememberProject();});$('#feature-next').addEventListener('click',()=>{showFeature(featureIndex+1);rememberProject();});
  function goToDetail(index,updateHistory=true){
    showFeature(index);
    if(updateHistory)rememberProject();
    requestAnimationFrame(()=>{detailTitle.focus({preventScroll:true});detailPanel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});});
  }
  cards.forEach((card,i)=>$('.project-visual',card).addEventListener('click',e=>{if(worksSwiper&&!worksSwiper.allowClick){e.preventDefault();return;}if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button!==0)return;e.preventDefault();goToDetail(i);}));
  const syncHash=()=>{
    const hash=location.hash.slice(1);
    const i=cards.findIndex(card=>hash===`project-${card.dataset.project}`);
    if(i>=0)goToDetail(i,false);
  };
  showFeature(0,false);syncHash();window.addEventListener('hashchange',syncHash);
  $$('a[href="#top"]').forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();history.replaceState(null,'','#top');
    window.scrollTo({top:0,behavior:motionPreference.matches?'instant':'smooth'});
  }));
  const gsap=window.gsap,ScrollTrigger=window.ScrollTrigger;if(!gsap||!ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({start:0,end:'max',onUpdate:self=>$('.header').style.setProperty('--page-progress',self.progress)});
  // Real text stays accessible as one heading; decorative letters animate independently.
  $('#hero-title').setAttribute('aria-label','WEB PUBLISHER');
  $$('.hero-word').forEach(word=>{
    const text=word.textContent;word.setAttribute('aria-hidden','true');
    word.replaceChildren(...[...text].map(letter=>{const span=document.createElement('span');span.className='hero-char';span.textContent=letter;return span;}));
  });
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
    const words=$$('.hero-word'),replay=$('.motion-replay');
    replay.hidden=false;
    const intro=gsap.timeline({defaults:{ease:'expo.out'}});
    intro.from('.hero-grid',{scaleX:0,transformOrigin:'left',duration:1.4},0)
      .from($$('.hero-char',words[0]),{yPercent:110,opacity:0,duration:1,stagger:.07},.08)
      .from($$('.hero-char',words[1]),{yPercent:110,opacity:0,duration:1.1,stagger:{each:.04,from:'start'}},.2)
      .from('.hero-kicker,.motion-replay',{opacity:0,y:10,duration:.7,stagger:.1},.8);
    const restart=()=>intro.restart();replay.addEventListener('click',restart);
    // Explicit start values and direct scrub keep the top pose deterministic.
    // Intro owns only letters; scroll owns only their parent rows and subtitle.
    const finishIntro=()=>{if(intro.progress()<1)intro.progress(1).pause();};
    // Finish entrance before scrolling: no half-revealed letters on return.
    // A single scrub timeline owns all scroll transforms, including refreshes.
    const scroll=gsap.timeline({scrollTrigger:{id:'hero-type',trigger:'.hero',start:'top top',end:()=>'+='+Math.round($('.hero').offsetHeight*.65),scrub:true,invalidateOnRefresh:true,onUpdate:self=>{if(self.progress>0)finishIntro();}}});
    scroll.fromTo(words[0],{xPercent:0,y:0},{xPercent:-18,y:70,ease:'none',duration:1},0)
      .fromTo(words[1],{xPercent:0,y:0},{xPercent:12,y:35,ease:'none',duration:1},0)
      .fromTo('.hero-intro',{y:0,opacity:1},{y:-45,opacity:0,ease:'none',duration:.75},.25);
    scroll.fromTo('.hero-mark',{rotation:0},{rotation:120,ease:'none',duration:1},0);
    const restoreTop=()=>{if(window.scrollY>2)finishIntro();else scroll.progress(0);};
    restoreTop();
    window.addEventListener('scroll',restoreTop,{passive:true});
    window.addEventListener('pageshow',restoreTop);
    gsap.from('.about-type-line',{x:i=>i%2?85:-85,rotation:i=>i%2?6:-6,opacity:.15,stagger:.12,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:'.about-type',start:'top 88%',toggleActions:'play none none reverse'}});
    const reveal=(selector,trigger,extra={})=>gsap.from(selector,{y:40,opacity:0,duration:.95,stagger:.1,ease:'power3.out',...extra,scrollTrigger:{trigger,start:'top 90%',once:true}});
    reveal('.about-intro > *','.about',{y:28,stagger:.08});
    gsap.fromTo('.discipline-track',{xPercent:4},{xPercent:-10,ease:'none',scrollTrigger:{trigger:'.discipline-band',start:'top bottom',end:'bottom top',scrub:true}});
    reveal('.about-info','.about-info',{x:30,y:0});
    reveal('.works-heading > *','.works-heading',{y:35,stagger:.15});
    gsap.from('.project-visual',{opacity:0,y:12,duration:.4,stagger:.04,ease:'power3.out',scrollTrigger:{trigger:'.works',start:'top 85%',once:true}});
    gsap.from('.featured-image',{opacity:0,y:12,duration:.4,ease:'power3.out',scrollTrigger:{trigger:'.featured',start:'top 88%',once:true}});
    reveal('.featured-copy > .eyebrow,.featured-title,.featured-description','.featured',{y:30,stagger:.13});
    reveal('.feature-summary,.feature-controls','.featured-aside',{y:25});
    reveal('.skills > div','.skills',{y:45,stagger:.12});
    const statement=$('.statement h2');
    const originalStatement=statement.innerHTML;
    const lines=originalStatement.split(/<br\s*\/?\s*>/i);
    statement.replaceChildren(...lines.map(text=>{const line=document.createElement('span');line.className='statement-line';line.textContent=text;return line;}));
    gsap.from('.statement-line',{yPercent:65,rotationX:-45,opacity:0,stagger:.15,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'.statement',start:'top 85%',once:true}});
    reveal('.statement > div','.statement',{x:25,y:0,delay:.2});
    reveal('.footer > *','.footer',{y:15,duration:.65,stagger:.07});
    return()=>{replay.removeEventListener('click',restart);replay.hidden=true;window.removeEventListener('scroll',restoreTop);window.removeEventListener('pageshow',restoreTop);statement.innerHTML=originalStatement;};
  });
  mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',()=>{
    const cursor=$('.cursor'),move=e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`;},hide=()=>cursor.classList.remove('visible'),show=()=>cursor.classList.add('visible');
    window.addEventListener('pointermove',move);window.addEventListener('blur',hide);const targets=$$('[data-cursor]');targets.forEach(el=>{el.addEventListener('pointerenter',show);el.addEventListener('pointerleave',hide);el.addEventListener('click',hide);});
    return()=>{hide();window.removeEventListener('pointermove',move);window.removeEventListener('blur',hide);targets.forEach(el=>{el.removeEventListener('pointerenter',show);el.removeEventListener('pointerleave',hide);el.removeEventListener('click',hide);});};
  });
  document.fonts?.ready.then(()=>ScrollTrigger.refresh());window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
})();
