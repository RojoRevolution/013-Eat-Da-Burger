
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const devourBtns = document.querySelectorAll('.burger-btn');

    //Devour Buttons
    if (devourBtns) {
        devourBtns.forEach((button) => {
            button.addEventListener('click', (event) => {
                const id = event.target.getAttribute('data-id');
                console.log("click data-id:" + id);
                const newEaten = event.target.getAttribute('data-eat');
                console.log("click data-eat" + newEaten);

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
                    // Reload the page so the user can see the new quote
                    if (response.ok) {
                        console.log(`changed eat to: ${newEaten}`);
                        location.reload('/');
                    } else {
                        alert('something went wrong!');
                    }
                });
            })
        })
    };

    const submitBtn = document.getElementById('submit');

    if (submitBtn) {
        submitBtn.addEventListener('submit', (event) => {
            event.preventDefault();

            // Grabs the value of the textarea that goes by the name, "quote"
            const newBurger = {
                burger_name: submitBtn.value.trim(),
            };

            // Send POST request to create a new quote
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                console.log(submitBtn.value.trim())
                // document.getElementById('submit').value = '';

                // Reload the page so the user can see the new quote
                console.log('Added a new burger!');
                // location.reload();
            });
        });
    }

});