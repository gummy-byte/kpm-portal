import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import * as papa from 'papaparse';

@Component({
  selector: 'app-lect-room',
  templateUrl: './lect-room.page.html',
  styleUrls: ['./lect-room.page.scss'],
})
export class LectRoomPage implements OnInit {

	csvData: any[] = [];
  row: any;

  constructor(private http: Http) { 
  	this.readCsvData();
  }

  private readCsvData() {
    this.http.get('assets/sample.csv')
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
    );
  }

  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData,{header: false}).data;
    this.row = parsedData.length
    this.csvData = parsedData;
  }

  private handleError(err) {
    console.log('something went wrong: ', err);
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
	}
  ngOnInit() {
  }

}
