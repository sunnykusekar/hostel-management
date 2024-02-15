import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "sunnykusekar8@gmail.com";
  userName = "sunnykusekar";
  
  constructor() { }

  ngOnInit(): void {
  }

}
