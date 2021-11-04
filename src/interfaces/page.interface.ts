export interface TopPageModel {
    userId: number;
    userName: string;
    auth: boolean;
	alias: string;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
}