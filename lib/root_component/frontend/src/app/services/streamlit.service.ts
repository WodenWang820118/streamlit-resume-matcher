import { Injectable } from '@angular/core';
import { RenderData, Streamlit } from 'streamlit-component-lib';

@Injectable({
  providedIn: 'root',
})
export class StreamlitService {
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

  onRenderEvent(event: Event): void {
    const renderEvent = event as CustomEvent<RenderData>;
    Streamlit.setFrameHeight();
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
