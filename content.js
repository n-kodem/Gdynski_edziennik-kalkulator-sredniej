
function srednia() {
    /* Szukanie co jest w jakiej kolumnie */
    var rowy = document.getElementsByClassName("dataRow");
    var i;
    var kol = document.getElementsByClassName("colsSortLab");
    var kol_wart, kol_waga, kol_liczona, kol_ocena;
    for (i = 0; i < kol.length; i++) {
        if (kol[i].innerHTML.indexOf("Wartość") > -1) {
            kol_wart = i;
        } else if (kol[i].innerHTML.indexOf("Waga") > -1) {
            kol_waga = i;
        } else if (kol[i].innerHTML.indexOf("liczona") > -1) {
            kol_liczona = i;
        }
        if (kol[i].innerHTML.indexOf("Ocena") > -1) {
            kol_ocena = i;
        }
    }
    var ilosc_Procentow = 0;
    var l = 0.0;
    var m = 0.0;
    for (i = 0; i < rowy.length; i++) {
        if (rowy[i].cells.item(kol_liczona).innerHTML.indexOf("Nie") > -1) {
            continue;
        }
        if (rowy[i].cells.item(kol_ocena).innerHTML.indexOf("/") > -1 || rowy[i].cells.item(kol_liczona).innerHTML.indexOf(".")) {
            ilosc_Procentow += 1;
        }
        var waga = parseFloat(rowy[i].cells.item(kol_waga).innerHTML);
        l += parseFloat(rowy[i].cells.item(kol_wart).innerHTML) * waga;
        m += waga;
    }
    var tab = document.getElementById("gridTable");
    var row = tab.insertRow(tab.rows.length);

    var cell1 = row.insertCell(0);
    cell1.className = "listing";
    var cell2 = row.insertCell(1);
    cell2.className = "listing";
    var cell3 = row.insertCell(2);
    cell3.className = "listing";
    var cell4 = row.insertCell(3);
    cell4.className = "listing";
    var cell5 = row.insertCell(4);
    cell5.className = "listing";
    var cell6 = row.insertCell(5);
    cell6.className = "listing";
    var cell7 = row.insertCell(6);
    cell7.className = "listing";
    var cell8 = row.insertCell(7);
    cell8.className = "listing";
    var cell9 = row.insertCell(8);
    cell9.className = "listing";
    var cell10 = row.insertCell(9);
    cell10.className = "listing";
    var cell11 = row.insertCell(10);
    cell11.className = "listing";
    var row = row.id = "GridRow_8";
    document.getElementById("GridRow_8").className = "dataRow";

    var sred = Math.round(l / m * 100);
    if (sred > 100 || ilosc_Procentow < 0) {
        sred = sred / 100;
        if (sred < 1.41) {
            cell3.innerHTML = 'Idź się <span style="color:#ff0000">UCZYĆ!</span>';
        } else if (sred < 2.75) {
            cell3.innerHTML = 'Ważne, że zdajesz!';
        } else if (sred < 3.60) {
            cell3.innerHTML = '<span style="color:orange">Dostatecznie</span>, i tak trzymaj!';
        } else if (sred < 4.80) {
            cell3.innerHTML = 'Jest <span style="color:green">dobrze</span>, możesz spać spokojnie.';
        } else if (sred < 5.50) {
            cell3.innerHTML = '<span style="color:#ff8000">B</span><span style="color:#ecb858">a</span><span style="color:#80ff00">r</span><span style="color:#00ff00">d</span><span style="color:#00ff80">z</span><span style="color:#00ffff">o </span><span style="color:#007fff">d</span><span style="color:#007fff">o</span><span style="color:#7f00ff">b</span><span style="color:#ff00ff">r</span><span style="color:#ff0080">z</span><span style="color:#ff0000">e</span>!';
        } else {
            cell3.innerHTML = 'No celująco, czyli <br>masz <b>WINA</b>.';
        }
    } else {
        if (sred < 40) {
            cell3.innerHTML = 'Weź się do, <span style="color:red">NAUKI!</span>';
        } else if (sred < 56) {
            cell3.innerHTML = 'No, jakoś <font color=#ff0000>z</font><font color=#da6924>d</font><font color=#b6c048>a</font><font color=#91f46d>j</font><font color=#6dfc91>e</font><font color=#48d6b6>s</font><font color=#2489da>z</font>!';
        } else if (sred < 71) {
            cell3.innerHTML = '<span style="color:orange">Dostatecznie</span>, ale stabilnie!';
        } else if (sred < 85) {
            cell3.innerHTML = 'Jest <span style="color:green">dobrze!</span>';
        } else if (sred < 96) {
            cell3.innerHTML = '<font color=#ff0000>B</font><font color=#e93f15>a</font><font color=#d47a2a>r</font><font color=#bfad3f>d</font><font color=#aad655>z</font><font color=#94f16a>o</font> <font color=#6afa94>d</font><font color=#55e7aa>o</font><font color=#3fc6bf>b</font><font color=#2a98d4>r</font><font color=#1561e9>y</font>!';
        } else {
            cell3.innerHTML = 'No ale żeby aż tak nie mieć<br> <b>Życia</b>.';
        }
        sred = String(sred) + "%";

    }
    cell1.innerHTML = "<strong>Średnia:</strong> " + sred + "<br>";
    cell11.innerHTML = "Made by n_kodem";
    document.body.innerHTML='<div style="right:\" 0px\";"><strong style=" position: absolute; text-align:center; align: center; font-size: 150%; left: 43%" id="dataak"></strong><strong style="text-align:center; position: absolute; right: 1%; font-size: 150%">Gdynia Online</strong></div>' + document.body.innerHTML;
    document.getElementById("dataak").innerHTML = document.getElementById("userInfo").innerHTML;
    document.getElementById("userInfo").remove();
    document.getElementById('footer').getElementsByTagName('center')[0].innerHTML =/*" <img src='icons/edziennikphoto.png' alt=\"banner\" align=\"absmiddle\" id='bannerd'> <br> <br> "*/ "<strong>PROGRAM REGIONALNY  |  Unia Europejska</strong><br><strong>Narodowa Strefa Spójności | Europejski Fundusz</strong><br>";
    document.getElementById('appTitle').innerHTML =' '
        +'<font size="+2">Rozwój elektronicznych usług publicznych w Gdyni</font><br><font size="-1">SYSTEM ED - PLATFORMA MIEJSKA</font>';
}
srednia();