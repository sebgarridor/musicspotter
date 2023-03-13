import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  username: string = '';
  period: string = 'overall';

  onSubmit() {
    console.log(this.username);
    console.log(this.period);
    
  }
}
