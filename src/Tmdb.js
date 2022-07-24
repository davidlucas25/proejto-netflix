const API_KEY = 'fc89e989ef2933a7e47821685b4b3b6c'; //fc89e989ef2933a7e47821685b4b3b6c
const API_BASE = 'https://api.themoviedb.org/3';

/*
-Originais
-Recomendados
-Em alta
-Ação: 28
-Aventura: 12
- Animação: 16
-Comédia: 35
-Crime: 80 
-Documentários: 99
-Drama: 18
-Família: 10751
-Fantasia: 14
-História: 36
-Terror: 27
-Música: 10402
-Mistério: 9648
-Romance: 10749
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {

    getHomeList: async() => {
        return [
            {
                slug:'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title: 'Redomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title: 'Em alta',
                items:  await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`) ///movie/top_rated?language=pt-BR&api_key${API_KEY}
            }
            //,
            // {
            //     slug:'action',
            //     title: 'Ação',
            //     items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key${API_KEY}`)
            // },
            // {
            //     slug:'comedy',
            //     title: 'Comédia',
            //     items: await basicFetch(`/discover/movie?with_genres=25&language=pt-BR&api_key${API_KEY}`)
            // },
            // {
            //     slug:'horror',
            //     title: 'Terror',
            //     items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key${API_KEY}`)
            // },
            // {
            //     slug:'romance',
            //     title: 'Romance',
            //     items: await basicFetch(`/discovery/movie?with_genres=10749&language=pt-BR&api_key${API_KEY}`) //
            // },
            // {
            //     slug:'documentary',
            //     title: 'Documentários',
            //     items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key${API_KEY}`)
            // },
        ];
    },
    getMovieInfo : async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv' :
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                default: 
                    info = null;
                    break;
            }
        }

        return info;
    }
}