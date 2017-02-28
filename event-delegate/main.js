window.onload = function() {
  var ul = document.querySelector("ul");
  var p = document.getElementById("info");
  ul.addEventListener("click", function(e){
    var curr_element = e.target;

    if (curr_element.nodeName == "A"){
      if(curr_element.matches(".legal")){
        p.innerHTML = "Clicked child: " + curr_element.text;
      }else{
        p.innerHTML = "You have clicked not legal child";
      }
    }else if (curr_element.nodeName == "LI"){
      p.innerHTML = "You have clicked the li";
    }
  });
}


function registerClickHandler(e) {
  e.parentElement.remove();
}
