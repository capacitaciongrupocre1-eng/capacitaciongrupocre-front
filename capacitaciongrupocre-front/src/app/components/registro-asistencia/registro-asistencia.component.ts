import { Component, OnInit } from '@angular/core'; // Añadido OnInit aquí
import { AsistenciaService } from '../../services/asistencia.service'; // Verifica que la ruta sea correcta

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.component.html',
  styleUrls: ['./registro-asistencia.component.css']
})
export class RegistroAsistenciaComponent implements OnInit {
  nombre: string = '';
  registros: any[] = [];
  
  constructor(private asistenciaService: AsistenciaService) {}

  ngOnInit(): void {
    this.cargarRegistros();
  }

  marcarAsistencia() {
    if (this.nombre.trim()) {
      this.asistenciaService.registrar(this.nombre).subscribe({
        next: (res) => {
          alert('Asistencia registrada con éxito');
          this.nombre = ''; // Limpiar input
          this.cargarRegistros(); // Refrescar tabla
        },
        error: (err) => {
          console.error('Error al registrar', err);
          alert('No se pudo conectar con el servidor backend.');
        }
      });
    } else {
      alert('Por favor, ingresa un nombre.');
    }
  }

  cargarRegistros() {
    this.asistenciaService.getRegistros().subscribe({
      next: (data) => {
        this.registros = data;
      },
      error: (err) => console.error('Error al cargar registros', err)
    });
  }
}