// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Bonus: Remove duplicates
function getAllDirectorsUNique(moviesArray){
     const directors = getAllDirectors(moviesArray);
    return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    const totalScore = moviesArray.reduce((sum, movie) => {
        return sum + (movie.score || 0);
    }, 0);


    const averageScore = totalScore / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title).sort();
    return titles.slice(0, 20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const durationParts = movie.duration.split(' ');
        let minutes = 0;

        durationParts.forEach(part => {
            if(part.includes('h')){
                minutes += parseInt(part) * 60;
            }
            if(part.includes('min')){
                minutes += parseInt(part);
            }
        });

        return {...movie, duration: minutes};
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    // Object to store sum of scores and count of movies for each year
    const scoresByYear = moviesArray.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = { sum: 0, count: 0 };
        }
        acc[movie.year].sum += movie.score || 0;
        acc[movie.year].count += 1;
        return acc;
    }, {});

    let bestYear = null;
    let bestAvg = 0;

    // Calculate average score for each year and determine the best year
    for (const year in scoresByYear) {
        const avg = scoresByYear[year].sum / scoresByYear[year].count;
        if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
            bestYear = year;
            bestAvg = avg;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAvg}`;


}

