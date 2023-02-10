import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResultParams} from "../interfaces/ResultParams";
import {ResultItem} from "../interfaces/ResultItem";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = '/api';
  }

  public getParams(): Observable<ResultParams> {
    const url = this.apiUrl;
    const data = {"action": "params"};

    return this.http.post<ResultParams>(url, data);
  }

  public getProcess(): Observable<ResultItem> {
    const url = this.apiUrl;
    const data = {"action": "process"};

    return this.http.post<ResultItem>(url, data);
  }
}
