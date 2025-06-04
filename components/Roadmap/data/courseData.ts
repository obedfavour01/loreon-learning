import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    week: 1,
    title: 'DevOps & Linux Fundamentals',
    description: 'Master the foundational concepts of DevOps and essential Linux skills.',
    content: `
      <h3>Week 1: Introduction to DevOps & Linux Fundamentals</h3>
      <p>This foundational week covers:</p>
      <ul>
        <li>The 7 pillars of DevOps</li>
        <li>DevOps lifecycle and pipeline</li>
        <li>System architecture design</li>
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
    title: 'Git & GitHub Mastery',
    description: 'Learn version control and collaborative development with Git and GitHub.',
    content: `
      <h3>Week 2: Source Control Management with Git & GitHub</h3>
      <p>Master version control with:</p>
      <ul>
        <li>Git architecture and core commands</li>
        <li>Branching strategies (GitFlow, trunk-based)</li>
        <li>Pull requests and code reviews</li>
        <li>GitHub for DevOps engineers</li>
        <li>Git security and best practices</li>
      </ul>
      <p>You'll leave this week as a confident Git user ready for team collaboration.</p>
    `,
    image: '/assets/images/roadmap/git_github.png'
  },
  {
    id: 3,
    week: 3,
    title: 'CI/CD Pipeline Excellence',
    description: 'Build robust continuous integration and deployment pipelines.',
    content: `
      <h3>Week 3: Continuous Integration/Continuous Deployment</h3>
      <p>Dive into automated deployments with:</p>
      <ul>
        <li>CI/CD principles and pipeline components</li>
        <li>GitHub Actions fundamentals</li>
        <li>Testing strategies in CI/CD</li>
        <li>Automated security scanning</li>
        <li>Deployment environments (Dev, Staging, Production)</li>
      </ul>
      <p>By week's end, you'll be able to build and maintain professional CI/CD pipelines.</p>
    `,
    image: '/assets/images/roadmap/cicd.png'
  },
  {
    id: 4,
    week: 4,
    title: 'Docker & Containerization',
    description: 'Master container technology with Docker and multi-container applications.',
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
      <p>You'll finish this week able to build and manage containerized applications.</p>
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
      <p>Master infrastructure automation with:</p>
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
    title: 'Monitoring & Observability',
    description: 'Implement comprehensive monitoring and observability solutions.',
    content: `
      <h3>Week 6: Monitoring, Observability & Final Project</h3>
      <p>Complete your DevOps journey with:</p>
      <ul>
        <li>Monitoring vs. observability</li>
        <li>Prometheus for metrics collection</li>
        <li>Grafana for visualization</li>
        <li>Log management</li>
        <li>Alert design and management</li>
      </ul>
      <p>You'll finish the course ready to implement and manage production monitoring systems.</p>
    `,
    image: '/assets/images/roadmap/monitoring.png'
  }
];