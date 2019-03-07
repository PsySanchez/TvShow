import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';

import { Show } from '../../models/show.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public getData: Show[];
    public data: Show[];
    public showName: string;

    constructor(private showService: ShowService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.showName = params['showName'];
            this.searchShows(this.showName);
        });

    }
    choiceShow(id: number) {
        this.router.navigate(['/show'], {
            queryParams: {
                showId: id
            }
        });
    }
    async searchShows(showName: string) {
        await this.showService.getAllShows()
            .then(shows => {
                this.getData = shows;
            });
        if (showName === undefined) {
            this.data = this.getData;
        }
        else {
            this.data = this.getData.filter(c => c.name.toLowerCase().includes(showName.toLowerCase()));
        }
    }
}