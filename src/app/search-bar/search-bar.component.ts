import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term: string = '';

  onSubmit(event: any){
    console.log(this.term);
    event.preventDefault();
  }

  
}
