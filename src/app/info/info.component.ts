import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  data: any;
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tipoDocumento = params['tipoDocumento'];
      this.numeroDocumento = params['numeroDocumento'];

      this.http.get(`/api/clientes/buscar?tipoDocumentoId=${this.tipoDocumento}&id=${this.numeroDocumento}`)
        .subscribe(response => {
          this.data = response;
        });
    });
  }

  volver() {
    this.router.navigate(['/']);
  }
}