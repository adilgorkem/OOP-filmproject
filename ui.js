// User Interface Codes

//1. UI Object
function UI() {

};

//2. addFilmToUI function (project.js 4.4.2)
UI.prototype.addFilmToUI = function (newFilm) {
    //2.1. Table(tbody) Selection
    const filmList = document.querySelector("#films");
    // 2.2.Adding newfilm to Film List(Table) innerHtml(+= means adding newfilm without removing existing one)
    filmList.innerHTML += `
<tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
</tr>
`
}

// 3. Deleting written values in inputs after adding newfilm (This function will be called in project.js.)
UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

// 4. Alerts
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelectorAll(".card-body")[0]; // 4.1. First card-body is selected

    // 4.2. Alert div
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    // 4.3. Appending div to cardbody
    cardBody.appendChild(div);

    // 4.4. Setting display time of alert div
    setTimeout(function () {
        div.remove();
    }, 1000)
}

//5. Loading films from storage to UI
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");
    films.forEach(function (film) {
        filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
        </tr>
`
    })
}

// 6. Deleting film from UI
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}

// 7. Clear All Movies

UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    // Deleting will go on while First element child of Film-list is not null.
    while(filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }
}