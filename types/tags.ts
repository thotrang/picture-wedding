export interface ITag {
	id: number;
	attributes: Attributes;
}

export interface Attributes {
	slug: string;
	createdAt: string;
	updatedAt: string;
	title: string;
}