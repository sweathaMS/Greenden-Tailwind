var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
var closenav = document.getElementById("closenav");
closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

var bigcontainer = document.getElementById("bigcontainer");
console.log(bigcontainer);
var smallcontainer=bigcontainer.querySelectorAll("div")
console.log(smallcontainer);

var input=document.getElementById("input")
input.addEventListener("keyup",function(event)
{
   var entered_value=event.target.value.toUpperCase()
   console.log(entered_value);

   for(i=0;i < smallcontainer.length;i++)
   {
      var product_heading=smallcontainer[i].querySelector("h3").textContent;
      console.log(product_heading);

      if(product_heading.toUpperCase().indexOf(entered_value)<0)
      {
        smallcontainer[i].style.display="none"
      }
      else{
        smallcontainer[i].style.display="block"
      }
      
   }
}
)


