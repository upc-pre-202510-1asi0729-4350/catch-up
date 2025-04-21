import {LogoApiService} from '../../shared/services/logo-api.service';
import {ArticleResource, TopHeadlinesResponse} from './top-headlines.response';
import {Article} from '../model/article.entity';

export class ArticleAssembler {
  static logoApiService: LogoApiService;
  static withLogoApiService(logoApiService: LogoApiService) {
    this.logoApiService = logoApiService;
    return this;
  }
  static toEntityFromResource(resource: ArticleResource): Article {
    return {
      source: {
        id: resource.source.id || '',
        name: resource.source.name,
        url: '',
        urlToLogo: ''
      },
      title: resource.title,
      description: resource.description || '',
      url: resource.url,
      urlToImage: resource.urlToImage || '',
      publishedAt: resource.publishedAt
    };
  }

  static toEntitiesFromResponse(response: TopHeadlinesResponse): Article[] {
    return response.articles.map(article => this.toEntityFromResource(article));
  }
}
