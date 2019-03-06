import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Show } from '../models/show.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ShowService {

    constructor(private http: HttpClient) { }

    getAllShows() :Promise<any> {
        return this.http.get(`${environment.apiUrl}/shows`)
        .toPromise()
        .then(data => {
            console.log(data)
           return this.mapShows(data);
        });
    }


    private mapShows(data: any): Array<Show> {
        const shows = new Array<Show>();
        if (data != null) {
            data.forEach(element => {
                const show = this.mapShow(element);
                shows.push(show);
            });
        }
        return shows;
    }

    private mapShow(data: any): Show {
        const show = new Show();
        if (data != null) {
            show.id = data.id;
            show.name = data.name;
            show.image = data.image;
            show.status = data.status;
            show.schedule = data.schedule;
            show.externals = data.externals;
            show.officialSite = data.officialSite;
            show.language = data.language;
            show.genres = data.genres;
            show.rating = data.rating;
            show.summary = data.summary;
        }
        return show;
    }

    getOneShow(id: number) {
        return this.http.get<Show>(`${environment.apiUrl}/shows/${id}`)
            .pipe(map(data => {
                return this.mapShow(data);
            }));
    }
}
