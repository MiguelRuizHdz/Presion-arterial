import { Component, OnInit, Input } from '@angular/core';
import { Registro } from '../../pages/tab1/tab1.page';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  @Input() registro: Registro;

  constructor() { }

  ngOnInit() {}

}
