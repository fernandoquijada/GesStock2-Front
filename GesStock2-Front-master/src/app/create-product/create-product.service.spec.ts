import { TestBed, inject } from '@angular/core/testing';

import { CreateProductService } from './create-product.service';

describe('CreateProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateProductService]
    });
  });

  it('should be created', inject([CreateProductService], (service: CreateProductService) => {
    expect(service).toBeTruthy();
  }));
});
