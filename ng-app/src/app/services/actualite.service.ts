import { Injectable } from '@angular/core';
import { Actualite } from '../models/actualite';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  actualites: Actualite[];
  constructor() {
    this.actualites = [
      new Actualite(
        'Création du site de l\'association Stream Faction',
        'Logos_Streamers/Stream_Faction_Logo.png',
        'Voici venir le tout premier site de l\'association!',
        '',
        new Date(),
        new Date()),
      new Actualite(
        'Petit retour sur la Gamin\'Gone 3',
        'Logos_Streamers/Stream_Faction_Logo.png',
        'La Gamin\'Gone est un événement gaming organisé par l\'association G2L2 Corp.',
        '',
        new Date(),
        new Date()),
      new Actualite(
        'Présentation du streamer de l\'association nommé Fluchers.',
        'Logos_Streamers/flucherqs.png',
        'Streamer d\'origine Suisse',
        '',
        new Date(),
        new Date()),
      new Actualite(
        'Présentation du streamer de l\'association nommé Van Drake',
        'Logos_Streamers/vanavatar_pseudo.png',
        'Je stream sur plusieurs styles de jeux et j\'ai une préférence pour les jeux multi.',
        '',
        new Date(),
        new Date())
    ]
  }
}
