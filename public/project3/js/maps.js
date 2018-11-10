var mymap = L.map('mapid').setView([-7.801437, 110.364977], 16);

// leaflet -> menampilkan maps view
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 25,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiaWxoYW1zaiIsImEiOiJjam1sdGc0YW0wYnZiM3BueWd4NWg3bmQzIn0.tqL4pisO6LAAwp0FhJwgKw'
}).addTo(mymap);

// data lokasi dan sponsor berbentuk json
let places = [
    {
        "lokasi": [-7.801947, 110.365234],
        "sponsor" : "Loop station yogyakarta",
    },
    {
        "lokasi": [-7.801299, 110.364789],
        "sponsor" : "0 Kilometer"
    },
    {
        "lokasi" : [-7.803860, 110.364558],
        "sponsor" : "Alun alun yogyakarta"
    },
    {
        "lokasi" : [-7.802202, 110.363915],
        "sponsor" : "Museum sonobudoyo"
    },
    {
        "lokasi" : [-7.800045, 110.366286],
        "sponsor" : "Museum Benteng Vredeburg"
    }
];



for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap)
    .bindPopup(p.sponsor);
}

// menampilkan review
let komentar = "Cafe dekat malioboro";
let par = document.getElementById("review");
let teks = document.createElement("p");
par.appendChild(teks);
teks.innerHTML = komentar;

// menampilkan gambar
let gambar = "images/loop.jpg";

let gmb = document.getElementById("gambar");
let foto = document.createElement("img");
gmb.appendChild(foto);
foto.src=gambar;