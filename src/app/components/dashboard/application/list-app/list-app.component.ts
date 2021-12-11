import {Component, OnInit} from '@angular/core';
import {CurrentComponentTitleService} from "../../../../services/CurrentComponentTitleService";

@Component({
    selector: 'app-list-app',
    templateUrl: './list-app.component.html',
    styleUrls: ['./list-app.component.scss']
})
export class ListAppComponent implements OnInit {

    createdAt: Date = new Date()
    updatedAt: Date = new Date()

    constructor(private currentComponentTitleService: CurrentComponentTitleService) {
    }

    ngOnInit(): void {
        this.currentComponentTitleService.updateCurrentComponentTitle('Gestion des applications')
    }

}
