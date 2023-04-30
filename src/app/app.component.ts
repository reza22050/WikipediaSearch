import { Component } from '@angular/core';
import { WikipediaService } from './_services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WikipediaSearch';
  posts:[] = [];

  constructor(private wikiPediaService: WikipediaService){}

  onGetTermSearch(value: string) {
    //console.log(event);
    this.wikiPediaService.onSearch(value).subscribe((response: any)=>{
        //console.log(response.query.search);
        this.posts = response.query.search;
    });
  }

}
