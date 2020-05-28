import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BASE_URL } from '@pma/consts';

@Injectable({
    providedIn: 'root'
})
export class RouterControl {

    constructor(private router: Router, private route: ActivatedRoute) { }

    navigateHome() {
        this.router.navigate([BASE_URL]);
    }
}

