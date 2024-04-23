import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompareViewComponent } from './views/compare-view/compare-view.component';
import { StreamlitService } from './services/streamlit.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompareViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  constructor(private streamlitService: StreamlitService) {}
  ngOnInit() {
    this.streamlitService.addEventListener();
    this.streamlitService.setComponentReady();
    this.streamlitService.setFrameHeight();
  }

  ngOnDestroy() {
    this.streamlitService.removeEventListener();
  }
}
