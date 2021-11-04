import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Loader } from '@googlemaps/js-api-loader';

import Style from './google-maps.css';

@customElement('google-maps')
export class GoogleMaps extends LitElement {
    static styles = css`${Style}`;

    @state()
    isLoading: boolean = false;

    @property({ type: String })
    apiKey: string = '';

    connectedCallback() {
        super.connectedCallback();

        const loader = new Loader({
            apiKey: this.apiKey,
            version: "weekly",
        });

        loader.load().then(() => {
            this.isLoading = true;
        });
    }

    render() {
        if(this.isLoading && this.shadowRoot) {
            const divMap = this.shadowRoot.getElementById('google_map');
            setTimeout(() => {
                new google.maps.Map(divMap as HTMLElement, {
                    center: { lat: -34.397, lng: 150.644 },
                    zoom: 8,
                });
            });            
        }
        return html`
            <span>Corriendo google-maps</span>
            <div id='google_map'>${this.apiKey}</div>
        `;
    }
}
