/* ----------------------------------------------------------------------- */
/*                           NAVBAR ACTIVE BUTTON                          */
/* ----------------------------------------------------------------------- */

var btns = document.querySelectorAll(".navbtn");
Array.from(btns).forEach(item => {
   item.addEventListener("click", () => {
      var selected = document.getElementsByClassName("navactive");
      selected[0].className = selected[0].className.replace(" navactive", "");
      item.className += " navactive";
   });
});

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