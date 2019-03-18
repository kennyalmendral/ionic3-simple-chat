import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

@IonicPage()
@Component({
	selector: 'page-chat',
	templateUrl: 'chat.html',
})
export class ChatPage {
	username: string = '';
	message: string = '';
	messages: object[] = [];
	subscription;

	constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
		this.username = this.navParams.get('username');

		this.subscription = this.db.list('/chat').valueChanges().subscribe((data) => {
			this.messages = data;
		}, (error) => {
			console.log(error);
		});
	}

	ionViewDidLoad() {
		this.db.list('/chat').push({
			specialMessage: true,
			message: `${this.username} is active`
		});
	}

	ionViewWillLeave() {
		this.subscription.unsubscribe();

		this.db.list('/chat').push({
			specialMessage: true,
				message: `${this.username} is inactive`
		});
	}

	sendMessage() {
		this.db.list('/chat').push({
			username: this.username,
			message: this.message
		}).then(() => {

		}).catch(() => {
			console.log('Something went wrong...');
		});

		this.message = '';
	}
}
