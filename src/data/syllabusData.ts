import { Category } from '../types';

export const syllabusData: Category[] = [
  {
    id: 'azure',
    title: 'Azure Services',
    description: 'Core Azure services and infrastructure components',
    icon: 'Cloud',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    topics: [
      {
        id: 'azure-logging',
        title: 'Azure Logging & Monitoring',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Azure Monitor Overview',
            url: 'https://docs.microsoft.com/en-us/azure/azure-monitor/overview',
            type: 'documentation'
          },
          {
            title: 'Log Analytics Tutorial',
            url: 'https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial',
            type: 'tutorial'
          }
        ]
      },
      {
        id: 'azure-front-door',
        title: 'Azure Front Door',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Front Door Documentation',
            url: 'https://docs.microsoft.com/en-us/azure/frontdoor/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'azure-load-balancer',
        title: 'Azure Load Balancer',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Load Balancer Overview',
            url: 'https://docs.microsoft.com/en-us/azure/load-balancer/load-balancer-overview',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'azure-vm',
        title: 'Azure Virtual Machines',
        status: 'not-started',
        notes: '',
        difficulty: 'beginner',
        resources: [
          {
            title: 'Virtual Machines Documentation',
            url: 'https://docs.microsoft.com/en-us/azure/virtual-machines/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'azure-vmss',
        title: 'Azure Virtual Machine Scale Sets',
        status: 'not-started',
        notes: '',
        difficulty: 'advanced',
        resources: [
          {
            title: 'VMSS Overview',
            url: 'https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'terraform',
    title: 'Terraform & IaC',
    description: 'Infrastructure as Code with Terraform and security tools',
    icon: 'Code2',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    topics: [
      {
        id: 'terraform-basics',
        title: 'Terraform Fundamentals',
        status: 'not-started',
        notes: '',
        difficulty: 'beginner',
        resources: [
          {
            title: 'Terraform Documentation',
            url: 'https://www.terraform.io/docs',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'tflint',
        title: 'TFLint - Terraform Linter',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'TFLint Documentation',
            url: 'https://github.com/terraform-linters/tflint',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'tfsec',
        title: 'TFSec - Security Scanner',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'TFSec Documentation',
            url: 'https://aquasecurity.github.io/tfsec/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'checkov',
        title: 'Checkov - Policy as Code',
        status: 'not-started',
        notes: '',
        difficulty: 'advanced',
        resources: [
          {
            title: 'Checkov Documentation',
            url: 'https://www.checkov.io/1.Welcome/What%20is%20Checkov.html',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Container orchestration and Kubernetes ecosystem',
    icon: 'Server',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    topics: [
      {
        id: 'k8s-basics',
        title: 'Kubernetes Fundamentals',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Kubernetes Documentation',
            url: 'https://kubernetes.io/docs/home/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'k8s-deployments',
        title: 'Deployments & Services',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Deployments Guide',
            url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'k8s-networking',
        title: 'Kubernetes Networking',
        status: 'not-started',
        notes: '',
        difficulty: 'advanced',
        resources: [
          {
            title: 'Networking Concepts',
            url: 'https://kubernetes.io/docs/concepts/services-networking/',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Containerization and Docker ecosystem',
    icon: 'Package',
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    topics: [
      {
        id: 'docker-basics',
        title: 'Docker Fundamentals',
        status: 'not-started',
        notes: '',
        difficulty: 'beginner',
        resources: [
          {
            title: 'Docker Documentation',
            url: 'https://docs.docker.com/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'dockerfile',
        title: 'Dockerfile Best Practices',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Dockerfile Best Practices',
            url: 'https://docs.docker.com/develop/dev-best-practices/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'docker-compose',
        title: 'Docker Compose',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Docker Compose Documentation',
            url: 'https://docs.docker.com/compose/',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'github',
    title: 'GitHub & Actions',
    description: 'Version control and CI/CD with GitHub Actions',
    icon: 'GitBranch',
    color: 'bg-gradient-to-br from-gray-700 to-gray-800',
    topics: [
      {
        id: 'github-basics',
        title: 'Git & GitHub Fundamentals',
        status: 'not-started',
        notes: '',
        difficulty: 'beginner',
        resources: [
          {
            title: 'GitHub Documentation',
            url: 'https://docs.github.com/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'github-actions',
        title: 'GitHub Actions',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'GitHub Actions Documentation',
            url: 'https://docs.github.com/en/actions',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'github-workflows',
        title: 'Advanced Workflows',
        status: 'not-started',
        notes: '',
        difficulty: 'advanced',
        resources: [
          {
            title: 'Workflow Syntax',
            url: 'https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions',
            type: 'documentation'
          }
        ]
      }
    ]
  },
  {
    id: 'jenkins',
    title: 'Jenkins',
    description: 'Build automation and continuous integration',
    icon: 'Wrench',
    color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    topics: [
      {
        id: 'jenkins-basics',
        title: 'Jenkins Fundamentals',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'Jenkins Documentation',
            url: 'https://www.jenkins.io/doc/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'jenkins-pipelines',
        title: 'Jenkins Pipelines',
        status: 'not-started',
        notes: '',
        difficulty: 'advanced',
        resources: [
          {
            title: 'Pipeline Tutorial',
            url: 'https://www.jenkins.io/doc/book/pipeline/',
            type: 'tutorial'
          }
        ]
      }
    ]
  },
  {
    id: 'sonarqube',
    title: 'SonarQube',
    description: 'Code quality and security analysis',
    icon: 'Shield',
    color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    topics: [
      {
        id: 'sonarqube-basics',
        title: 'SonarQube Fundamentals',
        status: 'not-started',
        notes: '',
        difficulty: 'intermediate',
        resources: [
          {
            title: 'SonarQube Documentation',
            url: 'https://docs.sonarqube.org/',
            type: 'documentation'
          }
        ]
      },
      {
        id: 'sonarqube-integration',
        title: 'CI/CD Integration',
        status: 'not-started',
        notes: '',
        difficulty: 'advanced',
        resources: [
          {
            title: 'CI/CD Integration Guide',
            url: 'https://docs.sonarqube.org/latest/analysis/ci-integration-overview/',
            type: 'tutorial'
          }
        ]
      }
    ]
  }
];