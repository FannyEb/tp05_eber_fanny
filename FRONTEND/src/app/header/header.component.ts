import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ShoppingState } from '../core/state/shopping-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy {

  @Select(ShoppingState.getNbProducts)
  numberProduct$!: Observable<number>;

  username: string | null = "";

  constructor() { }
  ngOnDestroy(): void {
    window.removeEventListener("storage", this.listener, false);
  }

  ngOnInit(): void {
    if (window.addEventListener) {
      window.addEventListener("storage", this.listener, false);
    }
  }

  listener(){
    if(localStorage.getItem('username') != null && localStorage.getItem('username') != ""){
      this.username = localStorage.getItem('username');
    }
    else{
      this.username = "";
    }
  }

  logout(){
    localStorage.removeItem('username');
    this.username = "";
  }
}
