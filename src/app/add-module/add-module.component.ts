import { Component } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
    selector: 'app-module',
    templateUrl: 'add-module.component.html'
})
export class AddModuleComponent{
    constructor(
        private readonly firestore: AngularFirestore
    ) { }


}