(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{const s=performance.now();requestAnimationFrame((function i(c){let o=(c-s)/n;o>1&&(o=1);const l=e(o);t(l),o<1&&requestAnimationFrame(i)}))},t=()=>{const t=[document.querySelector("#modal-open"),document.querySelector("#button-services"),...document.querySelectorAll(".absolute")],n=document.querySelector(".modal-overlay"),s=document.querySelector(".modal-callback"),i=document.querySelector(".modal-close"),c=t=>{const i=t?0:1,c=t?1:0;e({timing:e=>e,draw:e=>{n.style.opacity=i+(c-i)*e,s.style.opacity=i+(c-i)*e,1!==e||t?(n.style.display="block",s.style.display="block"):(n.style.display="none",s.style.display="none")},duration:500})},o=e=>{e.preventDefault(),c(!0)};t.forEach((e=>{e&&e.addEventListener("click",o)})),i.addEventListener("click",(()=>{c(!1)})),window.addEventListener("click",(e=>{e.target===n&&c(!1)}))};t(),(()=>{const e=[{imgSrc:"./images/slide1.jpg",title:"Шаблон сайта электрика",text:"Решите свою проблему прямо сейчас! Низкие цены. <br /> Найдете дешевле - вернем разницу!"},{imgSrc:"./images/slide2.jpg",title:"Другой кричащий заголовок!",text:"В этом блоке можно разместить несколько слайдов на любую тематику, с необходимыми вам заголовками и текстами."},{imgSrc:"./images/slide3.jpg",title:"Услуги электрика",text:"Решите свою проблему прямо сейчас! Низкие цены. <br /> Найдете дешевле - вернем разницу!"}],t=document.querySelector(".top-slider");let n,s=0;function i(e){const t=document.querySelectorAll(".item"),n=document.querySelectorAll(".dot");t[s].classList.remove("active"),n[s].classList.remove("active"),s=e,t[s].classList.add("active"),n[s].classList.add("active"),o(),c()}function c(){n=setInterval((()=>{i((s+1)%e.length)}),3e3)}function o(){clearInterval(n)}t.addEventListener("mouseenter",o),t.addEventListener("mouseleave",c),e.forEach(((e,n)=>{const s=document.createElement("div");s.classList.add("item"),0===n&&s.classList.add("active"),s.innerHTML=`\n                <img src="${e.imgSrc}" alt="Слайд ${n+1}" class="slide-image"/>\n                <div class="slider-overlay"></div>\n                <div class="table">\n                    <div class="table-cell">\n                        <div class="text-container">\n                            <div class="title-h1 big">${e.title}</div>\n                            <div class="text">${e.text}</div>\n                        </div>\n                    </div>\n                </div>\n            `,t.insertBefore(s,t.querySelector(".dots-container"))})),function(){const t=document.querySelector(".dots-container");e.forEach(((e,n)=>{const s=document.createElement("span");s.classList.add("dot"),0===n&&s.classList.add("active"),s.addEventListener("click",(()=>i(n))),t.appendChild(s)}))}(),c()})(),(()=>{const e=[{title:"Аварийный выезд",price:"от 790 руб.",description:"Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",img:"../images/service1.jpg"},{title:"Монтаж или замена электропроводки",price:"от 1790 руб.",description:"Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",img:"../images/service2.jpg"},{title:"Ремонт, замена, перенос розеток",price:"от 990 руб.",description:"Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",img:"../images/service3.jpg"},{title:"Замена электросчетчика",price:"от 990 руб.",description:"Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",img:"../images/service4.jpg"},{title:"Установка, замена люстры",price:"от 790 руб.",description:"Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",img:"../images/service5.jpg"},{title:"Установка светильников",price:"от 490 руб.",description:"Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",img:"../images/service6.jpg"}],n=document.getElementById("carousel"),s=document.getElementById("prevArrow"),i=document.getElementById("nextArrow");let c=0;const o=()=>{n.innerHTML="";for(let s=c;s<c+3;s++)if(e[s]){const i=document.createElement("div");i.className="col-sm-6 col-md-4",i.innerHTML=`\n                  <div class="element relative">\n                      <a class="absolute fancyboxModal" href="#application" data-application="${e[s].title}"></a>\n                      <div class="img-wrapper">\n                          <img src="${e[s].img}">\n                      </div>\n                      <div class="element-content">\n                          <div class="title-h5 upper">${e[s].title}</div>\n                          <div class="element-price">${e[s].price}</div>\n                          <div class="text">${e[s].description}</div>\n                      </div>\n                  </div>`,n.appendChild(i),t()}},l=()=>{o(),s.style.display=0===c?"none":"block",i.style.display=c>=e.length-3?"none":"block"};i.addEventListener("click",(()=>{c<e.length-3&&(c++,l())})),s.addEventListener("click",(()=>{c>0&&(c--,l())})),o()})(),document.querySelectorAll(".accordeon .element .title").forEach((e=>{e.addEventListener("click",(function(){const e=this.parentElement,t=e.classList.contains("active");document.querySelectorAll(".accordeon .element").forEach((e=>{e.classList.remove("active"),e.querySelector(".element-content").style.display="none"})),t||(e.classList.add("active"),e.querySelector(".element-content").style.display="block")}))})),(()=>{const t=document.querySelector(".up");window.onscroll=()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?t.style.display="block":t.style.display="none"},t.addEventListener("click",(()=>{const t=window.scrollY,n=0-t;e({timing:e=>e,draw:e=>{const s=t+n*e;window.scrollTo(0,s)},duration:500})}))})(),(()=>{const e=document.forms["form-callback"],t=document.querySelector("#responseMessage .modal-content");e.addEventListener("submit",(async n=>{n.preventDefault();const s=e.fio.value.trim(),i=e.tel.value.trim();if(!/^[\u0400-\u04FF\s]+$/.test(s))return void alert("Имя должно содержать только кириллицу.");if(!/^[0-9+]+$/.test(i))return void alert("Телефон должен содержать только цифры и '+'");const c=new FormData(e),o=Object.fromEntries(c.entries());t.textContent="",t.classList.remove("error","success"),t.style.display="block",t.textContent="Идет отправка...",e.append(t),await new Promise((e=>setTimeout(e,3e3)));try{await(async e=>{const t=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});if(!t.ok)throw new Error("Network response was not ok ");return t.json()})(o),t.innerHTML="Отправлено!",t.classList.remove("error"),t.classList.add("success"),e.reset()}catch(e){t.innerHTML="Ошибка отправки...",t.classList.remove("success"),t.classList.add("error")}finally{setTimeout((()=>{document.querySelector(".modal-callback").style.display="none",document.querySelector(".modal-overlay").style.display="none",t.style.display="none"}),2e3)}}))})()})();