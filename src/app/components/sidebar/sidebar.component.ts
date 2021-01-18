import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request/request.service';
import { Marcas } from 'src/app/interfaces/marcas';
import { Modelos } from 'src/app/interfaces/modelos';
import { Anos } from 'src/app/interfaces/anos';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  constructor(private req: RequestService) { }

  marcas: Marcas[];
  modelos: Modelos[];
  anos: Anos[]

  ngOnInit() {
    this.getMarcas()
  }

  getMarcas() {
    this.req.getter('marcas').subscribe(data => this.marcas = data);
  }

  getModelos(idMarca) {
    this.req.getter(`veiculos/${idMarca}`)
      .subscribe(data => this.modelos = data);
  }

  getDetalheModelo(idModelo) {
    const idMarca = document.querySelector("#selectMarca");

    this.req.getter(`veiculo/${idMarca.value}/${idModelo}`)
      .subscribe(data => this.anos = data);
  }
}
