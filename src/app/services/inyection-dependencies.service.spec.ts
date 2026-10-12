import { TestBed } from '@angular/core/testing';

import { InyectionDependenciesService } from './inyection-dependencies.service';

describe('InyectionDependenciesService', () => {
  let service: InyectionDependenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InyectionDependenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
