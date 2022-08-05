function getLength() {
  var element1 = document.getElementById('input1');
  var element2 = document.getElementById('input2');
  var length1 = element1.value.length ;
  var length2 = element2.value.length ;
  

  var rnd =  (Math.floor(Math.random() * 100 + 1));


  if (length1 === 0 || length2 === 0) {
    document.getElementById("rezultat").innerHTML = "Molim, unesite podatke.";
  } else if (rnd > 21 && rnd < 50) {
    document.getElementById("rezultat").innerHTML = "Mozete se vise potruditi. " + rnd + " %";
  } else if (rnd > 51 && rnd < 70) {
    document.getElementById("rezultat").innerHTML = "Veoma dobro stanje, ali moze biti napretka. " + rnd + " %";
  } else if (rnd > 71) {
    document.getElementById("rezultat").innerHTML = "Odlicno stanje, volite se kao zadruzni konji. " + rnd + " %";
  } else if (rnd >1 && rnd <20) {
    document.getElementById("rezultat").innerHTML = "Veoma lose, bolje potrazite druge partnere " + rnd + " %";
  }


}
