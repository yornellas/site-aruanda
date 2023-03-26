import { Component } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  instagram = faInstagram
  facebook = faFacebook
  whatsapp = faWhatsapp
  youTube = faYoutube
}
