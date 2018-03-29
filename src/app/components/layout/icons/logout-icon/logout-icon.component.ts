import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-logout-icon',
  templateUrl: './logout-icon.component.html',
  styleUrls: ['./logout-icon.component.scss']
})
export class LogoutIconComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'logout',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_reply_black_24px.svg')
    );
  }

}
