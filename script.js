function updateClock() {
    const now = new Date();
    const options = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const timeString = now.toLocaleTimeString('pt-BR', options);
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
