import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StreamlitService } from '../../services/streamlit.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CompareFormComponent } from '../../components/compare-form/compare-form.component';

@Component({
  selector: 'app-compare-view',
  standalone: true,
  imports: [CommonModule, CompareFormComponent],
  template: `
    <div class="compare-view">
      <app-compare-form></app-compare-form>
    </div>
  `,
  styles: [``],
})
export class CompareViewComponent implements OnInit, OnDestroy {
  title = 'frontend';
  numClicks = 0;
  @Input() name!: any;
  destroy$ = new Subject<void>();

  constructor(private streamlitService: StreamlitService) {}

  ngOnInit() {
    this.observeNameChange();
  }

  observeNameChange() {
    this.streamlitService
      .getRenderEvent()
      .pipe(
        takeUntil(this.destroy$),
        tap((renderData) => {
          if (renderData.args.name) {
            console.log('Name changed to:', renderData.args.name);
            this.name = renderData.args.name;
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
