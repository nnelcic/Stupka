import React, { useState } from "react";

interface IMovie {
    original_tittle: string;
    tittle: string;
    duration: number;
    release_date: Date;
    type: "2D" | "3D" | "imax";
    posterUrl: string;    
}

interface IMovieDetails {
    description: string;
    producer: string;
    age_Limit: number;
    phase: "" | "" | "";
    independent_rate: number;
    country: string;
    movie_trailer_url: string;
    start_date: Date;
    end_date: Date;
}

const AddCinema = () => {
    const [movie, setMovie] = useState<IMovie>({
        original_tittle: "",
        tittle: "",
        duration: 100,
        release_date: new Date(),
        type: "2D",
        posterUrl: "",
    });

    const [movieDetails, setMovieDetails] = useState<IMovieDetails>({
        description: "",
        producer: "",
        age_Limit: 1,
        phase: "",
        independent_rate: 1.0,
        country: "",
        movie_trailer_url: "",
        start_date: new Date(),
        end_date: new Date()
    });

}