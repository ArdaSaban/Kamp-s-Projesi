// Arama inputunu ve tüm etkinlik kartlarını (<article>) seçiyoruz
const searchInput = document.getElementById('searchInput');
const articles = document.querySelectorAll('article');

// Arama kutusuna her harf yazıldığında tetiklenecek olay
searchInput.addEventListener('input', function(e) {
    // Yazılan metni küçük harfe çeviriyoruz (büyük/küçük harf sorununu önlemek için)
    const term = e.target.value.toLowerCase().trim();

    // Her bir etkinlik kartını kontrol ediyoruz
    articles.forEach(article => {
        // Kartın içindeki tüm metinleri (tarih, başlık, açıklama, yer) küçük harfe çevirip alıyoruz
        const articleText = article.textContent.toLowerCase();

        // Eğer aranan kelime bu kartın içinde geçiyorsa göster, geçmiyorsa gizle
        if (articleText.includes(term)) {
            article.style.display = ''; // Varsayılan görünümüne döndürür
        } else {
            article.style.display = 'none'; // Gizler
        }
    });
});