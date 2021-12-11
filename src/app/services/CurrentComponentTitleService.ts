import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentComponentTitleService {

  currentComponentTitle = new BehaviorSubject('Tableau de bord');

  constructor() {
  }

  updateCurrentComponentTitle(title: string) {
    this.currentComponentTitle.next(title)
  }
}
