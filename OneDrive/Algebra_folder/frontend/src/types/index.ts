export type UserRole = 'ADMIN' | 'COORDINATOR' | 'PROJECT_MANAGER' | 'TEAM_LEADER' | 'MEMBER';

export interface Project {
  project_id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'planning' | 'active' | 'on_hold' | 'testing' | 'completed' | 'cancelled' | 'archived';
  start_date: string;
  due_date: string;
}

export interface Task {
  task_id: string;
  project_id: string;
  title: string;
  assigned_to: string;
  status: 'pending' | 'in_progress' | 'overdue' | 'blocked' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  due_date: string;
}