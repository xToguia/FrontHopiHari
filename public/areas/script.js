document.addEventListener('DOMContentLoaded', async function() {
    const area = "Mistieri";
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/brinquedos/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        authorization: "Bearer" +token
    });
});
