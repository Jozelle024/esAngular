import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {
  private titolo;
  private trademark;

  constructor() {
    this.titolo = 'DS Group';
    this.trademark = '©';
  }
  getTitolo() {
    return this.titolo;
  }

  getTrademark() {
    return this.trademark + this.titolo;
  }

}
