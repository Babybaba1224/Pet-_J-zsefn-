function osszesOszto(szam:number):number[]{
    var szamok:number [] = [];
    for(var i:number = 1; i <= szam; i++){
        if(szam % i ==0){
            szamok.push(i);
        }
    }
    return szamok;
};

function parosDarab(szamok:number[]):number{
    var darab:number = 0;

    for(var i:number = 0; i < szamok.length; i++){
        if(szamok[i] % 2 == 0){
            darab++;
        }
    }
    return darab;
};

function fuggvenyhivasPalindrom(callback: () => string):boolean{
    var eredmeny:boolean = true;
    var szoveg = callback();

    for(var i:number = 0; i < szoveg.length; i++){
        if(szoveg[i] != szoveg[szoveg.length -1 -i]){
            eredmeny = false;
        }
    }
    return eredmeny;
}
