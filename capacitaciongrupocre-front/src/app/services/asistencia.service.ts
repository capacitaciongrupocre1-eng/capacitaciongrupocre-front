import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private apiUrl = 'https://capacitaciongrupocre.onrender.com/api/asistencia'; // Ajusta el puerto si es necesario

  constructor(private http: HttpClient) { }

  registrar(nombre: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar`, { nombre });
  }

  getRegistros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }
}