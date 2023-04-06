let screen=document.getElementById("input");
let button=document.querySelectorAll("button");
// console.log(button)
let screenValue="";
for (const iterator of button) {
    iterator.addEventListener('click',(e)=>{
        let btntxt=e.target.innerText;
        if(btntxt=="X"){
            btntxt="*"
            screenValue+=btntxt
            console.log(screenValue)
            screen.value = screenValue;


        }
        else if(btntxt=="C"){
            screenValue=""
            screen.value = screenValue;
        }
        // console.log("button click")
        else if(btntxt=="="){
            screenValue=eval(screenValue)
            screen.value=screenValue
        }
        else{
            screenValue+=btntxt
            screen.value=screenValue
        }
    })
    
}
