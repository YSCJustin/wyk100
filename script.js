document.addEventListener('DOMContentLoaded', async function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        })
    })
    const hidden = document.querySelectorAll('.hidden');
    hidden.forEach((item) => {
        observer.observe(item);
    })
})

