import modal from './modal'
const carousel = () => { 
  const services = [
    {
        title: "Аварийный выезд",
        price: "от 790 руб.",
        description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
        img: "../images/service1.jpg"
    },
    {
        title: "Монтаж или замена электропроводки",
        price: "от 1790 руб.",
        description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
        img: "../images/service2.jpg"
    },
    {
        title: "Ремонт, замена, перенос розеток",
        price: "от 990 руб.",
        description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
        img: "../images/service3.jpg"
    },
    {
        title: "Замена электросчетчика",
        price: "от 990 руб.",
        description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
        img: "../images/service4.jpg"
    },
    {
        title: "Установка, замена люстры",
        price: "от 790 руб.",
        description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
        img: "../images/service5.jpg"
    },
    {
        title: "Установка светильников",
        price: "от 490 руб.",
        description: "Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки.",
        img: "../images/service6.jpg"
    }
];
  
  const carousel = document.getElementById("carousel");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");
  let currentIndex = 0;

  const renderCarousel = () => {
       carousel.innerHTML = '';
      for (let i = currentIndex; i < currentIndex + 3; i++) {
          if (services[i]) { 
              const serviceCard = document.createElement('div');
              serviceCard.className = "col-sm-6 col-md-4";
              serviceCard.innerHTML = `
                  <div class="element relative">
                      <a class="absolute fancyboxModal" href="#application" data-application="${services[i].title}"></a>
                      <div class="img-wrapper">
                          <img src="${services[i].img}">
                      </div>
                      <div class="element-content">
                          <div class="title-h5 upper">${services[i].title}</div>
                          <div class="element-price">${services[i].price}</div>
                          <div class="text">${services[i].description}</div>
                      </div>
                  </div>`;
              carousel.appendChild(serviceCard);
              modal();
           }
      } 
  }

  const updateCarousel = () => {
      renderCarousel();
      prevArrow.style.display = currentIndex === 0 ? 'none' : 'block';
      nextArrow.style.display = currentIndex >= services.length - 3 ? 'none' : 'block';
  }

  nextArrow.addEventListener('click', () => {
      if (currentIndex < services.length - 3) {
          currentIndex++;
          updateCarousel();
      }
  });

  prevArrow.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

    // Initial render
  
  renderCarousel();
    }

export default carousel;