import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InList } from '../in-list';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, CdkDropList],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input() listOf!: InList;
  drop(event: CdkDragDrop<InList[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
  fun(): void {
    console.log(this.listOf);
  }
}
