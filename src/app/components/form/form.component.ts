import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormService} from "../../services/form.service";
import {ResultParams} from "../../interfaces/ResultParams";
import {HttpErrorResponse} from "@angular/common/http";
import {tap} from "rxjs";
import {ResultItem} from "../../interfaces/ResultItem";
import {KeyValue} from "@angular/common";
import {ResultItemWrapper} from "../../interfaces/ResultItemWrapper";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  loadingData: boolean = false;
  params!: ResultParams;
  results!: any;

  constructor(private formService: FormService) {

  }

  ngOnInit() {
    this.loadParams();
  }

  private loadParams() {
    this.loading = true;
    this.formService.getParams()
      .subscribe({
        next: (response: ResultParams | any) => {
          this.params = response;
          this.loading = false;

          this.getData();
        },
        error: () => {
          this.loading = false;
        }
      })
  }

  private getData() {
    this.loadingData = true;
    this.results = {};
    let requests: any = this.prepareRequests();
    this.startRequests(requests);
  }

  private prepareRequests() {
    let requests: any = {};
    for (let i = 0; i < +this.params.count; i++) {
      const delayTime = +this.params.delay * i;
      const key = i + 1;
      this.results[key] = {status: 'planned', order: key, delay: delayTime};
      requests[key] = this.formService
        .getProcess()
        .pipe(
          tap((response: ResultItem) => {
            this.results[key]['status'] = 'success';
            this.results[key]['result'] = response;
          }));
    }
    return requests;
  }

   private startRequests(requests: any) {
     for (let prop in this.results) {
       const item: ResultItemWrapper = this.results[prop];
       this.results[prop]['timeout'] = setTimeout(() => {
         item.status = 'pending';
         requests[item.order].subscribe();
       }, item.delay ?? 0)
     }
   }

  keyAscOrder = (a: KeyValue<number, any>, b: KeyValue<number, any>): number => {
    return a.key - b.key;
  }

  ngOnDestroy() {
    // Stop doing requests that doesn't start
    for (let prop in this.results) {
      clearTimeout(this.results[prop]['timeout']);
    }
  }
}
