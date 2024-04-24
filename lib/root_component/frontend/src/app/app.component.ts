import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StreamlitService } from './services/streamlit.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    OnDestroy
{
  title = 'frontend';
  constructor(private streamlitService: StreamlitService) {}

  ngOnInit() {
    this.streamlitService.setFrameHeight(650);
    this.streamlitService.addEventListener();
  }

  ngAfterViewInit() {
    this.streamlitService.setFrameHeight(650);
  }

  ngAfterViewChecked() {
    this.streamlitService.setFrameHeight(650);
  }

  ngAfterContentInit() {
    this.streamlitService.setComponentReady();
  }

  ngOnDestroy() {
    this.streamlitService.removeEventListener();
  }
}
