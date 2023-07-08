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
