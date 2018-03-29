import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-new-icon',
  templateUrl: './profile-new-icon.component.html',
  styleUrls: ['./profile-new-icon.component.scss']
})
export class ProfileNewIconComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'newProfile',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_add_black_24px.svg')
    );
  }
}
