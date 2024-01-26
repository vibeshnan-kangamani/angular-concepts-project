import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  layout: string = "empty";
  _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

    // Subscribe to NavigationEnd event
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this._unsubscribeAll),
    ).subscribe(() =>
    {
      // Update the layout
      this._updateLayout();
    });

  }


  private _updateLayout(): void
  {
        // Get the current activated route
        let route = this._activatedRoute;

        const layoutFromQueryParam = route.snapshot.queryParamMap.get('layout');
        if ( layoutFromQueryParam )
        {
          this.layout = layoutFromQueryParam;
          console.log(this.layout);
        }
  }



  ngOnDestroy(): void
  {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
  }

}
