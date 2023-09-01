/**
 * @type {import('../types/index').Plugin}
 */
module.exports = {
  name: 'DiscordRPC',
  description: 'Adds an activity to your Discord profile to show what you\'re listening to',
  settings: [
    {
      type: 'select',
      label: 'Status to show on your profile',
      choices: [
        { id: 'playing', label: 'Playing' },
        { id: 'listening', label: 'Listening to' },
      ]
    },
    {
      type: 'input',
      label: 'Enter your Discord token (the plugin needs it to show the status on YOUR profile)',
      name: 'discord_token'
    }
  ]
}
