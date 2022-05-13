import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  title = 'frontend';

  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {}

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  openCarrito() {
    this.router.navigateByUrl('/carrito');
  }

  openHome() {
    this.router.navigateByUrl('/home');
  }

  openGoogleLogin() {
    this.router.navigateByUrl('/google/login');
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingresa un correo';
    }
    return this.email.hasError('email') ? 'No es un correo valido!' : '';
  }
}
