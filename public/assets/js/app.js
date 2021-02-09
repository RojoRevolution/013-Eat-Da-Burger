
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // Variable for the "Eat" button
    const devourBtns = document.querySelectorAll('.burger-btn');

    //Devour Buttons
    if (devourBtns) {
        devourBtns.forEach((button) => {
            button.addEventListener('click', (event) => {
                // Variables for the button id and the boolean value of "eaten"
                const id = event.target.getAttribute('data-id');
                const newEaten = event.target.getAttribute('data-eaten');

                const eatenState = {
                    eaten: newEaten,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eatenState),
                }).then((response) => {
                    // Check that the response is all good
                    if (response.ok) {
                        // Reload the page so the user can see the new burger
                        location.reload('/');
                    } else {
                        alert('something went wrong!');
                    }
                });
            })
        })
    };

    // Add new input + submit button variables
    const addBurgerBtn = document.getElementById('create-form');
    const enteredBurger = document.getElementById('enterBurger');

    if (addBurgerBtn) {
        addBurgerBtn.addEventListener('submit', (event) => {
            // Using a form so prevent the default behavior
            event.preventDefault();

            // Grabs the value of the input field
            const newBurger = {
                burger_name: enteredBurger.value.trim(),
                eaten: 0,
            };

            // Send POST request to create a item in DB based on the name in the input field
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                enteredBurger.value = '';

                // Reload the page
                location.reload();
            });
        });
    }
});