import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  public id:any;
  public playlist:any;
  public maininfo;
  constructor(private params: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getinfo();
  }

  getinfo() {  //https://api.imjad.cn/cloudmusic/?type=playlist&id=2083024958 
    let _this = this;
    _this.params.queryParams.subscribe(params => {
      _this.id = params.id;
      _this.http.get("https://api.imjad.cn/cloudmusic/?type=playlist&id=2255791428").subscribe((res: any) => {
        _this.maininfo = res.playlist;
        _this.playlist = res.playlist.tracks;
        console.log(res.playlist)
      })
    })

    
  }

}
