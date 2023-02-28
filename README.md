# Constructorlar, Prototypelar ve _this_

## JavaScript Temelleri

## Hedefler

- 'this' anahtar kelimesinin dört ilkesini açıklayın ve her birinin kullanımlarını bir örnekle gösterin
- nesneleri oluşturmak için constructor fonksiyonlar tanımlayın ve kullanın

## Giriş

Bu görevleri tamamlamak için constructor fonksiyonlar ve 'this' kelimesi hakkında yeni edindiğiniz bilgilere ihtiyacın olacak.

## Talimatlar

### Görev 1: Proje Kurulumu

VSCode ve Komut Satırını Kullanma:

#### Ön Ayarlar

 Bu *repo*yu *fork*la 
- VS Code veya harici terminalde, _cd_ komutlarıyla, repoyu yüklemek istediğin dizine git (Örn: ```cd C:/Documents/Git/*SprintNo*/```)
* *Fork*ladığın repoyu, kendi repolarından bulup, SSH ile bilgisayarına kopyala. ```git clone *ssh_tabından_kopyaladığın_komut*```
* Clone işlemi bitince, VS Code ile kaynak dosyalarının olduğu klasörü aç (Örn: ```cd *FSWEB-Proje-Adi*```)

#### Node Modüllerini Yükleme

* VS Code ekranında, _package.json_ ile aynı dizinde, *`.gitignore`* isimli bir dosya oluştur. (Başındaki noktayı unutma).
*  Bu dosya çine `/node_modules` yaz ve kaydet.
* VS Code veya harici terminalde, repo olduğu klasöre git (`cd bilgisayarım/Git/SNo/FSWEB-Proje-Adi`)
 Terminalde, *package.json olan dizindeyken*
* `npm install` yaz ve yardımcı paketleri bilgisayarına yükle.

#### Çalışma 

* ```npm run start``` yaz ve projeyi çalışır.  💻
* Projede parçalar tamamlandıkça, yaptıklarını *commit*le. Yeni BRANCH OLUŞTURMA! Hep *main* branch kullan.
* Proje tamamlanınca da, son halini *kendi repondaki* *main* branche `push` yaparak githuba aktar.


### Görev 2 - MVP

`index.js` dosyasını bulun ve tüm testleriniz geçene kadar 1, 2 ve 3 numaralı görevleri tamamlayın.
Yazılı açıklamalar gerektiren ve testi olmayan ek bir görev 4 vardır.

#### Test Etme & Debug Yapma

* VS Code'da "split terminal"e tıklayarak, veya harici terminal ile, ikinci bir terminal ekranı aç.
* İkinci terminalde, ```npm run test``` yaz ve testleri çalıştır.
Bir terminal ekranında testleri çalıştırırken bir diğerinde ise debug yapabileceksin. Kodlarınızda güncelleme yaptıkça ilerlemeyi kontrol için `console.log`u kullanın.

### Görev 3 - Bonus

Hızlı ilerleyenler için, `index.js` içinde bonus görevler de var. MVP'yi tamamladığına emin olmadan, bonus görevlere başlama.

## Kaynaklar

[constructor fonksiyonlar](https://tr.javascript.info/constructor-new)
[What the Beep is `this` in JavaScript?](https://dev.to/brityhemming/what-the-beep-is-this-in-javascript-483o)

