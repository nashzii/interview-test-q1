import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';
  valNumber: string = '0';
  type = 'isPrime';
  result = false;
  constructor() {}
  
  ngOnInit() {
    // console.log(this.el);
    
  }

  onTypeChange(t: any) {
    this.type = t.target.value;
    this.numberChange()
  }

  fibonacci(num: number){
    let a = 1, b = 0, temp: number;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  }

  numberChange() {
    this.valNumber = this.valNumber.replace(/[^\d]+/, '').replace(/^0{1}/, '').replace(' ', '');
    if (!this.valNumber) {
      this.valNumber = '0';
    }
    (document.getElementById('valNumber') as HTMLTextAreaElement).value = this.valNumber;
    if (this.type === 'isPrime') {
      this.result = this.isPrime()
    } else if (this.type === 'isFibonacci') {
      this.result = this.isFibonacci()
    }

  }

  isPrime() {
    for(var i = 2; i < Number(this.valNumber); i++)
      if(Number(this.valNumber) % i === 0) return false;
    return Number(this.valNumber) > 1;
  }
  
  isFibonacci() {
    let i = 0;
    while (this.fibonacci(i) <= Number(this.valNumber)) {
      if (this.fibonacci(i) == Number(this.valNumber)) {
        return true;
      }
      i++;
    }
    return false;
  }
}
