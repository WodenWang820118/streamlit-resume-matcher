import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { RenderData, Streamlit } from 'streamlit-component-lib';

@Injectable({
  providedIn: 'root',
})
export class StreamlitService {
  private renderEvent$ = new Subject<RenderData>();

  addEventListener() {
    Streamlit.events.addEventListener(
      Streamlit.RENDER_EVENT,
      this.onRenderEvent.bind(this)
    );
  }

  removeEventListener() {
    Streamlit.events.removeEventListener(
      Streamlit.RENDER_EVENT,
      this.onRenderEvent.bind(this)
    );
  }

  getRenderEvent(): Observable<RenderData> {
    return this.renderEvent$.asObservable();
  }

  private onRenderEvent(event: Event) {
    const renderEvent = event as CustomEvent<RenderData>;
    Streamlit.setFrameHeight();
    this.renderEvent$.next(renderEvent.detail);
  }

  setComponentReady() {
    Streamlit.setComponentReady();
  }

  setFrameHeight() {
    Streamlit.setFrameHeight();
  }

  setComponentValue(value: any) {
    Streamlit.setComponentValue(value);
  }
}
