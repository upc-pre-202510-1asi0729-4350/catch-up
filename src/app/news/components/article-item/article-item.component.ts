import {Component, Input} from '@angular/core';
import {Article} from '../../model/article.entity';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-item',
  imports: [MatSnackBarModule],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;

  constructor(private snackBar: MatSnackBar) {}

  async shareArticle() {
    const articleShareInfo = {
      title: this.article.title,
      url: this.article.url,
    };

    if (navigator.share) {
      try {
        await navigator.share(articleShareInfo);
        this.snackBar.open('Article shared successfully!', 'Close', { duration: 3000});
      } catch (error) {
        this.snackBar.open('Share failed.', 'Close', { duration: 3000});
      }
    } else {
      try {
        await navigator.clipboard.writeText(articleShareInfo.url);
        this.snackBar.open('Article URL copied to clipboard!', 'Close', { duration: 3000});
      } catch (error) {
        this.snackBar.open('Failed to copy URL.', 'Close', { duration: 3000});
      }
    }
  }

}
