/**
2 * SearchResult is a data-structure that holds an individual
3 * record from a YouTube video search
4 */
export class SearchResults{
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    constructor(obj?:any ){
        this.id = obj && obj.id || null
        this.title =obj && obj.title || null
        this.description = obj.description || null 
        this.thumbnailUrl = obj && obj.thumbnailUrl || null
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}