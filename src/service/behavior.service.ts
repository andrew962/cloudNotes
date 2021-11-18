import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  private tabTypeSubject: Subject<string> = new Subject<string>();
  tabType$: Observable<string>;
  private selectTabSubject: Subject<string> = new Subject<string>();
  selectTab$: Observable<string>;
  constructor() {
    this.tabType$ = this.tabTypeSubject.asObservable()
    this.selectTab$ = this.selectTabSubject.asObservable()
  }

  tabTypeNext(tabType: string) {
    this.tabTypeSubject.next(tabType);
  }

  selectTabNext(tabName: string) {
    this.selectTabSubject.next(tabName)
  }

}
