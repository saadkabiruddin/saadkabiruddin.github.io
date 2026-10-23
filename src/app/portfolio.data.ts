export interface Link {
  label: string;
  url: string;
}
export const publications = [
  {
    title: 'Improving the Methods of Iris Recognition In Less Cooperative Environments',
    authors: ['Saad Kabir Uddin', 'Sim Hiew Moi'],
    venue: 'UTM Computing Proceedings: Innovations in Computing Technology and Applications',
    citation: 'vol. 6, pp. 71–76, 2024.',
    type: 'Proceedings',
    links: [
      {
        label: 'Paper (PDF)',
        url: 'https://comp.utm.my/proceeding/wp-content/uploads/sites/2658/2025/01/12-Saad_Sim-Proc24-Iris.pdf',
      },
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wttp814AAAAJ&authuser=1&citation_for_view=wttp814AAAAJ:u5HHmVD_uO8C',
      },
    ],
  },
  {
    title: 'Enhancing Iris Recognition in Less Cooperative Environments',
    authors: ['Pang Yee Yong', 'Saad Kabir Uddin', 'Sim Hiew Moi'],
    venue: 'Frontiers in Image Processing and Computer Vision',
    citation: 'chapter 4, pp. 47–60. UTM Press, 2025.',
    type: 'Book Chapter',
    links: [
      { label: 'Chapter', url: 'https://epress.utm.my/editedbook/catalog/view/229/585/6657' },
      { label: 'Book', url: 'https://epress.utm.my/editedbook/catalog/book/229' },
      {
        label: 'Google Scholar',
        url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=wttp814AAAAJ&authuser=1&citation_for_view=wttp814AAAAJ:u-x6o8ySG0sC',
      },
    ],
  },
];

export const underReviewPublications = [
  {
    title: 'Automated Brain Tumor Detection from MRI Images Using EfficientNetB3 and Transfer Learning',
    authors: ['Deepro Das', 'Saad Kabir Uddin', 'Mohammad Alauddin', 'Bornali Sarker', 'Thasnim Akhter'],
    venue: 'International Conference on Computer and Information Technology (ICCIT 2026)',
    status: 'Under Review',
  },
];

export const projects = [
  {
    title: 'Roslyn Security Analyzer',
    description:
      'Built a Roslyn-based static analyzer for security issues in ASP.NET Core Web APIs, with a deliberately vulnerable banking API as its evaluation target.',
    details:
      'Implemented RSA001 to detect SQL command text assembled through string concatenation or interpolation. On the documented benchmark, it found both planted SQL injection cases and raised no warnings on three parameterized-query controls; other vulnerability categories remain on the roadmap.',
    technologies: 'C#, Roslyn, ASP.NET Core, SQLite, xUnit, Static Analysis',
    links: [
      { label: 'GitHub', url: 'https://github.com/saadkabiruddin/RoslynSecurityAnalyzer' },
    ],
  },
  {
    title: 'LLM Agent Security Gateway (AgentGuard)',
    description:
      'Built an ASP.NET Core security gateway between an Ollama banking agent and its tools, enforcing role permissions, task scope, and argument provenance independently of the model.',
    details:
      'Added deny-by-default policy checks and audit logging. In a simulated compromised-agent benchmark, full enforcement blocked 8/8 unauthorized calls and allowed 3/3 legitimate calls; role-only checks blocked 3/8 attacks. Separately evaluated prompt injection with two local LLMs in a small banking test environment.',
    technologies: 'C#, ASP.NET Core, Python, Ollama, SQLite, LLM Security',
    links: [
      { label: 'GitHub', url: 'https://github.com/saadkabiruddin/LlmAgentSecurityGateway' },
    ],
  },
  {
    title: 'ML Backdoor Security Lab',
    description:
      'Reproduced BadNets-style training-data poisoning in a PyTorch image classifier on MNIST and evaluated fine-pruning as a defense.',
    details:
      'In single-seed experiments, poisoning 1% of training data achieved 99.82% attack success with 99.01% clean accuracy. On the 10%-poisoned model, pruning 90% of the last convolutional layer’s channels and fine-tuning reduced attack success to 50.06% while retaining 97.90% clean accuracy, showing the defense’s limits in this setting.',
    technologies: 'Python, PyTorch, torchvision, MNIST, Matplotlib, Jupyter',
    links: [
      { label: 'GitHub', url: 'https://github.com/saadkabiruddin/ml-backdoor-security-lab' },
    ],
  },
  {
    title: 'Deep Learning Image Segmentation with PyTorch',
    description:
      'Built a semantic segmentation pipeline with U-Net and an EfficientNet-B0 encoder.',
    details:
      'Prepared image and mask datasets, trained on a GPU for 25 epochs with Dice Loss and BCEWithLogitsLoss, and selected the best checkpoint by validation loss before running inference.',
    technologies: 'Python, PyTorch, Albumentations, OpenCV',
    notebook:
      'https://colab.research.google.com/drive/1yWOlh09kseeSswBDAZEwQuDnvLYih22R?usp=drive_link',
  },
  {
    title: 'DeliveryDash',
    description:
      'Implemented player controls, collision-based interactions, delivery mechanics, and game-state logic in Unity and C#.',
    details:
      'Built and deployed the completed game as a Unity WebGL application through GitHub Pages.',
    technologies: 'Unity 2D, C#',
    links: [
      { label: 'GitHub', url: 'https://github.com/saadkabiruddin/DeliveryDash' },
      { label: 'Live Demo', url: 'https://saadkabiruddin.github.io/DeliveryDash/' },
    ],
  },
];

