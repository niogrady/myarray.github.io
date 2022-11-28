function go(){
    numbers = [10,20,5023,2,69,420];
        for(i=0;i<numbers.length;i++){
            document.getElementById("array").innerHTML+=(numbers[i] + ", ");
        }
}


function calcMax(){
    let max=numbers[0];
    for(i=0;i<numbers.length;i++){
        if (numbers[i]>max){
            max=numbers[i];
        }
    }
    document.getElementById("max").innerHTML=(max);
        }

