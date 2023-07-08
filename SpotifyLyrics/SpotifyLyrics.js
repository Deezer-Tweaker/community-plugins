module.exports = {
  name: 'SpotifyLyrics',
  description: 'Fetch Spotify lyrics if lyrics are not available for a Deezer track',
  settings: [
    {
      type: 'button',
      label: 'Authorize Spotify account',
      subtext: 'Plugin cannot work without being logged in a Spotify account',
      onClick: () => {
        const query = new URLSearchParams();
        query.set('response_type', 'code');
        query.set('client_id', '92b6e98016394de7a8508f100d68c99b');
        query.set('redirect_uri', 'deezer:///plugins/spotifylyrics/callback');
        query.set('scope', '');
        window.electron.openExternalLink(`https://accounts.spotify.com/authorize?${query.toString()}`);
      }
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
  inject({ Api }) {
    const React = require('react');
    Api.Routes.create('/plugins/spotifylyrics/callback', () => {
      return React.createElement('span', {}, 'Done');
    });
  }
}