export const experience = [
  {
    organization: 'Dhaka Mercantile Co-operative Bank Ltd.',
    position: 'Software Engineer (Senior Technical Officer)',
    period: 'November 2024 – Present',
    responsibilities: [
      'Served as primary developer and technical owner of the Case Management Application, driving architecture, database design, backend APIs, legal-case workflows, integrations, and deployment. Coordinated technical decisions and delivery with senior team members and business stakeholders.',
      'Built Member Transfer from scratch; contributed to Cheque Book Management for banking operations.',
      'Built RecWiz using ASP.NET Core Web API, Angular, TypeScript, CQRS, MediatR, and EF Core. Implemented reconciliation workflows, file processing, API integration, and result management with modular architecture.',
      'Developed a centralized SMS gateway for automated notifications across banking systems.',
      'Contributed authentication, authorization, secure access control, and identity workflows to the Auth Gateway.',
      'Worked on banking application reliability, data validation, access control, and production issue resolution.',
      'Contributing to the ongoing migration of legacy Core Banking modules to a new system using Clean Architecture and the Repository pattern.',
      'Maintained and supported an internal Email Gateway built with Python, FastAPI, React, Next.js, and SQL Server, contributing to enterprise system integration and application reliability.',
    ],
  },
  {
    organization: 'Itransition',
    position: '.NET Development Training Program · Remote',
    period: 'September 2024 – October 2024',
    responsibilities: [
      'Built C# authentication features with password hashing and salting, JWT, and session management.',
      'Connected React.js components to backend workflows.',
    ],
  },
  {
    organization: 'BigLedger Sdn Bhd',
    position: 'Software Developer Intern',
    period: 'September 2023 – February 2024',
    responsibilities: [
      'Contributed to ERP software development using Java and Spring Boot for backend functionality and Angular for the frontend, supporting enterprise business workflows.',
      'Investigated and corrected PostgreSQL data issues in ERP software.',
      'Supported AWS server operations and production troubleshooting.',
      'Tested ERP workflows and validated data consistency between backend APIs and the frontend.',
    ],
  },
];

export const skills = [
  { category: 'Systems', items: 'C, C++, Rust' },
  { category: 'Programming Languages', items: 'C#, Python, JavaScript, TypeScript, Go' },
  {
    category: 'Backend / Web',
    items: 'ASP.NET Core, FastAPI, Angular, React, Next.js; NestJS',
  },
  { category: 'Databases', items: 'Microsoft SQL Server, PostgreSQL' },
  {
    category: 'Machine Learning',
    items: 'PyTorch, OpenCV, scikit-learn, Albumentations, NumPy, Pandas, Matplotlib',
  },
  {
    category: 'Tools / Platforms',
    items:
      'Linux / Ubuntu, Git, AWS, Jira, DBeaver, SQL Server Management Studio, Unity 2D',
  },
];
