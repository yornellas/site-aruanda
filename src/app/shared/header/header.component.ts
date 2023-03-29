import { Component, ElementRef, Input, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showHeaderLogo: boolean = false
  
  // scrollToAboutUsSection() {
    //   window.scrollTo(0, document.body.scrollHeight * 0.4113);
    // }
    scrollToTop() {
      window.scrollTo(0, 0);
    }
    
    scrollToAboutUsSection() {
      //nao vai dar certo com o viewchildren
      //tentar uma funçao q manda qual componente ta ativado no router outlet e usar view children?
      //ou mandar do main component
    // this.aboutRef?.nativeElement.scrollIntoView();
  }
  
  scrollToFooter() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
