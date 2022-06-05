const table = document.getElementById("myP");
const watched = document.getElementById("defaultCheck1");
const movieName = document.getElementById("recipient-name");
const movieYear = document.getElementById("inputMovieYear");
const actors = document.getElementById("actor-name");
const country = document.getElementById("countries");
const notice = document.getElementById("notice");

class Film {
  constructor(seena, namea, yeara, actorsa, countrya, notea) {
    this.seena = seena;
    this.namea = namea;
    this.yeara = yeara;
    this.actorsa = actorsa;
    this.countrya = countrya;
    this.notea = notea;
  }
  get getSeen() {
    return this.seena;
  }
  get getName() {
    return this.namea;
  }
  get getYear() {
    return this.yeara;
  }
  get getActors() {
    return this.actorsa;
  }
  get getCountry() {
    return this.countrya;
  }
  get getNotes() {
    return this.notea;
  }
  set setSeen(seenac) {
    this.seena = seenac;
  }
  set setName(namec) {
    this.namea = namec;
  }
  set setYear(yearac) {
    this.yeara = yearac;
  }
  set setActor(actorac) {
    this.actorsa = actorac;
  }
  set setContry(contrijac) {
    this.countrya = contrijac;
  }
  set setNote(notac) {
    this.notea = notac;
  }
}
const jedan = new Film(
  false,
  "The movie 1",
  1930,
  ["Actor 1", "Actor 2", "Actor 3", "Actor 4"],
  "US",
  "This is a note about the movie"
);
const dva = new Film(
  false,
  "The movie 2",
  1930,
  ["Actor 1", "Actor 2", "Actor 3", "Actor 4"],
  "US",
  "This is a note about the movie"
);
const tri = new Film(
  false,
  "The movie 3",
  1930,
  ["Actor 1", "Actor 2", "Actor 3", "Actor 4"],
  "US",
  "This is a note about the movie"
);

let movies = [jedan, dva, tri];

const tableFill = () => {
  let markup = ``;
  let brojanje = 0;
  movies.forEach((movie) => {
    brojanje++;
    if (movie.getSeen) {
      markup += `
      <tr class="blockRow" id="${brojanje}">
      
      <td><input onchange="promjena(${brojanje})"
      class="form-check-input"
      type="checkbox"
      checked
      id="${brojanje}a"
      />
      </td>
      <td>${movie.getName}</td>
      <td>${movie.getYear}</td>
      <td>${movie.getCountry}</td>
      <td>${movie.getNotes}</td>
      <td>${movie.getActors}</td>
      </tr>`;
    } else {
      markup += `
      <tr class="blockRow red" id="${brojanje}">
      
      <td><input onchange="promjena(${brojanje})"
      class="form-check-input"
      type="checkbox"
      value="${movie.getSeen}"
      id="${brojanje}a"
      />
      </td>
      <td>${movie.getName}</td>
      <td>${movie.getYear}</td>
      <td>${movie.getCountry}</td>
      <td>${movie.getNotes}</td>
      <td>${movie.getActors.join(", ")}</td>
      </tr>`;
    }
  });
  table.innerHTML = markup;
};

tableFill();

function myFunction() {
  if (movieName.value == "") alert("Unesite ime filma");
  else if (movieYear.value < 1930 || movieYear.value > 2022) {
    clearModal();
    if (movieYear.value == "") alert("Unesite godinu");
    else if (movieYear.value < 1930) alert("Film koji unosite je prestar");
    else alert("Film koji unosite je prenov");
    clearModal();
  } else if (/\d/.test(actors.value) || actors.value == "") {
    alert("Unesite ime glumaca");
  } else {
    let filmic = new Film(
      watched.checked,
      movieName.value,
      movieYear.value,
      actors.value.split(",").map((actor) => actor.trim()),
      country.value,
      notice.value
    );
    movies.push(filmic);
    tableFill();
    clearModal();
    promjena(movies.length);
  }
  clearModal();
}
const clearModal = () => {
  notice.value = "";
  movieName.value = "";
  movieYear.value = "";
  actors.value = null;
  country.value = "";
  watched.checked = false;
};

function promjena(brojanje) {
  if (document.getElementById(brojanje.toString() + "a").checked) {
    document.getElementById(brojanje.toString()).classList.remove("red");
    document.getElementById(brojanje.toString()).classList.add("tacno");
  } else {
    document.getElementById(brojanje.toString()).classList.remove("tacno");
    document.getElementById(brojanje.toString()).classList.add("red");
  }
}
