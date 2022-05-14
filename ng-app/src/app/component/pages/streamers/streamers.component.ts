import { Component, Input, OnInit } from '@angular/core';
import { StreamerService } from 'src/app/services/streamer.service';
import { Streamer } from '../../../models/streamer';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.css']
})
export class StreamersComponent implements OnInit {

  streamers: Streamer[];

  constructor(private streamersService: StreamerService) {
    this.streamers = [];
  }

  ngOnInit(): void {
    this.streamers = this.streamersService.streamers;
  }

}
