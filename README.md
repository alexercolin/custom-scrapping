Requirements:

- [x] Setup React Native project
- [x] Add necessary libraries
- [x] Setup a webview for the Wallmart URL 
- [x] Create log structure
- [ ] Cookies Structure
- [X] Service Structure
- [X] Tests
- [x] README

How to run the project:
 - npm i;
 - npm start;
 - scan the  generated QR Code on the Iphone/Android mobile;
 - Press `j` to use de debug tool and watch for the logs;

 **OBS: It's not possible to run on the web version because WebView is not supported**

 It was not possible to set the cookies structure because I used expo to create the project and unfortunately, expo project does not support Cookies Manager from the react-cookies. I discovered this information too late.
 source -> https://github.com/expo/expo/issues/6756 