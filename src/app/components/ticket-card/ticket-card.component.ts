import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html'
})
export class TicketCardComponent {

  value = 'www.tazkty.com/473847';

   constructor(private clipboard: Clipboard) {}

  copyToClipboard() {
    this.clipboard.copy(this.value);
  }

}
