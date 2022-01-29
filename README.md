# Edited fork of the original

See [da-discord-webhook](https://github.com/ericvaladas/da-discord-webhook).



# da-discord-webhook
A simple bot to send notifications to a Discord Webhook when a Hosted Arena battle is announced.

## Setup
This script requires the following environment variables to be configured:

| Variable      | Description   |
| ------------- | ------------- |
| `USERNAME`    | Your character's username  |
| `PASSWORD`    | Your character's password  |
| `WEBHOOK`     | The [Discord Webhook](https://support.discordapp.com/hc/en-us/articles/228383668-Intro-to-Webhooks) url |

## Usage
Clone this repository.
```
git clone https://github.com/ericvaladas/da-discord-webhook.git
```

Install and build.
```
cd da-discord-webhook
npm install
npm run build
```

Run the script.
```
npm start
```
