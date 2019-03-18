import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

var firebaseConfig = {
	apiKey: "AIzaSyA01NrGxzckRwE6sf_vL3cc7ueGMGXntRA",
	authDomain: "simple-chat-825a8.firebaseapp.com",
	databaseURL: "https://simple-chat-825a8.firebaseio.com",
	projectId: "simple-chat-825a8",
	storageBucket: "simple-chat-825a8.appspot.com",
	messagingSenderId: "117752906836"
};

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ChatPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ChatPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		AngularFireDatabase,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
