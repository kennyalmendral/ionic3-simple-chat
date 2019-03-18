import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatPage } from '../chat/chat';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	username: string = '';

	constructor(public navCtrl: NavController) {
	}

	loginUser() {
		this.navCtrl.push(ChatPage, {
			username: this.username
		});
	}
}
