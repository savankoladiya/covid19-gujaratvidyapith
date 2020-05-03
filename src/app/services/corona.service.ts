import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corona } from '../data/corona';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const localUrl = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';
const localUrl1 = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history';
const DailyData = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org";
const jsonURL = 'assets/csvjson.json';

@Injectable({
  providedIn: 'root'
})

export class CoronaService {

  constructor(private http: HttpClient) { }

  getCoronaData() : Observable<Corona[]> {
    return this.http.get<Corona[]>(localUrl).pipe(map(result => result['data']['statewise']));
  }

  getCoronaDataDetails() : Observable<Corona[]> {
    return this.http.get<Corona[]>(localUrl).pipe(map(result => result['data']['total']));
  }

  getCoronaData1() : Observable<Corona[]> {
    return this.http.get<Corona[]>(localUrl1).pipe(map(result => result['data']['history']));
  }

  getPredictionData() : Observable<any> {
    return this.http.get(jsonURL);
  }

  getCoronaDataDaily() : Observable<Corona[]> {
    return this.http.get<Corona[]>(DailyData).pipe(map(result => result['data']['rawPatientData']));
  }

  

}
