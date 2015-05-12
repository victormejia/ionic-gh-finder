# ionic-gh-notetaker
Demo for Ionic intro talk.

This is a [modified] Ionic port of [GitHub Note Taker](https://github.com/tylermcginnis/react-native-gh-notetaker) by [Tyler McGinnis](https://twitter.com/tylermcginnis33), written in React Native.

## Running locally
  
```Shell
> npm install -g ionic cordova
> git clone https://github.com/victormejia/ionic-gh-notetaker.git
> cd ionic-gh-notetaker
> ionic state restore
> ionic setup sass
> ionic platform ios
> ionic emulate ios --livereload --consolelogs
```

Make sure to update the url of your own Firebase (```www/services/GitHubService.js```).

## To do
  [ ] Setup for android

