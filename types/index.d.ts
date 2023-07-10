export declare interface Plugin {
  // Plugin name
  name: string,
  // A string describing the plugin
  description: string,
  // Optional but recommended, a file path to this plugin's screenshot
  screenshot?: string,
  //
  replacements: PluginReplacement[]
  // Plugin settings
  settings?: PluginSetting[],
  // CSS properties to inject globally
  css?: string
}

declare interface PluginReplacement {
  file: string,
  find: string | RegExp,
  replace: string
}

declare interface PluginSetting {
  type: 'button' | 'select' | 'input',
  label: string,
  default?: string,
  choices?: PluginSelectSettingChoice[]
}

declare interface PluginSelectSettingChoice {
  id: string,
  label: string,
}

export declare interface DeezerTweaker {
  Api: Api
}

declare interface Api {
  Routes: Routes
}

declare interface Routes {
  create: (path: string, component) => void,
  redirect: (path, to) => void
}
