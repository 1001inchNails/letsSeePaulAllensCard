
$(document).ready(function() {

    $('#textoBuscador').on('input', function() {
        var inputValue = $(this).val();
        $(".card").addClass("hide");
        $("div.card:contains('" + inputValue + "')").removeClass("hide");

      });

      class Carta {
        constructor(nombre, datos, logo) {
          this.nombre = nombre;
          this.datos = datos;
          this.logo = logo;
        }
      }
      
      let datos = [
        [
            "Jose Perez",
            "All in all, it's just another brick in the wall",
            "01.png"
        ],
        [
            "Pepe Perez",
            "All in all, it's just another brick in the wall",
            "02.png"
        ],
        [
            "Carlos Sanchez",
            "We don't need no education, we don't need no thought control",
            "03.png"
        ],
        [
            "Maria Sanchez",
            "No dark sarcasm in the classroom",
            "04.png"
        ],
        [
            "Ana Castro",
            "Teachers, leave them kids alone. Hey! Teacher! Leave us kids alone!",
            "05.png"
        ],
        [
            "Jose Castro",
            "All in all, you're just another brick in the wall",
            "06.png"
        ],
        [
            "Madeleine Xas",
            "All in all, you're just another brick in the wall",
            "07.png"
        ],
        [
            "Valentin Garcia",
            "Wrong, do it again! Wrong, do it again!",
            "08.png"
        ],
        [
            "Roberto Garcia",
            "If you don't eat your meat, you can't have any pudding!",
            "09.png"
        ],
        [
            "Martin Garcia",
            "How can you have any pudding, if you don't eat your meat?",
            "10.png"
        ],
        [
            "Martina Garcia",
            "You! Yes! You, behind the bike sheds! Stand still, laddie!",
            "11.png"
        ]
    ]
      
      let arrayCartas=[];
      for(let dato of datos){
        console.log(dato);
        arrayCartas.push(new Carta(dato[0],dato[1],dato[2]));
      };
      
      function crearCarta(carta) {
        return `
          <div class="card">
            <div class="logo">
              <img src="${carta.logo}">
            </div>
            <span class="nombre"><i>${carta.nombre}</i></span>
            <div class="datos">
              <p><i><b>${carta.datos}</b></i></p>
            </div>
          </div>
        `;
        
      }

      arrayCartas.forEach(carta => {
        let nuevaCarta = crearCarta(carta);
        $('.main').append(nuevaCarta);
      });
});