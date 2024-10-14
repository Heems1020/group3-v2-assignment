import { Model } from 'mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
export declare class ArticlesService {
    private articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    create(article: Article): Promise<Article>;
    findAll(): Promise<Article[]>;
}
