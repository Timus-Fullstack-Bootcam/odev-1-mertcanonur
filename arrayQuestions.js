var dolap = ["Shirt", "Pant", "TShirt"];

// 1. dolap arrayindeki son elemanı silip consola yazdırın
dolap.pop();
console.log(dolap);

// 2. dolap arrayindeki ilk elemanı silip yerine “Hat” elemanını gönderip consola yazdırın
dolap.shift();
dolap.unshift("Hat");
console.log(dolap);

// 3. dolap değişkeninin array olup olmadığını kontrol edin ve sonucu bir değişkene eşitleyin
var isArray = Array.isArray(dolap);
console.log(isArray);

// 4. dolap arrayinde “Pant” elemanın olup olmadığını 3 farklı method ile kontrol edin
var includesMethod = dolap.includes("Pant");
var indexOfMethod = dolap.indexOf("Pant") !== -1;
var someMethod = dolap.some(item => item === "Pant");

console.log(includesMethod, indexOfMethod, someMethod);

// 5. dolap arrayindeki elemanların karakter sayısını toplayıp geriye döndürecek fonksiyonu yazın
function toplamKarakterSayisi(arr) {
  return arr.reduce((total, item) => total + item.length, 0);
}

console.log(toplamKarakterSayisi(dolap));

// 6. dolap arrayindki tüm elemanları büyük harfe çevirip yeni bir değişkene 3 farklı yöntemle atayın
var buyukHarf1 = dolap.map(item => item.toUpperCase());
var buyukHarf2 = dolap.map(function(item) {
  return item.toUpperCase();
});
var buyukHarf3 = [...dolap].map(item => item.toUpperCase());

console.log(buyukHarf1, buyukHarf2, buyukHarf3);

// 7. dolap arrayini index sayıları key olacak şekilde objeye çeviriniz
var dolapObjesi = {};
dolap.forEach((item, index) => {
  dolapObjesi[index] = item;
});
console.log(dolapObjesi);

// 8. slice ile splice farkı nedir
// slice: Mevcut array'i değiştirmez, sadece belirtilen aralıktaki elemanları kopyalar.
// splice: Mevcut array'i değiştirir, belirtilen aralıktaki elemanları kaldırır veya ekler.

var orijinalArray = [1, 2, 3, 4, 5];
var slicedArray = orijinalArray.slice(1, 4); // [2, 3, 4]
console.log(slicedArray);

var splicedArray = orijinalArray.splice(1, 3); // [2, 3, 4]
console.log(splicedArray);
console.log(orijinalArray); // [1, 5]


// New Array Questions 

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

// array içinde yinelenen sayıları bulma 

function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }

    return duplicates;
}

const duplicateNumbers = findDuplicates(arr);
console.log("Yinelenen Sayılar:", duplicateNumbers);

//arrayindeki tüm yinelenen sayıları silip yeni bir arrayi 2 farklı method ile oluşturun

// Method 1: Set kullanarak
const uniqueArray1 = [...new Set(arr)];

// Method 2: filter kullanarak
const uniqueArray2 = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log("Unique Array (Method 1):", uniqueArray1);
console.log("Unique Array (Method 2):", uniqueArray2);

//arrayindeki en yüksek ve en düşük değeri 2 farklı methodla bulun

// Method 1: Math.max ve Math.min kullanarak
const maxNumber1 = Math.max(...arr);
const minNumber1 = Math.min(...arr);

// Method 2: reduce kullanarak
const maxNumber2 = arr.reduce((max, current) => (current > max ? current : max), arr[0]);
const minNumber2 = arr.reduce((min, current) => (current < min ? current : min), arr[0]);

console.log("En Yüksek Değer (Method 1):", maxNumber1);
console.log("En Düşük Değer (Method 1):", minNumber1);
console.log("En Yüksek Değer (Method 2):", maxNumber2);
console.log("En Düşük Değer (Method 2):", minNumber2);

//Bu kodun çıktısı nedir ve neden? 
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise.then(function() {
    console.log('Success 1');
}).then(function() {
    console.log('Success 2');
})
.then(function() {
    console.log('Success 3');
})
.catch(function() {
    console.log('Error 1');
}).then(function() {
    console.log('Success 4');
});
/* Bu kodun çıktısı;
Error 1
Success 4 
şeklindedir. Promise döndürülüyor ve hemen reddediliyor. İlk then bloğu promise başarılı olmadığından çalışmaz. Catch bloğu çalışır(Error 1 yazar).
Ardından ise then bloğu çalışır  ve Success 4 yazar. */

// Bu kodun çıktısı nedir neden ?
function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
    .then(function(data) {
        console.log(data);
        return job(true);
    })
    .then(function(data) {
        if (data !== 'victory') {
            throw new Error('Defeat'); // Hata fırlatırken Error nesnesi oluşturulmalı
        }
        return job(true);
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
        return job(false);
    })
    .then(function(data) {
        console.log(data);
        return job(true);
    })
    .catch(function(error) {
        console.log(error);
        return 'Error caught';
    })
    .then(function(data) {
        console.log(data);
        throw new Error('test');
    })
    .then(function(data) {
        console.log('Success:', data.message);
    })
    .catch(function(data) {
        console.log('Error:', data.message);
    });
