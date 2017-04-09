import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


import { ArtsService } from './../../services/arts.service';

@Component({
  selector: 'app-art-form',
  templateUrl: './art-form.component.html',
  styleUrls: ['./art-form.component.css']
})
export class ArtFormComponent implements OnInit {
  artForm: FormGroup;

  constructor(private artsService: ArtsService, private router: Router) { }

  ngOnInit() {
    console.log(22);
    this.artForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      tag: new FormControl(''),
      photo: new FormControl('')      
    })
  }

  onSubmit(form: FormGroup) {
    console.log(1, form.value);
    console.log(2, this.artForm, this.artForm.value);    
    if (this.artForm.valid) {
      console.log('send server');
      this.artsService.addArt(this.artForm.value).subscribe(
        response => this.router.navigate(['/arts']),
        error => console.error('Error: ', error)
      )
    }
  }

}
