import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { InList } from './in-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  list!: InList[]
  // ListService!: InList[];
  List = ListService;
  title = 'trelloClone';
  logseq = (): void => console.log(ListService);
}
