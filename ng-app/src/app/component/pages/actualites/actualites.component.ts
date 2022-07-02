import { Component, OnInit } from '@angular/core';
import { Actualite } from '../../../models/actualite';
import { ActualiteService } from '../../../services/actualite.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.css']
})
export class ActualitesComponent implements OnInit {

  actualites: Actualite[];

  constructor(private actualiteService: ActualiteService) {
    this.actualites = [];
  }

  ngOnInit(): void {
    this.actualites = this.actualiteService.actualites;
  }

}
