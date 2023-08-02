var question=document.querySelectorAll(".ques");
var icons=document.querySelectorAll(".icon");
console.log(question);


question.forEach(function(e){
    console.log(e);
    e.addEventListener("click",function(){
        if(e.nextElementSibling.classList.contains("tip")){
          e.nextElementSibling.classList.remove("tip");
         
                      
        }


        
icons.forEach(function(icon){
    icon.addEventListener("click",function(e){
        e.target.parentNode.classList.add("tip");
    })
})



 //console.log(e.nextElementSibling.firstElementChild);



    })
})