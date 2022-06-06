import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../models/beer.model';
import { beerService } from '../service/beer.service';

@Component({
  selector: 'app-single-beer',
  templateUrl: './single-beer.component.html',
  styleUrls: ['./single-beer.component.scss']
})
export class SingleBeerComponent implements OnInit {
  beer!: Beer;
  couleur!: string;
  amertume!: string;

  constructor(private beerService: beerService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const beerId = +this.route.snapshot.params['id'];
    this.beer = this.beerService.getBeerById(beerId);
    if(this.beer.ebc){
      const ebc = this.beer.ebc
      const palette : string[] = [
        '#F3F993',
        '#F5F75C',
        '#F6F513',
        '#EAE615',
        '#E0D01B',
        '#D5BC26',
        '#CDAA37',
        '#C1963C',
        '#BE8C3A',
        '#BE823A',
        '#C17A37',
        '#BF7138',
        '#BC6733',
        '#B26033',
        '#A85839',
        '#985336',
        '#8D4C32',
        '#7C452D',
        '#6B3A1E',
        '#5D341A',
        '#4E2A0C',
        '#4A2727',
        '#361F1B',
        '#261716',
        '#231716',
        '#19100F',
        '#16100F',
        '#120D0C',
        '#100B0A',
        '#050B0A'
      ];
      if(ebc < 1){
        this.couleur = 'white';
      }else if(ebc > 30){
        this.couleur = 'black';
      }else{
        this.couleur = palette[ebc];
      }
    }
  }

}
