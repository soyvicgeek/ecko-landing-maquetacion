$(document).ready(function () {
  $(".carousel__products").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  $(".information__accordion-header").click(function () {
    if (!$(".information__accordion-header").hasClass("active")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  async function getData() {
    const data = await fetch("https://rickandmortyapi.com/api/character/2");
    const json = await data.json();
    const { name, image, gender, episode } = await json;

    // const tpl = episode
    //   .map((episodio) => `<li>${episodio}</li>`);

    let html = `
    <img src="${image}" alt="Personaje" class="information__character-body_img">

      <div class="information__character-body_information">

        <h3 class="information__character-body_information-title">Nombre:</h3>
        <p class="information__character-body_information-paragraphs">${name}</p>
        <h3 class="information__character-body_information-title">Género:</h3>
        <p class="information__character-body_information-paragraphs">${gender}</p>
        <h3 class="information__character-body_information-title">Primeros 5 episodios:</h3>
        <ul>
         <li>
          <a href="${episode[0]}" target="_blank">${episode[0]}</a>
         </li>
         <li>
          <a href="${episode[1]}" target="_blank">${episode[1]}</a>
         </li>
         <li>
          <a href="${episode[2]}" target="_blank">${episode[2]}</a>
         </li>
         <li>
          <a href="${episode[3]}" target="_blank">${episode[3]}</a>
         </li>
         <li>
          <a href="${episode[4]}" target="_blank">${episode[4]}</a>
         </li>
        </ul>
      </div>
    `;

    document.querySelector("#character").innerHTML = html;
  }

  getData();
});
