import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule , BrowserAnimationsModule],//Please include either "" or "NoopAnimationsModule" in your application],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {}