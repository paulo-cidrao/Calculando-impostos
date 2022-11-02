
function calcular(){
    // o uso do .value é para indicar que  vai ter que pegar o valor inserido
    const salario = document.getElementById('salario').value;
    const resultado = document.getElementsByClassName('res')[0]
    if(salario == ''){
        // mensagem de erro caso o user não insira nemnhum valor
        resultado.innerHTML = `<p>[ERROR] Verifique o valor do seu sálario</P>`
    }else if (salario<=1903){
        resultado.innerHTML = `<p>Você esta isento do imposto!</p>`
        // os dois && são os testes lógicos
    }else if(salario>1903 && salario<=2826){
        const imposto = salario*0.075
        // to fixed foi usado pra limitar as casas decimais
        resultado.innerHTML = `<p>Você ira pagar ${imposto.toFixed(2)} reais de imposto!</p>`
    }else if( salario >2826 &&  salario<=3751){
        const imposto =  salario*0.15
       resultado.innerHTML = `<p>Você ira pagar ${imposto.toFixed(2)} reais de imposto</p>`
    }else if(salario> 3751 && salario<=4664){
        const imposto = salario*0.225
       resultado.innerHTML = `<p>Você ira pagar ${imposto.toFixed(2)} reais de imposto</p>`
    }else if(salario>4664){
        const imposto = salario*0.275
        resultado.innerHTML = `<p>Você ira pagar ${imposto.toFixed(2)} reais de imposto</p>`
    }
}
    
        
    
        

    

