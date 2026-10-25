import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Clinica {
  private baseUrl = 'http://localhost:8085/api/v1';

  constructor(private http: HttpClient) { }

  getEspecialidades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/especialidades`);
  }

  getMedicosPorEspecialidad(codes: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/medicos/especialidad/${codes}`);
  }

  getCitasPorMedico(codmed: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/citas/medico/${codmed}`);
  }

  anularCita(nrocita: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/citas/${nrocita}`);
  }

  registrarCita(datos: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/citas`, datos);
  }
}