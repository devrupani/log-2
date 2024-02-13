import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products : Product[] = [
    {id : 1, p_name :'Product 1 ', p_desc : 'wefewfwefhnefkwe_Efwefefflwehhwefdwhefhwehf',p_liked : false},
    {id : 2, p_name :'Product 2 ', p_desc : 'wefewfwefhnefkwe_Efwefefflwehhwefdwhefhwehf',p_liked : false},
    {id : 3, p_name :'Product 3 ', p_desc : 'wefewfwefhnefkwe_Efwefefflwehhwefdwhefhwehf',p_liked : false},
    {id : 4, p_name :'Product 4 ', p_desc : 'wefewfwefhnefkwe_Efwefefflwehhwefdwhefhwehf',p_liked : false},
    {id : 5, p_name :'Product 5 ', p_desc : 'wefewfwefhnefkwe_Efwefefflwehhwefdwhefhwehf',p_liked : false}
  ]

  
}
