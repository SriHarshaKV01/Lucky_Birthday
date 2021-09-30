const birthDate = document.querySelector("#date-input");
const luckyNumber = document.querySelector("#luckyno-input");
const checkNumber = document.querySelector("#check-number");
const statement = document.querySelector(".statement-op");

checkNumber.addEventListener("click", function checkBirthdateIsLucky(){
    // console.log(birthDate.value , luckyNumber.value);
    const luckyno = luckyNumber.value;
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    // console.log(sum);
    if(luckyno && dob){
        compareValues(sum,luckyno);
    }else{
        statement.innerText = "Kindly enter both the fields 🤷🏻‍♂️"
    }
})

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum,luckyno){
    if(sum % luckyno === 0){
        statement.innerText = "Your Birthdate is lucky 🥳 🤩";
        statement.style.color="green";
    }else{
        statement.innerText = "Your Birthdate is not so lucky 😔 ";
        statement.style.color="red";
    }
}