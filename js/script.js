document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const khodamMessage = getKhodamMessage(name);
    alert(khodamMessage);
});

function getKhodamMessage(name) {
    const khodamList = [
        'Gragas Warog',
        'Singat Nongko',
        'Ulo kadut',
        'Tomang bodas',
        'Curut clutak',
        'Werog Teammor',
        // 'Khodam Burung Beo Pintar',
        'Khodam Kelinci Cepat'
    ];

    const randomIndex = Math.floor(Math.random() * khodamList.length);
    return `${name}, khodammu adalah ${khodamList[randomIndex]}!`;
}
