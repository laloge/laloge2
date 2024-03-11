document.addEventListener('DOMContentLoaded', function() {

const backgroundImage = document.getElementById('backgroundImage');
const titreheaderImage = document.getElementById('titreheader');
const menu = document.getElementById('menu');



/* intro*/
function triggerActions() {
  backgroundImage.style.display = 'none';
  titreheader.style.display = 'block';
  menu.style.display = 'block';
}

document.addEventListener('click', triggerActions);

});
