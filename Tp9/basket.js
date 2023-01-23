"use strict";

var ajax = new XMLHttpRequest();

ajax.onreadystatechange = function () {
    var state = ajax.readyState;
    var result;
    if (state == 1) {
        result = "opened";
    }
    if (state == 2) {
        result = "headers_received";
    }
    if (state == 3) {
        result = "loading";
    }
    if (state == 4) {
        result = "done";
    }
    console.log(state + '  ' + result);

    if (ajax.readyState != 4) {
        return;
    }
    if (ajax.status != 200) {
        console.log("error " + ajax.status);
    } else {
        var resultat = JSON.parse(ajax.responseText);
        console.log(resultat);
        var tableau = document.getElementById("basket");
        tableau.innerHTML = "<th>Name</th><th>Quantity</th>"

        var somme = 0;
        tableau.innerHTML += resultat.map(elem =>  {

            return "<tr><td>" + elem.name + "</td><td>" + elem.quantity + "</td></tr>"
            
        }).join("");
    }
};

ajax.open("GET", "fruits.json", true);
ajax.overrideMimeType("application/json");


ajax.send();
