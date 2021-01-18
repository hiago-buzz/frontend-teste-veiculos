import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/interfaces/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private veiculoservice: VeiculoService) { 

  }

  ngOnInit(): void {
  }

}
