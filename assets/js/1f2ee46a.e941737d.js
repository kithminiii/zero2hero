"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[9792],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),f=r,h=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return o?a.createElement(h,n(n({ref:t},u),{},{components:o})):a.createElement(h,n({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,n=new Array(i);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var p=2;p<i;p++)n[p]=o[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1510:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=o(7462),r=o(3366),i=(o(7294),o(3905)),n=["components"],s={sidebar_position:1},l="Firebase Storage",p={unversionedId:"firebase/firebase-storage",id:"firebase/firebase-storage",isDocsHomePage:!1,title:"Firebase Storage",description:"Cloud Storage for Firebase allows you to quickly and easily upload files to a Cloud Storage bucket provided and managed by Firebase.",source:"@site/docs/firebase/firebase-storage.md",sourceDirName:"firebase",slug:"/firebase/firebase-storage",permalink:"/zero2hero/docs/firebase/firebase-storage",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/firebase/firebase-storage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/zero2hero/docs/github-actions/github-action"},next:{title:"Docker Orientation and Setup",permalink:"/zero2hero/docs/docker/docker"}},u=[{value:"Create a Reference",id:"create-a-reference",children:[],level:2},{value:"Upload Files",id:"upload-files",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"Get Start with firebase",id:"get-start-with-firebase",children:[{value:"Add Firebase to your Android project",id:"add-firebase-to-your-android-project",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:4}],level:3},{value:"Option 1: Add Firebase using the Firebase console",id:"option-1-add-firebase-using-the-firebase-console",children:[{value:"Step 1: Create a Firebase project",id:"step-1-create-a-firebase-project",children:[],level:4},{value:"Step 2: Register your app with Firebase",id:"step-2-register-your-app-with-firebase",children:[],level:4},{value:"Step 3: Add a Firebase configuration file",id:"step-3-add-a-firebase-configuration-file",children:[],level:4},{value:"Step 4: Add Firebase SDKs to your app",id:"step-4-add-firebase-sdks-to-your-app",children:[],level:4}],level:3},{value:"Add Firebase to your Apple project",id:"add-firebase-to-your-apple-project",children:[{value:"Prerequisites",id:"prerequisites-1",children:[],level:4},{value:"Step 1: Create a Firebase project",id:"step-1-create-a-firebase-project-1",children:[],level:4},{value:"Step 2: Register your app with Firebase",id:"step-2-register-your-app-with-firebase-1",children:[],level:4},{value:"Step 3: Add a Firebase configuration file",id:"step-3-add-a-firebase-configuration-file-1",children:[],level:4},{value:"Step 4: Add Firebase SDKs to your app",id:"step-4-add-firebase-sdks-to-your-app-1",children:[],level:4},{value:"Step 5: Initialize Firebase in your app",id:"step-5-initialize-firebase-in-your-app",children:[],level:4}],level:3},{value:"Add Firebase to your JavaScript/Web project",id:"add-firebase-to-your-javascriptweb-project",children:[{value:"Prerequisites",id:"prerequisites-2",children:[],level:4},{value:"Step 1: Create a Firebase project and register your app",id:"step-1-create-a-firebase-project-and-register-your-app",children:[],level:4},{value:"Step 2: Install the SDK and initialize Firebase",id:"step-2-install-the-sdk-and-initialize-firebase",children:[],level:4},{value:"Step 3: Access Firebase in your app",id:"step-3-access-firebase-in-your-app",children:[],level:4},{value:"Step 4: Use a module bundler (webpack/Rollup) for size reduction",id:"step-4-use-a-module-bundler-webpackrollup-for-size-reduction",children:[],level:4}],level:3}],level:2}],d={toc:u};function c(e){var t=e.components,o=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firebase-storage"},"Firebase Storage"),(0,i.kt)("p",null,"Cloud Storage for Firebase allows you to quickly and easily upload files to a ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage"},"Cloud Storage")," bucket provided and managed by Firebase."),(0,i.kt)("h2",{id:"create-a-reference"},"Create a Reference"),(0,i.kt)("p",null,"In order to upload or download files, delete files, or get or update metadata, you must create a reference to the file you want to operate on. A reference can be thought of as a pointer to a file in the cloud."),(0,i.kt)("p",null,"example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import { getStorage, ref } from "firebase/storage";\n\n// Get a reference to the storage service, which is used to create references in your storage bucket\nconst storage = getStorage();\n\n// Create a storage reference from our storage service\nconst storageRef = ref(storage);\n')),(0,i.kt)("p",null,"create a reference to a location lower in the tree, say ",(0,i.kt)("inlineCode",{parentName:"p"},"'images/space.jpg'")," by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"child()")," method on an existing reference."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { getStorage, ref } from \"firebase/storage\";\n\nconst storage = getStorage();\n\n// Create a child reference\nconst imagesRef = ref(storage, 'images');\n// imagesRef now points to 'images'\n\n// Child references can also take paths delimited by '/'\nconst spaceRef = ref(storage, 'images/space.jpg');\n// spaceRef now points to \"images/space.jpg\"\n// imagesRef still points to \"images\"\n")),(0,i.kt)("h2",{id:"upload-files"},"Upload Files"),(0,i.kt)("p",null,"To upload a file to Cloud Storage, you first create a reference to the full path of the file, including the file name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { getStorage, ref } from \"firebase/storage\";\n\n// Create a root reference\nconst storage = getStorage();\n\n// Create a reference to 'mountains.jpg'\nconst mountainsRef = ref(storage, 'mountains.jpg');\n\n// Create a reference to 'images/mountains.jpg'\nconst mountainImagesRef = ref(storage, 'images/mountains.jpg');\n\n// While the file names are the same, the references point to different files\nmountainsRef.name === mountainImagesRef.name;           // true\nmountainsRef.fullPath === mountainImagesRef.fullPath;   // false \n")),(0,i.kt)("p",null,"Once you've created an appropriate reference, you then call the ",(0,i.kt)("inlineCode",{parentName:"p"},"put()")," method. ",(0,i.kt)("inlineCode",{parentName:"p"},"put()")," takes files via the JavaScript ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},"Blob")," APIs and uploads them to Cloud Storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import { getStorage, ref, uploadBytes } from \"firebase/storage\";\n\nconst storage = getStorage();\nconst storageRef = ref(storage, 'some-child');\n\n// 'file' comes from the Blob or File API\nuploadBytes(storageRef, file).then((snapshot) => {\n  console.log('Uploaded a blob or file!');\n});\n")),(0,i.kt)("h1",{id:"cloud-functions-for-firebase"},"Cloud Functions for Firebase"),(0,i.kt)("p",null,"Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests."),(0,i.kt)("p",null,"The functions you write can respond to events generated by various Firebase and Google Cloud features, from ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/functions/auth-events"},"Firebase Authentication triggers")," to ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/functions/gcp-storage-events"},"Cloud Storage Triggers"),"."),(0,i.kt)("p",null,"Integrate across Firebase features ussing the ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/admin/setup"},"Admin SDK")," together with Cloud Functions, and integrate with third-party services by writing your own webhooks. Cloud Functions minimizes boilerplate code, making it easier to use Firebase and Google Cloud inside your function."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"After you write and deploy a function, Google's servers begin to manage the function immediately. You can fire the function directly with an HTTP request, or, in the case of background functions, Google's servers will listen for events and run the function when it is triggered."),(0,i.kt)("p",null,"As the load increases or decreases, Google responds by rapidly scaling the number of virtual server instances needed to run your function. Each function runs in isolation, in its own environment with its own configuration."),(0,i.kt)("h2",{id:"get-start-with-firebase"},"Get Start with firebase"),(0,i.kt)("h3",{id:"add-firebase-to-your-android-project"},"Add Firebase to your Android project"),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Install or update Android Studio to its latest version."),(0,i.kt)("p",null,"Make sure that your project meets these requirements:"),(0,i.kt)("p",null,"Targets API level 16 (Jelly Bean) or higher\nUses Android 4.1 or higher\nUses Jetpack (AndroidX), which includes meeting these version requirements:\ncom.android.tools.build:gradle v3.2.1 or later\ncompileSdkVersion 28 or later\nSet up a physical device or use an emulator to run your app.\nNote that Firebase SDKs with a dependency on Google Play services require the device or emulator to have Google Play services installed."),(0,i.kt)("p",null,"Sign into Firebase using your Google account."),(0,i.kt)("p",null,"If you don't already have an Android project and just want to try out a Firebase product, you can download one of our quickstart samples."),(0,i.kt)("p",null,"You can connect your Android app to Firebase using one of the following options:"),(0,i.kt)("p",null,"Option 1: (recommended) Use the Firebase console setup workflow.\nOption 2: Use the Android Studio Firebase Assistant (may require additional configuration)."),(0,i.kt)("h3",{id:"option-1-add-firebase-using-the-firebase-console"},"Option 1: Add Firebase using the Firebase console"),(0,i.kt)("p",null,"Adding Firebase to your app involves tasks both in the Firebase console and in your open Android project (for example, you download Firebase config files from the console, then move them into your Android project)."),(0,i.kt)("h4",{id:"step-1-create-a-firebase-project"},"Step 1: Create a Firebase project"),(0,i.kt)("p",null,"Before you can add Firebase to your Android app, you need to create a Firebase project to connect to your Android app. Visit Understand Firebase Projects to learn more about Firebase projects."),(0,i.kt)("p",null,"Create a Firebase project"),(0,i.kt)("h4",{id:"step-2-register-your-app-with-firebase"},"Step 2: Register your app with Firebase"),(0,i.kt)("p",null,'To use Firebase in your Android app, you need to register your app with your Firebase project. Registering your app is often called "adding" your app to your project.'),(0,i.kt)("p",null,"Note: Visit Understand Firebase Projects to learn more about best practices and considerations for adding apps to a Firebase project, including how to handle multiple build variants.\nGo to the Firebase console."),(0,i.kt)("p",null,"In the center of the project overview page, click the Android icon (plat_android) or Add app to launch the setup workflow."),(0,i.kt)("p",null,"Enter your app's package name in the Android package name field."),(0,i.kt)("p",null,"What's a package name, and where do you find it?"),(0,i.kt)("p",null,"Make sure to enter the package name that your app is actually using. The package name value is case-sensitive, and it cannot be changed for this Firebase Android app after it's registered with your Firebase project.\n(Optional) Enter other app information: App nickname and Debug signing certificate SHA-1."),(0,i.kt)("p",null,"How are the App nickname and the Debug signing certificate SHA-1 used within Firebase?"),(0,i.kt)("p",null,"Click Register app."),(0,i.kt)("h4",{id:"step-3-add-a-firebase-configuration-file"},"Step 3: Add a Firebase configuration file"),(0,i.kt)("p",null,"Add the Firebase Android configuration file to your app:"),(0,i.kt)("p",null,"Click Download google-services.json to obtain your Firebase Android config file (google-services.json)."),(0,i.kt)("p",null,"Move your config file into the module (app-level) directory of your app."),(0,i.kt)("p",null,"What do you need to know about this config file?"),(0,i.kt)("p",null,"To enable Firebase products in your app, add the google-services plugin to your Gradle files."),(0,i.kt)("p",null,"In your root-level (project-level) Gradle file (build.gradle), add rules to include the Google Services Gradle plugin. Check that you have Google's Maven repository, as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"buildscript {\n\n  repositories {\n    // Check that you have the following line (if not, add it):\n    google()  // Google's Maven repository\n  }\n\n  dependencies {\n    // ...\n\n    // Add the following line:\n    classpath 'com.google.gms:google-services:4.3.10'  // Google Services plugin\n  }\n}\n\nallprojects {\n  // ...\n\n  repositories {\n    // Check that you have the following line (if not, add it):\n    google()  // Google's Maven repository\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"In your module (app-level) Gradle file (usually app/build.gradle), apply the Google Services Gradle plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apply plugin: 'com.android.application'\n// Add the following line:\napply plugin: 'com.google.gms.google-services'  // Google Services plugin\n\nandroid {\n  // ...\n}\n")),(0,i.kt)("h4",{id:"step-4-add-firebase-sdks-to-your-app"},"Step 4: Add Firebase SDKs to your app"),(0,i.kt)("p",null,"Using the Firebase Android BoM, declare the dependencies for the Firebase products that you want to use in your app. Declare them in your module (app-level) Gradle file (usually app/build.gradle)."),(0,i.kt)("p",null,"Analytics enabled"),(0,i.kt)("p",null,"Java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"dependencies {\n  // ...\n\n  // Import the Firebase BoM\n  implementation platform('com.google.firebase:firebase-bom:28.4.2')\n\n  // When using the BoM, you don't specify versions in Firebase library dependencies\n\n  // Declare the dependency for the Firebase SDK for Google Analytics\n  implementation 'com.google.firebase:firebase-analytics'\n\n  // Declare the dependencies for any other desired Firebase products\n  // For example, declare the dependencies for Firebase Authentication and Cloud Firestore\n  implementation 'com.google.firebase:firebase-auth'\n  implementation 'com.google.firebase:firebase-firestore'\n}\n")),(0,i.kt)("p",null,"By using the Firebase Android BoM, your app will always use compatible versions of the Firebase Android libraries."),(0,i.kt)("p",null,"Sync your app to ensure that all dependencies have the necessary versions."),(0,i.kt)("p",null," Getting a build failure about invoke-custom support and enabling desugaring? Here's how to fix it."),(0,i.kt)("p",null,"That's it! You can skip ahead to check out the recommended next steps."),(0,i.kt)("p",null,"If you're having trouble getting set up, though, visit the Android troubleshooting & FAQ."),(0,i.kt)("h3",{id:"add-firebase-to-your-apple-project"},"Add Firebase to your Apple project"),(0,i.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"Install the following:"),(0,i.kt)("p",null,"Xcode 12.2 or later\nCocoaPods 1.10.0 or later\nMake sure that your project meets these requirements:"),(0,i.kt)("p",null,"Your project must target these platform versions or later:\niOS 10\nmacOS 10.12\ntvOS 12\nwatchOS 6\nSet up a physical Apple device or use a simulator to run your app."),(0,i.kt)("p",null,"Do you want to use Cloud Messaging?"),(0,i.kt)("p",null,"Sign into Firebase using your Google account.\nIf you don't already have an Xcode project and just want to try out a Firebase product, you can download one of our quickstart samples."),(0,i.kt)("h4",{id:"step-1-create-a-firebase-project-1"},"Step 1: Create a Firebase project"),(0,i.kt)("p",null,"Before you can add Firebase to your Apple app, you need to create a Firebase project to connect to your app. Visit Understand Firebase Projects to learn more about Firebase projects."),(0,i.kt)("p",null,"Create a Firebase project"),(0,i.kt)("h4",{id:"step-2-register-your-app-with-firebase-1"},"Step 2: Register your app with Firebase"),(0,i.kt)("p",null,"After you have a Firebase project, you can add your Apple app to it."),(0,i.kt)("p",null,"Visit Understand Firebase Projects to learn more about best practices and considerations for adding apps to a Firebase project, including how to handle multiple build variants."),(0,i.kt)("p",null,"Go to the Firebase console."),(0,i.kt)("p",null,"In the center of the project overview page, click the iOS+ icon to launch the setup workflow."),(0,i.kt)("p",null,"If you've already added an app to your Firebase project, click Add app to display the platform options."),(0,i.kt)("p",null,"Enter your app's bundle ID in the bundle ID field."),(0,i.kt)("p",null,"What's a bundle ID, and where do you find it?"),(0,i.kt)("p",null,"Make sure to enter the bundle ID that your app is actually using. The bundle ID value is case-sensitive, and it cannot be changed for this Firebase Apple app after it's registered with your Firebase project.\n(Optional) Enter other app information: App nickname and App Store ID."),(0,i.kt)("p",null,"How are the App nickname and the App Store ID used within Firebase?"),(0,i.kt)("p",null,"Click Register app."),(0,i.kt)("h4",{id:"step-3-add-a-firebase-configuration-file-1"},"Step 3: Add a Firebase configuration file"),(0,i.kt)("p",null,"Click Download GoogleService-Info.plist to obtain your Firebase Apple platforms config file (GoogleService-Info.plist)."),(0,i.kt)("p",null,"What do you need to know about this config file?"),(0,i.kt)("p",null,"Move your config file into the root of your Xcode project. If prompted, select to add the config file to all targets."),(0,i.kt)("p",null,"If you have multiple bundle IDs in your project, you must associate each bundle ID with a registered app in the Firebase console so that each app can have its own GoogleService-Info.plist file."),(0,i.kt)("h4",{id:"step-4-add-firebase-sdks-to-your-app-1"},"Step 4: Add Firebase SDKs to your app"),(0,i.kt)("p",null,"We recommend using CocoaPods to install the Firebase libraries. However, if you'd rather not use CocoaPods, you can integrate the SDK frameworks directly or use Swift Package Manager instead."),(0,i.kt)("p",null,"Are you using one of the quickstart samples? The Xcode project and Podfile (with pods) are already present, but you'll still need to add your Firebase configuration file and install the pods."),(0,i.kt)("p",null,"Create a Podfile if you don't already have one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"cd your-project-directory\n\npod init\n")),(0,i.kt)("p",null,"To your Podfile, add the Firebase pods that you want to use in your app."),(0,i.kt)("p",null,"You can add any of the supported Firebase products to your Apple app."),(0,i.kt)("p",null,"Analytics enabled\nAnalytics not enabled"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"platform :ios, \u201810.0\u2019\n\n# Add the Firebase pod for Google Analytics\npod 'Firebase/Analytics'\n\n# For Analytics without IDFA collection capability, use this pod instead\n# pod \u2018Firebase/AnalyticsWithoutAdIdSupport\u2019\n\n# Add the pods for any other Firebase products you want to use in your app\n# For example, to use Firebase Authentication and Cloud Firestore\npod 'Firebase/Auth'\npod 'Firebase/Firestore'\n\n")),(0,i.kt)("p",null,"Learn more about IDFA, the device-level advertising identifier, in Apple's User Privacy and Data Use and App Tracking Transparency documentation."),(0,i.kt)("p",null,"Binary Firebase dependencies are integrated as static frameworks by default. If you're using Firebase as a dependency of a dynamic framework, make sure you read the documentation about using Firebase from a framework or a library.\nInstall the pods, then open your .xcworkspace file to see the project in Xcode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"$ pod install\n\n$ open your-project.xcworkspace\n")),(0,i.kt)("h4",{id:"step-5-initialize-firebase-in-your-app"},"Step 5: Initialize Firebase in your app"),(0,i.kt)("p",null,"The final step is to add initialization code to your application. You may have already done this as part of adding Firebase to your app. If you're using a quickstart sample project, this has been done for you."),(0,i.kt)("p",null,"Import the Firebase module in your UIApplicationDelegate:\nSwift"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import Firebase\n")),(0,i.kt)("p",null,"Configure a FirebaseApp shared instance, typically in your app's application:didFinishLaunchingWithOptions: method:\nSwift"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Use Firebase library to configure APIs\nFirebaseApp.configure()\n")),(0,i.kt)("p",null,"If you've included Firebase Analytics, you can run your app to send verification to the Firebase console that you've successfully installed Firebase.\nThat's it! You can skip ahead to the next steps."),(0,i.kt)("p",null,"If you're having trouble getting set up, though, visit the Apple platforms troubleshooting & FAQ."),(0,i.kt)("h3",{id:"add-firebase-to-your-javascriptweb-project"},"Add Firebase to your JavaScript/Web project"),(0,i.kt)("h4",{id:"prerequisites-2"},"Prerequisites"),(0,i.kt)("p",null,"Follow this guide to use the Firebase JavaScript SDK in your web app or as a client for end-user access, for example, in a Node.js desktop or IoT application."),(0,i.kt)("h4",{id:"step-1-create-a-firebase-project-and-register-your-app"},"Step 1: Create a Firebase project and register your app"),(0,i.kt)("p",null,"Before you can add Firebase to your JavaScript app, you need to create a Firebase project and register your app with that project. When you register your app with Firebase, you'll get a Firebase configuration object that you'll use to connect your app with your Firebase project resources."),(0,i.kt)("p",null,"Visit Understand Firebase Projects to learn more about Firebase projects and best practices for adding apps to projects."),(0,i.kt)("p",null," Create a Firebase project\nRegister your app\nIf you don't already have a JavaScript project and just want to try out a Firebase product, you can download one of our quickstart samples."),(0,i.kt)("h4",{id:"step-2-install-the-sdk-and-initialize-firebase"},"Step 2: Install the SDK and initialize Firebase"),(0,i.kt)("p",null,"This page describes setup instructions for version 9 of the Firebase JS SDK, which uses a JavaScript Module format."),(0,i.kt)("p",null,"This workflow uses npm and requires module bundlers or JavaScript framework tooling because the v9 SDK is optimized to work with module bundlers to eliminate unused code (tree-shaking) and decrease SDK size."),(0,i.kt)("p",null,"Install Firebase using npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"npm install firebase\n")),(0,i.kt)("p",null,"Initialize Firebase in your app and create a Firebase App object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import { initializeApp } from 'firebase/app';\n\n// TODO: Replace the following with your app's Firebase project configuration\nconst firebaseConfig = {\n  //...\n};\n\nconst app = initializeApp(firebaseConfig);\n\n")),(0,i.kt)("p",null,"A Firebase App is a container-like object that stores common configuration and shares authentication across Firebase services. After you initialize a Firebase App object in your code, you can add and start using Firebase services."),(0,i.kt)("h4",{id:"step-3-access-firebase-in-your-app"},"Step 3: Access Firebase in your app"),(0,i.kt)("p",null,"Firebase services (like Cloud Firestore, Authentication, Realtime Database, Remote Config, and more) are available to import within individual sub-packages."),(0,i.kt)("p",null,"The example below shows how you could use the Cloud Firestore Lite SDK to retrieve a list of data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nimport { initializeApp } from 'firebase/app';\nimport { getFirestore, collection, getDocs } from 'firebase/firestore/lite';\n// Follow this pattern to import other Firebase services\n// import { } from 'firebase/<service>';\n\n// TODO: Replace the following with your app's Firebase project configuration\nconst firebaseConfig = {\n  //...\n};\n\nconst app = initializeApp(firebaseConfig);\nconst db = getFirestore(app);\n\n// Get a list of cities from your database\nasync function getCities(db) {\n  const citiesCol = collection(db, 'cities');\n  const citySnapshot = await getDocs(citiesCol);\n  const cityList = citySnapshot.docs.map(doc => doc.data());\n  return cityList;\n}\n")),(0,i.kt)("h4",{id:"step-4-use-a-module-bundler-webpackrollup-for-size-reduction"},"Step 4: Use a module bundler (webpack/Rollup) for size reduction"),(0,i.kt)("p",null,"The Firebase Web SDK is designed to work with module bundlers to remove any unused code (tree-shaking). We strongly recommend using this approach for production apps. Tools such as the Angular CLI, Next.js, Vue CLI, or Create React App automatically handle module bundling for libraries installed through npm and imported into your codebase."),(0,i.kt)("p",null,"See our guide Using module bundlers with Firebase for more information."),(0,i.kt)("p",null,"####Available Firebase services for web\nNow that you're setup to use Firebase, you can start adding and using any of the following available Firebase services in your web app."))}c.isMDXComponent=!0}}]);