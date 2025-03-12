import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  @Input({ required: true }) value!: string;

  @Output() save = new EventEmitter<Product>();

  form!: FormGroup;

  private readonly _formBuilder = inject(FormBuilder);

  get isFormValid(): boolean {
    return this.form.valid;
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      amount: [''],
    });
  }

  onSave(): void {
    this.save.emit(this.form.value);
  }
}
