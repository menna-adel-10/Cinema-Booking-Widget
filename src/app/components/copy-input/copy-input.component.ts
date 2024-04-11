import { Clipboard } from '@angular/cdk/clipboard';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-copy-input',
  templateUrl: './copy-input.component.html'
})
export class CopyInputComponent {
value = 'www.tazkty.com/473847';
copied = false;

  constructor(private clipboard: Clipboard) {}

  ngOnInit() {}

  onCopy(isCopied: boolean) {
    this.copied = isCopied;
    if (isCopied) {
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }
  }
}
