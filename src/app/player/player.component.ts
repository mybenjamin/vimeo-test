import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('myPlayer') vimeo;
  videoPlayer: any;
  options = {
    url: 'https://vimeo.com/280815263',
    width: 800
  };


  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.videoPlayer = new Player(this.vimeo.nativeElement, this.options);
    this.videoPlayer.on('play', () => {
      console.log('Played the video');
    });
    console.log(this.vimeo.nativeElement);
  }

}
