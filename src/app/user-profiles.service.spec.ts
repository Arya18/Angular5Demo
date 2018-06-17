import { TestBed, inject } from '@angular/core/testing';

import { UserProfilesService } from './user-profiles.service';

describe('UserProfilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfilesService]
    });
  });

  it('should be created', inject([UserProfilesService], (service: UserProfilesService) => {
    expect(service).toBeTruthy();
  }));
});
