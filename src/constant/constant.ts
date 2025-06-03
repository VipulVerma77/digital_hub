import { Folder, List, FileText, Book, Share2, Cloud, PenTool, Globe, Video, Archive } from "lucide-react";

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "All Categories", id: "categories" },
  { label: "Contact Us", id: "contact" },
];




export const CATEGORY_ITEMS = [
  {
    id: "cataloguing",
    icon: Folder,
    title: "Cataloguing and Metadata",
    description:
      "Cataloguing and Metadata tools, such as the Library of Congress Catalogue, are essential for creating structured records that describe library materials. These tools help organize, identify, and retrieve resources efficiently by using standardized metadata schemas and cataloguing rules.",
  },
  {
    id: "classification",
    icon: List,
    title: "Classification",
    description:
      "Classification tools provide a systematic arrangement of knowledge into categories or classes. They help libraries and information centers organize materials by subjects or disciplines, enabling users to find and access information easily through systems like Dewey Decimal or Library of Congress Classification.",
  },
  {
    id: "cms",
    icon: FileText,
    title: "Content Management Systems",
    description:
      "Content Management Systems (CMS) enable the creation, management, and modification of digital content without needing specialized technical knowledge. They facilitate collaborative workflows, version control, and easy publication of web content, documents, or multimedia.",
  },
  {
    id: "erm",
    icon: Book,
    title: "Electronic Resources Management (ERM)",
    description:
      "ERM systems help libraries manage their electronic resources, including subscriptions, licenses, and access rights. These tools track usage statistics, facilitate vendor communications, and ensure seamless access to e-books, journals, and databases.",
  },
  {
    id: "social",
    icon: Share2,
    title: "Academic Social Networking Sites",
    description:
      "Academic social networking platforms foster collaboration and knowledge sharing among researchers and scholars. They provide spaces to share publications, engage in discussions, track research impact, and build professional networks.",
  },
  {
    id: "citation",
    icon: PenTool,
    title: "Web-Based Citation Tools",
    description:
      "Citation management tools help users collect, organize, and format references for academic writing. They automate bibliography creation, support multiple citation styles, and integrate with word processors to simplify research documentation.",
  },
  {
    id: "ir",
    icon: Archive,
    title: "Institutional Repository (IR)",
    description:
      "An Institutional Repository is a digital archive that collects, preserves, and disseminates the scholarly output of an institution. IRs enhance the visibility and accessibility of research articles, theses, and data sets produced by faculty and students.",
  },
  {
    id: "pdf",
    icon: FileText,
    title: "PDF Manager",
    description:
      "PDF Managers are essential tools for organising, editing, and manipulating Portable Document Format files. They provide functionalities such as merging, splitting, annotating, converting, and securing PDF documents.",
  },
  {
    id: "writing",
    icon: PenTool,
    title: "Academic Writing Tools",
    description:
      "Academic writing tools assist students and researchers in drafting, editing, and refining scholarly texts. Features often include grammar checking, plagiarism detection, citation assistance, and style recommendations to improve writing quality.",
  },
  {
    id: "video",
    icon: Video,
    title: "Video Conferencing Tools",
    description:
      "Video conferencing platforms enable virtual meetings, lectures, and webinars. These tools support real-time communication, screen sharing, recording, and integration with collaboration suites, facilitating remote education and teamwork.",
  },
  {
    id: "lms",
    icon: Globe,
    title: "Learning Management Software",
    description:
      "Learning Management Software (LMS) provides a digital environment for delivering, tracking, and managing educational courses. LMS platforms offer features like content hosting, assessments, grading, and learner progress analytics.",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Storage",
    description:
      "Cloud storage services allow users to store data securely on remote servers, accessible anytime and anywhere via the internet. They support data backup, file sharing, synchronization, and scalable capacity for individuals and organizations.",
  },
];



