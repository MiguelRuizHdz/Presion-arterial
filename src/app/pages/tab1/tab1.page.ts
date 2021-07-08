import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

export interface Registro {
  edad: number;
  sistolica: number;
  diastolica: number;
  fecha?: any;
  resultado?: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  hide: boolean = false;
  registro: Registro = {
    edad: 20,
    sistolica: 120,
    diastolica: 90,
    fecha: new Date(),
    resultado: 'Presión normal'
  }
  card: Registro = this.registro;


  constructor(private datalocalService: DataLocalService,
  private navCtrl: NavController,) {}

  // Soluciones
  s1 = 'Presión baja'
  s2 = 'Presión normal'
  s3 = 'Hipertensión leve'
  s4 = 'Hipertensión moderada'
  s5 = 'Hipertensión severa'
  s6 = 'Hipertensión diastólica aislada'
  s7 = 'Hipertensión sistólica aislada'
  
  calcular(edad: number, sistolica: number, diastolica: number){
      
      // Edad 15 a 19
      if( (edad>=15) && (edad<=19) ){
          if(sistolica<90){
              // 1
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 2
              if( (diastolica>=60) && (diastolica<=80) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=120) ) {
              // 3
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 4
              if( (diastolica>=60) && (diastolica<=80) ){
                  return this.registro.resultado = this.s2
              }
              // 5
              if( (diastolica>=81) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 6
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=121) && (sistolica<=159) ) {
              // 7
              if( (diastolica>=60) && (diastolica<=80) ){
                  return this.registro.resultado = this.s3
              }
              // 8
              if( (diastolica>=81) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 9
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 10
              if( (diastolica>=60) && (diastolica<=80) ){
                  return this.registro.resultado = this.s7
              }
              // 11
              if( (diastolica>=81) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 12
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 13
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 14
              if( (diastolica>=81) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 15
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 16
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      // Edad 20 a 24
      if( (edad>=20) && (edad<=24) ){
          if(sistolica<90){
              // 17
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 18
              if( (diastolica>=60) && (diastolica<=83) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=132) ) {
              // 19
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 20
              if( (diastolica>=60) && (diastolica<=83) ){
                  return this.registro.resultado = this.s2
              }
              // 21
              if( (diastolica>=84) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 22
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=133) && (sistolica<=159) ) {
              // 23
              if( (diastolica>=60) && (diastolica<=83) ){
                  return this.registro.resultado = this.s3
              }
              // 24
              if( (diastolica>=84) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 25
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 26
              if( (diastolica>=60) && (diastolica<=83) ){
                  return this.registro.resultado = this.s7
              }
              // 27
              if( (diastolica>=84) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 28
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 29
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 30
              if( (diastolica>=84) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 31
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 32
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      // Edad 25 a 29
      if( (edad>=25) && (edad<=29) ){
          if(sistolica<90){
              // 33
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 34
              if( (diastolica>=60) && (diastolica<=84) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=133) ) {
              // 35
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 36
              if( (diastolica>=60) && (diastolica<=84) ){
                  return this.registro.resultado = this.s2
              }
              // 37
              if( (diastolica>=85) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 38
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=134) && (sistolica<=159) ) {
              // 39
              if( (diastolica>=60) && (diastolica<=84) ){
                  return this.registro.resultado = this.s3
              }
              // 40
              if( (diastolica>=85) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 41
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 42
              if( (diastolica>=60) && (diastolica<=84) ){
                  return this.registro.resultado = this.s7
              }
              // 43
              if( (diastolica>=85) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 44
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 45
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 46
              if( (diastolica>=85) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 47
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 48
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      // Edad 30 a 34
      if( (edad>=30) && (edad<=34) ){
          if(sistolica<90){
              // 49
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 50
              if( (diastolica>=60) && (diastolica<=85) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=134) ) {
              // 51
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 52
              if( (diastolica>=60) && (diastolica<=85) ){
                  return this.registro.resultado = this.s2
              }
              // 53
              if( (diastolica>=86) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 54
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=135) && (sistolica<=159) ) {
           // 55
              if( (diastolica>=60) && (diastolica<=85) ){
                  return this.registro.resultado = this.s3
              }
              // 56
              if( (diastolica>=86) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 57
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 58
              if( (diastolica>=60) && (diastolica<=85) ){
                  return this.registro.resultado = this.s7
              }
              // 59
              if( (diastolica>=86) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 60
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 61
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 62
              if( (diastolica>=86) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 63
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 64
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
      // Edad 35 a 39
      if( (edad>=35) && (edad<=39) ){
          if(sistolica<90){
              // 65
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 66
              if( (diastolica>=60) && (diastolica<=86) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=135) ) {
              // 67
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 68
              if( (diastolica>=60) && (diastolica<=86) ){
                  return this.registro.resultado = this.s2
              }
              // 69
              if( (diastolica>=87) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 70
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=136) && (sistolica<=159) ) {
              // 71
              if( (diastolica>=60) && (diastolica<=86) ){
                  return this.registro.resultado = this.s3
              }
              // 72
              if( (diastolica>=87) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 73
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 74
              if( (diastolica>=60) && (diastolica<=86) ){
                  return this.registro.resultado = this.s7
              }
              // 75
              if( (diastolica>=87) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 76
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 77
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 78
              if( (diastolica>=87) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 79
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 80
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      // Edad 40 a 44
      if( (edad>=40) && (edad<=44) ){
          if(sistolica<90){
              // 81
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 82
              if( (diastolica>=60) && (diastolica<=87) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=137) ) {
              // 83
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 84
              if( (diastolica>=60) && (diastolica<=87) ){
                  return this.registro.resultado = this.s2
              }
              // 85
              if( (diastolica>=88) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 86
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=138) && (sistolica<=159) ) {
              // 87
              if( (diastolica>=60) && (diastolica<=87) ){
                  return this.registro.resultado = this.s3
              }
              // 88
              if( (diastolica>=88) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 89
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 90
              if( (diastolica>=60) && (diastolica<=87) ){
                  return this.registro.resultado = this.s7
              }
              // 91
              if( (diastolica>=88) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 92
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 93
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 94
              if( (diastolica>=88) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 95
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 96
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      // Edad 45 a 49
      if( (edad>=45) && (edad<=49) ){
          if(sistolica<90){
              // 97
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 98
              if( (diastolica>=60) && (diastolica<=88) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=139) ) {
              // 99
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 100
              if( (diastolica>=60) && (diastolica<=88) ){
                  return this.registro.resultado = this.s2
              }
              // 101
              if( (diastolica>=89) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 102
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=140) && (sistolica<=159) ) {
              // 103
              if( (diastolica>=60) && (diastolica<=88) ){
                  return this.registro.resultado = this.s3
              }
              // 104
              if( (diastolica>=89) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 105
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 106
              if( (diastolica>=60) && (diastolica<=88) ){
                  return this.registro.resultado = this.s7
              }
              // 107
              if( (diastolica>=89) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 108
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 109
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 110
              if( (diastolica>=89) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 111
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 112
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      // Edad 50 a 54
      if( (edad>=50) && (edad<=54) ){
          if(sistolica<90){
              // 113
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 114
              if( (diastolica>=60) && (diastolica<=89) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=142) ) {
              // 115
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 116
              if( (diastolica>=60) && (diastolica<=89) ){
                  return this.registro.resultado = this.s2
              }
              // 117
              if( (diastolica>=90) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 118
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=143) && (sistolica<=159) ) {
              // 119
              if( (diastolica>=60) && (diastolica<=89) ){
                  return this.registro.resultado = this.s3
              }
              // 120
              if( (diastolica>=90) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 121
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 122
              if( (diastolica>=60) && (diastolica<=89) ){
                  return this.registro.resultado = this.s7
              }
              // 123
              if( (diastolica>=90) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 124
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 125
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 126
              if( (diastolica>=90) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 127
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 128
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }   
  
      // Edad 55 a 59
      if( (edad>=55) && (edad<=59) ){
          if(sistolica<90){
              // 129
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 130
              if( (diastolica>=60) && (diastolica<=90) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=147) ) {
              // 131
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 132
              if( (diastolica>=60) && (diastolica<=90) ){
                  return this.registro.resultado = this.s2
              }
              // 133
              if( (diastolica>=91) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 134
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=148) && (sistolica<=159) ) {
              // 135
              if( (diastolica>=60) && (diastolica<=90) ){
                  return this.registro.resultado = this.s3
              }
              // 136
              if( (diastolica>=91) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 137
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 138
              if( (diastolica>=60) && (diastolica<=90) ){
                  return this.registro.resultado = this.s7
              }
              // 139
              if( (diastolica>=91) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 140
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 141
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 142
              if( (diastolica>=91) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 143
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 144
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      // Edad 60 a 64
      if( (edad>=60) && (edad<=64) ){
          if(sistolica<90){
              // 145
              if(diastolica<=60){
                  return this.registro.resultado = this.s1
              }
              // 146
              if( (diastolica>=60) && (diastolica<=91) ){
               this.registro.resultado = this.s1
              }
              return this.registro.resultado;
          }
          if( (sistolica>=90) && (sistolica<=147) ) {
              // 147
              if(diastolica<60){
                  return this.registro.resultado = this.s1
              }
              // 148
              if( (diastolica>=60) && (diastolica<=91) ){
                  return this.registro.resultado = this.s2
              }
              // 149
              if( (diastolica>=92) && (diastolica<=99) ){
                 return this.registro.resultado = this.s3
              }
              // 150
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s6
              }
              return this.registro.resultado;
          }
          if( (sistolica>=133) && (sistolica<=159) ) {
              // 151
              if( (diastolica>=60) && (diastolica<=91) ){
                  return this.registro.resultado = this.s3
              }
              // 152
              if( (diastolica>=92) && (diastolica<=99) ){
                  return this.registro.resultado = this.s3
              }
              // 153
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              return this.registro.resultado;
          }
          if( (sistolica>=160) && (sistolica<=180) ) {
              // 154
              if( (diastolica>=60) && (diastolica<=91) ){
                  return this.registro.resultado = this.s7
              }
              // 155
              if( (diastolica>=92) && (diastolica<=99) ){
                  return this.registro.resultado = this.s4
              }
              // 156
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s4
              }
              // 157
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          if( (sistolica>180) ) {
              // 158
              if( (diastolica>=92) && (diastolica<=99) ){
                  return this.registro.resultado = this.s5
              }
              // 159
              if( (diastolica>=100) && (diastolica<=120) ){
                  return this.registro.resultado = this.s5
              }
              // 160
              if( (diastolica>120) ){
                  return this.registro.resultado = this.s5
              }
              return this.registro.resultado;
          }
          return this.registro.resultado;
      }    
  
      return this.registro.resultado;
      
  }

  registrar( fRegistrar: NgForm ){
    this.hide= !this.hide
    this.registro.fecha = new Date();
    const min = this.registro.fecha.getMinutes();
    var minutos = (min < 10) ? '0' + min : min;
    const hora = this.registro.fecha.getHours() + ':' + minutos;
    const dia = this.registro.fecha.getDate();
    const mes = this.registro.fecha.getMonth() + 1; 
    var mesActual = (mes < 10) ? '0' + mes : mes;
    this.registro.fecha = mesActual + "/" + dia + ', ' + hora;
    if ( fRegistrar.invalid ) { 
      this.datalocalService.presentToast('Ingrese un valor numerico')
      return; 
    }
    this.registro.resultado = this.calcular(this.registro.edad, this.registro.sistolica, this.registro.diastolica )
    console.log(this.registro)
    this.card = this.registro
    this.datalocalService.guardarRegistro( this.registro);
    this.datalocalService.cargarRegistros();
    // this.navCtrl.navigateRoot( '/tabs/tab2', { animated: true } );
  }

  mostrarResultado(){
      setTimeout(() => {
      this.hide= !this.hide;
      }, 8000);
  }

}
