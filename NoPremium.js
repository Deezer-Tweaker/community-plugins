const { join } = require('path');
module.exports = {
  name: 'No Premium',
  description: 'Removes all ads (banners, audio) and offers to subscribe to Deezer Premium',
  start({ asar }) {
    // Hide ads
    asar.injectCss(`
    .conversion-banner, .ads { display: none !important; }
    `);
  }
}
