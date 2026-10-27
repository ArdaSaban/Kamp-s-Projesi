# Test Notları ve Sonuçları

Bu belge, **BPR201 - İnternet Tabanlı Programlama** dersi projesi kapsamında geliştirilen web sitesinin test senaryolarını ve sonuçlarını içermektedir.

| Test / İşlem | Girdi / İşlem | Beklenen Sonuç | Gerçekleşen Sonuç | Durum |
| :--- | :--- | :--- | :--- | :--- |
| **1. Başlığın tamamını veya bir bölümünü arama** | Arama çubuğuna "Futbol" yazmak | Yalnızca eşleşen kartlar görünür. | Yalnızca "Futbol Turnuvası" kartı göründü, diğerleri gizlendi. | **Geçti** |
| **2. Aynı kelimeyi büyük ve küçük harfle arama** | Önce "basketbol", sonra "BASKETBOL" yazmak | Her iki girişte aynı kartlar görünür. | `toLowerCase()` fonksiyonu sayesinde her iki aramada da aynı kart başarıyla listelendi. | **Geçti** |
| **3. Hiçbir başlıkta bulunmayan ifade yazma** | Arama çubuğuna "xyzkelimesi" yazmak | Sonuç bulunamadı mesajı görünür. | Tüm kartlar gizlendi ve hazırladığımız uyarı mesajı ekranda göründü. | **Geçti** |
| **4. Yalnızca boşluk yazma / Temizle** | Arama kutusunu silmek veya boşluk bırakmak | Tüm etkinlikler görünür. | Arama alanı temizlendiğinde tüm etkinlik kartları tekrar görünür duruma geldi. | **Geçti** |
| **5. Üç sayfanın menü bağlantılarını açma** | Menüden Ana Sayfa, Etkinlikler ve Hakkımızda linklerine tıklamak | Tüm bağlantılar doğru sayfalara gider. | `index.html`, `etkinlikler.html` ve `hakkimizda.html` sayfaları aralarında hatasız geçiş yaptı. | **Geçti** |
| **6. 390 px genişlik ve Tab tuşu kontrolü** | Tarayıcıyı 390px boyutuna daraltıp klavyeden Tab ile gezinmek | Yatay taşma olmaz; arama alanına ve bağlantılara ulaşılır. | `box-sizing: border-box` ve duyarlı tasarım sayesinde taşma oluşmadı; odak halkaları (`focus-visible`) ile öğelere erişildi. | **Geçti** |