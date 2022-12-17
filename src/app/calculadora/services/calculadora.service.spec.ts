import { TestBed, inject } from '@angular/core/testing';
import { __decorate } from 'tslib';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  /* it('should be created', () => {
    expect(service).toBeTruthy();
  }); */

  it('should...', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service).toBeTruthy();
    }));

  it('deve garantir que 1 + 4 = 5',
      inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    }));

    it('deve garantir que 1 - 4 = -3',
      inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    }));
});
