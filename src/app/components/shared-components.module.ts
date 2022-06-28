import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule, IonicModule, RouterModule
    ],
    exports: [HeaderComponent]
})
export class SharedComponentsModule { }