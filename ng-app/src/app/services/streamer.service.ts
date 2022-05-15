import { Injectable } from '@angular/core';
import { Streamer } from '../models/streamer';

@Injectable({
  providedIn: 'root'
})
export class StreamerService {

  streamers: Streamer[];
  constructor() {
    this.streamers = [
      new Streamer(
        'Stream Faction',
        'Logos_Streamers/Stream_Faction_Logo.png',
        'Bienvenue sur la chaîne de l\'association!',
        new Date(),
        new Date()),
      new Streamer(
        'Van Drake',
        'Logos_Streamers/vanavatar_pseudo.png',
        'Salut! Je me nomme Ivan alias Van Drake. Je stream sur plusieurs styles de jeux et j\'ai une préférence pour les jeux multi.',
        new Date(),
        new Date()),
      new Streamer(
        'Fluchers',
        'Logos_Streamers/flucherqs.png',
        'Streamer d\'origine Suisse',
        new Date(),
        new Date())
    ];
   }

   getById(streamerId: number): Promise<Streamer> {
     return new Promise<Streamer>(
       (res, rej) => {
         for (let streamer of this.streamers) {
           if (streamer.id === streamerId) {
             res(streamer);
             break;
           }
         }
       }
     )
   }
}
