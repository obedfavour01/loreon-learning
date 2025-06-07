import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    week: 1,
    title: 'DevOps & Linux Fundamentals',
    description: 'Master the foundational concepts of DevOps and essential Linux skills.',
    content: `
      <h3>Introduction to DevOps & Linux Fundamentals</h3>
      <p>This foundational week covers:</p>
      <ul>
        <li>The 7 pillars of DevOps</li>
        <li>DevOps lifecycle and pipeline</li>

        <li>Linux fundamentals for DevOps practitioners</li>
        <li>Career opportunities in DevOps</li>
      </ul>
      <p>By the end of this week, you'll understand the core principles of DevOps .</p>
    `,
    image: '/assets/images/roadmap/linux.png'
  },
  {
    id: 2,
    week: 2,
    title: 'Git & GitHub ',
    description: 'Learn version control and collaborative development with Git and GitHub.',
    content: `
      <h3>Week 2: Source Code Management</h3>
      
      <ul>
        <li>Git architecture and core commands</li>
        <li>Branching strategies </li>
        <li>Pull requests and code reviews</li>
        <li>GitHub for DevOps engineers</li>
        <li>Git security and best practices</li>
      </ul>

      <p>By the end of this week, you’ll be able to work with developers and onboard projects for Organisations on GitHub. 
</p>
    `,
    image: '/assets/images/roadmap/git_github.png'
  },
  {
    id: 3,
    week: 3,
    title: 'Continuous Integration/Continuous Deployment',
    description: 'Dive into automated deployments with: Build a continuous integration and deployment pipeline.',
    content: `
      <h3>Week 3: Continuous Integration/Continuous Deployment</h3>
      <p>Dive into automated deployments with:</p>
      <ul>
        <li>CI/CD principles and pipeline components</li>
        <li>GitHub Actions fundamentals</li>
        <li>Deployment environments (Dev, Staging, Production)</li>
      </ul>
      <p>By week's end, you'll be able to build and maintain CI/CD pipelines.</p>
    `,
    image: '/assets/images/roadmap/cicd.png'
  },
  {
    id: 4,
    week: 4,
    title: 'Containerization with Docker',
    description: 'Learn container technology with Docker and multi-container applications.',
    content: `
      <h3>Week 4: Containerization with Docker</h3>
      <p>Explore containerization through:</p>
      <ul>
        <li>Container fundamentals</li>
        <li>Dockerfile syntax and best practices</li>
        <li>Docker commands and operations</li>
        <li>Container registries</li>
        <li>Docker Compose for multi-container applications</li>
      </ul>
      <p>You'll finish this week able to build and manage containerized applications that can run on every platform.</p>
    `,
    image: '/assets/images/roadmap/containerization.png'
  },
  {
    id: 5,
    week: 5,
    title: 'Infrastructure as Code',
    description: 'Learn to manage infrastructure through code using Terraform.',
    content: `
      <h3>Week 5: Infrastructure as Code (IaC)</h3>
      <p>Get started with infrastructure automation:</p>
      <ul>
        <li>IaC benefits and approaches</li>
        <li>Terraform basics and provider configuration</li>
        <li>AWS resource provisioning</li>
        <li>State management</li>
        <li>Infrastructure testing and validation</li>
      </ul>
      <p>By the end of this week, you'll be able to manage cloud infrastructure through code.</p>
    `,
    image: '/assets/images/roadmap/IaC.png'
  },
  {
    id: 6,
    week: 6,
    title: ' Final Project: Build and Deploy a Blockchain App',
    description: 'Students will build a comprehensive DevOps solution that integrates all skills learned throughout the programme to deploy a cryptocurrency application:',
    content: `
      <h3>Evaluation Criteria:</h3>
      
      <ul>
        <li>Functionality: Does the pipeline work end-to-end?</li>
        <li>Security: Are best practices implemented?</li>
        <li>Automation: How much manual intervention is required?</li>
        <li>Documentation: Is the solution well-documented?</li>
    
      </ul>
      <p>By the end of this week, you’ll have a balance of theory and hands-on practice, with real-world skills and a portfolio project that can be immediately applied in a DevOps role. 
</p>
    `,
    image: '/assets/images/roadmap/monitoring.png'
  }
];