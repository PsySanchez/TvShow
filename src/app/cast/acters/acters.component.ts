import { Component, OnInit } from '@angular/core';
import { ActersService } from '../services/acters.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person.model';

@Component({
    selector: 'app-acters',
    templateUrl: './acters.component.html',
    styleUrls: ['./acters.component.css']
})
export class ActersComponent implements OnInit {

    public data: Person[];
    public castId: number;

    constructor(private actersService: ActersService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.castId = params['showId'];
            this.actersService.getCast(this.castId).subscribe(person => {
                this.data = person;
            });
        });
    }
}