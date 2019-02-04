import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  testData: string;

  constructor(private testService: TestService) { }

  showTestData(): void {
    alert(this.testData);
  }

  ngOnInit() {
    this.testService.getTest().subscribe((response) => {
      this.testData = response;
    });
  }

  ngOnDestroy() {

  }

}
