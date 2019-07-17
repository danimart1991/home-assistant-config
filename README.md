# Home Assistant Configuration

Here's my [Home Assistant](https://home-assistant.io/) configuration running [Hass.io](https://www.home-assistant.io/hassio/) on a [Raspberry Pi 2 B](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/) trying to handle every aspect of the house that my lazy IT soul doesn't want to do on a day-to-day basis.

## Getting Started

This repository has complementary articles to follow all the progress in [Spanish](https://www.nocountryforgeeks.com/domotizando-nuestra-casa-con-home-assistant/) or [English](https://www.danielmartingonzalez.com/domotizing-our-house-with-home-assistant-readme.html). Make sure to check it out.

## Add-ons

- [Check Home Assistant configuration](https://github.com/home-assistant/hassio-addons/tree/master/check_config) to check all is ready to update.
- [DuckDNS + Let's Encrypt](https://www.home-assistant.io/addons/duckdns/) to create a secure (SSL) and static IP remote connection to Home Assistant.
- [Configurator](https://www.home-assistant.io/addons/configurator) to allow edit files directly into the Home Assistant web interface. I use this to test quickly configurations that I will later take to the code repository.
- [Git pull](https://www.home-assistant.io/addons/git_pull/) to update local configuration directly from this repo.
- [SSH + Web Server](https://github.com/hassio-addons/addon-ssh) to run terminal full commands.

## Entities

| Entity | Installation | How tos |
|---|---|---|
| [OpenWeatherMap](https://openweathermap.org/) | Component + Card | English: Coming soon. <br/> Spanish: Coming soon. |
