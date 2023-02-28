// Aşağıdaki görevleri tamamla

/*
  GÖREV 1
    - `Kisi` adında bir Constructor'ı oluştur, 'isim ve 'yas' argümanları alsın.
    - Tüm `Kisi` örnekleri boş bir `mide` dizisi ile yüklensin.
    - `Kisi` örneklerine `.ye("birYemek")` yeteneği ekle:
        + `.ye()` parametre olarak bir string alır, bu parametre bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Eğer, `mide` dizisinde 10 eleman varsa `.ye()` metodu çalışmamalı.
    - Sonra, `Kisi` örneklerine `.bosalt()` yeteneği de ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - `Kisi` örneklerine `.toString()` metodu ekleyin:
        + Bu metotla, `isim` ve `yas`i içeren bir string döndürmelisin. (Örn: "Mary, 50")
*/

/*function Kisi(/!* kodlar buraya *!/) {
  /!* kodlar buraya *!/
}*/

function Kisi(isim, yas) {
  this.isim = isim;
  this.yas = yas;
  this.mide = [];
  this.ye = function(yemek){
    if(this.mide.length < 10) {
      this.mide.push(yemek);
    }
  }
  this.bosalt = function(){
    this.mide = [];
  }
  this.toString = function(){
    return `${this.isim}, ${this.yas}`
  }

}

/*
  GÖREV 2
    - `Araba` adında bir Constructor oluştur ve parametre olarak `model` ve `yakitTuketimi` kullan.
    - Tüm `Araba` örneklerinin:
        + `benzinDeposu` 0 olarak yüklenir
        + `kilometreSaati`i de 0 olarak yüklen,r
    - `Araba`ların `.doldur(litre)` metoduyla benzinliğe gidip `benzinDeposu` doldurmasını sağla.
      + Bu metot, 'litre' parametresiyle yüklenen yakıt miktarını alır.
      + girilen `litre`yi de `benzinDeposu`na ekler.
    - BONUS: `Araba`lara `.kullan(mesafe)` özelliği de ekleyin. `mesafe`:
        + `kilometreSaati`nin artmasına neden olmalı.
        + `yakitTuketimi` de hesaba katılarak `yakitposuın` azalmasını sağlamalıdır.
    - BONUS: Bir `araba`nın benzini biterse, `kullan` metodu aşağıdaki mesajı paylaşır:
        +  "x kilometrede benzinim bitti!" x değişkeni `kilometreSaati`ndeki sayı olmalıdır.
*/

/*function Araba(/!* kodlar buraya *!/) {
  /!* kodlar buraya *!/
}*/

function Araba(model,yakitTuketimi) {
  this.model = model;
  this.yakitTuketimi = yakitTuketimi;
  this.benzinDeposu = 0;
  this.kilometreSaati = 0;
  this.doldur = function(litre){
    this.benzinDeposu += litre;
  }
  this.kullan = function(mesafe){
    this.kilometreSaati += mesafe;
    this.benzinDeposu -= mesafe / this.yakitTuketimi;
    if(this.benzinDeposu <=0)
    {
      const extraMile = this.benzinDeposu * this.yakitTuketimi;
      this.kilometreSaati += extraMile;
      this.benzinDeposu = 0;
      console.log(`${this.kilometreSaati} kilometrede benzinim bitti !`);
    }
  }
}
let bmw = new Araba("320 i",15);
bmw.doldur(65);
bmw.kullan(125);
bmw.kullan(950);
console.log(bmw.benzinDeposu);
console.log(bmw.kilometreSaati);

/*
  GÖREV 3
  Kendi cümlelerinle "this" kelimesinin 4 prensibini açıklayın:
  1.
  2.
  3.
  4.
*/


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as(){
  console.log('Kodlar sorunsuz çalışıyor!');
  return 'sa';
}
as();
module.exports = {
  as,
    Kisi,
    Araba
/*'Bebek'*/
}
