import { Client } from 'darkages';
import Webhook from './discord';

const { USERNAME, PASSWORD, WEBHOOK } = process.env;
const client = new Client(USERNAME, PASSWORD);
const webhook = new Webhook(WEBHOOK);


client.events.on(0x0A, packet => {
  const type = packet.readByte();
  const message = packet.readString1036();

     const notify = (
      message.includes('@')
      );


  if (notify) {
      //do nothing
    }
    else {
      webhook.send(message);
    }
});

client.connect();
