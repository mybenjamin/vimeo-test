import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements AfterViewInit {
  @ViewChild('myPlayer') vimeo; // Reference for HTML Element
  videoPlayer: any;

  options = {
    url: 'https://vimeo.com/280815263',
    width: 800
  };

  ngAfterViewInit() {
    this.videoPlayer = new Player(this.vimeo.nativeElement, this.options);

    // Declare what to do when play occurs
    this.videoPlayer.on('play', () => {
      console.log('Played the video');
    });

    console.log(this.vimeo.nativeElement);
  }

}
