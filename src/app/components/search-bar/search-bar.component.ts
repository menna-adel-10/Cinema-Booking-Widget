import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {

  checked: boolean = false;
  formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl<string | null>(null)
        });
    }

   getSwitchBackgroundColor() {
    return this.checked ? '#8A74F9' : '#e7eaed';
  }
}
