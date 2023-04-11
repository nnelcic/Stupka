import React, { useState, useEffect } from "react";
import { useQuery} from "react-query";

import IMovie from "../../types/movie";
import MovieService from "../../services/MovieService";

const FindMovie: React.FC = () => {
    const [getId, setGetId] = useState("");  
    const [getResult, setGetResult] = useState<string | null>(null);
  
    const fortmatResponse = (res: any) => {
     return JSON.stringify(res, null, 2);
    };
  
    const { isLoading: isLoadingMovies, refetch: getAllMovies } = useQuery<IMovie[], Error>(
      "query-movies",
      async () => {
        return await MovieService.findAll();
      },
      {
        enabled: false,
        onSuccess: (res) => {
          setGetResult(fortmatResponse(res));
        },
        onError: (err: any) => {
          setGetResult(fortmatResponse(err.response?.data || err));
        },
      }
    );
  
    useEffect(() => {
      if (isLoadingMovies) setGetResult("Дані завантажуються...");
    }, [isLoadingMovies]);
  
    function getAllData() {
      try {
        getAllMovies();
      } catch (err) {
        setGetResult(fortmatResponse(err));
      }
    }
  
    const { isLoading: isLoadingMovie, refetch: getMovieById } = useQuery<IMovie, Error>(
      "query-movie-by-id",
      async () => {
        return await MovieService.findById(getId);
      },
      {
        enabled: false,
        retry: 1,
        onSuccess: (res) => {
          setGetResult(fortmatResponse(res));
        },
        onError: (err: any) => {
          setGetResult(fortmatResponse(err.response?.data || err));
        },
      }
    );
  
    useEffect(() => {
      if (isLoadingMovie) setGetResult("Дані завантажуються...");
    }, [isLoadingMovie]);
  
    function getDataById() {
      if (getId) {
        try {
          getMovieById();
        } catch (err) {
          setGetResult(fortmatResponse(err));
        }
      }
    }  
      
    const clearGetOutput = () => {
      setGetResult(null);
    };
  
    return (
      <div id="app" className="container">
        <div className="card">
          <div className="card-header text-center">Знайти фільми</div>
          <div className="card-body">
            <div className="input-group input-group-sm">
              <button className="btn btn-sm btn-primary" onClick={getAllData}>
                Переглянути всі фільми
              </button>
             
  
              <input
                type="text"
                value={getId}
                onChange={(e) => setGetId(e.target.value)}
                className="form-control ml-2"
                placeholder="Movie Id"
              />
              <div className="input-group-append">
                <button className="btn btn-sm btn-primary" onClick={getDataById}>
                  Знайти фільм по Id
                </button>
              </div> 
              
  
              <button
                className="btn btn-sm btn-warning ml-2"
                onClick={clearGetOutput}
              >
                Очистити все
              </button>
            </div>
  
            {getResult && (
              <div className="alert alert-secondary mt-2" role="alert">
                <pre>{getResult}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default FindMovie;