# TypeScript Hakkında
 TypeScript Microsoft tarafından gelişrilmiş,**açık kaynak ve nesne yönelimli bir programlama** dilidir. TypeScript, JavaScript'in yaygınlaşması ve de kullanım alananın artmasıyla birlikte JavaScript'in eksikliklerini gidermek için doğmuştur.

 JavaScript yapısı gereği dinamik bir dildir. Dinamik bir dili çalıştırana dek eğer kod içinde bir hata varsa görme imkanı sunmaz. Bunun yanında daha etkin ve esnek kullanım sunar. JavaScript’in en güçlü yanlarından biri dinamik olmasıdır. Fakat zamanla büyük projelerin içinde kullanılmak istenildiğinde bu dinamik yapısı bir dezavantaja dönüşmüştür.

 Bunun haricinde **statik yapı,sınıflar,interface** gibi büyük projelerde kullanılacak yapılar **JS** içinde yer almıyordu.
 ## TypeScript Nedir?
 TypeScript, uygulama ölçeğinde geliştirme için JavaScript olarak tanımlabilir. C# dilinin tasarımcısı olan **Anders Hejlsberg** tarafından tasarlanmış, ilk sürümü 2012 yılında yayınlanmıştır. İstemci veya sunucu ortamında çalışabilen JS programları yazmak için kullanılabilir ve JS'in tüm özelliklerini içinde barındıran ve ek özellikler eklenmiş bir üst kümesi olarak tanımlanabilir.

 ![image](https://serokell.io/files/0u/0ufu1q21.js-ts.jpg)

 # TypeScript Özellikleri
 JavaScript için gerçerli olan tüm özellikler TypeScript içinde geçerlidir. TS yazabilmek için JS bilmek işin büyük bir oranına hakim olmayı sağlaycaktır. Her JS kodu bir TS kodudur. Ancak TS kodu çalıştırılmadığı sürece JS kodu değildir.
 -  TS olarak olarak yazılan kodların JS çıktısı, bütün JS frameworkleri,araçları ve kütüphaneleri kullanabilir.
 - TypeScript platform-serbest bir dildir ve farklı tarayıcılarda, cihazlarda, işletim sistemlerinde çalışabilir. JavaScript’in çalıştığı herhangi bir ortamda çalışabilir. TypeScript’in yürütülmesi için özel bir sanal makineye veya özel bir çalışma-yürütme ortamına ihtiyacı yoktur.
 # TypeScript ve JavaScript Farkları
 - TS statik veri tiplemesine sahiptir, JS dinamik olarak verileri tanır.
 - TS nesne yönelimli program dilidir, JS betik dilidir.
 - TS ile JS olarak tasarlanmış büyük ve karmaşık projelerin geliştirme aşaması çok daha kısa sürelere indirilebilir.
 - TS interface yapısına sahiptir. JS sahip değildir.
 - TS modülleri desteklerken JS modülleri desteklemez. 
 # TypeScript Kullanımının Avantajları 
 - TypeScript, derleme hatalarını her zaman yalnızca geliştirme sırasında gösterir. Bu nedenle çalışma zamanında hata alma şansı çok daha azdır, oysa JavaScript yorumlanmış bir dildir.
 - TypeScript, kesin olarak yazılan veya statik yazmayı destekleyen bir özelliğe sahiptir. Bu, statik yazmanın derleme zamanında tür doğruluğunu kontrol etmeye izin verdiği anlamına gelir. Bu JavaScript'te mevcut değildir.
 # Installation
 En son sürüm için komut istemcisine 

 `
 npm install -g typescript
 `
 
 yazmak yeterlidir. Linux veya mac kullanıcıları yükleme sıkıntı yaşarsa kodun başına sudo ekleyebilir.

 # TypeScript'i JavaScript'e çevirme 
 VS code üzeriden projenizi gerçekleştiriyorsanız; terminale 

 `
 tsc proje_ismi.ts
 `

 yazmanız durumunda ts uzantılı projenin bulunduğu klasöre proje_ismi.js dosya oluşacaktır.

 # Node.js ile Web Sunucusu Oluşturma

 Web uygulamasının en önemli parçalarından biri web sunucularıdır. Node.js ile bir web sunucusu oluşturmanın çeşitli yolları vardır. Bu projede Node.js çekirdek modülü
 olan http modulü kullanılacaktır. Bunun için ilk olarak server.js dosyası oluşturarak işe koyuluyoruz. Http modülü kullanacağımız için npm paketi olarak indirmemiz lazım. Bunun için terminale;

 `
 npm i http
 `

yazıp çalıştırırsak http modülünü indirmiş oluruz.

 Daha sonra http değişkenine http modülünü require ediyoruz. 

 `
 const http = require('http');
 `

 http modülü ile server oluşturmak için **creatServer** methodunu kullanacağız. **creatServer** methodu callback fonksiyon parametreleri olarak **request** ve **response** nesnelerini alır.
 ```
 const server = http.createServer((req, res)=> {
  console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
});
 ```

 Kendi bilgisayarımız sunucuya çevirdik ama ileştim için gerekli olan portu belirlemedik. Bunun için **listen** methodu kullanarak ile ilgili portu belirtip portu dinlemeye başlayabiliriz.

 ```
const port = 3000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
 ```

 **node server** diyerek uygulamayı başlattıktan sonra **http://localhost:3000/** adresine gidersek, tarayıcının çalıştığını ama bir geri dönüş olmadığını görürüz. Bunun nedeni bir request gönderdik ama bu requeste karşılık bir response olmayışıdır.

 Bunun için kodumuzu şu şekilde düzenlersek;

 ```
const server = http.createServer((req, res)=> {
  console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
  res.write('MERHABA');                  // tarayıcıda MERHABA çıktısını göreceğiz.
  res.end();
});
 ```

 Taracıyımızda MERHABA çıktısı gördük ama örnek olarak **http://localhost:3000/user** gibi farklı requstler gönderirsek sorunla karşılaşırız. Bunun önüne geçmek için **req.url** ile url deki değişikleri yakaladıktan sonra karşılaştırma yaparak sorunu çözebiliriz. Kodumuzun son hali aşağıdaki gibi olacaktır.
 ```
 // node.js ile server ayağa kaldırma 

const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url
    
    if(url==="/"){
        res.write("Anasayfa")
        console.log("İndex Anasayfa",url)
    }else if(url==="/user"){
        res.write("User Sayfasi")
        console.log("User Sayfası",url)
    }else if (url==="/about"){
        res.write("Abaout Sayfasi")
        console.log("About Sayfası",url)
    }else {
        
        res.write("Sayfa bulunamadi")
    }
    res.end()
})
server.listen(3000,()=>{
    console.log("Server başlatıldı")
})

 ```