export default interface ISeanse {
    id: number,
    startTime: string,
    movie: {
        id: number,
        originalTitle: string,
        title: string,
        duration: number,  
        movieType: string,  
        releaseDate: string,  
        posterUrl: string,  
    },

    hallId: number,
    price: {
        id: number,
        cost: number,
    },
}