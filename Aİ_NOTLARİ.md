Aİ YAZILAN PROMPT'LAR VE CEVAPLARI

Yazılan Prompt:

"Yazdığım CSS ve HTML kodlarını 'Code review' mantığıyla inceleyip, tarayıcılarda kutu modelinde (box model) bozulma olmaması için gerekli düzeltmeleri diff formatına benzer şekilde açıklar mısın?"

AI Cevabı:

Kodlar incelendi ve eksik reset tanımlamaları tespit edildi. Tüm elemanların genişlik ve yükseklik hesaplamalarını (padding ve border dahil) standartlaştırmak için evrensel seçiciye *, *::before, *::after { box-sizing: border-box; } kuralı eklenerek tutarsızlık giderildi.

Yazılan Prompt:

"Etkinlikler sayfamdaki etkinlik kartları (<article>) üzerinde kullanıcının yazdığı kelimeye göre anlık filtreleme (live search) yapabilmem için ayrı bir script.js dosyası kodu yazar mısın? Büyük/küçük harf duyarlı olmasın."

AI Cevabı:

DOM elemanlarını seçen, input olayını dinleyen ve textContent ile aranan terimi toLowerCase() kullanarak karşılaştıran bir JavaScript kodu yazıldı. Eşleşmeyen kartlara display: none uygulanarak anlık arama motoru işlevselliği sağlandı ve koda script.js olarak bağlandı.

Yazılan Prompt:

"Hazırladığım web sitesi için tüm sayfalarda ortak kullanılacak, mobil cihazlarda ve tabletlerde düzgün görünen, CSS Grid ve Flexbox kullanan modern bir style.css kodu yazar mısın?"

AI Cevabı:

CSS Grid ile esnek bir kart yapısı (grid-template-columns: repeat(3, 1fr)) oluşturuldu. @media sorguları (media queries) kullanılarak ekran genişliği daraldığında (tabletlerde 2 sütun, telefonlarda tek sütun) tasarımın otomatik uyum sağlaması (responsive) sağlandı. Renk paleti kulüp temasına uygun olarak optimize edildi.