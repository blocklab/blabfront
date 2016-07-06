'use strict';

describe('LogoutService', function () {
  var subject,
    locationSpy,
    tokenRepoSpy;

  beforeEach(module('blab'));

  beforeEach(module(function($provide) {
    locationSpy = { path: {}};
    spyOn(locationSpy, 'path');
    $provide.value('$location', locationSpy);

    tokenRepoSpy = { delete: {}};
    spyOn(tokenRepoSpy, 'delete');
    $provide.value('TokenRepository', tokenRepoSpy);
  }));

  beforeEach(inject(function(_LogoutService_) {
    subject = _LogoutService_;
  }));

  it('exists', function() {
    expect(subject).not.toBeUndefined();
  });

  describe('logout', function() {
    it('redirects to login', function() {
      subject.logout();

      expect(locationSpy.path).toHaveBeenCalledWith('/');
    });

    xit('deletes the token', function() {
      subject.logout();

      expect(tokenRepoSpy.delete).toHaveBeenCalled();
    });
  });
});
