// Local Storage Codes

//1. Storage Object

function Storage() {

};
// 2. addFilmStorage function
Storage.prototype.addFilmtoStorage = function (newFilm) {
    // 2.5. Getting array from storage function
    let films = this.getFilmsFromStorage();
    // 2.6. Pushing newFilm to array
    films.push(newFilm); //The array here is an object unlike the aray in to-do list project (they were string) [{title:"aadffda",director:"fdfsfs",url:"nkddnalkfs"}]

    //2.7. Adding films again to local storage
    localStorage.setItem("films",JSON.stringify(films));
}
//2.1. Local storage'dan film çekme işlemini sürekli tekrarlayacağımız için bunu ayrıca bir fonksiyon olarak yazıyoruz.
Storage.prototype.getFilmsFromStorage = function () {
    let films;
    // 2.2. If films key at local storage doesn't have any value films array is []
    if (localStorage.getItem("films") === null) {
        films = [];
    }
    // 2.3. IF NOT
    else {
        // 2.4. Getting films from local storage as an array with JSON.parse
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

//3. Deleting film from storage
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage(); //3.1. getting films from storage
    films.forEach(function(film,index){
if(film.title === filmTitle){ // 3.2. storage'dan gelen filmlerle sildiğimiz filmin isminin eşleşme kontrolü
    //Splice
    films.splice(index,1); // If there is a match, delete. Splice(index,1): Find the index, go 1 step forward including the index found and delete. Briefly, find the index and delete.
}
    })

    localStorage.setItem("films",JSON.stringify(films)); // Storage update
}

// 4. Delete All Movies

Storage.prototype.clearAllFilmsFromStorage = function (){
    localStorage.removeItem("films");
}