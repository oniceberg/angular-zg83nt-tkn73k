import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //定义一个带 @Input 装饰器的 product 属性。@Input 装饰器指出其属性值是从组件的父组件（在本例中就是商品列表组件）中传入的
  @Input() product;
  //用 @Output 装饰器和一个事件发射器（EventEmitter）实例定义一个名为 notify 的属性。这可以让商品提醒组件在 notify 属性发生变化时发出事件。
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}