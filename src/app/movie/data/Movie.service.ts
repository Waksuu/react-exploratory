import { MovieDTO } from "./Movie.dto";

export const getAllMoviesREST = (): Promise<MovieDTO[]> => {
    return Promise.resolve(moviesMock);
}

const moviesMock: MovieDTO[] = [
    {
        id: 1,
        name: "aa"
    },
    {
        id: 2,
        name: "bb"
    },
    {
        id: 3,
        name: "cc"
    },
]