import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() title: string;
  /**
   * The mode determines which platform styles to use.
   * @param "ios" | "md"
   */
  @Input() mode: string;
  /**
   * 	Describes the scroll effect that will be applied to the header condense only applies in iOS mode.
   * @param "condense" | undefined
   */
  @Input() collapse: string;
  /**
   * If true, the header will be translucent. 
   * Only applies when the mode is "ios" and the device supports backdrop-filter.
   * @default false
   */
  @Input() translucent: boolean = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title'] != null && changes['title'].currentValue != null) {
      this.title = changes['title'].currentValue;
    }
    if (changes['translucent'] != null && changes['translucent'].currentValue != null) {
      this.translucent = changes['translucent'].currentValue;
    }
  }

  ngOnInit() { }

}
