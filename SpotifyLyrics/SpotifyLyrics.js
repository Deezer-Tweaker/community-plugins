module.exports = {
  name: 'SpotifyLyrics',
  description: 'Fetch Spotify lyrics if lyrics are not available for a Deezer track',
  replacements: [
    {
      file: '%jsCache%/route-naboo.fda0f9eaad2eeb36f5b5.js',
      find: /(Ue.ShowLyrics=\(\{item:e,lyricsId:t,onPlayLyrics:r}\)=>\{)/g,
      replace: `$1
      // No lyrics are available on Deezer 
      if (t === null) {
        fetch('https://accounts.spotify.com/api/token', { 
          headers: { Authorization: 'Basic ' + btoa('782b7e0e60444f8d935e0ef5250819ad:4d98697f674f4f5b823604c7f36d6eee'), 'Content-Type': 'application/x-www-form-urlencoded' },
          body: 'grant_type=client_credentials',
          method: 'POST'
        }).then(res => res.json()).then(json => {
          DeezerTweaker.Plugins['SpotifyLyrics'].Settings.set('access_token', json.access_token);
          DeezerTweaker.Plugins['SpotifyLyrics'].Settings.set('expires_at', Date.now() + json.expires_in);
          /*fetch(\`https://api.spotify.com/v1/search?q=track%3A\${e.title}+artist%3A\${e.artist.name}&type=track&limit=1\`, {
            headers: { Authorization: 'Bearer ' + json.access_token }
          }).then(console.log);*/
        });
      }
      `
    },
    {
      file: '%jsCache%/route-naboo.fda0f9eaad2eeb36f5b5.js',
      find: /(Object\(ve.g\)\(\);)/g,
      replace: '$1console.log(n,a,s,c,l,d,p,m,b,g,y,v,_);'
    }
  ],
  inject({ Api, React }) {
    Api.Routes.create('/plugins/spotifylyrics/callback', () => {
      return React.createElement('span', {}, 'Done');
    });
  }
}
