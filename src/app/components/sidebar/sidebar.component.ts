import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request/request.service';
import { Marcas } from 'src/app/interfaces/marcas';
import { Modelos } from 'src/app/interfaces/modelos';
import { Anos } from 'src/app/interfaces/anos';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  constructor(
    private req: RequestService,
    private veiculo: VeiculoService
    ) { }

  marcas: Marcas[];
  modelos: Modelos[];
  anos: Anos[]

  ngOnInit() {
    this.getMarcas()
  }

  getMarcas() {
    this.req.get('marcas').subscribe(data => this.marcas = data);
  }

  getModelos(idMarca) {
    this.req.get(`veiculos/${idMarca}`)
      .subscribe(data => this.modelos = data);
  }

  getDetalheModelo(idModelo) {
    const idMarca = document.querySelector("#selectMarca").value;

    this.req.get(`veiculo/${idMarca}/${idModelo}`)
      .subscribe(data => this.anos = data);
  }

  getVeiculo(idVeiculo) {
    const idMarca = document.querySelector("#selectMarca").value;
    const idModelo = document.querySelector("#selectModelo").value;

    this.req.get(`veiculo/${idMarca}/${idModelo}/${idVeiculo}`)
      .subscribe(data => this.veiculo.put(data));
  }
}
