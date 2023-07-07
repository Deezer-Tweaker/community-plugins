const { join } = require('path');

module.exports = {
  name: 'No Premium',
  description: 'Removes all ads (banners, audio) and offers to subscribe to Deezer Premium',
  start({ asar, paths, startingFrom }) {
    if (startingFrom === 'app_start') return;
    // Hide ads
    asar.injectCss(`
    .conversion-banner, .ads { display: none !important; }
    `);
    // Removes audio ads
    asar.replaceInFile(
      join(paths.extractedAsar, 'build', 'assets', 'cache', 'js', 'route-naboo.fda0f9eaad2eeb36f5b5.js'),
      /this.props.hasAudioAds|e.user.USER.OPTIONS.ads_audio/g,
      'false'
    );
  }
}
