import { validationPatters } from 'src/app/validators/regex-validators';
import { registerationFormStore } from 'src/app/store';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  validationForm: FormGroup = new FormGroup({});
  maxDate: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 25, 11, 31);
    this.validationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.pattern(validationPatters.email)],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(validationPatters.lebanese_number),
        ],
      ],
      profilePicture: ['', [Validators.required]],
      stageName: [''],
      artistBackstory: [''],
      startingDate: [null],
      albums: new FormArray([
        this.fb.group({
          picture: [null],
          date: [null],
          songs: new FormArray([
            this.fb.group({
              name: [null],
              duration: [null],
            }),
          ]),
        }),
      ]),
    });
  }

  onValidateFormInput(): void {}

  addAlbum(): void {
    const albums = this.validationForm.get('albums') as FormArray;
    albums.push(
      this.fb.group({
        picture: [null],
        date: [null],
        songs: new FormArray([
          this.fb.group({
            name: [null],
            duration: [null],
          }),
        ]),
      })
    );
  }

  removeAlbum(index: number): void {
    const albums = this.validationForm.get('albums') as FormArray;
    albums.removeAt(index);
  }

  addSong(index: number): void {
    const albums = this.validationForm.get('albums') as FormArray;
    const songs = albums.controls[index]?.get('songs') as FormArray;
    songs.push(
      this.fb.group({
        name: [null],
        duration: [null],
      })
    );
  }

  removeSong(index: number, i: number): void {
    const albums = this.validationForm.get('albums') as FormArray;
    const songs = albums.controls[index]?.get('songs') as FormArray;
    songs.removeAt(i);
  }

  onSaveBtnClick(): void {
    console.log('registration form', this.validationForm.value);
    registerationFormStore.update((state: any) => ({
      ...state,
      ...this.validationForm.value,
    }));
  }

  onResetBtnClick(): void {
    this.validationForm.reset();
  }
}
