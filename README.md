# Angular Material boiler plate with Ngrx and FirebaseAuth

Project created with `Angular CLI`

## Folder structure
```bash
.
├── README.md
├── angular.json
├── browserslist
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── karma.conf.js
├── ngsw-config.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── material.module.ts
│   │   ├── models
│   │   │   └── auth
│   │   │       ├── ILoggedInUser.ts
│   │   │       ├── ILoginError.ts
│   │   │       └── ILoginRequest.ts
│   │   ├── modules
│   │   │   ├── account
│   │   │   │   ├── account.component.css
│   │   │   │   ├── account.component.html
│   │   │   │   ├── account.component.ts
│   │   │   │   └── account.module.ts
│   │   │   ├── home
│   │   │   │   ├── home.component.css
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.ts
│   │   │   │   └── home.module.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.css
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.ts
│   │   │   │   └── login.module.ts
│   │   │   └── shared
│   │   │       └── shared.module.ts
│   │   ├── pwa
│   │   │   └── pwa.service.ts
│   │   ├── security
│   │   │   ├── auth.guard.ts
│   │   │   ├── error.interceptor.ts
│   │   │   └── http.interceptor.ts
│   │   ├── services
│   │   │   └── auth
│   │   │       └── auth.service.ts
│   │   ├── store
│   │   │   ├── auth
│   │   │   │   ├── auth.actions.ts
│   │   │   │   ├── auth.effects.ts
│   │   │   │   ├── auth.events.ts
│   │   │   │   ├── auth.reducers.ts
│   │   │   │   └── auth.state.ts
│   │   │   └── core
│   │   └── utilities
│   │       └── mappers
│   │           └── auth.model.mapper.ts
│   ├── assets
│   │   └── icons
│   │       ├── icon-128x128.png
│   │       ├── icon-144x144.png
│   │       ├── icon-152x152.png
│   │       ├── icon-192x192.png
│   │       ├── icon-384x384.png
│   │       ├── icon-512x512.png
│   │       ├── icon-72x72.png
│   │       └── icon-96x96.png
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── manifest.webmanifest
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```