import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  productos:any

  constructor(private api:ApiServiceService){}

  ngOnInit(){
      this.ObtenerProductos();
  }


  ObtenerProductos(){
    this.api.getProductos().subscribe(
      (data)=>{
        this.productos=data;
        console.log('api cargada')
      },
      (error)=>{
        console.error(error);
      }
    )
  }

}
