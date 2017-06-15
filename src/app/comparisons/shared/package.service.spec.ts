import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Request, RequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PackageService } from './package.service';
import { PypiPackage } from './package.model';

describe('Package Service', () => {

  let backend: MockBackend;
  let sampleRequest: Request;
  let sampleResponses: Array<Response>;
  const sampleJsons = [
    { info: { name: 'Django' } },
    { info: { name: 'pandas' } },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend, options) => new Http(mockBackend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        PackageService
      ]
    });

    const base = new BaseRequestOptions();
    sampleRequest = new Request(base.merge(new RequestOptions({ url: 'https://google.com' })));
    sampleResponses = sampleJsons.map(obj => {
      return new Response(new ResponseOptions({ body: JSON.stringify(obj) }));
    });

    backend = TestBed.get(MockBackend);
    backend.connections.subscribe(connection => {
      connection.mockRespond(sampleResponses.shift());
    });
  });

  it('can be created', inject([PackageService], service => {
    expect(service).toBeDefined();
  }));

  // Temporarily disable for future fixing
  xit('can create package objects', inject([PackageService], service => {
    service.getPackages(['Django', 'pandas']).subscribe((pkgs: PypiPackage[]) => {
      expect(pkgs).toBeDefined();
      expect(pkgs.length).toBe(2);
    });
  }));
});
