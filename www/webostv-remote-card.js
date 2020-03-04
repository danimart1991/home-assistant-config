class WebOsTvRemoteCard extends HTMLElement {
    setConfig(config) {
        if (!config.entity) {
            throw new Error('You need to define an entity');
        }

        this.config = config;
    }

    set hass(hass) {
        if (!this.content) {
            const card = document.createElement('ha-card');
            card.header = 'webOS TV Remote';
            this.content = document.createElement('div');
            this.content.style.padding = '0 16px 16px';

            this.defineButtonsConfig(this.config);

            const entityId = this.config.entity;
            const state = hass.states[entityId];
            const stateStr = state ? state.state : 'unavailable';
            const stateVol = state.attributes.volume_level ? state.attributes.volume_level * 100 : '·';

            this.content.innerHTML = `
              The state of ${entityId} is ${stateStr} with vol ${stateVol}!
              <br><br>
              <!--<img src="http://via.placeholder.com/350x150">-->
              <ul>
                <li id="volmin" class="myButton-lg"><a href="#" title="Vol Min"><span>Vol Min</span></a></li>
              </ul>
              
              <paper-icon-button id="volumeUp" class="myButton-lg" title="Volume Up" icon="${'mdi:volume-plus'}"></paper-icon-button>
              <p>${stateVol}</p>
              <paper-icon-button id="volumeDown" class="myButton-lg" title="Volume Down" icon="${'mdi:volume-minus'}"></paper-icon-button>
            `;

            card.appendChild(this.content);
            this.appendChild(card);

            this._bindButtons(card, hass, this.config, entityId);
        }
    }

    _bindButtons(card, hass, config, entityId) {
        var buttons = card.getElementsByClassName("myButton-lg");
        var i;
        for (i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            button.addEventListener('click', function(source) {
                console.log(button.id);
                hass.callService(
                    'webostv',
                    'command', { entity_id: entityId, command: config.buttonsConfig[button.id] }
                );
            });
        }
    }

    defineButtonsConfig(config) {
        config.buttonsConfig = {
            volumeDown: "audio/volumeDown",
            volumeUp: "audio/volumeUp",
        };
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 3;
    }
}

customElements.define('webostv-remote-card', WebOsTvRemoteCard);