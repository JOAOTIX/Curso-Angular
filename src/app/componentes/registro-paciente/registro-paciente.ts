import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Clinica } from '../../services/clinica';

@Component({
  selector: 'app-registro-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-paciente.html'
})
export class RegistroPaciente implements OnInit {
  codmed: string = '';
  costoBase: number = 0;
  
  paciente = {
    nompac: '',
    tipo: 3, 
    pago: 0
  };

  constructor(private api: Clinica, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.codmed = this.route.snapshot.paramMap.get('codmed') || '';
    this.costoBase = Number(this.route.snapshot.paramMap.get('costo')) || 0;
    this.calcularPago();
  }

  calcularPago() {
    if (this.paciente.tipo == 1) {
      this.paciente.pago = this.costoBase * 0.50; 
    } else if (this.paciente.tipo == 2) {
      this.paciente.pago = this.costoBase * 0.70; 
    } else {
      this.paciente.pago = this.costoBase; 
  }
  }

  enviarDatos() {
    const payload = {
      codmed: this.codmed,
      nompac: this.paciente.nompac,
      tipo: this.paciente.tipo,
      pago: this.paciente.pago
    };

    this.api.registrarCita(payload).subscribe({
      next: () => {
        this.router.navigate(['/pacientes', this.codmed, this.costoBase]);
      },
      error: (err) => console.error(err)
    });
  }
}