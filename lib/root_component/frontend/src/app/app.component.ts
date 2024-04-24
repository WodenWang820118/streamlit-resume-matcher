import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StreamlitService } from './services/streamlit.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {
  title = 'frontend';
  constructor(private streamlitService: StreamlitService) {}

  ngOnInit() {
    this.streamlitService.addEventListener();
  }

  ngAfterContentInit() {
    this.streamlitService.setFrameHeight(window.innerHeight);
    this.streamlitService.setComponentReady();
  }

  ngOnDestroy() {
    this.streamlitService.removeEventListener();
  }
}
