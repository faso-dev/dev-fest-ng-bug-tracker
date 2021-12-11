import { Component, OnInit } from '@angular/core';
import {CurrentComponentTitleService} from "../../../../services/CurrentComponentTitleService";

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.scss']
})
export class CreateAppComponent implements OnInit {

  constructor(private currentComponentTitleService: CurrentComponentTitleService) { }

  ngOnInit(): void {
    this.currentComponentTitleService.updateCurrentComponentTitle('Ajouter une nouvelle application')
  }


}
