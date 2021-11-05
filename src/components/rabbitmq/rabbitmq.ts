import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import mqtt from 'mqtt';

@customElement('rabbitmq-component')
export class RabbitMqComponent extends LitElement {
    @state()
    clientConnectMQTT: boolean = false;

    connectedCallback() {
        super.connectedCallback();
        const client = mqtt.connect('mqtt://localhost:1883');
        client.on('connect', () => {
            this.clientConnectMQTT = true;
        });
    }

    render() {
        return html`
            <span>Corriendo rabbitmq-component</span>
            <br>
            <span>
                ${ this.clientConnectMQTT ? 'Se logro conectar' : 'No esta conectado' }
            </span>
        `;
    }
}
