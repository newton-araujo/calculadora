
const resultFinish = document.querySelector(' .result ');
const equal = document.querySelector(' .equal ')

function insert( valor ){
    resultFinish.innerHTML += valor;
}

function clean (){
    resultFinish.innerHTML = '';
}
//Estudar essa função.
function backspace(){
    if(resultFinish.textContent){
        let result = document.getElementById('resultFinish').innerHTML;
        resultFinish.innerHTML=result.substring(0, result.length -1);
    } 
}

//Estudar essa função
function confirm (){
    if(resultFinish.textContent != 'Erro'){
        document.getElementById('resultFinish').innerHTML = eval(resultFinish.innerHTML);
    }
}