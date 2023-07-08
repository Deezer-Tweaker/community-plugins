module.exports = {
  name: 'SpotifyLyrics',
  description: 'Fetch Spotify lyrics if lyrics are not available for a Deezer track',
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
  inject({ Api, React }) {
    Api.Routes.create('/plugins/spotifylyrics/callback', () => {
      return React.createElement('span', {}, 'Done');
    });
  }
}
