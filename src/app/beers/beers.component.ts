import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer.model';
import { beerService } from '../service/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers!: Beer[];

  constructor(private beerService: beerService ) {}

  ngOnInit() {
      this.beers = this.beerService.getAllBeers();
  }

}
