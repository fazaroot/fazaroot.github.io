document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const khodamMessage = getKhodamMessage(name);
    alert(khodamMessage);
});

function getKhodamMessage(name) {
    const khodamList = [
        'Khodam Beruang Manis',
        'Khodam Kucing Lucu',
        'Khodam Kuda Terbang',
        'Khodam Elang Gagah',
        'Khodam Singa Bijak',
        'Khodam Harimau Ceria',
        'Khodam Burung Beo Pintar',
        'Khodam Kelinci Cepat'
    ];

    const randomIndex = Math.floor(Math.random() * khodamList.length);
    return `${name}, khodammu adalah ${khodamList[randomIndex]}!`;
}
