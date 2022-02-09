'use strict';

//то что сделал я

/*
var numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
document.write("Сколько фильмов вы посмотрели? " + numberOfFilms);

var personalMovieDB = {
    count: 'numberOfFilms',
    movies: '',
    actors: '',
    genres: '',
    privat: false
};
*/

// как должно быть

/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/

// второй урок, то что я сделал

/*
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms == '') {
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} else if (numberOfFilms <= 0) {
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
} else {
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count <= 10) {
    document.write('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    document.write('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    document.write('Вы киноман');
} else {
    document.write('Ошибка!');
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/

// как должно быть в соответствии с уроком

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
       personalMovieDB.movies[a] = b;
       console.log('done');
    } else {
        console.log('error');
        i--;
    }  
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);



