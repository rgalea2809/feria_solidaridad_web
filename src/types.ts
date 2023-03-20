export interface Project {
    id: string;
    title: string;
    imageUrl: string;
    modality?: string | null;
    hours?: number | null;
}