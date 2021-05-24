import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('patrick', 'patrick@gmail.com', 1063000205, '', 'morning', true);

  constructor() { }

  ngOnInit(): void {
  }

}
