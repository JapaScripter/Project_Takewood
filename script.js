// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    let currentItem = null;
    let images = Array.from(document.querySelectorAll('.dv33 img'));
    let additionalImages = {}; // Para armazenar as imagens adicionais

    // Defina imagens adicionais para cada item
    additionalImages["1"] = [
        "images/GI0/Decor/01.webp",
        "images/GI0/Decor/02.webp",
        "images/GI0/Decor/03.webp",
        "images/GI0/Decor/04.webp",
        "images/GI0/Decor/100.png",
        "images/GI0/Decor/101.png",
        "images/GI0/Decor/102.png",
        "images/GI0/Decor/103.png",
        "images/GI0/Decor/104.png",
        "images/GI0/Decor/105.png"
    ];

    additionalImages["2"] = [
        "images/GI0/Decor/05.webp",
        "images/GI0/Decor/06.webp",
        "images/GI0/Decor/07.webp",
        "images/GI0/Decor/08.webp",
        "images/GI0/Decor/106.png",
        "images/GI0/Decor/107.png",
        "images/GI0/Decor/108.png",
        "images/GI0/Decor/109.png"
    ];
    additionalImages["3"] = [
        "images/GI0/Decor/09.webp",
        "images/GI0/Decor/10.webp",
        "images/GI0/Decor/11.webp",
        "images/GI0/Decor/12.webp",
        "images/GI0/Decor/110.png",
        "images/GI0/Decor/111.png",
        "images/GI0/Decor/112.png",
        "images/GI0/Decor/113.png",
        "images/GI0/Decor/114.png"
    ];
    additionalImages["4"] = [
        "images/GI0/Decor/13.webp",
        "images/GI0/Decor/14.webp",
        "images/GI0/Decor/15.webp",
        "images/GI0/Decor/16.webp",
        "images/GI0/Decor/115.png",
        "images/GI0/Decor/116.png",
        "images/GI0/Decor/117.png",
        "images/GI0/Decor/118.png"
    ];
    additionalImages["5"] = [
        "images/GI0/Decor/17.webp",
        "images/GI0/Decor/18.webp",
        "images/GI0/Decor/19.webp",
        "images/GI0/Decor/20.webp",
        "images/GI0/Decor/119.png"
    ];
    additionalImages["6"] = [
        "images/GI0/Decor/21.webp",
        "images/GI0/Decor/22.webp",
        "images/GI0/Decor/23.webp",
        "images/GI0/Decor/24.webp",
        "images/GI0/Decor/120.png",
        "images/GI0/Decor/121.png",
        "images/GI0/Decor/122.png",
        "images/GI0/Decor/123.png",
        "images/GI0/Decor/124.png",
        "images/GI0/Decor/125.png"
    ];
    additionalImages["7"] = [
        "images/GI0/Decor/25.webp",
        "images/GI0/Decor/26.webp",
        "images/GI0/Decor/27.webp",
        "images/GI0/Decor/28.webp",
        "images/GI0/Decor/126.png",
        "images/GI0/Decor/127.png",
        "images/GI0/Decor/128.png",
    ];
    additionalImages["8"] = [
        "images/GI0/Decor/29.png",
        "images/GI0/Decor/30.png",
        "images/GI0/Decor/31.png",
        "images/GI0/Decor/32.png"
    ];
    additionalImages["9"] = [
        "images/GI0/Decor/33.png",
        "images/GI0/Decor/34.png",
        "images/GI0/Decor/35.png",
        "images/GI0/Decor/36.png",
        "images/GI0/Decor/129.png",
        "images/GI0/Decor/130.png",
        "images/GI0/Decor/131.png",
        "images/GI0/Decor/132.png"
    ];
    additionalImages["10"] = [
        "images/GI0/Decor/37.png",
        "images/GI0/Decor/38.png",
        "images/GI0/Decor/39.png",
        "images/GI0/Decor/40.png",
        "images/GI0/Decor/133.png",
        "images/GI0/Decor/134.png"
    ];
    additionalImages["11"] = [
        "images/GI0/Decor/41.png",
        "images/GI0/Decor/42.png",
        "images/GI0/Decor/43.png",
        "images/GI0/Decor/44.png",
        "images/GI0/Decor/135.png",
        "images/GI0/Decor/136.png",
        "images/GI0/Decor/137.png",
        "images/GI0/Decor/138.png",
        "images/GI0/Decor/139.png",
        "images/GI0/Decor/140.png"
    ];
    additionalImages["12"] = [
        "images/GI0/Decor/45.png",
        "images/GI0/Decor/46.png",
        "images/GI0/Decor/47.png",
        "images/GI0/Decor/48.png",
        "images/GI0/Decor/141.png",
        "images/GI0/Decor/142.png",
        "images/GI0/Decor/143.png"
    ];
    additionalImages["13"] = [
        "images/GI0/Telhado_Vazado/01.webp",
        "images/GI0/Telhado_Vazado/02.webp",
        "images/GI0/Telhado_Vazado/03.webp",
        "images/GI0/Telhado_Vazado/04.webp",
        "images/GI0/Telhado_Vazado/100.png",
        "images/GI0/Telhado_Vazado/101.png",
        "images/GI0/Telhado_Vazado/102.png"
    ];
    additionalImages["14"] = [
        "images/GI0/Telhado_Vazado/05.webp",
        "images/GI0/Telhado_Vazado/06.webp",
        "images/GI0/Telhado_Vazado/07.webp",
        "images/GI0/Telhado_Vazado/08.webp",
        "images/GI0/Telhado_Vazado/103.png",
        "images/GI0/Telhado_Vazado/104.png",
        "images/GI0/Telhado_Vazado/105.png",
        "images/GI0/Telhado_Vazado/106.png",
        "images/GI0/Telhado_Vazado/107.png"
    ];
    additionalImages["15"] = [
        "images/GI0/Telhado_Vazado/13.png",
        "images/GI0/Telhado_Vazado/14.png",
        "images/GI0/Telhado_Vazado/15.png",
        "images/GI0/Telhado_Vazado/16.png",
        "images/GI0/Telhado_Vazado/108.png",
        "images/GI0/Telhado_Vazado/109.png",
        "images/GI0/Telhado_Vazado/110.png"
    ];
    additionalImages["16"] = [
        "images/GI0/Telhado_Vazado/17.png",
        "images/GI0/Telhado_Vazado/18.png",
        "images/GI0/Telhado_Vazado/19.png",
        "images/GI0/Telhado_Vazado/20.png"
    ];
    additionalImages["17"] = [
        "images/GI0/Telhado_Vazado/09.webp",
        "images/GI0/Telhado_Vazado/10.webp",
        "images/GI0/Telhado_Vazado/11.webp",
        "images/GI0/Telhado_Vazado/12.webp"
    ];
    additionalImages["18"] = [
        "images/GI0/Telhado_Vazado/21.png",
        "images/GI0/Telhado_Vazado/22.png",
        "images/GI0/Telhado_Vazado/23.png",
        "images/GI0/Telhado_Vazado/24.png"
    ];
    additionalImages["19"] = [
        "images/GI0/Telhado_Vazado/25.png",
        "images/GI0/Telhado_Vazado/26.png",
        "images/GI0/Telhado_Vazado/27.png",
        "images/GI0/Telhado_Vazado/28.png"
    ];
    additionalImages["20"] = [
        "images/GI0/Telhado_Vazado/29.png",
        "images/GI0/Telhado_Vazado/30.png",
        "images/GI0/Telhado_Vazado/31.png",
        "images/GI0/Telhado_Vazado/32.png"
    ];
    additionalImages["21"] = [
        "images/GI0/Telhado_Vazado/33.png",
        "images/GI0/Telhado_Vazado/34.png",
        "images/GI0/Telhado_Vazado/35.png",
        "images/GI0/Telhado_Vazado/36.png"
    ];
    additionalImages["22"] = [
        "images/GI0/Telhado_Vazado/37.png",
        "images/GI0/Telhado_Vazado/38.png",
        "images/GI0/Telhado_Vazado/39.png",
        "images/GI0/Telhado_Vazado/40.png"
    ];
    additionalImages["23"] = [
        "images/GI0/Telhado_Vazado/41.png",
        "images/GI0/Telhado_Vazado/42.png",
        "images/GI0/Telhado_Vazado/43.png",
        "images/GI0/Telhado_Vazado/44.png"
    ];
    additionalImages["24"] = [
        "images/GI0/Telhado_Vazado/45.png",
        "images/GI0/Telhado_Vazado/46.png",
        "images/GI0/Telhado_Vazado/47.png",
        "images/GI0/Telhado_Vazado/48.png"
    ];
    additionalImages["25"] = [
        "images/GI0/Telhado_Vazado/49.png",
        "images/GI0/Telhado_Vazado/50.png",
        "images/GI0/Telhado_Vazado/51.png",
        "images/GI0/Telhado_Vazado/52.png"
    ];
    additionalImages["26"] = [
        "images/GI0/Telhado_Lonado/01.webp",
        "images/GI0/Telhado_Lonado/02.webp",
        "images/GI0/Telhado_Lonado/03.webp",
        "images/GI0/Telhado_Lonado/04.webp"
    ];
    additionalImages["27"] = [
        "images/GI0/Telhado_Lonado/05.jpg",
        "images/GI0/Telhado_Lonado/06.jpg",
        "images/GI0/Telhado_Lonado/07.jpg",
        "images/GI0/Telhado_Lonado/08.jpg"
    ];
    additionalImages["28"] = [
        "images/GI0/Telhado_Lonado/09.jpg",
        "images/GI0/Telhado_Lonado/10.jpg",
        "images/GI0/Telhado_Lonado/11.jpg",
        "images/GI0/Telhado_Lonado/12.jpg"
    ];
    additionalImages["29"] = [
        "images/GI0/Ombrelone/01.webp",
        "images/GI0/Ombrelone/02.webp",
        "images/GI0/Ombrelone/03.webp",
        "images/GI0/Ombrelone/04.webp"
    ];
    additionalImages["30"] = [
        "images/GI0/Ombrelone/05.webp",
        "images/GI0/Ombrelone/06.webp",
        "images/GI0/Ombrelone/07.webp",
        "images/GI0/Ombrelone/08.webp"
    ];
    additionalImages["31"] = [
        "images/GI0/Ombrelone/09.png",
        "images/GI0/Ombrelone/10.png",
        "images/GI0/Ombrelone/11.png",
        "images/GI0/Ombrelone/12.png"
    ];
    additionalImages["32"] = [
        "images/GI0/Ombrelone/13.png",
        "images/GI0/Ombrelone/14.png",
        "images/GI0/Ombrelone/15.png",
        "images/GI0/Ombrelone/16.png"
    ];
    additionalImages["33"] = [
        "images/GI0/Ombrelone/17.png",
        "images/GI0/Ombrelone/18.png",
        "images/GI0/Ombrelone/19.png",
        "images/GI0/Ombrelone/20.png"
    ];
    additionalImages["34"] = [
        "images/GI0/Ombrelone/21.png",
        "images/GI0/Ombrelone/22.png",
        "images/GI0/Ombrelone/23.png",
        "images/GI0/Ombrelone/24.png"
    ];
    additionalImages["35"] = [
        "images/GI0/Compacto/01.webp",
        "images/GI0/Compacto/02.webp",
        "images/GI0/Compacto/03.webp",
        "images/GI0/Compacto/04.webp"
    ];
    additionalImages["36"] = [
        "images/GI0/Compacto/05.webp",
        "images/GI0/Compacto/06.webp",
        "images/GI0/Compacto/07.webp",
        "images/GI0/Compacto/08.webp"
    ];
    additionalImages["37"] = [
        "images/GI0/Compacto/09.png",
        "images/GI0/Compacto/10.png",
        "images/GI0/Compacto/11.png",
        "images/GI0/Compacto/12.png"
    ];
    additionalImages["38"] = [
        "images/GI0/Compacto/13.png",
        "images/GI0/Compacto/14.png",
        "images/GI0/Compacto/15.png",
        "images/GI0/Compacto/16.png"
    ];
    additionalImages["39"] = [
        "images/GI0/Compacto/17.png",
        "images/GI0/Compacto/18.png",
        "images/GI0/Compacto/19.png",
        "images/GI0/Compacto/20.png"
    ];
    additionalImages["40"] = [
        "images/GI0/Compacto/21.png",
        "images/GI0/Compacto/22.png",
        "images/GI0/Compacto/23.png",
        "images/GI0/Compacto/24.png"
    ];
    additionalImages["41"] = [
        "images/GI0/Compacto/25.png",
        "images/GI0/Compacto/26.png",
        "images/GI0/Compacto/27.png",
        "images/GI0/Compacto/28.png"
    ];
    additionalImages["42"] = [
        "images/GI0/Compacto/29.png",
        "images/GI0/Compacto/30.png",
        "images/GI0/Compacto/31.png",
        "images/GI0/Compacto/32.png"
    ];
    additionalImages["43"] = [
        "images/GI0/Compacto/33.png",
        "images/GI0/Compacto/34.png",
        "images/GI0/Compacto/35.png",
        "images/GI0/Compacto/36.png"
    ];
    additionalImages["44"] = [
        "images/GI0/Compacto/37.png",
        "images/GI0/Compacto/38.png",
        "images/GI0/Compacto/39.png",
        "images/GI0/Compacto/40.png"
    ];
    additionalImages["45"] = [
        "images/GI0/Refrigerada/01.webp",
        "images/GI0/Refrigerada/02.webp",
        "images/GI0/Refrigerada/03.webp",
        "images/GI0/Refrigerada/04.webp"
    ];
    additionalImages["46"] = [
        "images/GI0/Refrigerada/05.png",
        "images/GI0/Refrigerada/06.png",
        "images/GI0/Refrigerada/07.png",
        "images/GI0/Refrigerada/08.png"
    ];
    additionalImages["47"] = [
        "images/GI0/Refrigerada/09.png",
        "images/GI0/Refrigerada/10.png",
        "images/GI0/Refrigerada/11.png",
        "images/GI0/Refrigerada/12.png"
    ];
    additionalImages["48"] = [
        "images/GI0/Refrigerada/13.png",
        "images/GI0/Refrigerada/14.png",
        "images/GI0/Refrigerada/15.png",
        "images/GI0/Refrigerada/16.png"
    ];
    additionalImages["49"] = [
        "images/GI0/Refrigerada/17.png",
        "images/GI0/Refrigerada/18.png",
        "images/GI0/Refrigerada/19.png",
        "images/GI0/Refrigerada/20.png"
    ];
    additionalImages["50"] = [
        "images/GI0/Refrigerada/21.png",
        "images/GI0/Refrigerada/22.png",
        "images/GI0/Refrigerada/23.png",
        "images/GI0/Refrigerada/24.png"
    ];
    additionalImages["51"] = [
        "images/GI0/Refrigerada/25.png",
        "images/GI0/Refrigerada/26.png",
        "images/GI0/Refrigerada/27.png",
        "images/GI0/Refrigerada/28.png"
    ];
    additionalImages["52"] = [
        "images/GI0/Balcao_Dobravel/01.webp",
        "images/GI0/Balcao_Dobravel/02.webp",
        "images/GI0/Balcao_Dobravel/03.webp",
        "images/GI0/Balcao_Dobravel/04.webp"
    ];
    additionalImages["53"] = [
        "images/GI0/Balcao_Dobravel/05.png",
        "images/GI0/Balcao_Dobravel/06.png",
        "images/GI0/Balcao_Dobravel/07.png",
        "images/GI0/Balcao_Dobravel/08.png"
    ];
    additionalImages["54"] = [
        "images/GI0/Personalizado/01.webp",
        "images/GI0/Personalizado/02.webp",
        "images/GI0/Personalizado/03.webp",
        "images/GI0/Personalizado/04.webp"
    ];
    additionalImages["55"] = [
        "images/GI0/Personalizado/05.webp",
        "images/GI0/Personalizado/06.webp",
        "images/GI0/Personalizado/07.webp",
        "images/GI0/Personalizado/08.webp"
    ];
    additionalImages["56"] = [
        "images/GI0/Personalizado/09.webp",
        "images/GI0/Personalizado/10.webp",
        "images/GI0/Personalizado/11.webp",
        "images/GI0/Personalizado/12.webp"
    ];
    additionalImages["57"] = [
        "images/GI0/Personalizado/13.png",
        "images/GI0/Personalizado/14.png",
        "images/GI0/Personalizado/15.png",
        "images/GI0/Personalizado/16.png"
    ];
    additionalImages["58"] = [
        "images/GI0/Personalizado/17.png",
        "images/GI0/Personalizado/18.png",
        "images/GI0/Personalizado/19.png",
        "images/GI0/Personalizado/20.png"
    ];
    additionalImages["59"] = [
        "images/GI0/Personalizado/21.png",
        "images/GI0/Personalizado/22.png",
        "images/GI0/Personalizado/23.png",
        "images/GI0/Personalizado/24.png"
    ];
    additionalImages["60"] = [
        "images/GI0/Personalizado/25.webp",
        "images/GI0/Personalizado/26.webp",
        "images/GI0/Personalizado/27.webp",
        "images/GI0/Personalizado/28.webp"
    ];

    // Adicione mais imagens adicionais conforme necessário para outros itens

    // Mostrar o modal
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "block";
            currentIndex = index;
            currentItem = img.getAttribute('data-item');
            updateModalImages();
        });
    });

    // Fechar o modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Navegar para a imagem anterior
    prevBtn.onclick = () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateModalImages();
    };

    // Navegar para a próxima imagem
    nextBtn.onclick = () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateModalImages();
    };

    // Fechar o modal clicando fora dele
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Atualiza a imagem do modal e a lista de imagens
    function updateModalImages() {
        const imageSrc = images[currentIndex].src;
        modalImage.src = imageSrc;

        let additionalImagesList = additionalImages[currentItem] || [];
        let modalImages = [imageSrc, ...additionalImagesList];
        let currentModalIndex = modalImages.indexOf(imageSrc);

        prevBtn.onclick = () => {
            currentModalIndex = (currentModalIndex === 0) ? modalImages.length - 1 : currentModalIndex - 1;
            modalImage.src = modalImages[currentModalIndex];
        };

        nextBtn.onclick = () => {
            currentModalIndex = (currentModalIndex === modalImages.length - 1) ? 0 : currentModalIndex + 1;
            modalImage.src = modalImages[currentModalIndex];
        };
    }
});



function toggleMenu() {
    var e = document.getElementById("lsm");
    "none" === e.style.display || "" === e.style.display ? e.style.display = "flex" : e.style.display = "none"
}

function toggleoffMenu() {
    var e = document.getElementById("lsm");
    document.getElementById("cmn");
    "none" === e.style.display || "" === e.style.display ? e.style.display = "flex" : e.style.display = "none"
}

function toggleMenu0() {
    var e = document.getElementById("cars");
    "none" === e.style.display || "" === e.style.display ? e.style.display = "flex" : e.style.display = "none"
}

function toggleoffMenu0() {
    var e = document.getElementById("cars");
    document.getElementById("cmn");
    "none" === e.style.display || "" === e.style.display ? e.style.display = "flex" : e.style.display = "none"
}
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});