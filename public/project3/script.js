var URL = "data/catatan.json";
let t = document.getElementById("hasil");

// fetch(URL)
//     .then(response => response.json())
    
//     .then(res => {
//         t.textContent = res.judul + " di " + res.lokasi;
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

fetch("data/catatan.json")
    .then(response => {
        console.log(response.headers.get("Content-Type"));
        console.log(response.headers.get("Date"));
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.type);
        console.log(response.url);

        if(response.ok) {
            console.log("ok"); 
            return response.text;
        } else {
            throw response.statusText;
        }
    })

    //parameter response mempunyai nilai status (HTTP-Status) 
    // cara menampilkan data
    // menggunakan file json
    // sederhanain kode biar enak dibaca
    // gampang kan