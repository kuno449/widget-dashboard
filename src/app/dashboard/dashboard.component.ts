import { Component, ViewChildren, QueryList } from '@angular/core';
import { CdkDropList, CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';
import { MockDashboardCard } from "./mock-dashboard-card";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  readonly GRID_COLS_NUMBER = 8;

  @ViewChildren(CdkDropList) dropsQuery!: QueryList<CdkDropList>;

  drops!: CdkDropList[];
  cards = MockDashboardCard;

  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray()
    })

    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
      console.log(this.drops);
    })
  }

  entered($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);
    moveItemInArray(this.cards, $event.item.data, $event.container.data);
  }
}
