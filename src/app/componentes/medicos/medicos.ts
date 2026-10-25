import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Clinica } from '../../services/clinica';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './medicos.html'
})
export class Medicos implements OnInit {
  medicos: any[] = [];
  codes: string = '';
  costoBase: number = 0;
  anioActual: number = new Date().getFullYear(); 

  constructor(private api: Clinica, private route: ActivatedRoute) {}

  ngOnInit() {
    this.codes = this.route.snapshot.paramMap.get('codes') || '';
    this.costoBase = Number(this.route.snapshot.paramMap.get('costo')) || 0;

    this.api.getMedicosPorEspecialidad(this.codes).subscribe({
      next: (res) => this.medicos = res,
      error: (err) => console.error(err)
    });
  }
}