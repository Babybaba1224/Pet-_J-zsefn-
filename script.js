function osszesOszto(szam) {
    var szamok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            szamok.push(i);
        }
    }
    return szamok;
}
;
function parosDarab(szamok) {
    var darab = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            darab++;
        }
    }
    return darab;
}
;
function fuggvenyhivasPalindrom(callback) {
    var eredmeny = true;
    var szoveg = callback();
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] != szoveg[szoveg.length - 1 - i]) {
            eredmeny = false;
        }
    }
    return eredmeny;
}
