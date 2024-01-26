import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterNavigationService {

  layout: string = "empty";

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {

    // Subscribe to NavigationEnd event
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
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
        let routeSnap = route.firstChild;

        const layoutFromQueryParam = routeSnap?.snapshot.data["layout"];
        if ( layoutFromQueryParam )
        {
          this.layout = layoutFromQueryParam;
          console.log(this.layout);
        }
  }



}
