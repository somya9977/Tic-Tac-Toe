const btns = document.getElementsByClassName("box")
const result = document.getElementById("winner") 
const reset = document.getElementById("reset")

let turnX = true

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

for(let btn of btns)
{
    btn.addEventListener("click", () => {
    if(turnX)
    {
        btn.innerText = "X"
        turnX = false
        winner()
    }
    else
    {
        btn.innerText = "O"
        turnX = true
        winner()
    }
    btn.disabled = true
})
}

function winner()
{
     for(let pattern of win)
     {
       let postion1 = btns[pattern[0]].innerText
       let postion2 = btns[pattern[1]].innerText
       let postion3 = btns[pattern[2]].innerText

       if(postion1 !="" && postion2 != "" && postion3 != "")
       {
        if(postion1 == postion2 && postion2 == postion3)
        {
            result.innerText = `winner is ${postion1}`
            disableAllButtons()
        }
        
       }

     }
}

function disableAllButtons() {
  for (let btn of btns) {
    btn.disabled = true
  }
}

reset.addEventListener("click", () => {
    turnX = true
    for (let btn of btns) {
    btn.innerText = ""
    btn.disabled = false
     result.innerText = ""
  }
})


