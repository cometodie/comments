import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideBarService {
  private _toggleSideBar: Subject<boolean> = new Subject<boolean>();
  private _toggleMenuIcon: Subject<boolean> = new Subject<boolean>();

  toggleSideBar(): void {
    this._toggleSideBar.next(true);
  }

  get toggledSideBar(): Subject<boolean> {
    return this._toggleSideBar;
  }

  toggleMenuIcon(): void {
    this._toggleMenuIcon.next(true);
  }

  get toggledMenuIcon(): Subject<boolean> {
    return this._toggleMenuIcon;
  }

  constructor() {} 
}
