function calculateBMI(){
    let berat = document.getElementById('berat').value
    let tinggi = document.getElementById('tinggi').value

    let bmi = (berat / (tinggi/100)**2)
    // console.log(bmi)

    document.getElementById('heading').innerHTML = "BMI anda ialah : "
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById('message').innerHTML = "Kurang berat badan"
    }else if(bmi >= 18.5 && bmi <= 22.9){
        document.getElementById('message').innerHTML = "Normal"
    }else if(bmi >= 23 && bmi <= 24.9){
        document.getElementById('message').innerHTML = "Kelebihan berat badan"
    }else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById('message').innerHTML = "Obesitas tingkat 1"
    }else{
        document.getElementById('message').innerHTML = "Obesitas tingkat 2"
    }
}

function reload(){
    window.location.reload()
}