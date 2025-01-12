const $cardHolderName = document.querySelector(".card-holder-name") // 1. Je sélectionne les éléments avec le JavaScript
const $cardHolder = document.querySelector(".card-holder")
const $enterCvc = document.querySelector(".enter-cvc")
const $cvcNumber = document.querySelector(".cvc-number")
const $monthDate = document.querySelector(".get-months")
const $monthNumber = document.querySelector(".exp-months")
const $yearhDate = document.querySelector(".get-years")
const $yearNumber = document.querySelector(".exp-years")
const $cardEnter = document.querySelector(".cardNumber2")
const $cardNumber = document.querySelector(".card-number")

// Faites moi maintenant le cryptogramme visuel (CVC)

console.log($cardHolderName) // 2. J'affiche l'élément dans la console
console.log($cardHolder)
console.log($enterCvc)
console.log($cvcNumber)
console.log($monthDate)
console.log($monthNumber)
console.log($yearhDate)
console.log($yearNumber)
console.log($cardEnter)
console.log($cardNumber)


$cardHolderName.addEventListener("keyup", function(e) { // 3. Vous ajoutez un event listener sur l'élément
    console.log("====")
    console.log(e.target.value)

    const holderName = e.target.value // String
    
    if (holderName.length === 0) { // Si le champ $cardHolderName est vide (il n'est pas rempli)
        $cardHolder.textContent = "Jane Appleseed" // Alors le nom par défault qui apparait sur la carte est Jane Appleseed
    } else { // Par contre, Si le champ $cardHolderName est rempli
        $cardHolder.textContent = holderName // Alors le nom qui apparait sur la carte est contenu dans holderName
    }
})

$enterCvc.addEventListener("keyup", function(e) { 
    console.log("====")
    console.log(e.target.value)

    const cvc = e.target.value // Par défault, c'est une String

    console.log(typeof cvc)
    console.log(Number(cvc))
    console.log(typeof Number(cvc))
    
    if (cvc.length === 0) {
        $cvcNumber.textContent = "432"
    } else if (isNaN(Number(cvc))) {
        console.log("Ne fais rien")
    } else { 
        $cvcNumber.textContent = cvc
    }
})

$monthDate.addEventListener("keyup", function(e) { 
    console.log("====")
    console.log(e.target.value)

    const month = e.target.value // Par défault, c'est une String

    console.log(typeof month)
    console.log(Number(month))
    console.log(typeof Number(month))
    
    if (month.length === 0) {
        $monthNumber.textContent = "00"
    } else if (isNaN(Number(month))) {
        console.log("Ne fais rien")
    } else { 
        $monthNumber.textContent = month
    }
})

$yearhDate.addEventListener("keyup", function(e) { 
    console.log("====")
    console.log(e.target.value)

    const year = e.target.value // Par défault, c'est une String

    console.log(typeof year)
    console.log(Number(year))
    console.log(typeof Number(year))
    
    if (year.length === 0) {
        $yearNumber.textContent = "00"
    } else if (isNaN(Number(year))) {
        console.log("Ne fais rien")
    } else { 
        $yearNumber.textContent = year
    }
})

$cardEnter.addEventListener("keyup", function(e) { 
    console.log("====")
    console.log(e.target.value)

    const cardnum = e.target.value // Par défault, c'est une String

    console.log(typeof cardnum)
    console.log(Number(cardnum))
    console.log(typeof Number(cardnum))
    
    if (cardnum.length === 0) {
        $cardNumber.textContent = "0000"
    } else if (isNaN(Number(cardnum))) {
        console.log("Ne fais rien")
    } else { 
        $cardNumber.textContent = cardnum
    }
})