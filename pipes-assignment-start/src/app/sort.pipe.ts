import { Pipe, PipeTransform } from '@angular/core';
import {letProto} from "rxjs/operator/let";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {

    // for (var name of value){
    //   console.log(name["name"]);
    // }

    var output = value.sort((a,b)=>{
      if (a["name"] < b["name"]) {
        // console.log(a["name"], b["name"]);
        return -1;
      }
      else {
        return 1;
      }
    });

    for (var name of output){
      console.log(name["name"]);
    }

    return value;
  }

}
