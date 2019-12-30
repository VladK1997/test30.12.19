(function() {
   let promotionSlider = new Swiper('.promotion', {
       slidesPerView: 1,
       initialSlide: 0,
       autoplay:{
           delay: 3000,
       },
       pagination: {
           el: '.promotion__pag',
           clickable: true,
       },
   });
})();
(function () {
    let itemsWrapper = document.getElementById("itemsWrap");
    window.addEventListener("click", function (e) {
        if(e.target.closest("[data-view]") && e.target.closest("[data-view]").hasAttribute("data-view")){
            let data = e.target.closest("[data-view]").dataset;
            console.log(e.target.closest("[data-view]").classList.remove("property-grid-view"));
            itemsWrapper.classList.remove("property-"+data.viewremove+"-view");
            itemsWrapper.classList.add("property-"+data.view+"-view");
        }
    })

    window.addEventListener("resize",function(){
       if(window.innerWidth <= 768){
           itemsWrapper.classList.remove("property-list-view");
           itemsWrapper.classList.add("property-grid-view");
       }
    });
})();
(function () {
    let burger = document.getElementById("headerBurger");
    let list = document.getElementById("headerList");
    burger.addEventListener("click", function () {
        list.classList.toggle("active");
    })
})();
(function(){
    const animationTime = 1000;
    const animationFrameCount = 1;
    let jon = document.getElementById("toOffer");
    let scroll = document.querySelector("[data-scrolloffer]");
    let SmothScroll = function (elementScrollFrom,elementScrollTo) {
        let self = this;
        self.elTo = elementScrollTo;
        self.elFrom = elementScrollFrom;
        self.elFrom.addEventListener("click",function(){
            let startY = window.scrollY;
            let stopY = self.elTo.offsetTop - 140;
            let timer = animationTime/(stopY - startY);
            let currentPos = startY;
            let interval = setInterval(function () {
                    if (currentPos >= stopY) {
                        clearInterval(interval)
                        return
                    }
                    currentPos = currentPos + 20;
                    window.scrollTo(0, currentPos);
                }
            ,timer);
        })
    }
    let btn = new SmothScroll(jon,scroll)
})();