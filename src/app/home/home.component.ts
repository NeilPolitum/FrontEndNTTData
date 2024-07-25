import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiposDocumento: any[] = [];
  selectedTipoDocumento: string = '';
  numeroDocumento: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getTiposDocumento();
  }

  getTiposDocumento(): void {
    this.http.get<any[]>('/api/tipos-documento')
      .subscribe(data => {
        this.tiposDocumento = data;
      });
  }

  navigateToInfo() {
    this.router.navigate(['/info'], {
      queryParams: {
        tipoDocumento: this.selectedTipoDocumento,
        numeroDocumento: this.numeroDocumento
      }
    });
  }
}