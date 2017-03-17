var imgadr= ['images/logo_eventos_plaza2.png',
              'images/carousel-tienda.jpg',
              'images/carousel-ft.jpg',
              'images/carousel_c.jpg',
              'images/carousel-b.jpg', 
              'images/carousel-n.jpg',
              'images/carousel_bd.jpg',
              'images/carousel_s.jpg'];
var headArray= ['Eventos Plaza',
                'Exhibición', 
                'Fiestas Temáticas', 
                'Comunión', 
                'La boda', 
                'Nacimiento', 
                'El bar de dulces',
                'Sonido'];
var paraArray= ['Haz de tu fiesta un evento inolvidable!',
				'Nuestra exhibición!', 
        'Sorprende a esa persona tan especial para ti con una fiesta única!', 
				'Hoy has recibido el sacramento de la comunión. Recordarlo con alegría.',
        'El matrimonio es para personas especiales, para parejas que aman con un amor excepcional has que dure para siempre!',
        'El nacimiento',
        'El bar de dulces',
				'El Sonido'];
var alt=['imagen logo',
          'imagen exhibición',
          'imagen fiesta temática',
          'imagen comunión',
          'imagen boda',
          'imagen nacimiento',
          'imagen bar de dulce',
          'imagen sonido'];
var cnt= 0;
var timer;
//gradient
//var slider= document.getElementById('slider');??  add script at the end of html?
// onload body ----or---- call the function at the beginning of script?-> script must be top or buttom?  
function sliderTimer()
{
  timer= setInterval(slider, 3500);
}

function slider()
{
  
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  /*slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";*/
  slider.setAttribute("src", ""+imgadr[cnt]+""); /*nuevo codigo*/
  slider.setAttribute("height", "400"); /*nuevo codigo*/
  slider.setAttribute("alt", ""+alt[cnt]+""); /*nuevo codigo*/
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
  cnt++;
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;
    
  var slider= document.getElementById('slider');
  /*slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";*/
  slider.setAttribute("src", ""+imgadr[cnt]+""); /*nuevo codigo*/
  slider.setAttribute("height", "400"); /*nuevo codigo*/
  slider.setAttribute("alt", ""+alt[cnt]+""); /*nuevo codigo*/
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
  
  sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  /*slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";*/
  slider.setAttribute("src", ""+imgadr[cnt]+""); /*nuevo codigo*/
  slider.setAttribute("height", "400"); /*nuevo codigo*/
  slider.setAttribute("alt", ""+alt[cnt]+""); /*nuevo codigo*/
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
    
  sliderTimer();
}
