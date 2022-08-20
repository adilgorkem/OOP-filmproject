// Main JS File


//1.Film Form SeLection
const form = document.getElementById("film-form");
//1.1. Selection of the 3 inputs in film-form
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// 7. Deleting films from UI
// 7.1. CardBody selection
const cardbody = document.querySelectorAll(".card-body")[1];

// 9. Delete All Movies
// 9.1. Clear Button Selection

const clear = document.querySelector("#clear-films");


//2.UI Object Initializing 
const ui = new UI();

//3.ALL EVENTS
eventListeners();
function eventListeners(){
    //4.Run addFilm function when film-form is submitted
    form.addEventListener("submit",addFilm);

// 6. Getting all films form local storage to ui when DOMContentLoaded
document.addEventListener("DOMContentLoaded",function(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
})

// 7.2. When cardbody is clicked run deleteFilm function
cardbody.addEventListener("click",deleteFilm);

// 9.2. Clear event
clear.addEventListener("click",clearAllFilms);
}

//4. addFilm 
function addFilm(e){

//4.2. Setting input values to constants
const title = titleElement.value;
const director = directorElement.value;
const url = urlElement.value;

//4.3. Giving alert in case of at least 1 of title, director and url values is "".
if(title === "" || director === "" || url === ""){
    //Error message
    ui.displayMessages("Please fill all inputs...","danger");
}

//4.4. IF NOT CREATE NEW FILM
else {
    // 4.4.1. newFilm Object
    const newFilm = new Film(title,director,url); // Film constructor is created in film.js.
    // 4.4.2. Adding new film to UI
    ui.addFilmToUI(newFilm);
    //5.1. Adding new film to storage
    storage.addFilmtoStorage(newFilm);
    //4.4.3. Success Alert
    ui.displayMessages(title + " added successfully","success");
}

//4.5. Clear Inputs (ui.js 3)
ui.clearInputs(titleElement,urlElement,directorElement);



    e.preventDefault();
}

// 5. Storage Object
const storage = new Storage();


// 7.3 deleteFilm Function

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);

        // 8. Deleting from local storage
        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); // Filmi sil linkinin(a etiketi) parent'ının (td) iki önceki kardeşinin(Film ismi yazan element) text içeriği: Film İsmi
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        //Sildikten sonra mesaj
        ui.displayMessages("Deleting " + e.target.parentElement.previousElementSibling.previousElementSibling.textContent + "movie is done successfully","success");
    }
}

// 9.3. Clear All films Function

function clearAllFilms(){
    if(confirm("Are you sure?")){
        const films = document.querySelectorAll("#delete-film");
        const numberoffilms = films.length;
        console.log(numberoffilms);
        ui.clearAllFilmsFromUI(); // Deleting from UI
        ui.displayMessages("All movies are deleted","warning");
        ui.displayMessages(numberoffilms + " movies are removed.","success");
        storage.clearAllFilmsFromStorage(); // Deleting from storage
        
    }

}
