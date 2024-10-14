import { Document } from 'mongoose';
export type ArticleDocument = Article & Document;
export declare class Article {
    title: string;
    author: string;
    journal: string;
    date: string;
    volume: string;
    number: string;
    pages: string;
    doi: string;
}
export declare const ArticleSchema: import("mongoose").Schema<Article, import("mongoose").Model<Article, any, any, any, Document<unknown, any, Article> & Article & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, Document<unknown, {}, import("mongoose").FlatRecord<Article>> & import("mongoose").FlatRecord<Article> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
