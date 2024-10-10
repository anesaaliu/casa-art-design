let slideIndices = [0, 0, 0, 0, 0, 0];
const slides = [
    ["img/marmorino.jpeg", "img/marmorino1.jpeg", "img/marmorino2.jpeg"], // Fotot për slideshow 1
    ["img/Stone.jpeg", "img/Stone1.jpeg", "img/Stone2.jpeg"],  // Fotot për slideshow 2
    ["img/Microciment.jpeg", "img/Microciment1.jpeg", "img/Microciment2.jpeg"],  // Fotot për slideshow 3
    ["img/foto2.jpg", "img/foto2_2.jpg", "img/foto2_3.jpeg"],  // Fotot për slideshow 4
    ["img/Scandinavia.jpeg", "img/Scandinavia1.jpeg", "img/Scandinavia2.jpeg"],  // Fotot për slideshow 5
    ["img/llajsne.jpeg", "img/llajsne1.jpeg", "img/llajsne2.jpeg"]  // Fotot për slideshow 6
];

function showSlides(n, no) {
  var slides = document.getElementsByClassName("mySlides" + no);
  if (n >= slides.length) {
      slideIndices[no - 1] = 0; 
  }
  if (n < 0) {
      slideIndices[no - 1] = slides.length - 1; 
  }
  
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndices[no - 1]].style.display = "block";
} 


function plusSlides(n, sliderId) {
  slideIndices[sliderId - 1] += n;
  showSlides(slideIndices[sliderId - 1], sliderId);
}


for (let i = 1; i <= slideIndices.length; i++) {
  showSlides(0, i); 
}

