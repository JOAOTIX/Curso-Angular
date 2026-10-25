import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Clinica } from '../../services/clinica';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pacientes.html'
})
export class Pacientes implements OnInit {
  citas: any[] = [];
  codmed: string = '';
  costoBase: number = 0;

  constructor(private api: Clinica, private route: ActivatedRoute) {}

  ngOnInit() {
    this.codmed = this.route.snapshot.paramMap.get('codmed') || '';
    this.costoBase = Number(this.route.snapshot.paramMap.get('costo')) || 0;
    this.cargarCitas();
  }

  cargarCitas() {
    this.api.getCitasPorMedico(this.codmed).subscribe({
      next: (res) => this.citas = res,
      error: (err) => console.error(err)
    });
  }

  anular(nrocita: number) {
    if (confirm('¿Está seguro de anular esta cita?')) {
      this.api.anularCita(nrocita).subscribe({
        next: () => this.cargarCitas(), 
        error: (err) => console.error(err)
      });
    }
  }
}