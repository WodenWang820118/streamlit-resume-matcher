import { Component, OnDestroy, OnInit } from '@angular/core';
import { StreamlitService } from '../../services/streamlit.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { documents } from './example';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-compare-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './compare-form.component.html',
  styleUrls: ['./compare-form.component.scss'],
})
export class CompareFormComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  documentForm = this.fb.group({
    resume: [''],
    jobDescription: [''],
  });

  constructor(
    private streamlitService: StreamlitService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log('CompareFormComponent ngOnInit');
  }

  compare() {
    this.streamlitService.setComponentValue(this.documentForm.value);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
