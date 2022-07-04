import { Component, OnInit } from '@angular/core';
import { Streamer } from '../../models/streamer';
import { StreamerService } from '../../services/streamer.service';

@Component({
  selector: 'app-streamers-view',
  templateUrl: './streamers-view.component.html',
  styleUrls: ['./streamers-view.component.css']
})
export class StreamersViewComponent implements OnInit {

  streamers: Streamer[];

  constructor(private streamerService: StreamerService) {
    this.streamers = [];
  }

  ngOnInit(): void {
    this.streamers = this.streamerService.streamers;
  }

}
