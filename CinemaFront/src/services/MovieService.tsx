import axios from "axios";
import IMovie from "../types/movie";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const response = await apiClient.get<IMovie[]>('/posts');
  return response.data;
}

const findById = async (id: any) => {
  const response = await apiClient.get<IMovie>(`/posts/1${id}`);
  return response.data;
}

  const create = async ({ originalTittle, tittle, duration, releaseDate, posterUrl}: IMovie) => {
    const response = await apiClient.post<any>("/posts", { originalTittle, tittle, duration, releaseDate, posterUrl });
    return response.data;
  }
  
  const update = async (id: any, { originalTittle, tittle, duration, releaseDate, posterUrl }: IMovie) => {
    const response = await apiClient.put<any>(`/posts/1${id}`, { originalTittle, tittle, duration, releaseDate, posterUrl });
    return response.data;
  }
  
  const deleteById = async (id: any) => {
    const response = await apiClient.delete<any>(`/posts/1${id}`);
    return response.data;
  }

  const MovieService = {
    findAll,
    findById,    
    create,
    update,
    deleteById,   
  }
  
  export default MovieService;
