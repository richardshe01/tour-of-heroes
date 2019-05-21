import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Genji' },
  { id: 12, name: 'Mercy' },
  { id: 13, name: 'Winston' },
  { id: 14, name: 'McCree' },
  { id: 15, name: 'Hanzo' },
  { id: 16, name: 'Tracer' },
  { id: 17, name: 'Doomfist' },
  { id: 18, name: 'D.Va' },
  { id: 19, name: 'Sombra' },
  { id: 20, name: 'Zarya' }
    ];
    return {heroes};
  }
 
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}