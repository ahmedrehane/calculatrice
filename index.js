const screen = document.querySelector(".item1")

const btns = document.querySelectorAll("div[type]")

const clear = document.querySelector(".item2")



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

    



    


