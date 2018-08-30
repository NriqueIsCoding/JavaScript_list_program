
var headLine = document.getElementById('our-headLine');
var listItems = document.getElementById('our-list').getElementsByTagName('li');
var ourButton = document.getElementById('our-button');
var ourList = document.getElementById('our-list');
var counter = 1;

ourList.addEventListener("click", function activateItem(e){

  if (e.target.nodeName == "LI") {

    headLine.innerHTML = e.target.innerHTML;
      for(i = 0; i < e.target.parentNode.children.length; i++){
        e.target.parentNode.children[i].classList.remove('active');
      }
    e.target.classList.add("active");

  }

});

ourButton.addEventListener("click", function createNewItem(){

ourList.innerHTML += ("<li class=\"list-group-item\">" + "something new " + counter +"</li>");
counter++;
});


// for( i = 0; i < listItems.length; i++ ){
//
//   listItems[i].addEventListener("click", function activateItem(){
//     headLine.innerHTML = this.innerHTML;
//     for(i = 0; i < listItems.length; i++){
//       listItems[i].classList.remove('active');
//     }
//     this.classList.add("active");
//   });
//
// }
