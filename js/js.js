/* ----------------------------------------------------------------------- */
/*                           Submenu Navigation                            */
/* ----------------------------------------------------------------------- */

/*  Show submenu  */
function showsubmenu() {
  document.getElementById("subnav").style.display='block'
};


/*  Hide submenu when clicking outside of div */
window.addEventListener('mouseup', function(event){
  var menu = document.getElementById("subnav");
  if (event.target != menu && event.target.parentNode != menu){
      menu.style.display = 'none';
  }
});


/*  Show submenu  */
function showsubmenu2() {
  document.getElementById("subnav2").style.display='block'
};


/*  Hide submenu when clicking outside of div */
window.addEventListener('mouseup', function(event){
  var menu = document.getElementById("subnav2");
  if (event.target != menu && event.target.parentNode != menu){
      menu.style.display = 'none';
  }
});
