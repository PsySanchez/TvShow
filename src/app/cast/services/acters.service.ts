import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Person } from '../models/person.model';


@Injectable({
    providedIn: 'root'
})
export class ActersService {

    constructor(private http: HttpClient) { }
    
    getCast(id: number) {
        return this.http.get<any>(`${environment.apiUrl}/shows/${id}/cast`)
            .pipe(map(data => {
                return this.mapCast(data);
            }));
    }

    private mapCast(data: any): Array<Person> {
        const cast = new Array<Person>();
        if (data != null) {
            data.forEach(element => {
                const persone = this.mapPersone(element);
                cast.push(persone);
            });
        }
        return cast;
    }
    private mapPersone(data: any): Person {
        const person = new Person();
        if (data != null) {
            person.id = data.person.id;
            person.url = data.person.url;
            person.name = data.person.name;
            person.country = data.person.country;
            person.image = data.person.image;
        }
        return person;
    }
}