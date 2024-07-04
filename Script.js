// JavaScript source code

//Expected outcome = link button to first image

window.addEventListener('load', function (event) {
    printinformation()
    
})

function printinformation() {
    const button = document.getElementById('click_here')
    button.addEventListener('click', () => {
        // function code
        const h1 = document.getElementById('information')

        h1.innerHTML = "<p>Axolotls are native to only one location in the world, that being Lake Xochimilco within the valley of Mexico as well as being found within the canals and waterways of Mexico City. Due to their neotenic state, their habitat being a high altitude body of water reflects this. They are endangered due to water pollution within the waters making some areas inhospitable as well as overfishing and habitat loss through the rapid development of Mexico City.</p>"

    })
}

//TO DO - give the button a second function to remove the text it displays on every other click