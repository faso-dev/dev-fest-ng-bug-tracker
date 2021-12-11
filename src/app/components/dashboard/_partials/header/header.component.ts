import {Component, OnInit} from '@angular/core';
import {CurrentComponentTitleService} from "../../../../services/CurrentComponentTitleService";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    currentComponentTitle: string = '';

    constructor(private currentComponentTitleService: CurrentComponentTitleService) {
    }

    ngOnInit(): void {
        this.currentComponentTitleService.currentComponentTitle.subscribe(newTitle => {
            this.currentComponentTitle = newTitle
        })
    }
}
