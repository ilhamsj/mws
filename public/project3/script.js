var URL = "data/catatan.txt";

fetch(URL)
    .then(function(response) {
        if (response.status !== 200) {
            console.log("ada masalah " + response.status);
            return;
        }
        return response.text();
    })
    .then(text => console.log(text))
    .catch(err => console.log(err));

    //parameter response mempunyai nilai status (HTTP-Status) 

    // cara gunain git dan push ke github