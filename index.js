const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonPeople  = document.querySelector("#addPeople");
buttonPeople.addEventListener("click", showPeople);

function showPeople(e){
    e.preventDefault();
    people.style.display = "block";
}

function calculateAmount(e){
    e.preventDefault();
    const water = document.querySelector("#water").value;
    const power = document.querySelector("#power").value;
    const gas = document.querySelector("#gas").value;
    const internet = document.querySelector("#internet").value;
    const people = document.querySelector("#people").value;

    if(water ==="" || power ==="" || gas ==="" || internet ==="" ){
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Pleas enter you information!',
          })
     }


     let amountUtility = +water + + power + + gas + + internet;
     let total = amountUtility/people;
     amountUtility = amountUtility.toFixed(2);
     total = total.toFixed(2);
    
    
     document.querySelector(".dividedSum").textContent = total;

    
}


