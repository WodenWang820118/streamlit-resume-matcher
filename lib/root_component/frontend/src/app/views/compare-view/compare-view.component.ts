import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
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
export class CompareViewComponent implements OnDestroy {
  destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
