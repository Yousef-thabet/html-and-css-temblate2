let navBar = document.getElementById("navBar");
function menu(){
   if(navBar.classList =='toggleMenu'){
    navBar.classList.remove('toggleMenu');
    console.log(`yes${navBar.classList}`)
   }else{
    navBar.classList = 'toggleMenu'
   }
}