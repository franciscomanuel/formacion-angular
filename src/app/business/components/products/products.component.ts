import {
  AfterContentChecked,
  AfterContentInit,
  afterNextRender,
  afterRender,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input({ required: false }) value!: string;

  // private readonly miService = inject(MiService);

  @HostBinding('class') className = 'flex-container main-page-content';

  // constructor(private readonly miService: MiService) {
  //   console.log("value: ", this.value);
  // }

  constructor() {
    afterNextRender(() => {
      console.log('afterNextRender');
    });

    afterRender(() => {
      console.log('aft3erRender');
    });
  }

  ngOnInit(): void {
    console.log('value: ', this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }






  
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

}
