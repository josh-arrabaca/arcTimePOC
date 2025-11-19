export type Role = 'admin' | 'finance' | 'project-manager' | 'developer';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  role: Role;
}

export interface ProjectTask {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  managerId: string;
  assignedDeveloperIds: string[];
  tasks: ProjectTask[];
  status: 'active' | 'archived';
  createdAt: {
    seconds: number;
    nanoseconds: number;
  }; 
}

export interface TimeLog {
  id: string;
  userId: string;
  projectId: string;
  taskId: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  hours: number;
  description: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  user?: User;
  project?: Project;
}
