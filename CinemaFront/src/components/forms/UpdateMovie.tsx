import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import MovieService from "../../services/MovieService";

const UpdateMovie: React.FC = () => {
    const [putId, setPutId] = useState("");
    const [putOriginalTittle, setPutOriginalTittle] = useState("");
    const [putTittle, setPuttTittle] = useState("");
    const [putDuration, setPuttDuration] = useState(Number);
    const [putReleaseDate, setPuttReleaseDate] = useState(new Date());   
    const [putPosterUrl, setPuttPosterUrl] = useState("");
    const [putPublished, setPutPublished] = useState(false);
  
    const [putResult, setPutResult] = useState<string | null>(null);
  
    const fortmatResponse = (res: any) => {
      return JSON.stringify(res, null, 2);
    };

    const { isLoading: isUpdatingMovie, mutate: updateMovie } = useMutation<any, Error>(
        async () => {
          return await MovieService.update(
            putId,
            {
                tittle: putTittle,
                originalTittle: putOriginalTittle,
                duration: putDuration,
                releaseDate: putReleaseDate,              
                posterUrl: putPosterUrl
            });
        },
        {
          onSuccess: (res) => {
            setPutResult(fortmatResponse(res));
          },
          onError: (err: any) => {
            setPutResult(fortmatResponse(err.response?.data || err));
          },
        }
      );

      useEffect(() => {
        if (isUpdatingMovie) setPutResult("updating...");
      }, [isUpdatingMovie]);
    
      function putData() {
        if (putId) {
          try {
            updateMovie();
          } catch (err) {
            setPutResult(fortmatResponse(err));
          }
        }
      }
    
      const clearPutOutput = () => {
        setPutResult(null);
      };
    
      return (
        <div id="app" className="container">
          <div className="card">
            <div className="card-header">Оновити</div>
            <div className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  value={putId}
                  onChange={(e) => setPutId(e.target.value)}
                  className="form-control"
                  placeholder="Id"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={putOriginalTittle}
                  onChange={(e) => setPutOriginalTittle(e.target.value)}
                  className="form-control"
                  placeholder="Орігінальна назва"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={putTittle}
                  onChange={(e) => setPuttTittle(e.target.value)}
                  className="form-control"
                  placeholder="Назва"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  value={putDuration}
                  onChange={(e) => setPuttDuration(e.target.valueAsNumber)}
                  className="form-control"
                  placeholder="Тривалість"
                />
              </div>
              {/* <div className="form-group">
                <input
                  type="date"
                  value={putReleaseDate}
                  onChange={(e) => setPuttReleaseDate(e.target.valueAsDate)}
                  className="form-control"
                  placeholder="Дата реліза"
                />
              </div> */}
              <div className="form-group">
                <input
                  type="text"
                  value={putPosterUrl}
                  onChange={(e) => setPuttPosterUrl(e.target.value)}
                  className="form-control"
                  placeholder="Постер"
                />
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  name="putPublished"
                  checked={putPublished}
                  onChange={(e) => setPutPublished(e.target.checked)}
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="putPublished">
                 Опублікувати
                </label>
              </div>
              <button className="btn btn-sm btn-primary" onClick={putData}>
                Оновити дані
              </button>
              <button
                className="btn btn-sm btn-warning ml-2"
                onClick={clearPutOutput}
              >
              Очистити дані
              </button>
    
              {putResult && (
                <div className="alert alert-secondary mt-2" role="alert">
                  <pre>{putResult}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    export default UpdateMovie;