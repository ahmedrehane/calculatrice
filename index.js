const screen = document.querySelector(".item1")

const btns = document.querySelectorAll("div[type]")

const clear = document.querySelector(".item2")

const D = document.querySelector(".item3")

const A = document.querySelector(".item16")

const operations = document.querySelectorAll("div[value]")

const equality = document.querySelector(".item18")






for(let i =0;i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        console.log(btns[i].innerText)
        let num = btns[i].innerText
        screen.append(num)
    

    })
    }

clear.addEventListener('click',function(){
    screen.innerText = ""
})

D.addEventListener('click',function(){
    screen.innerText = screen.innerText.slice(0,-1)
});


for (let i =0 ; i < operations.length ; i++){
    
        operations[i].addEventListener('click',function(){
        console.log(operations[i].innerText)

    })
}
equality.addEventListener('click', function(){
console.log(equality.innerText)

})
    



let valeur1 = ''

let selectedOp = ''

for(let operation of operations){
  operation.addEventListener('click',function(){
    valeur1 = screen.innerText
  screen.innerText = ""
  console.log("valeur ===>",valeur1)
  selectedOp = operation.innerText
  screen.innerText = ""
  console.log("selected0p ==>",selectedOp)
  })
}





function calculate(x, op, y) {
  if (op === "+") {
    return Number(x) + Number(y);
  } else if (op === "÷") {
    return x / y;
  } else if (op === "×") {
    return x * y;
  } else if (op === "−") {
    return x - y;
  }
}


equality.addEventListener("click", function (){
  let valeur2 = screen.innerText;
  let result = "";
  screen.innerText = "";
  result = calculate(valeur1, selectedOp, valeur2);

  console.log(result);
  return screen.append(result);
} )








   


   


    



    


