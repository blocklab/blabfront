'use strict';

describe('LoginService', function() {
  var subject,
    http;

  beforeEach(module('blab'));

  beforeEach(inject(function(_LoginService_, _$httpBackend_, _REST_API_URL_) {
    subject = _LoginService_;
    http = _$httpBackend_;
    this.REST_API_URL = _REST_API_URL_;
  }));

  it('logs in via post request', function() {
    subject.login('mail@domain.com', 'pw');

    http.expectPOST(this.REST_API_URL + '/auth', {
      'email': 'mail@domain.com',
      'password': 'pw'
    }).respond({});
    http.flush();
  });
});