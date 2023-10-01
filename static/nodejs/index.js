const { channel } = require('bridge');

// Listens to "msg-from-capacitor" from the Capacitor layer.
channel.addListener('msg-from-capacitor', message => {
  console.log('[Node.js] Message from Capacitor: ' + message);

  // Sends a message back to the Capacitor layer.
  channel.send('msg-from-nodejs', `Replying to the message "${message}".`, 'And optionally add more arguments.');
});
