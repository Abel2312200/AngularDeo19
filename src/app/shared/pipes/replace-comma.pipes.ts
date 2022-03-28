import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'commaPipe'
})
 export class replaceComma implements PipeTransform{
   transform(value: any) : any{
     if(!!value) {
      return value.replace(/,/g,'.');
     }else{
       return '';
     }
   }
 }
