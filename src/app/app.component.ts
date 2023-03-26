import { Component } from '@angular/core';
import {HostListener } from '@angular/core'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aruanda';
  showHeaderLogo: boolean = false

  @HostListener('window:scroll', ['$event']) 
  getScrollHeight(event: any) {
    if(window.pageYOffset > (document.body.scrollHeight/3.5) ) {
      this.showHeaderLogo = true
    }
    else
      this.showHeaderLogo = false
    }
}
