

var list = document.querySelectorAll("span");
list.forEach(node =>{
    node.addEventListener('click',function (events) {
        var value = node.innerHTML;
        var result = document.querySelector(".result");
        var babe = result.innerHTML
        result.append(value)
      if  (result.innerHTML ==0) {
         result.innerHTML=""
      }
     if (result.innerHTML==Infinity) {
       result.innerHTML=""
     }
      if (value== "C") {
         result.innerHTML=""
      }
     
     
     if (value == "="){
        let solution = eval(babe)
       result.innerHTML=solution;
      
     }
    
    }
    
    )
}

)