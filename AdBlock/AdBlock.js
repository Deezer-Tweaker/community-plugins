module.exports = {
  name: 'AdBlock',
  description: 'Removes all ads (banners, audio) and offers to subscribe to Deezer Premium',
  screenshot: 'screenshot.png',
  replacements: [
    { // Removes audio ads
      file: '%jsCache%/route-naboo',
      find: /this.props.hasAudioAds|[a-zA-Z].user.USER.OPTIONS.ads_audio|[a-zA-Z].playerType===[a-zA-Z].[a-zA-Z].ADS/g,
      replace: 'false'
    },
    {
      file: '%jsCache%/route-naboo-ads',
      find: /[a-zA-Z].USER.OPTIONS.ads_audio|Object\(y.c\)\([a-zA-Z]\)|(e|this.props).(hasDisplayAds|isAdsAllowed)/g,
      replace: 'false'
    },
    {
      file: '%jsCache%/route-naboo-ads',
      find: /https:\/\/ced.sascdn.com\/tag\/400\/smart.js|https:\/\/ww400.smartadserver.com|,_.c.hasAudioAds=!1/,
      replace: ''
    },
  ],
  css: `.conversion-banner, .ads { display: none !important; }`
}
