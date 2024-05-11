fetch('movies-2020.json')
    .then(response => response.json())
    .then(data => {
        const movies = data;

        movies.sort((a, b) => b.year - a.year);

        const top16Movies = movies.slice(0, 16);

        const cardsHTML = top16Movies.map(movie => `
            <div class="card">
                <img src="${movie.thumbnail}" alt="${movie.title}">
                <div class="card-content">
                    <h2>${movie.title}</h2>
                    <p>${movie.extract}</p>
                </div>
            </div>
        `).join('');

        document.querySelector('.movies-container').innerHTML = cardsHTML;
    })
    .catch(error => console.error('Помилка при отриманні даних:', error));
