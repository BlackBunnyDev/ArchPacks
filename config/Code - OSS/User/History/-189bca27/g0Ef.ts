import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListService } from './list.service';
import { InList } from './in-list';
import { NgFor } from '@angular/common';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  List = inject(ListService)
  title = 'trelloClone';
  list: InList[] = this.List.getAllList();
  // logseq = (): void => console.log(this.List.getAllList());
}
