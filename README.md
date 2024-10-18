# Integrated Annual Academic Calendar - Smart India Hackathon 2022 Winning Project

This repository contains the source code for the **Integrated Annual Academic Calendar**, a project that won the **Smart India Hackathon 2022** and was commissioned by the **Ministry of Education**. The project is designed to streamline academic schedules across all Indian universities and solve various problems related to event management and scheduling.

## Project Overview

The Integrated Annual Academic Calendar aims to provide a **centralized platform** for managing academic schedules, events, holidays, and exams for universities across India. By offering a single platform with role-based access, this project ensures that all stakeholders—from universities to students—are on the same page, promoting better planning and coordination.

## Key Features

### 1. Role-Based Access
The platform offers three distinct user roles:

- **Super Admin (AICTE)**: The All India Council for Technical Education (AICTE) has full control over the system. They can create, update, and delete events for any university. Additionally, AICTE can assign specific tasks or events to universities.
  
- **Admin (Universities)**: Universities have access to manage their own events. They can add, update, and delete events specific to their institution but can only update tasks or events assigned by AICTE. Universities must also provide proof of conducting the assigned tasks or events.

- **User (Public)**: Students, faculty, and the general public can access the calendar to view all the scheduled events and academic dates but cannot make any changes.

### 2. Task Assignment & Management
- **AICTE Assigning Tasks**: The Super Admin (AICTE) can assign tasks or events to specific universities. For example, AICTE may assign a task such as conducting a seminar or organizing exams, and the universities are required to complete it within a set deadline.
  
- **Proof of Task Completion**: After completing the task assigned by AICTE, universities are required to upload proof of conducting the event. This ensures transparency and accountability in the educational system.

- **Task Management**: AICTE has full control over any task or event they assign. They can delete or update these tasks at any time. Universities, on the other hand, can only update the status of the assigned tasks but cannot delete them.

### 3. Centralized Calendar for All Universities
One of the most significant features is the **Common Calendar**, displayed on the home page, which provides an overview of the academic schedule across all Indian universities. This calendar helps with:

- **Synchronized Exam Scheduling**: One of the biggest challenges in the Indian education system is that different universities hold their exams and graduation ceremonies at varying times. This often creates issues for students when applying for national-level exams, jobs, or higher studies, as their graduation dates differ.
  
- **Coordinated Event Management**: With the centralized calendar, universities can view and plan their academic schedules more efficiently, preventing conflicts and allowing students to graduate within similar timeframes across the country.

### 4. Flexibility for Universities
- Universities have the freedom to manage their own academic schedules. They can **add, edit, or delete events** such as holidays, internal exams, or important academic dates.
  
- This decentralized control ensures that universities can operate autonomously while still being part of the centralized system monitored by AICTE.

### 5. Real-Time Updates
All changes made by either AICTE or the universities are reflected in real-time, ensuring that students, faculty, and other users have access to the latest information without delays.

### 6. Improved Student Experience
By having a synchronized academic calendar across all universities, students benefit from:

- **Consistent Graduation Dates**: Solving the problem where students from different universities graduate at different times, which impacts their ability to apply for further studies or competitive exams.
  
- **Transparency**: Students can easily access the academic schedules of any university in India, helping them plan better for exams, holidays, and other academic activities.

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/yourrepository.git
