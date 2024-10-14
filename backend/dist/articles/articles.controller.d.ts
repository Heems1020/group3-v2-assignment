import { ArticlesService } from './articles.service';
import { Article } from './schemas/article.schema';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    createArticle(article: Article): Promise<{
        success: boolean;
        article: Article;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        article?: undefined;
    }>;
    getAllArticles(): Promise<{
        success: boolean;
        articles: Article[];
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        articles?: undefined;
    }>;
}
