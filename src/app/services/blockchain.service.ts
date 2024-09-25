import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  private apiUrl = 'http://localhost:3000/blockchain';

  constructor(private http:HttpClient) { }

  getBlockchainData():Observable<any> {
    const value = this.http.get<any>(this.apiUrl);
    console.log(value.subscribe((res)=>{
      console.log('data',res)
    }))
    return value
  }
}
