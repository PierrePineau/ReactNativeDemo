import { API_TOKEN, API_URL } from "@env";
// Utilisatation de l'api de themoviedb pour récupérer les films
const ApiManager = () => {
    const token = API_TOKEN;

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
        const response = await fetch(API_URL + `/discover/movie` + queryParams, {
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
