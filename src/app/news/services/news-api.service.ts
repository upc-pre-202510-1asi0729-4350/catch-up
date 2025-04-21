import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LogoApiService} from '../../shared/services/logo-api.service';
import {Source} from '../model/source.entity';
import {map, Observable} from 'rxjs';
import {SourcesResponse} from './sources.response';
import {SourceAssembler} from './source.assembler';
import {Article} from '../model/article.entity';
import {TopHeadlinesResponse} from './top-headlines.response';
import {ArticleAssembler} from './article.assembler';

@Injectable({providedIn: 'root'})
export class NewsApiService {
  private baseUrl = environment.newsProviderApiBaseUrl;
  private newsEndpoint = environment.newsProviderNewsEndpointPath;
  private sourcesEndpoint = environment.newsProviderSourcesEndpointPath;
  private apiKey = environment.newsProviderApiKey;

  constructor(private http: HttpClient, private logoApiService: LogoApiService) { }

  getSources(): Observable<Source[]> {
    return this.http.get<SourcesResponse>(
      `${this.baseUrl}${this.sourcesEndpoint}`,
      { params: { apiKey: this.apiKey }})
      .pipe(map(response =>
        SourceAssembler.toEntitiesFromResponse(response)));
  }

  getArticlesBySourceId(sourceId: string): Observable<Article[]> {
    return this.http.get<TopHeadlinesResponse>(
      `${this.baseUrl}${this.newsEndpoint}`,
      { params: { apiKey: this.apiKey, sources: sourceId }})
      .pipe(map(response => ArticleAssembler.toEntitiesFromResponse(response)));
  }
}
