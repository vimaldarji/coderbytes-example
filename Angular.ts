// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-area',
    template: '' +
        '<div>' +
        '<input type="text" value="firstname" [(ngModel)] = "firstName" id="firstname">' +
        '<input type="text" value="lastname" [(ngModel)] = "lastName" id="lastname">' +
        '<button (click)="generateUserName(firstName, lastName)">Generate</button>' +
        '<span id="output">{{output}}</span>' +
        '</div>',
    styles: []
})

export class MainAppComponent implements OnInit {
    output: String;
    firstName = "Coder"
    lastName = 'Byte'
    generateUserName(firstName, lastName) {
        this.output = `${firstName}_${lastName}_${Math.floor(Math.random() * 10) + 1}`
        console.log(this.output)
    }
    // code goes here
}