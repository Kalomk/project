let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
function rembemberMyfilms() {
  for (i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
      b = +prompt("Насколько оцените его", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}
rembemberMyfilms();
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  }
}
function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}
function writeYourGenres() {
  let count;
  for (let i = 0; i < 3; i++) {
    count = i + 1;
    const a = prompt(`Ваш любимый жанр под номером ${count}`, "");
    personalMovieDB.genres[i] = a;
  }

  return;
}
showMyDB(personalMovieDB.privat);
writeYourGenres();
detectPersonalLevel();
// let number = 5;
// while (number <= 10) {
//   console.log(number);
//   number++;
// }
// let number = 20;
// for (let i = 1; i < 9; i++) {
//   if (i === 13) {
//     break;
//   }
//   console.log(number);
//   number--;
// }
// let number = 3;
// while (number <= 15) {
//   console.log(number);
//   number += 2;
// }

// for (i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// function fifthTask() {
//   const arrayOfNumbers = [];
//   const number = 5;
//   while (number <= 10) {
//     arrayOfNumbers.push(number++);
//   }
//   // Пишем решение вот тут

//   // Не трогаем
// }
// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//   arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers);

// // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);
// const data = [5, 10, "Shopping", 20, "Homework"];
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data[i] = data[i] * 2;
//   } else if (typeof data[i] === "string") {
//     data[i] = `${data[i]} - done`;
//   }
// }

// console.log(data);
// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//   result[i - 1] = data[data.length - i];
// }

// console.log(result);
// let result = "";
// const length = 7;
// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }
// console.log(result);
// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += " ";
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);
// function returnNeighboringNumbers(number) {
//   const arr = [number - 1, number, number + 1];
//   console.log(arr);
//   return arr;
// }
// returnNeighboringNumbers(5);

// function sayHello(name) {
//   console.log(`Привет, ${name}`);
//   return;
// }
// sayHello("Denys");

// function getMathResult(base, number) {
//   if (typeof number !== "number" || number < 0) return base;
//   let result = "";
//   for (i = 1; i <= number; i++) {
//     if (number === i) {
//       result += base * i;
//     } else {
//       result += base * i + "---";
//     }
//   }
//   return result;
// }
// console.log(getMathResult(4, 3));
