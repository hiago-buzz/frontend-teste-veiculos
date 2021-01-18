import { Injectable } from '@angular/core';
import { Veiculo } from '../interfaces/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor() { }

  veiculo: Veiculo

  public put(veiculo) {
    return this.veiculo = veiculo;
  }
}
