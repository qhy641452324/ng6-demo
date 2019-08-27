import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
  public listinfo: any;
  constructor(private http: HttpClient) { 

  }

  ngOnInit() { 
    this.getinfo();
  }

  getinfo(){
    this.http.get("https://api.imjad.cn/qqfm/v1/?type=album&id=102").subscribe((res: any) => {
      this.listinfo = res.data.albumInfoList;
      console.log(res.data.albumInfoList)
    })
  }
}
