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

document.getElementById('startTimer').addEventListener('click', function() {
    const endTime = document.getElementById('endTime').value;
    if (!endTime) {
        alert('Por favor, insira um horário válido.');
        return;
    }

    const [endHour, endMinute] = endTime.split(':').map(Number);
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHour, endMinute);

    if (end < now) {
        alert('O horário de término deve ser no futuro.');
        return;
    }

    document.querySelector('.flex').style.display = 'none';

    const timerInterval = setInterval(() => {
        const now = new Date();
        const remainingTime = end - now;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'Prova Finalizada!';
            document.querySelector('.flex').style.display = 'flex';

            return;
        }

        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById('timer').textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});


updateClock();
setInterval(updateClock, 1000);