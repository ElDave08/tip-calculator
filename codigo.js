
const buttons = document.querySelectorAll(".tip-option");
const tip_result = document.querySelector(".tip-amount");
const total = document.querySelector(".tip-total");
const custom = document.querySelector(".tip-option-custom");
const people_amount = document.querySelector(".people-amount");
const bill_amount = document.querySelector(".bill-amount");
const reset = document.querySelector(".reset-button");

let used = [false, false, false]

const values = () => {
    let people = document.querySelector(".people-amount");
    people = people.value

    let bill = document.querySelector(".bill-amount");
    bill = bill.value
    let perc = document.querySelector(".perc-selected")


    if (document.querySelector(".perc-selected")) {
        if (custom.value == '') {
            if (perc.name) {
                perc = parseFloat(perc.name);
            } else {
                perc = 0
            }
        } else if (custom.value > 0) {
            perc = custom.value / 100
        } else return [false, 2]


        if (people == '' || people < 1) {
            return [false, 3]
        } else if (bill == '' || bill < 0) {
            return [false, 1]
        } else {
            if (document.querySelector(".wrong")) {
                old = document.querySelector(".wrong");
                old.classList.remove("wrong");
                old.setAttribute("id","")
            }
            return [true, bill, perc, people];
        }

    } else return false
}

custom.addEventListener("click", (e) => {

    selected = e.target
    if (document.querySelector(".perc-selected")) {
        old = document.querySelector(".perc-selected");
        old.classList.remove("perc-selected")
        used[1] = true
    }
    selected.classList.add("perc-selected");
})

custom.addEventListener("keyup", (e) => {

    let val = values()

    if (val[0]) {

        let tip = ((val[1] * val[2]) / val[3]);

        let tt = (tip + val[1] / val[3]);

        tip_result.textContent = `$${tip.toFixed(2)}`
        total.textContent = `$${tt.toFixed(2)}`

    } else  if (used[0] && used[1] && used[2]){
        switch (val[1]) {
            case 1:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                bill_amount.classList.add("wrong");
                bill_amount.setAttribute("id","wrong");
                break;
            case 2:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                custom.classList.add("wrong");
                custom.setAttribute("id","wrong");
                custom.value=""
                break;
            case 3:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                people_amount.classList.add("wrong");
                people_amount.setAttribute("id","wrong");
                break;
        }

    }
})

people_amount.addEventListener("keyup", (e) => {

    used[2] = true

    let val = values()

    if (val[0]) {

        let tip = ((val[1] * val[2]) / val[3]);

        let tt = (tip + val[1] / val[3]);

        tip_result.textContent = `$${tip.toFixed(2)}`
        total.textContent = `$${tt.toFixed(2)}`

    } else  if (used[0] && used[1] && used[2]){
        
        
        switch (val[1]) {
            case 1:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                bill_amount.classList.add("wrong");
                bill_amount.setAttribute("id","wrong");
                break;
            case 2:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                custom.classList.add("wrong");
                custom.setAttribute("id","wrong");
                custom.value=""
                break;
            case 3:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                people_amount.classList.add("wrong");
                people_amount.setAttribute("id","wrong");
                break;
        }

    }
})


bill_amount.addEventListener("keyup", (e) => {

    used[0] = true

    let val = values()

    if (val[0]) {

        let tip = ((val[1] * val[2]) / val[3]);

        let tt = (tip + val[1] / val[3]);

        tip_result.textContent = `$${tip.toFixed(2)}`
        total.textContent = `$${tt.toFixed(2)}`

    } else  if (used[0] && used[1] && used[2]){
        switch (val[1]) {
            case 1:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                bill_amount.classList.add("wrong");
                bill_amount.setAttribute("id","wrong");
                break;
            case 2:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                custom.classList.add("wrong");
                custom.setAttribute("id","wrong");
                custom.value=""
                break;
            case 3:
                if (document.querySelector(".wrong")) {
                    old = document.querySelector(".wrong");
                    old.classList.remove("wrong");
                    old.setAttribute("id","");
                }
                people_amount.classList.add("wrong");
                people_amount.setAttribute("id","wrong");
                break;
        }

    }
})

buttons.forEach(tip => {
    tip.addEventListener("click", (e) => {
        selected = e.target
        if (document.querySelector(".perc-selected")) {
            old = document.querySelector(".perc-selected");
            old.classList.remove("perc-selected")
            
            custom.value = ""
        }

        selected.classList.add("perc-selected")
        used[1] = true;
        let val = values()  

        if (val[0]) {

            let tip = ((val[1] * val[2]) / val[3]);

            let tt = (tip + val[1] / val[3]);

            tip_result.textContent = `$${tip.toFixed(2)}`
            total.textContent = `$${tt.toFixed(2)}`

        } else if (used[0] && used[1] && used[2]){
            switch (val[1]) {
                case 1:
                    if (document.querySelector(".wrong")) {
                        old = document.querySelector(".wrong");
                        old.classList.remove("wrong");
                        old.setAttribute("id","");
                    }
                    bill_amount.classList.add("wrong");
                    bill_amount.setAttribute("id","wrong");
                    break;
                case 2:
                    if (document.querySelector(".wrong")) {
                        old = document.querySelector(".wrong");
                        old.classList.remove("wrong");
                        old.setAttribute("id","");
                    }
                    custom.classList.add("wrong");
                    custom.setAttribute("id","wrong");
                    custom.value=""
                    break;
                case 3:
                    if (document.querySelector(".wrong")) {
                        old = document.querySelector(".wrong");
                        old.classList.remove("wrong");
                        old.setAttribute("id","");
                    }
                    people_amount.classList.add("wrong");
                    people_amount.setAttribute("id","wrong");
                    break;
            }
    
        }
    })



});

reset.addEventListener("click", (e) => {
    used[0] = false
    used[1] = false
    used[2] = false
    bill_amount.value = ''
    people_amount.value = ''
    custom.value = ''
    if (document.querySelector(".perc-selected")) {
        old = document.querySelector(".perc-selected");
        old.classList.remove("perc-selected")
    }
    tip_result.textContent = `$0.00`
    total.textContent = `$0.00`
})


