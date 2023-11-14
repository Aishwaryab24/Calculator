

let input=document.getElementsByTagName("input");
var numberOfButtons=document.querySelectorAll('button').length;

let string="";

for(var i=0; i<numberOfButtons; i++){
    document.querySelectorAll('button')[i].addEventListener('click', (e) =>{

        if(e.target.innerHTML=="="){
            string=eval(string);
            if(Number.isInteger(string)){
                document.querySelector("input").value=string;
            }
            else{
                let decimal=string.toString().split('.')[1];
                if(decimal.length>3){
                    document.querySelector("input").value=string.toFixed(3);
                }else{
                    document.querySelector("input").value=string;
                }
                
            }
            
        }
        else if(e.target.innerHTML=="RESET"){
            string="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0, string.length-1);
            document.querySelector("input").value=string;
        }
        else{
            //console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }
        
    })
}