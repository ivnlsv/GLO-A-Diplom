const carousel = () => { 
    const services = [
        {
          title: "Аварийный выезд",
          price: "от 790 руб.",
          description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
          imgSrc: "../images/service1.jpg"
        },
        {
          title: "Монтаж или замена электропроводки",
          price: "от 1790 руб.",
          description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
          imgSrc: "../images/service2.jpg"
        },
        {
          title: "Ремонт, замена, перенос розеток",
          price: "от 990 руб.",
          description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
          imgSrc: "../images/service3.jpg"
        },
        {
          title: "Замена электросчетчика",
          price: "от 990 руб.",
          description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
          imgSrc: "../images/service4.jpg"
        },
        {
          title: "Установка, замена люстры",
          price: "от 790 руб.",
          description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
          imgSrc: "../images/service5.jpg"
        },
        {
          title: "Установка светильников",
          price: "от 490 руб.",
          description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
          imgSrc: "../images/service6.jpg"
        }
      ];
      
      let currentIndex = 0;
      
      const renderSlides = () => {
        const carouselContainer = document.querySelector('.services-elements');
        carouselContainer.innerHTML = '';
      
        const slidesToShow = services.slice(currentIndex, currentIndex + 3);
        slidesToShow.forEach(service => {
          const slideElement = `
            <div class="col-sm-6 col-md-4">
              <div class="element relative">
                <a class="absolute fancyboxModal" href="#application" data-application="${service.title}"></a>
                <div class="img-wrapper">
                  <img src="${service.imgSrc}">
                </div>
                <div class="element-content">
                  <div class="title-h5 upper">${service.title}</div>
                  <div class="element-price">${service.price}</div>
                  <div class="text">${service.description}</div>
                </div>
              </div>
            </div>
          `;
          carouselContainer.innerHTML += slideElement;
        });
      };
      
      const navigateLeft = () => {
        if (currentIndex > 0) {
          currentIndex -= 1;
          renderSlides();
        }
      };
      
      const navigateRight = () => {
        if (currentIndex < services.length - 3) {
          currentIndex += 1;
          renderSlides();
        }
      };
      
      document.querySelector('.arrow-left').addEventListener('click', navigateLeft);
      document.querySelector('.arrow-right').addEventListener('click', navigateRight);
      
      // Initial render
      renderSlides();
      
}

export default carousel;