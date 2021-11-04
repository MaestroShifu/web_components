import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('web-component')
export class WebComponent extends LitElement {
    render() {
        return html`
            <span>Corriendo web-component</span>
        `;
    }
}