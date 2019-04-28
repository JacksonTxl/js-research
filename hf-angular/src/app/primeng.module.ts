/**
 * @license
 * Copyright 2018 CFETSIT 测试工具组
 * @author
 * JacksonTxl
 * @time
 * 2019-04-28 11:10
 */
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import {
  ButtonModule, CheckboxModule, DialogModule,
  DragDropModule,
  DropdownModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  SelectButtonModule
} from 'primeng/primeng';

@NgModule({
  exports: [
    DropdownModule,
    DragDropModule,
    TableModule,
    MultiSelectModule,
    SelectButtonModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    CheckboxModule
  ]
})
export class PrimeNgModule {

}
