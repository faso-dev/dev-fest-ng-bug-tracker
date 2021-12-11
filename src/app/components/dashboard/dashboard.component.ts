import { Component, OnInit } from '@angular/core';
import {CurrentComponentTitleService} from "../../services/CurrentComponentTitleService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private currentComponentTitleService: CurrentComponentTitleService) { }

  ngOnInit(): void {
    this.currentComponentTitleService.updateCurrentComponentTitle('Tableau de bord')
  }

}
