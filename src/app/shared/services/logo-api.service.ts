import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Source} from '../../news/model/source.entity';

@Injectable({providedIn: 'root'})
export class LogoApiService {
  baseUrl = environment.logoProviderApiBaseUrl;

  constructor() { }

  getUrlToLogo(source: Source) {
    console.log('getUrlToLogo', source);
    return `${this.baseUrl}${new URL(source.url).hostname}`;
  }
}
