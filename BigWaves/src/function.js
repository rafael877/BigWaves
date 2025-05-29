(function () {
  const slidesMarcas = document.querySelectorAll(".marca");
  const prevBtnMarcas = document.querySelector(".prevMarcas");
  const nextBtnMarcas = document.querySelector(".nextMarcas");
  let currentIndexMarcas = 0;

  function showSlideMarcas(index) {
    const slider = document.querySelector(".marcas");
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtnMarcas.addEventListener("click", () => {
    currentIndexMarcas =
      (currentIndexMarcas - 1 + slidesMarcas.length) % slidesMarcas.length;
    showSlideMarcas(currentIndexMarcas);
  });

  nextBtnMarcas.addEventListener("click", () => {
    currentIndexMarcas = (currentIndexMarcas + 1) % slidesMarcas.length;
    showSlideMarcas(currentIndexMarcas);
  });
})();

//--------------------------------------------------------------

(function () {
  const slidesAvaliacoes = document.querySelectorAll(".avaliacao");
  const prevBtnAvaliacoes = document.querySelector(".prevAvaliacoes");
  const nextBtnAvaliacoes = document.querySelector(".nextAvaliacoes");
  let currentIndexAvaliacoes = 0;

  function showSlideAvaliacoes(index) {
    const slider = document.querySelector(".avaliacoes");
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtnAvaliacoes.addEventListener("click", () => {
    currentIndexAvaliacoes =
      (currentIndexAvaliacoes - 1 + slidesAvaliacoes.length) %
      slidesAvaliacoes.length;
    showSlideAvaliacoes(currentIndexAvaliacoes);
  });

  nextBtnAvaliacoes.addEventListener("click", () => {
    currentIndexAvaliacoes =
      (currentIndexAvaliacoes + 1) % slidesAvaliacoes.length;
    showSlideAvaliacoes(currentIndexAvaliacoes);
  });
})();
