//const form = document.getElementById("form");


//form.addEventListenner('submit', function(event) {
 //   event.preventDefault();
    const btn = document.getElementById("calculate");

    btn.addEventListener("click", function (event) {
        event.preventDefault();
        
        const peso = document.getElementById('peso').value;
        const altura = document.getElementById('altura').value;

        const imc = (peso/(altura * altura)).toFixed(2);


        const value = document.getElementById('value');
        let description = '';


        document.getElementById('infos').classList.remove('hidden');

        if (imc<18.5){
            description ="Cuidado! Você está abaixo do peso"
        } else if (imc >= 18.5 && bmi < 25) {
            description = "Você está no peso ideal!";
        }  else if (imc >= 25 && bmi < 30) {
           
           description = "Cuidado! Você está com sobrepeso!";
        }  else if (imc >= 30 && bmi < 35) {
            description = "Cuidado! Você está com obesidade moderada!";
        } else {
            description = "Cuidado! Você está com obesidade morbida!";
        }

        value.textContent = imc.replace('.',',');
        document.getElementById("description").textContent = description;
        
    });
   
