document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
        const inputs = form.querySelectorAll('input');
        let valid = true;
        
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                valid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });
        
        if (!valid) event.preventDefault();
    });
});
