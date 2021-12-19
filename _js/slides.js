$(function () {
  // Slider das fotos

  $('.mosaico .container .mosaico-wraper').slick({
    centerMode: false,
    slidesToShow: 6,
    arrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },

      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },

      {
        breakpoint: 380,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  })

  // Slider dos tratamentos

  $('.tratamentos .container').slick({
    centerMode:false,
    slidesToShow:3,
    arrows:false,
    infinite:false,
    responsive:[
      {
        breakpoint:768,
        settings:{
          arrows:false,
          dots:true,
          infinite:false,
          centerMode:false,
          slidesToShow:2
        }
      },

      {
        breakpoint:480,
        settings:{
          arrows:false,
          dots:true,
          infinite:false,
          centerMode:false,
          slidesToShow:1
        }
      }
    ]
  })

  // Slider dos depoimentos
  $('.depoimentos .container').slick({
    centerMode:false,
    slidesToShow:1,
    arrows:false,
    dots:true,
    infinite:false,
  })
})
