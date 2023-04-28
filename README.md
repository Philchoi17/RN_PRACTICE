## PROJECT DETAILS

```
language: React-Native
explaination: Simple react-native practice app
node_version: 18.12.1

```

## Project Structure

```
project will live inside /src folder

/src
	/Assets/
		-> images and resources for project
	/Components/
		-> components the project will use
	/Navigators/
		-> Navigation project
	/Screens/
		-> Screens the project will use
	/Utils/
		-> utilities and helpers for project
```

## patch-package

```
https://www.npmjs.com/package/patch-package

yarn add patch-package postinstall-postinstall

package.json -->
 "scripts": {
+  "postinstall": "patch-package"
 }

 useage: npx patch-package package-name

 needed for:
 *react-native-gifted-chat
  TypeError: _reactNative.Keyboard.removeListener is not a function. (In '_reactNative.Keyboard.removeListener('keyboardWillShow', invertibleProps.onKeyboardWillShow)', '_reactNative.Keyboard.removeListener' is undefined)
```

## react-navigation[https://reactnavigation.org/docs/getting-started/]

```
yarn add @react-navigation/native

yarn add react-native-screens react-native-safe-area-context

npx pod-install ios

react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the following code to the body of MainActivity class:

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
and make sure to add an import statement at the top of this file:

import android.os.Bundle;

yarn add @react-navigation/native-stack

yarn add @react-navigation/bottom-tabs

-- Material Tab Tabs

https://reactnavigation.org/docs/material-top-tab-navigator#installation

yarn add @react-navigation/material-top-tabs react-native-tab-view

yarn add react-native-pager-view
```

## react-native-magnus[https://magnus-ui.com/]

```
1. yarn add react-native-magnus

2. yarn add color react-native-animatable react-native-modal react-native-vector-icons deepmerge validate-color
```

## react-native-vector-icons[https://github.com/oblador/react-native-vector-icons]

```
1. yarn add react-native-vector-icons
2. IOS:
  - Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.
  - Edit Info.plist and add a property called Fonts provided by application (or UIAppFonts if Xcode won't autocomplete/not using Xcode) and type in the files you just added.
  - <key>UIAppFonts</key>
    <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
      <string>Fontisto.ttf</string>
    </array>
  - create a react-native.config.js fiel at root of project
    - module.exports = {
        dependencies: {
          'react-native-vector-icons': {
            platforms: {
              ios: null,
            },
          },
        },
      };

3. Android:
  - Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
    - apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```

## axios[]

```

```
