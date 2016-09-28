/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BuildService } from './build.service';

describe('Service: Build', () => {
  beforeEach(() => {
    addProviders([BuildService]);
  });

  it('should ...',
    inject([BuildService],
      (service: BuildService) => {
        expect(service).toBeTruthy();
      }));
});
