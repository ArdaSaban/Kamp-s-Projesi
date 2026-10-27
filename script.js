// HTML elemanlarını seçiyoruz
const searchInput = document.getElementById('searchInput');
const articles = document.querySelectorAll('article');
const noResultMsg = document.getElementById('noResultMsg');

// Eğer arama kutusu sayfada varsa dinlemeye başla
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const term = e.target.value.toLowerCase().trim();
        let visibleCount = 0;

        articles.forEach(article => {
            const articleText = article.textContent.toLowerCase();
            
            if (articleText.includes(term)) {
                article.style.display = ''; // Göster
                visibleCount++;
            } else {
                article.style.display = 'none'; // Gizle
            }
        });

        // Uyarı mesajını göster veya gizle
        if (noResultMsg) {
            if (visibleCount === 0) {
                noResultMsg.style.display = 'block';
            } else {
                noResultMsg.style.display = 'none';
            }
        }
    });
}