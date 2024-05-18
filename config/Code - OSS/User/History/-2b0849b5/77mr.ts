import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InList } from '../in-list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list !: InList
}
