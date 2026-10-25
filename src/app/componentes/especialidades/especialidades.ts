import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Clinica } from '../../services/clinica';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './especialidades.html',
})
export class Especialidades implements OnInit {
  listaEspecialidades: any[] = [];

  constructor(private api: Clinica, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.api.getEspecialidades().subscribe({
      next: (res) => {
        this.listaEspecialidades = Array.isArray(res) ? res : [res];
      },
      error: (err) => console.error(err),
    });
  }
}
