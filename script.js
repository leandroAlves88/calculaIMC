function calculaImc(){
    let valorPeso =  document.getElementById("textPeso").value;
    let valorAltura =  document.getElementById("textAltura").value;
    let calculo =  valorPeso/(valorAltura*valorAltura);
    let imc = calculo.toFixed(2);

    console.log("Valor peso "+valorPeso);
    console.log("Valor altura "+valorAltura);
    console.log("imc "+imc);

    if(isNaN(imc)){
        document.getElementById("lblTextNome").innerHTML = "Erro";
    }else if(imc > 30){
        document.getElementById("lblTextNome").innerHTML = imc +" - Obesidade";
    }else if(imc > 24.9 && imc <=30){
        document.getElementById("lblTextNome").innerHTML = imc +" - Sobrepeso";
    }else if(imc > 18.5 && imc <=24.9){
        document.getElementById("lblTextNome").innerHTML = imc +" - Normal";
    }else if(imc < 18.5 ){
        document.getElementById("lblTextNome").innerHTML = imc +" - Magreza";
    }

}
