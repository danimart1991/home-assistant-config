![GitHub last commit](https://img.shields.io/github/last-commit/danimart1991/home-assistant-config)
![License](https://img.shields.io/github/license/danimart1991/home-assistant-config.svg)

# Home Assistant Configuration

Here's my [Home Assistant](https://home-assistant.io/) configuration running [Hass.io](https://www.home-assistant.io/hassio/) on a [Raspberry Pi 2 B](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/) trying to handle every aspect of the house that my lazy IT soul doesn't want to do on a day-to-day basis.

## Getting Started

This repository has complementary articles to follow all the progress in:

| Article | Español | English |
| --- | --- | --- |
| Domotizing our house with Home Assistant | [🔗](https://www.nocountryforgeeks.com/domotizando-nuestra-casa-con-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/domotizing-our-house-with-home-assistant/) |
| Meeting Home Assistant | [🔗](https://www.danielmartingonzalez.com/es/conociendo-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/meeting-home-assistant/) |
| Protect your private info with secrets.yaml | [🔗](https://www.danielmartingonzalez.com/es/protege-tu-informacion-privada-con-secrets-yaml/) | [🔗](https://www.danielmartingonzalez.com/en/protect-your-private-info-with-secrets-yaml/) |
| Home Assistant notifications on Telegram | [🔗](https://www.danielmartingonzalez.com/es/notificaciones-de-home-assistant-en-telegram/) | [🔗](https://www.danielmartingonzalez.com/en/home-assistant-notifications-on-telegram/) |
| The meta-component Default Config | [🔗](https://www.danielmartingonzalez.com/es/el-meta-componente-default-config/) | [🔗](https://www.danielmartingonzalez.com/en/the-meta-component-default-config/) |
| Improve the look and feel of Home Assistant | [🔗](https://www.danielmartingonzalez.com/es/mejorar-aspecto-de-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/improve-the-look-and-feel-of-home-assistant/) |
| Home Assistant configuration in YAML | [🔗](https://www.danielmartingonzalez.com/es/configuracion-de-home-assistant-en-yaml/) | [🔗](https://www.danielmartingonzalez.com/en/home-assistant-configuration-in-yaml/) |
| Images for people in Home Assistant | [🔗](https://www.danielmartingonzalez.com/es/imagenes-para-personas-en-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/images-for-people-in-home-assistant/) |
| Track devices in Home Assistant | [🔗](https://www.danielmartingonzalez.com/es/seguimiento-de-dispositivos-en-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/track-devices-in-home-assistant/) |
| YAML files by package in Home Assistant | [🔗](https://www.danielmartingonzalez.com/es/archivos-yaml-por-paquetes-en-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/yaml-files-by-package-in-home-assistant/) |
  
Make sure to check it out.

## Add-ons

Thanks to Hass.io, I can install add-ons that make my life easier.

| Add-on | Use | Español | English |
| --- | --- | --- | --- |
| [Check Home Assistant configuration](https://github.com/home-assistant/hassio-addons/tree/master/check_config) | Check all is ready to update | [🔗](https://www.danielmartingonzalez.com/es/conociendo-home-assistant/#instalando-nuestro-primer-add-on) | [🔗](https://www.danielmartingonzalez.com/en/meeting-home-assistant/#installing-our-first-add-on) |
| [Configurator](https://www.home-assistant.io/addons/configurator) | Edit files directly into the Home Assistant web interface. <br/> Quickly test configurations that I will later take to the code repository. | [🔗](https://www.danielmartingonzalez.com/es/configura-home-assistant-editando-sus-archivos/) | [🔗](https://www.danielmartingonzalez.com/en/configure-home-assistant-editing-its-files/) |
| [DuckDNS + Let's Encrypt](https://www.home-assistant.io/addons/duckdns/) | Secure (SSL) and static IP remote connection to Home Assistant. | [🔗](https://www.danielmartingonzalez.com/es/controla-tu-casa-desde-cualquier-sitio-con-duckdns/) | [🔗](https://www.danielmartingonzalez.com/en/control-your-home-from-anywhere-with-duckdns/) |
| [SSH & Web Terminal](https://github.com/hassio-addons/addon-ssh) | Run console full commands. | [🔗](https://www.danielmartingonzalez.com/es/ssh-y-terminal-web-en-hassio/) | [🔗](https://www.danielmartingonzalez.com/en/ssh-and-web-terminal-in-hassio/) |
| [ESPHome](https://github.com/esphome/hassio) | ESPHome dashboard and device manager | [🔗](https://www.danielmartingonzalez.com/es/crea-tus-propios-dispositivos-inteligentes-con-esphome/) | [🔗](https://www.danielmartingonzalez.com/en/make-your-own-smart-devices-with-esphome/) |

## Entities

| Entity | Installation | Español | English |
| --- | --- | --- | --- |
| [OpenWeatherMap](https://openweathermap.org/) | HA Component + Card | [🔗](https://www.danielmartingonzalez.com/es/configura-home-assistant-editando-sus-archivos/#usando-configurator) | [🔗](https://www.danielmartingonzalez.com/en/configure-home-assistant-editing-its-files/#using-configurator) |
| Mi Flora / Mi Plant | HA Component + Card | [🔗](https://www.danielmartingonzalez.com/es/cuidando-tus-plantas-con-mi-flora-y-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/caring-your-plants-with-mi-flora-and-home-assistant/) |
| Mobile App | [🔗](https://www.danielmartingonzalez.com/es/seguimiento-de-dispositivos-en-home-assistant/#mobile-app) | [🔗](https://www.danielmartingonzalez.com/en/track-devices-in-home-assistant/#mobile-app) |
| System Monitor | HA Component + Custom Card | [🔗](https://www.danielmartingonzalez.com/es/supervisando-un-servidor-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/monitoring-a-home-assistant-server/) |
| Speedtest | HA Component + Custom Card | [🔗](https://www.danielmartingonzalez.com/es/supervisando-un-servidor-home-assistant/) | [🔗](https://www.danielmartingonzalez.com/en/monitoring-a-home-assistant-server/) |
| Telegram | HA Component + Custom Card | [🔗](https://www.danielmartingonzalez.com/es/notificaciones-de-home-assistant-en-telegram/) | [🔗](https://www.danielmartingonzalez.com/en/home-assistant-notifications-on-telegram/) |
| Tuya | HA Component + Custom Card | [🔗](https://www.danielmartingonzalez.com/es/controlar-dispositivos-inteligentes-desde-tuya-smart-life/) | [🔗](https://www.danielmartingonzalez.com/en/control-smart-devices-with-tuya-smart-life/) |

## Devices

| Model | Type (Use) | Español | English |
| --- | --- | --- | --- |
| Sricam SP009 | Camera | - | - |
| Raspberry Pi Zero W + Camera | Camera | [🔗](https://www.nocountryforgeeks.com/camara-de-seguridad-con-rasberry-pi/) | [🔗](https://www.danielmartingonzalez.com/en/security-camera-with-raspberry-pi/) |

## Lovelace (Dashboard)

Here are some screenshots of my [Lovelace Dashboard](https://www.home-assistant.io/lovelace/) configuration (They may not be fully updated).

### Home

![Dashboard Home Tab](/docs/images/screenshot_view_00.jpg)

![Dashboard Ground Floor Tab](/docs/images/screenshot_view_01.jpg)

![Dashboard First Floor Tab](/docs/images/screenshot_view_02.jpg)

![Dashboard System Tab](/docs/images/screenshot_view_03.jpg)
