/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouterNavigationService } from './router-navigation.service';

describe('Service: RouterNavigation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterNavigationService]
    });
  });

  it('should ...', inject([RouterNavigationService], (service: RouterNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
