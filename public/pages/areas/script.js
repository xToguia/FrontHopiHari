document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area')
    const token = String(localStorage.getItem('token').replaceAll('"', ''));
    console.log(token);
    const response = await fetch(`http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });
    const data = await response.json().resultado;
    console.log(data);

    for(var brinquedo of data.resultados) {
        console.log(brinquedo);

        const grid = document.querySelector(".rides-grid");
        grid.innerHTML = grid.innerHTML + `<div class="ride-card">
                <div class="ride-image" style="background-image: url('https://blog.hopihari.com.br/wp-content/uploads/2019/07/Montezum-2.png')"></div>
                <div class="ride-info">
                    <h3 class="ride-name">Montezum</h3>
                    <div class="ride-time">35 min</div>
                    <span class="ride-status status-busy">Muito Movimentado</span>
                </div>
            </div> `
}
});
