import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { BehaviorService } from 'src/service/behavior.service';

@Component({
  selector: 'app-tabs-manager',
  templateUrl: './tabs-manager.page.html',
  styleUrls: ['./tabs-manager.page.scss'],
})
export class TabsManagerPage implements OnInit, AfterViewInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs;
  constructor(
    private bService: BehaviorService
  ) { }
  ngAfterViewInit(): void {
    this.bService.selectTab$.subscribe(res => {
      if (res != null)
        this.tabs.select('login');
    })
  }

  ngOnInit() {

  }
  ionTabsDidChange(event) {
    this.bService.tabTypeNext(event.tab);
  }

}
