import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideBarService {
  private _toggleSideBar: Subject<boolean> = new Subject<boolean>();

  toggleSideBar(): void {
    this._toggleSideBar.next(true);
  }

  get toggledSideBar(): Subject<boolean> {
    return this._toggleSideBar;
  }

  constructor() {} 
}
