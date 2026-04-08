import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Types
export interface Program {
  id: number;
  title: string;
  slug: string;
  category: string;
  category_display: string;
  status: string;
  status_display: string;
  description: string;
  content: string;
  image: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  category: string;
  category_display: string;
  excerpt: string;
  content: string;
  cover_image: string;
  author: string;
  published_at: string;
  is_published: boolean;
  related_program: number | null;
  related_program_title: string | null;
  related_program_slug: string | null;
}

export interface ImpactStat {
  id: number;
  label: string;
  value: string;
  icon: string;
  order: number;
}

export interface ImpactLocation {
  id: number;
  name: string;
  province: string;
  latitude: number;
  longitude: number;
  beneficiaries_count: number;
  program: number | null;
  program_title: string | null;
  program_slug: string | null;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
  is_active: boolean;
  order: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  program: number | null;
  article: number | null;
  program_slug: string | null;
  article_slug: string | null;
  uploaded_at: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Programs
export const getPrograms = async (category?: string, featured?: boolean): Promise<Program[]> => {
  const params: Record<string, string> = {};
  if (category) params.category = category;
  if (featured) params.featured = 'true';
  const { data } = await api.get<PaginatedResponse<Program>>('/api/programs/', { params });
  return data.results;
};

export const getProgramDetail = async (slug: string): Promise<Program> => {
  const { data } = await api.get<Program>(`/api/programs/${slug}/`);
  return data;
};

// Articles
export const getArticles = async (category?: string, limit?: number): Promise<Article[]> => {
  const params: Record<string, string | number> = {};
  if (category) params.category = category;
  if (limit) params.limit = limit;
  const { data } = await api.get<PaginatedResponse<Article>>('/api/articles/', { params });
  return data.results;
};

export const getArticleDetail = async (slug: string): Promise<Article> => {
  const { data } = await api.get<Article>(`/api/articles/${slug}/`);
  return data;
};

// Impact
export const getImpactStats = async (): Promise<ImpactStat[]> => {
  const { data } = await api.get<ImpactStat[]>('/api/impact/stats/');
  return data;
};

export const getImpactLocations = async (): Promise<ImpactLocation[]> => {
  const { data } = await api.get<ImpactLocation[]>('/api/impact/locations/');
  return data;
};

// Partners
export const getPartners = async (): Promise<Partner[]> => {
  const { data } = await api.get<Partner[]>('/api/partners/');
  return data;
};

// Gallery
export const getGallery = async (programSlug?: string): Promise<GalleryItem[]> => {
  const params: Record<string, string> = {};
  if (programSlug) params.program = programSlug;
  const { data } = await api.get<PaginatedResponse<GalleryItem>>('/api/gallery/', { params });
  return data.results;
};

// Forms
export const submitVolunteer = async (data: {
  full_name: string;
  email: string;
  phone: string;
  interest: string;
  domicile: string;
  message?: string;
}) => {
  const response = await api.post('/api/volunteers/', data);
  return response.data;
};

export const submitContact = async (data: {
  full_name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  const response = await api.post('/api/contacts/', data);
  return response.data;
};

export const submitPartnership = async (data: {
  institution_name: string;
  pic_name: string;
  email: string;
  phone: string;
  partnership_type: string;
  message: string;
}) => {
  const response = await api.post('/api/contacts/partnership/', data);
  return response.data;
};

export default api;
