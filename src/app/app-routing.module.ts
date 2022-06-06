import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BeersComponent } from './beers/beers.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { SingleBeerComponent } from './single-beer/single-beer.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'beers', component: BeersComponent },
  { path: 'beer/:id', component: SingleBeerComponent},
  { path: 'fabrication', component: FabricationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
