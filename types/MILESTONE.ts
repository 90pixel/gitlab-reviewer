export interface Milestone {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: 'active' | 'closed';
  created_at: string;
  updated_at: string;
  due_date: string;
  start_date: boolean;
  web_url: string;
}
