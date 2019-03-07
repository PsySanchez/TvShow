import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from 'src/app/services/show.service';
import { Show } from 'src/app/models/show.model';


@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

    public show: Show;
    public showId: number;

    constructor(private showService: ShowService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.showId = params['showId'];
            this.showService.getOneShow(this.showId).subscribe(show => {
                this.show = show;
                this.show.summary = this.show.summary
                    .replace(/<p>/g, "")
                    .replace(/<\/p>/g, "")
                    .replace(/<b>/g, "")
                    .replace(/<\/b>/g, "");
            });
        });
        
    }

}
