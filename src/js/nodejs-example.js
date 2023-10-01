import { NodeJS } from 'capacitor-nodejs';

// Listens to "msg-from-nodejs" from the Node.js process.
NodeJS.addListener('msg-from-nodejs', event => {
  document.body.innerHTML += `
    <section>
      <h2>Node.js Response</h2>
      <p>
        First argument: ${event.args[0]}<br>
        Second argument: ${event.args[1]}
      </p>
    </section>
  `;
  console.log(event);
});

// Waits for the Node.js process to initialize.
NodeJS.whenReady().then(() => {
  // Sends a message to the Node.js process.
  NodeJS.send({
    eventName: 'msg-from-capacitor',
    args: ['Hello from Capacitor!'],
  });
});
