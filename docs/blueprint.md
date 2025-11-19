# **App Name**: TimeWise

## Core Features:

- User Authentication: Secure user login via Google Authentication, with role-based access control (Admin, Finance, Project Manager, Developer).
- Admin User Management: Admins can view a list of all users and modify their roles via a dropdown menu, saving changes directly to Firestore.
- Project Management: Admin can create, manage, and archive projects. Including defining specific tasks.
- Developer Assignment: Project Managers and Admins can assign developers to projects by searching for users by email, controlling access to time logging.
- Time Logging: Users can log their time against specific projects, tasks, and dates with mandatory descriptions.  The project dropdown shows only projects where the user is assigned or is the manager.
- Log Viewing and Editing: Users can view and edit their own time logs, filtering by date range and project.  Users cannot edit logs that belong to other people.
- Reporting and Export: Project Managers and Finance users can view and filter time logs, with an aggregate view and CSV export functionality for billing.

## Style Guidelines:

- Primary color: Indigo #7761FF to evoke trust and professionalism, suitable for a time-tracking application.
- Background color: Light Grey #F2F2F2 to maintain the dark scheme while preventing eye strain.
- Secondary color: Night Blue #122636 for interactive elements and highlights, providing visual interest while staying within an analogous color scheme.
- Accent color: Fern #17DA84 for successful actions and positive feedback.
- Surface color: Paper #F8F8F8 for cards and containers.
- Text color: White #FFFFFF for readability on dark backgrounds.
- Primary typeface: 'Europa' (sans-serif) for headlines and titles.
- Secondary typeface: 'Poppins' (sans-serif) for body text and descriptions, providing a balance of readability and a tech-focused aesthetic.
- Use clean, minimalist icons from a consistent set (e.g., Material Design Icons) to represent actions, project status, and user roles.
- Implement a clear, responsive layout with well-defined sections for navigation, forms, and data tables, ensuring usability across devices.
- Use subtle transitions and animations (e.g., when loading data or expanding/collapsing sections) to provide feedback and enhance user experience.