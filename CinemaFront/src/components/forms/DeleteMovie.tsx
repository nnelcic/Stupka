import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import MovieService from "../../services/MovieService";

const DeleteMovie: React.FC = () => {
    const [deleteId, setDeleteId] = useState("");
  
    const [deleteResult, setDeleteResult] = useState<string | null>(null);
  
    const fortmatResponse = (res: any) => {
      return JSON.stringify(res, null, 2);
    };
  
    const { isLoading: isDeletingMovie, mutate: deleteMovie } = useMutation<any, Error>(
        async () => {
          return await MovieService.deleteById(deleteId);
        },
        {
          onSuccess: (res) => {
            setDeleteResult(fortmatResponse(res));
          },
          onError: (err: any) => {
            setDeleteResult(fortmatResponse(err.response?.data || err));
          },
        }
      );
    
      useEffect(() => {
        if (isDeletingMovie) setDeleteResult("Процесс видалення фільму...");
      }, [isDeletingMovie]);
    
      function deleteDataById() {
        if (deleteId) {
          try {
            deleteMovie();
          } catch (err) {
            setDeleteResult(fortmatResponse(err));
          }
        }
      }
    
      const clearDeleteOutput = () => {
        setDeleteResult(null);
      };

      return (
        <div id="app" className="container">
          <div className="card">
            <div className="card-header">
              Видалення фільму
            </div>
            <div className="card-body">
              <div className="input-group input-group-sm">
                    
                <input
                  type="text"
                  value={deleteId}
                  onChange={(e) => setDeleteId(e.target.value)}
                  className="form-control ml-2"
                  placeholder="Id"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={deleteDataById}
                  >
                    Видалити фільм
                  </button>
                </div>
    
                <button
                  className="btn btn-sm btn-warning ml-2"
                  onClick={clearDeleteOutput}
                >
                 Очистити дані
                </button>
              </div>
    
              {deleteResult && (
                <div className="alert alert-secondary mt-2" role="alert">
                  <pre>{deleteResult}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    export default DeleteMovie;