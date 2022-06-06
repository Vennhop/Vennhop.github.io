import { Injectable } from "@angular/core";
import { Beer } from "../models/beer.model";

@Injectable( {
    providedIn:'root'
} )
export class beerService {

    beers : Beer[] = [
        {
            id: 0,
            nom: `Pavenn`,
            description: `Une bière blonde de style Pale Ale Belge, au goût délicieusement malté. Avec une pointe de houblon qui apporte des notes florales et tropicales (fruit de la passion, mangue).`,
            ingredients: `Eau, Malt Pale Ale, Avoine, Sucre, Houblon, Levure`,
            nez: `Indisponible pour le moment`,
            bouche: `Indisponible pour le moment`,
            image: `/assets/img/pavenn.jpg`,
            prix: 3.10,
            style: "Pale Ale",
            alcool: 6,
            ibu: 0,
            ebc: 5
        },
        {
            id: 1,
            nom: `Oncle Sam`,
            description: `Une IPA américaine, du houblon, du houblon, et encore du houblon. Pour les accros de la bière fruitée et doucement amère. Une explosion de saveur houblonnée vous attend, avec une sélection de houblons 100% américains.`,
            ingredients: `Eau, Malt (Pilsen, Vienna, Cara), Avoine, Sucre, Houblons (100% américains), Levure`,
            nez: `Indisponible pour le moment`,
            bouche: `Indisponible pour le moment`,
            image: `/assets/img/sam.jpg`,
            prix: 3.50,
            style: "American IPA",
            alcool: 7,
            ibu: 0,
            ebc: 10
        },
        {
            id: 2,
            nom: `Tripel`,
            description: `La triple belge dans toute son authenticité. Une sélection de multiples céréales accompagnée de houblons flamands, a patiemment attendu 3 mois avant de vous trouver pour vous dévoiler toute sa richesse. Cette triple saura de par son goût (et son degré d'alcool !) vous faire tourner la tête.`,
            ingredients: `Eau, Malt (pilsen, seigle, Munich, cara) Avoine, Houblon, Levure`,
            nez: `Indisponible pour le moment`,
            bouche: `Indisponible pour le moment`,
            image: `/assets/img/triple.jpg`,
            prix: 3.50,
            style: "Triple Belge",
            alcool: 11,
            ibu: 0,
            ebc: 12
        }
        /*
        {
            id: ,
            nom: ``,
            description: ``,
            ingredients: ``,
            gouts: ``,
            image: ``,
            prix: ,
            alcool: ,
            ibu: ,
            ebc: 
        }
        */
    ]

    getAllBeers(): Beer[]{
        return this.beers;
    }

    getBeerById(id: number): Beer {
        const beer = this.beers.find(beer => beer.id === id);
        if(beer){
            return beer;
        }else{
            throw new Error('Beer not found');
        }
    }
}