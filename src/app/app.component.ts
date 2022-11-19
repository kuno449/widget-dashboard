import { QueryList, Component, ViewChildren } from '@angular/core';
import { CdkDropList, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChildren(CdkDropList) dropsQuery!: QueryList<CdkDropList>;

  drops!: CdkDropList[];

  ngAfterViewInit() {
    this.dropsQuery.changes.subscribe(() => {
      this.drops = this.dropsQuery.toArray()
    })
    Promise.resolve().then(() => {
      this.drops = this.dropsQuery.toArray();
    })
  }

  dropped($event: CdkDragDrop<string>) {
    console.log($event);
  }
}
