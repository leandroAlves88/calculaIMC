function calculaImc(){
    let valorPeso =  document.getElementById("textPeso");
    let valorAltura =  document.getElementById("textAltura");
    let Imc =  valorPeso/valorAltura*2;

    document.getElementById("lblTextNome").innerHTML = Imc;
}
