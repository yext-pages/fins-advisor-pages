export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface Fins_relatedServices {
	name?: string,
	description?: string,
	fins_servicesImage?: Image,
}

export interface Fins_featuredArticles {
	name?: string,
	shortDescription?: string,
	fins_articlePhoto?: ComplexImage,
}

export default interface Professionals {
	name: string,
	description: string,
	headshot: Image,
	slug: string,
	photoGallery: ComplexImage[],
	fins_jobTitle: string,
	logo: ComplexImage,
	emails: string[],
	address: Address,
	mainPhone: any,
	geocodedCoordinate: Coordinate,
	fins_relatedServices: Fins_relatedServices[],
	fins_featuredArticles: Fins_featuredArticles[],
}
