import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as papa from 'papaparse';

@Component({
  selector: 'app-lect-room',
  templateUrl: './lect-room.page.html',
  styleUrls: ['./lect-room.page.scss'],
})
export class LectRoomPage implements OnInit {

	public csvData: any[] = [];
  
  public lecturer: Array<{ name: string; course: string ; room: string }> = [];
  public allLecturer: Array<{ name: string; course: string; room: string }> = [];

  constructor(private http: Http) {
  }

  private readCsvData() {
    this.http.get('assets/lecturer_room.csv')
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
    );
  }

  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = papa.parse(csvData,{header: false}).data;
    this.csvData = parsedData;
  	for (let i = 0; i < this.csvData.length; i++) {
      this.lecturer.push({
        name: this.csvData[i][0].charAt(0).toUpperCase() + this.csvData[i][0].slice(1),
        course: this.csvData[i][1],
        room: this.csvData[i][2]
      });
    }
    this.allLecturer = this.lecturer;
  }

	onSearchTerm(ev: CustomEvent) {
    this.lecturer = this.allLecturer;
    const val = ev.detail.value;

	  if ( val.trim() !== '') {
	    this.lecturer = this.lecturer.filter(term => {
	      return term.name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
	    });
	  }
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
  	this.readCsvData();
  }

}
