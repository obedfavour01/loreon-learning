import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    week: 1,
    title: 'Introduction to DevOps & Linux Fundamentals',
    description: 'Get started with the foundational concepts of DevOps and essential Linux skills.',
    content: `
      <h3>This foundational week covers:</h3>
      <p></p>
      <ul>
       
        <li>- DevOps lifecycle and pipeline</li>
        <li>- Linux fundamentals for DevOps practitioners</li>
        <li>- Career opportunities in DevOps</li>
      </ul>
      <br/>
      <p>By the end of this week, you'll understand the core principles of DevOps .</p>
    `,
    image: '/assets/images/roadmap/linux.png'
  },
  {
    id: 2,
    week: 2,
    title: 'Git & Github - Source Code Management & Version Control ',
    description: 'Learn version control and collaborative development with Git and GitHub.',
    content: `
      
      
      <ul>
        <li>- Git architecture and core commands</li>
       
        <li>- GitHub for DevOps engineers</li>
        <li>- Git security and best practices</li>
      </ul>

      <br/>
      <p>By the end of this week, you’ll be able to work with developers and onboard projects for Organisations on GitHub. 
</p>
    `,
    image: '/assets/images/roadmap/git_github.png'
  },
  {
    id: 3,
    week: 3,
    title: 'Continuous Integration/Continuous Deployment',
    description: 'Dive into automated deployments with GitHub Actions: Build a continuous integration and deployment pipeline.',
    content: `
      
      
      <ul>
        <li>- CI/CD principles and pipeline components</li>
        <li>- GitHub Actions fundamentals</li>
        <li>- Deployment environments </li>
      </ul>

      <br/>
      <p>By the end of this week, you'll be able to build and maintain CI/CD pipelines.</p>
    `,
    image: '/assets/images/roadmap/cicd.png'
  },
  {
    id: 4,
    week: 4,
    title: 'Containerization with Docker',
    description: 'Learn container technology with Docker and multi-container applications.',
    content: `
      <h3> Explore containerization through:</h3>
      
      <ul>
        <li>- Container fundamentals and Container registries</li>
        <li>- Dockerfile syntax and best practices</li>
        <li>- Docker commands and operations</li>
        <li>- Docker Compose for multi-container applications</li>
      </ul>

      <br/>
      <p>You'll finish this week able to build and manage containerized applications that runs on any platform </p>
    `,
    image: '/assets/images/roadmap/containerization.png'
  },
  {
    id: 5,
    week: 5,
    title: 'Infrastructure as Code',
    description: 'Learn to manage infrastructure through code using Terraform.',
    content: `
      <h3>Get started with infrastructure automation:</h3>
      
      <ul>
        <li>- IaC benefits and approaches</li>
        <li>- Terraform basics and provider configuration</li>
        <li>- AWS resource provisioning</li>
        <li>- State management</li>
        <li>- Infrastructure testing and validation</li>
      </ul>

      <br/>
      <p>By the end of this week, you'll be able to manage cloud infrastructure through code.</p>
    `,
    image: '/assets/images/roadmap/IaC.png'
  },
  {
    id: 6,
    week: 6,
    title: ' Final Project: Build and Deploy a Crypto App',
    description: 'Build a pipeline that integrates all skills learned throughout the programme to deploy a web3 application:',
    content: `
      <h3>Evaluation Criteria:</h3>
      
      <ul>
          <li>- Functional pipeline and it works end-to-end.</li>
          <li>- Security: Best practices are implemented.</li>
          <li>- Automation: Minimal manual intervention is required.</li>
          <li>- Documentation: The solution is well-documented.</li>
    
      </ul>
      <br/>
      <p> By the end of this week, you’ll have a balance of theory and hands-on practice, with a portfolio project to showcase your skills.
</p>
    `,
    image: '/assets/images/roadmap/crypto.jpg'
  }
];