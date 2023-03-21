export interface Project {
    id: string;
    title: string;
    imageUrl: string;
    modality?: string | null;
    hours?: number | null;
}

export interface Meta {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage:number,
}

export interface AllProjectsResponse {
    data: {
        items: Project[],
        meta:Meta,
    },
    statusCode: number,
    error: string | null,
    message: string | null
}