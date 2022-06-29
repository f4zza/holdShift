const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
    // check if they had the shift key down
    // check that they are checking it
    let inBetween = false
    if(e.shiftKey && this.checked){
        //loop every checkbox
        checkboxes.forEach(checkbox =>{
            console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween
                console.log(`check`)
            }
            if (inBetween){
                checkbox.checked= true
            }
        })
    }
    lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))