    const gomb = document.getElementById("pakli");
    const ujrajatszasgomb = document.getElementById("ujra");
    let elsolap = document.getElementById("kezben");
    let masodiklap = document.getElementById("kezben2");
    let harmadiklap = document.getElementById("kezben3");
    let negyediklap = document.getElementById("kezben4");
    let pont = document.getElementById("pontod");
    let osztoelso = document.getElementById("oszto1");
    let osztomasodik = document.getElementById("oszto2");
    let osztoharmadik = document.getElementById("oszto3");
    let osztonegyedik = document.getElementById("oszto4");
    let nyeres = document.getElementById("pontozas");
    
    // Ellenőrzés
    console.log("Pakli gomb:", gomb ? "MEGVAN" : "HIBA");
    console.log("Ujra gomb:", ujrajatszasgomb ? "MEGVAN" : "HIBA");
    
    // Új játék gomb elrejtése kezdetben
    if (ujrajatszasgomb) {
        ujrajatszasgomb.style.display = "none";
        ujrajatszasgomb.textContent = "Új játék";
    }
    
    // VÁLTOZÓK
    let aszok = 0, kiralyok = 0, damak = 0, bubik = 0, tizesek = 0, kilencesek = 0;
    let nyolcasok = 0, hetesek = 0, hatosok = 0, otosok = 0, negyesek = 0, harmasok = 0, kettesek = 0;
    let osszesHuzas = 0, jatekos_ertek = 0, huzasszam = 0, oszto_ertek = 0, oszto_huzasszam = 0;
    
    function huzzLapot() {
        let huzottLap;
        let lehetHuzni = false;
        
        do {
            huzottLap = Math.floor(Math.random() * 13) + 2;
            
            if (huzottLap === 2 && kettesek < 4) lehetHuzni = true;
            else if (huzottLap === 3 && harmasok < 4) lehetHuzni = true;
            else if (huzottLap === 4 && negyesek < 4) lehetHuzni = true;
            else if (huzottLap === 5 && otosok < 4) lehetHuzni = true;
            else if (huzottLap === 6 && hatosok < 4) lehetHuzni = true;
            else if (huzottLap === 7 && hetesek < 4) lehetHuzni = true;
            else if (huzottLap === 8 && nyolcasok < 4) lehetHuzni = true;
            else if (huzottLap === 9 && kilencesek < 4) lehetHuzni = true;
            else if (huzottLap === 10 && tizesek < 4) lehetHuzni = true;
            else if (huzottLap === 11 && bubik < 4) lehetHuzni = true;
            else if (huzottLap === 12 && damak < 4) lehetHuzni = true;
            else if (huzottLap === 13 && kiralyok < 4) lehetHuzni = true;
            else if (huzottLap === 14 && aszok < 4) lehetHuzni = true;
            
        } while (!lehetHuzni);
        
        // Számlálók növelése
        if (huzottLap === 2) kettesek++;
        else if (huzottLap === 3) harmasok++;
        else if (huzottLap === 4) negyesek++;
        else if (huzottLap === 5) otosok++;
        else if (huzottLap === 6) hatosok++;
        else if (huzottLap === 7) hetesek++;
        else if (huzottLap === 8) nyolcasok++;
        else if (huzottLap === 9) kilencesek++;
        else if (huzottLap === 10) tizesek++;
        else if (huzottLap === 11) bubik++;
        else if (huzottLap === 12) damak++;
        else if (huzottLap === 13) kiralyok++;
        else if (huzottLap === 14) aszok++;
        
        osszesHuzas++;
        return huzottLap;
    }
    
    function osztohuzas() {
        if (oszto_huzasszam >= 4) return;
        
        const he = huzzLapot();
        
        // Egyszerűsített képváltás - első lapra
        if (oszto_huzasszam === 0) {
            if (he === 2) osztoelso.src = "2_of_spades.png";
            else if (he === 3) osztoelso.src = "3_of_spades.png";
            else if (he === 4) osztoelso.src = "4_of_spades.png";
            else if (he === 5) osztoelso.src = "5_of_spades.png";
            else if (he === 6) osztoelso.src = "6_of_spades.png";
            else if (he === 7) osztoelso.src = "7_of_spades.png";
            else if (he === 8) osztoelso.src = "8_of_spades.png";
            else if (he === 9) osztoelso.src = "9_of_spades.png";
            else if (he === 10) osztoelso.src = "10_of_spades.png";
            else if (he === 11) osztoelso.src = "jack_of_spades.png";
            else if (he === 12) osztoelso.src = "queen_of_spades.png";
            else if (he === 13) osztoelso.src = "king_of_spades.png";
            else if (he === 14) osztoelso.src = "ace_of_spades.png";
        }
        // Második lapra
        else if (oszto_huzasszam === 1) {
            if (he === 2) osztomasodik.src = "2_of_spades.png";
            else if (he === 3) osztomasodik.src = "3_of_spades.png";
            else if (he === 4) osztomasodik.src = "4_of_spades.png";
            else if (he === 5) osztomasodik.src = "5_of_spades.png";
            else if (he === 6) osztomasodik.src = "6_of_spades.png";
            else if (he === 7) osztomasodik.src = "7_of_spades.png";
            else if (he === 8) osztomasodik.src = "8_of_spades.png";
            else if (he === 9) osztomasodik.src = "9_of_spades.png";
            else if (he === 10) osztomasodik.src = "10_of_spades.png";
            else if (he === 11) osztomasodik.src = "jack_of_spades.png";
            else if (he === 12) osztomasodik.src = "queen_of_spades.png";
            else if (he === 13) osztomasodik.src = "king_of_spades.png";
            else if (he === 14) osztomasodik.src = "ace_of_spades.png";
        }
        // Harmadik lapra
        else if (oszto_huzasszam === 2) {
            if (he === 2) osztoharmadik.src = "2_of_spades.png";
            else if (he === 3) osztoharmadik.src = "3_of_spades.png";
            else if (he === 4) osztoharmadik.src = "4_of_spades.png";
            else if (he === 5) osztoharmadik.src = "5_of_spades.png";
            else if (he === 6) osztoharmadik.src = "6_of_spades.png";
            else if (he === 7) osztoharmadik.src = "7_of_spades.png";
            else if (he === 8) osztoharmadik.src = "8_of_spades.png";
            else if (he === 9) osztoharmadik.src = "9_of_spades.png";
            else if (he === 10) osztoharmadik.src = "10_of_spades.png";
            else if (he === 11) osztoharmadik.src = "jack_of_spades.png";
            else if (he === 12) osztoharmadik.src = "queen_of_spades.png";
            else if (he === 13) osztoharmadik.src = "king_of_spades.png";
            else if (he === 14) osztoharmadik.src = "ace_of_spades.png";
        }
        // Negyedik lapra
        else if (oszto_huzasszam === 3) {
            if (he === 2) osztonegyedik.src = "2_of_spades.png";
            else if (he === 3) osztonegyedik.src = "3_of_spades.png";
            else if (he === 4) osztonegyedik.src = "4_of_spades.png";
            else if (he === 5) osztonegyedik.src = "5_of_spades.png";
            else if (he === 6) osztonegyedik.src = "6_of_spades.png";
            else if (he === 7) osztonegyedik.src = "7_of_spades.png";
            else if (he === 8) osztonegyedik.src = "8_of_spades.png";
            else if (he === 9) osztonegyedik.src = "9_of_spades.png";
            else if (he === 10) osztonegyedik.src = "10_of_spades.png";
            else if (he === 11) osztonegyedik.src = "jack_of_spades.png";
            else if (he === 12) osztonegyedik.src = "queen_of_spades.png";
            else if (he === 13) osztonegyedik.src = "king_of_spades.png";
            else if (he === 14) osztonegyedik.src = "ace_of_spades.png";
        }
        
        // Pontszám számítás
        if (he >= 2 && he <= 10) {
            oszto_ertek += he;
        } else if (he >= 11 && he <= 13) {
            oszto_ertek += 10;
        } else if (he === 14) {
            oszto_ertek += 11;
        }
        
        oszto_huzasszam++;
        console.log("Osztó húzott: " + he + ", összérték: " + oszto_ertek);
    }
    
    function vegeredmeny(){
        if(oszto_huzasszam === 4){
            console.log("VÉGEREDMÉNY: Játékos " + jatekos_ertek + " vs Osztó " + oszto_ertek);
            
            if(jatekos_ertek > oszto_ertek){
                nyeres.textContent = "Játékos nyert! " + jatekos_ertek + " > " + oszto_ertek;
            } else if(jatekos_ertek < oszto_ertek){
                nyeres.textContent = "Osztó nyert! " + jatekos_ertek + " < " + oszto_ertek;;
            } else {
                nyeres.textContent = "Döntetlen!";
            }
            
            // Új játék gomb megjelenítése
            if (ujrajatszasgomb) {
                ujrajatszasgomb.style.display = "block";
            }
        }
    }
    
    // PAKLI GOMB ESEMÉNYKEZELŐ
    if (gomb) {
        gomb.addEventListener("click", function() {
            console.log("PAKLI gomb megnyomva! Húzás: " + (huzasszam + 1));
            
            if (huzasszam >= 4) {
                console.log("Már 4 lapod van!");
                return;
            }
            
            huzasszam++;
            const he = huzzLapot();
            console.log("Húzott lap: " + he);
            
            // JÁTÉKOS KÉPEK VÁLTÁSA
            if (huzasszam === 1) {
                if (he === 2) { elsolap.src = "2_of_spades.png"; jatekos_ertek += 2; }
                else if (he === 3) { elsolap.src = "3_of_spades.png"; jatekos_ertek += 3; }
                else if (he === 4) { elsolap.src = "4_of_spades.png"; jatekos_ertek += 4; }
                else if (he === 5) { elsolap.src = "5_of_spades.png"; jatekos_ertek += 5; }
                else if (he === 6) { elsolap.src = "6_of_spades.png"; jatekos_ertek += 6; }
                else if (he === 7) { elsolap.src = "7_of_spades.png"; jatekos_ertek += 7; }
                else if (he === 8) { elsolap.src = "8_of_spades.png"; jatekos_ertek += 8; }
                else if (he === 9) { elsolap.src = "9_of_spades.png"; jatekos_ertek += 9; }
                else if (he === 10) { elsolap.src = "10_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 11) { elsolap.src = "jack_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 12) { elsolap.src = "queen_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 13) { elsolap.src = "king_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 14) { elsolap.src = "ace_of_spades.png"; jatekos_ertek += 11; }
            }
            else if (huzasszam === 2) {
                if (he === 2) { masodiklap.src = "2_of_spades.png"; jatekos_ertek += 2; }
                else if (he === 3) { masodiklap.src = "3_of_spades.png"; jatekos_ertek += 3; }
                else if (he === 4) { masodiklap.src = "4_of_spades.png"; jatekos_ertek += 4; }
                else if (he === 5) { masodiklap.src = "5_of_spades.png"; jatekos_ertek += 5; }
                else if (he === 6) { masodiklap.src = "6_of_spades.png"; jatekos_ertek += 6; }
                else if (he === 7) { masodiklap.src = "7_of_spades.png"; jatekos_ertek += 7; }
                else if (he === 8) { masodiklap.src = "8_of_spades.png"; jatekos_ertek += 8; }
                else if (he === 9) { masodiklap.src = "9_of_spades.png"; jatekos_ertek += 9; }
                else if (he === 10) { masodiklap.src = "10_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 11) { masodiklap.src = "jack_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 12) { masodiklap.src = "queen_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 13) { masodiklap.src = "king_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 14) { masodiklap.src = "ace_of_spades.png"; jatekos_ertek += 11; }
            }
            else if (huzasszam === 3) {
                if (he === 2) { harmadiklap.src = "2_of_spades.png"; jatekos_ertek += 2; }
                else if (he === 3) { harmadiklap.src = "3_of_spades.png"; jatekos_ertek += 3; }
                else if (he === 4) { harmadiklap.src = "4_of_spades.png"; jatekos_ertek += 4; }
                else if (he === 5) { harmadiklap.src = "5_of_spades.png"; jatekos_ertek += 5; }
                else if (he === 6) { harmadiklap.src = "6_of_spades.png"; jatekos_ertek += 6; }
                else if (he === 7) { harmadiklap.src = "7_of_spades.png"; jatekos_ertek += 7; }
                else if (he === 8) { harmadiklap.src = "8_of_spades.png"; jatekos_ertek += 8; }
                else if (he === 9) { harmadiklap.src = "9_of_spades.png"; jatekos_ertek += 9; }
                else if (he === 10) { harmadiklap.src = "10_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 11) { harmadiklap.src = "jack_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 12) { harmadiklap.src = "queen_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 13) { harmadiklap.src = "king_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 14) { harmadiklap.src = "ace_of_spades.png"; jatekos_ertek += 11; }
            }
            else if (huzasszam === 4) {
                if (he === 2) { negyediklap.src = "2_of_spades.png"; jatekos_ertek += 2; }
                else if (he === 3) { negyediklap.src = "3_of_spades.png"; jatekos_ertek += 3; }
                else if (he === 4) { negyediklap.src = "4_of_spades.png"; jatekos_ertek += 4; }
                else if (he === 5) { negyediklap.src = "5_of_spades.png"; jatekos_ertek += 5; }
                else if (he === 6) { negyediklap.src = "6_of_spades.png"; jatekos_ertek += 6; }
                else if (he === 7) { negyediklap.src = "7_of_spades.png"; jatekos_ertek += 7; }
                else if (he === 8) { harmadiklap.src = "8_of_spades.png"; jatekos_ertek += 8; }
                else if (he === 9) { negyediklap.src = "9_of_spades.png"; jatekos_ertek += 9; }
                else if (he === 10) { negyediklap.src = "10_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 11) { negyediklap.src = "jack_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 12) { negyediklap.src = "queen_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 13) { negyediklap.src = "king_of_spades.png"; jatekos_ertek += 10; }
                else if (he === 14) { negyediklap.src = "ace_of_spades.png"; jatekos_ertek += 11; }
            }
            
            // Pontszám frissítése
            pont.textContent = jatekos_ertek;
            
            // Ha 4 lapot húztál, az osztó is kap 4 lapot
            if (huzasszam === 4) {
                console.log("4 LAP MEGVAN! Osztó kap lapokat...");
                osztohuzas(); // 1. lap
                osztohuzas(); // 2. lap
                osztohuzas(); // 3. lap
                osztohuzas(); // 4. lap
                
                // Végeredmény kiértékelése
                setTimeout(vegeredmeny, 100);
            }
        });
    }
    
    // ÚJ JÁTÉK GOMB ESEMÉNYKEZELŐ (LENULLÁZÁS)
    if (ujrajatszasgomb) {
        ujrajatszasgomb.addEventListener("click", function() {
            console.log("ÚJ JÁTÉK gomb megnyomva!");
            
            // VÁLTOZÓK LENULLÁZÁSA
            aszok = 0; kiralyok = 0; damak = 0; bubik = 0; tizesek = 0; kilencesek = 0;
            nyolcasok = 0; hetesek = 0; hatosok = 0; otosok = 0; negyesek = 0; harmasok = 0; kettesek = 0;
            osszesHuzas = 0; jatekos_ertek = 0; huzasszam = 0; oszto_ertek = 0; oszto_huzasszam = 0;
            
            // KÉPEK VISSZAÁLLÍTÁSA
            elsolap.src = "jack_of_diamonds.png";
            masodiklap.src = "jack_of_diamonds.png";
            harmadiklap.src = "jack_of_diamonds.png";
            negyediklap.src = "jack_of_diamonds.png";
            
            osztoelso.src = "jack_of_diamonds.png";
            osztomasodik.src = "jack_of_diamonds.png";
            osztoharmadik.src = "jack_of_diamonds.png";
            osztonegyedik.src = "jack_of_diamonds.png";
            
            // SZÖVEGEK VISSZAÁLLÍTÁSA
            pont.textContent = "0";
            nyeres.textContent = "";
            


            // GOMB ENGEDÉLYEZÉSE
            gomb.disabled = false;
            
            // ÚJ JÁTÉK GOMB ELREJTÉSE
            ujrajatszasgomb.style.display = "none";
            
            console.log("Összes változó lenullázva, új játék kész!");
        });
    }
    
function valto() {
    var element = document.body;
    element.classList.toggle("dark");
}
