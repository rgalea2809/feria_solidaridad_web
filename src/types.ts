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

export interface Contact {
    type: string,
    data: string,
}

export interface FullProject extends Project{
    description: string;
    place?: string | null;
    hours?: number | null;
    vacants?: number;
    activities: string[];
    schedules?: string[] | null;
    requirements: string[];
    contacts: Contact[];
    institution: Institution,
}

export interface FullProjectResponse{
    data: FullProject,
    statusCode: string;
    error: string | null;
    message: string | null;

}

export interface Institution {
    id: number,
    name: string,
    logoUrl: string,
    aboutUs: string,
}