// Utilisatation de l'api de themoviedb pour récupérer les films
const ApiManager = () => {
    const key = '6c1679b3647463ffa4716723d357cc7a';
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzE2NzliMzY0NzQ2M2ZmYTQ3MTY3MjNkMzU3Y2M3YSIsIm5iZiI6MTcyODk3ODI3NC45ODc3NDksInN1YiI6IjY3MGUxYzk3ZjU4YTkyMDZhYTQxY2VkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-yZo9yjxdUSLHMiJhLnOsxn8bC5a4jkXq7pUIqKjH3E ';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };

    const getMovies = async ({filters}:any) => {
        let queryParams = '?language=fr-FR';

        if (filters.genres) {
            // On joins les éléments du tableau avec ,
            queryParams += `&with_genres=${filters.genres.join(',')}`;
        }

        if (filters.sort_by) {
            queryParams += `&sort_by=${filters.sort_by}`;
        }
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie` + queryParams, {
            method: 'GET',
            headers: headers,
        });
        const data = await response.json();
        return data;
    };

    // const getGenres = async () => {
    //     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
    //         method: 'GET',
    //         headers: headers,
    //     });
    //     const data = await response.json();
    //     return data;
    // };

    return {
        getMovies,
        // getGenres,
    };
};

export default ApiManager;
