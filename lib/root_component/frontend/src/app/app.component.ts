import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StreamlitService } from './services/streamlit.service';
import { UploadButtonComponent } from './components/upload-button/upload-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  numClicks = 0;
  name = 'Angular';

  constructor(private streamlitService: StreamlitService) {}

  ngOnInit() {
    this.streamlitService.addEventListener();
    this.streamlitService.setComponentReady();
    this.streamlitService.setFrameHeight();
  }

  ngOnDestroy() {
    this.streamlitService.removeEventListener();
  }

  onClicked() {
    this.numClicks++;
    this.streamlitService.setComponentValue(this.numClicks);
  }
}
