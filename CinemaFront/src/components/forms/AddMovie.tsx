import { type } from "os";
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";

import MovieService from "../../services/MovieService";

const AddMovie: React.FC = () => {
    const [postOriginalTittle, setPostOriginalTittle] = useState("");
    const [postTittle, setPostTittle] = useState("");
    const [postDuration, setPostDuration] = useState(Number);
    const [postReleaseDate, setPostReleaseDate] = useState(new Date());   
    const [postPosterUrl, setPostPosterUrl] = useState("");
    
    const [postResult, setPostResult] = useState<string | null>(null);
  
    const fortmatResponse = (res: any) => {
      return JSON.stringify(res, null, 2);
    };

    const { isLoading: isPostingMovie, mutate: postMovie } = useMutation<any, Error>(
        async () => {
          return await MovieService.create(
            {
              tittle: postTittle,
              originalTittle: postOriginalTittle,
              duration: postDuration,
              releaseDate: postReleaseDate,              
              posterUrl: postPosterUrl
            });
        },
        {
          onSuccess: (res) => {
            setPostResult(fortmatResponse(res));
          },
          onError: (err: any) => {
            setPostResult(fortmatResponse(err.response?.data || err));
          },
        }
      );

      useEffect(() => {
        if (isPostingMovie) setPostResult("Створення нового фільму...");
      }, [isPostingMovie]);
    
      function postData() {
        try {
          postMovie();
        } catch (err) {
          setPostResult(fortmatResponse(err));
        }
      }
    
      const clearPostOutput = () => {
        setPostResult(null);
      };

      return (
        <div id="app" className="container">
          <div className="card">
            <div className="card-header text-center">Додати новий фільм</div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  value={postOriginalTittle}
                  onChange={(e) => setPostOriginalTittle(e.target.value)}
                  className="form-control m-10"
                  placeholder="Орігінальна назва"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={postTittle}
                  onChange={(e) => setPostTittle(e.target.value)}
                  className="form-control"
                  placeholder="Назва"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  value={postDuration}
                  onChange={(e) => setPostDuration(e.target.valueAsNumber)}
                  className="form-control"
                  placeholder="Тривалість"
                />
              </div>  
              {/* <div className="form-group">
                <input
                  type="date"
                  value={postReleaseDate}
                  onChange={(e) => setPostReleaseDate(e.target.valueAsDate)}
                  className="form-control"
                  placeholder="Тривалість"
                />
              </div>               */}
              <div className="form-group">
                <input
                  type="text"
                  value={postPosterUrl}
                  onChange={(e) => setPostPosterUrl(e.target.value)}
                  className="form-control"
                  placeholder="Постер url"
                />
              </div>
              <button className="btn btn-sm btn-primary" onClick={postData}>
                Створити
              </button>
              <button
                className="btn btn-sm btn-warning ml-2"
                onClick={clearPostOutput}
              >
                Очистити всі дані
              </button>
    
              {postResult && (
                <div className="alert alert-secondary mt-2" role="alert">
                  <pre>{postResult}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    export default AddMovie;