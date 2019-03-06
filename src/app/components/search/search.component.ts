import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    searchText: string;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onKeydown(event) {
        if (event.key === "Enter") {
            this.router.navigate(['/home'], {
                queryParams: {
                    showName: this.searchText
                }
            }
      )};
    }
}