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
    title: 'RecWiz / Reconciliation Wizard',
    description:
      'Owned technical development of RecWiz, a reconciliation application using ASP.NET Core Web API and Angular, from architecture and backend design through implementation.',
    details:
      'Designed processing architecture with CQRS, MediatR, and EF Core; added JWT authentication, configurable source ingestion, batch processing, and record comparison.',
    technologies: 'ASP.NET Core Web API, Angular, CQRS, MediatR, EF Core, JWT',
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
    title: 'Thalassemia Prediction with Machine Learning',
    description:
      'Explored thalassemia risk prediction using clinical and diagnostic features.',
    details:
      'Prepared features, compared models, and plotted their performance.',
    technologies: 'Python, PyTorch, scikit-learn, Matplotlib, Pandas, NumPy',
    notebook:
      'https://colab.research.google.com/drive/1YXZuQIgNnTpWguKGgcrKjSUxn4CH6LLv?usp=drive_link',
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
      'Built Member Transfer from scratch; contributed to Cheque Book Management and a reconciliation engine for reliable financial processing.',
      'Developed and maintained enterprise applications in C#, ASP.NET Core, ASP.NET MVC, Angular, and SQL Server, using modular design and separation of concerns for maintainability.',
      'Contributed authentication, authorization, secure access control, and identity workflows to the Auth Gateway.',
      'Worked on banking application reliability, data validation, access control, and production issue resolution.',
      'Contributing to the ongoing migration of legacy Core Banking modules to a new system using Clean Architecture and the Repository pattern.',
    ],
  },
  {
    organization: 'Itransition',
    position: '.NET Development Training Program · Remote',
    period: 'September 2024 – October 2024',
    responsibilities: [
      'Built C# authentication features with password hashing and salting, JWT, and session management.',
      'Connected Angular components to backend workflows.',
    ],
  },
  {
    organization: 'BigLedger Sdn Bhd',
    position: 'Software Developer Intern',
    period: 'September 2023 – February 2024',
    responsibilities: [
      'Investigated PostgreSQL data issues in ERP software.',
      'Supported AWS server operations.',
      'Tested ERP workflows and validated data consistency between backend APIs and the frontend.',
    ],
  },
];

export const skills = [
  { category: 'Programming Languages', items: 'C#, Python, C++, JavaScript, TypeScript, Rust, Go' },
  {
    category: 'Backend / Web',
    items: 'ASP.NET Core, ASP.NET MVC, ASP.NET Framework, Angular',
  },
  { category: 'Databases', items: 'Microsoft SQL Server, PostgreSQL' },
  {
    category: 'Machine Learning',
    items: 'PyTorch, OpenCV, scikit-learn, Albumentations, NumPy, Pandas, Matplotlib',
  },
  {
    category: 'Tools / Platforms',
    items:
      'Git, Linux / Ubuntu, AWS, Jira, DBeaver, SQL Server Management Studio, Unity 2D',
  },
];
