export interface Project {
    id: string;
    slug: string;
    title: string;
    imageUrl: string;
    modality?: string | null;
    hours?: number | null;
    formUrl?: string | null;
}

export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export interface Image {
    url: string;
    alt?: string | null;
}

export interface AllImagesResponse {
    data: Image[];
    statusCode: string;
    error: string | null;
    message: string | null;
}

export interface AllProjectsResponse {
    data: {
        items: Project[];
        meta: Meta;
    };
    statusCode: number;
    error: string | null;
    message: string | null
}

export interface Contact {
    type: string;
    data: string;
}

export interface FullProject extends Project {
    description: string;
    place?: string | null;
    hours?: number | null;
    vacants?: number;
    activities: string[];
    schedules?: string[] | null;
    requirements: string[];
    contacts: Contact[];
    institution: Institution;
}

export interface FullProjectResponse {
    data: FullProject;
    statusCode: string;
    error: string | null;
    message: string | null;
}

export interface Institution {
    id: number;
    slug: string;
    name: string;
    logoUrl: string;
    aboutUs: string;
}

export interface FullInstitution extends Institution {
    objective?: string | null;
    mission?: string | null;
    vission?: string | null;
    videoUrl?: string | null;
    projects?: Project[] | null;
    images?: Image[] | null;
    contacts: Contact[];
}

export interface FullInstitutionResponse {
    data: FullInstitution;
    statusCode: string;
    error: string | null;
    message: string | null;

}

export interface AllInstitutionsResponse {
    data: {
        items: Institution[];
        meta: Meta;
    };
    statusCode: number;
    error: string | null;
    message: string | null
}
export interface Event {
    id: number;
    name: string;
    type?: string;
    data?: string | null;
    hyperlink: string;
    imageUrl?: string | null;
    schedule?: string | null;

}

export interface AllEventsResponse {
    data: Event[];
    statusCode: number;
    error: string | null;
    message: string | null
}
export interface AppStores{
    store_name: string;
    url: string;
}

export interface Apps {
    name: string;
    app_stores: AppStores[];
}

export interface HomePage{
    logo_home_url: string;
    video_home_url?: string | null;
    message?: string | null;
    message_author?: string | null;
    year_edition: string;
    haveApps: boolean;
    apps: Apps[];
}

export interface AllHomePageResponse{
    data: HomePage;
    statusCode: number;
    error: string | null;
    message: string | null

}