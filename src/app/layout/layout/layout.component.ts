import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
import { RouterNavigationService } from '../../services/router/router-navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(public routerService: RouterNavigationService) { }

  ngOnInit() {

  }




  ngOnDestroy(): void
  {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
  }

}
