import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  @Input() beer!: Beer;

  constructor( private route : Router ) { }

  ngOnInit(): void {
  }

  onEnSavoirPlus() {
    this.route.navigateByUrl(`beer/${this.beer.id}`);
  }

}
