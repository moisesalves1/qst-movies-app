import { Movie } from "../models/movie.model";

export class Storage {
    public static addMovie(movie: Movie) {

        const watchList = this.get();
        watchList.push(movie)
        this.set(watchList)
        
    }

    public static removeMovie(movie: Movie) {
        const watchList = this.get();
        console.log('watchList')
        console.log(watchList)
        const w = watchList.filter((item: Movie) => {
            return item.Id !== movie.Id
        })
        console.log('w')
        console.log(w)
        this.set(w)
    }

    public static clear(movie: Movie) {
        localStorage.clear()
    }

    public static set(data: Movie[]) {
        const watchList = JSON.stringify(data)
        localStorage.setItem('watch-list', watchList)
    }

    public static get() {
        
        const data = localStorage.getItem('watch-list')
        if (data) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
}