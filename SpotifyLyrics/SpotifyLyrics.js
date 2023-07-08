module.exports = {
  name: 'SpotifyLyrics',
  description: 'Fetch Spotify lyrics if lyrics are not available for a Deezer track',
  settings: [
    {
      type: 'button',
      label: 'Authorize Spotify account',
      subtext: 'Plugin cannot work without being logged in a Spotify account',
      onClick: () => window.electron.openExternalLink('https://accounts.spotify.com/fr/authorize?response_type=code&client_id=92b6e98016394de7a8508f100d68c99b&redirect_uri=deezer:///fr/deezer-tweaker/plugin/spotify-lyrics/oauth2&scope=')
    }
  ],
  replacements: [
    {
      file: '%jsCache%/route-naboo.fda0f9eaad2eeb36f5b5.js',
      find: /(Ue.ShowLyrics=\(\{item:e,lyricsId:t,onPlayLyrics:r}\)=>\{)/g,
      replace: `$1
      // No lyrics are available on Deezer 
      if (t === null) { /* TODO */ }
      `
    },
    {
      file: '%jsCache%/route-naboo.fda0f9eaad2eeb36f5b5.js',
      find: /(Object\(ve.g\)\(\);)/g,
      replace: '$1console.log(n,a,s,c,l,d,p,m,b,g,y,v,_);'
    }
  ],
}
