type author = {node: {
    avatar: {
        url: string,
        width: number,
        height: number,
    },
    id: string,
    name: string,
    slug: string
}}

type categoryNode = {
    name: string, 
    categoryId: number,
    uri: string
}
type categories = {nodes: categoryNode[]}

type featuredImage = {node: {
    mediaItemUrl: string,
    mediaDetails: {
        height: number,
        width: number,
    }
}}

export interface SinglePost {
    author: author,
    categories?: categories,
    date: string,
    excerpt: string,
    featuredImage: featuredImage,
    slug: string,
    title: string
}


export type SearchResult = {
    node: {
        title: string,
        slug: string,
        featuredImage: featuredImage
    }
}
