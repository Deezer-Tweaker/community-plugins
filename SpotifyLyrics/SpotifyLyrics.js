module.exports = {
  name: 'SpotifyLyrics',
  description: 'Fetch Spotify lyrics if lyrics are not available for a Deezer track',
  replacements: [
    {
      file: '%jsCache%/route-naboo.fda0f9eaad2eeb36f5b5.js',
      find: /(Ue.ShowLyrics=\(\{item:e,lyricsId:t,onPlayLyrics:r}\)=>\{)/g,
      replace: `$1
      const accessToken = DeezerTweaker.Plugins['SpotifyLyrics'].Settings.get('access_token');
      async function fetchLyrics(accessToken) {
        const results = await fetch(\`https://api.spotify.com/v1/search?q=track%3A\${e.title}+artist%3A\${e.artist.name}&type=track&limit=1\`, {
          headers: { Authorization: 'Bearer ' + accessToken }
        });
        console.log(results);
      }
      // No lyrics are available on Deezer 
      if (t === null) {
        if (!accessToken || DeezerTweaker.Plugins['SpotifyLyrics'].Settings.get('expires_at') < Date.now()) {
          fetch('https://accounts.spotify.com/api/token', { 
            headers: { 
              Authorization: 'Basic ' + btoa('782b7e0e60444f8d935e0ef5250819ad:4d98697f674f4f5b823604c7f36d6eee'), 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials',
            method: 'POST'
          }).then(res => res.json()).then(json => {
            DeezerTweaker.Plugins['SpotifyLyrics'].Settings.set('access_token', json.access_token);
            DeezerTweaker.Plugins['SpotifyLyrics'].Settings.set('expires_at', Math.floor((Date.now() / 1000) + json.expires_in));
            console.log('Saved access token');
            fetchLyrics(json.access_token);
          });
        } else {
          fetchLyrics(DeezerTweaker.Plugins['SpotifyLyrics'].Settings.get('access_token'));
        }
      }
      `
    },
    {
      file: '%jsCache%/route-naboo.fda0f9eaad2eeb36f5b5.js',
      find: /(null===t\|\|"0"===t)/g,
      replace: '$1 || !lyricsFound'
    },
  ],
  inject({ Api, React }) {}
}
