const value = document.getElementById('value');
const button = document.querySelectorAll('.btn');

button.forEach((btn)=>{
    let count =0;
    btn.addEventListener('click',function(e){


        e.preventDefault();
        const styles = e.currentTarget.classList;

        // count increse /decrease /reset 
        if(styles.contains("decrease")){
            if(count<-100){
                count =0;
            }else{
                count --;
            }
        }else if(styles.contains("increase")){
            if(count>100){
                count =0;
            }else{
                count ++;
            }
        }else{
            if(count<0 || count>0){
                count =0;
            }else{
                count=0;
            }       
         }


        // count background color 

        if(count>0){
            value.style.color = "green";
        }else if(count<0){
            value.style.color =  "red";
        }else{
            value.style.color ="black";
        }

        
            // value of value 
        value.textContent =count;

    })

})