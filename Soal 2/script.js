var text = "Saat meng*cat tembok, agung dib_antu oleh Raihan."
//var text = "Berapa u{mur minimal[ untuk !mengurus ktp?"
//var text = "Masing-masing anak menda(patkan uang jajan ya=ng berbe&da."

//note => menjalankan line 2, line 1 dan 3 comment, jalankan line 3, line 1 dan 2 comment

const myTest = text.split(' ')
// var testttt = Boolean(myTest.match(/^[A-Za-z0-9]*$/))
console.log(myTest)
var counting = 0

myTest.forEach(element => {
//  counting += 1;
    if (Boolean(element.match(/^[\w.\-\?]+$/))) {
    	counting++;
    }
})

console.log(Boolean(myTest[0].match(/^[\w.\-\?]+$/)))
console.log(Boolean(myTest[1].match(/^[\w.\-\?]+$/)))
console.log(Boolean(myTest[2].match(/^[\w.\-\?]+$/)))
console.log(Boolean(myTest[3].match(/^[\w.\-\?]+$/)))
console.log(Boolean(myTest[4].match(/^[\w.\-\?]+$/)))
console.log(Boolean(myTest[5].match(/^[\w.\-\?]+$/)))
// console.log(Boolean(myTest[6].match(/^[\w.\-\?]+$/)))

document.getElementById("demo").innerHTML = counting;
// document.getElementById("demo").innerHTML = test.trim().split(/\s+/).length;