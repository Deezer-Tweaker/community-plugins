module.exports = {
  name: 'No Premium',
  description: 'Removes all ads (banners, audio) and offers to subscribe to Deezer Premium',
  screenshot: 'screenshot.png',
  replacements: [
    { // Removes audio ads
      file: '%jsCache%/route-naboo.fda0f9eaad2eeb36f5b5.js',
      find: /this.props.hasAudioAds|e.user.USER.OPTIONS.ads_audio/g,
      replace: 'false'
    }
  ],
  css: `.conversion-banner, .ads { display: none !important; }`
}
