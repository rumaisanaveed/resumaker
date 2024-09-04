import { IoIosColorPalette } from "react-icons/io";
import { BiSolidCustomize } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";

export const GuideSteps = [
  {
    id: 1,
    title: "Choose from beautiful themes",
    description: "Select a theme that suits your style and profession",
    callToActionText: "Get Started",
    icon: <IoIosColorPalette />,
  },
  {
    id: 2,
    title: "Customize Your Resume with Ease",
    description:
      "Personalize your resume by adding your own information and sections.",
    callToActionText: "Try Now",
    icon: <BiSolidCustomize />,
  },
  {
    id: 3,
    title: "Preview And Download Your Resume",
    description: "Save your polished resume and get ready to impress.",
    callToActionText: "Start Creating",
    icon: <FaCloudDownloadAlt />,
  },
];

export const AccordionItems = [
  {
    key: "1",
    label: "How does ResuMaker work?",
    children: (
      <p>
        ResuMaker simplifies the resume creation process by offering a
        user-friendly interface where you can select a template, fill in your
        details, and customize the design. Once you’ve entered your information,
        you can preview your resume in real-time. When you’re satisfied with the
        result, you can download it in various formats or share it directly from
        the app.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I edit my resume after creating it?",
    children: (
      <p>
        Yes, you can easily edit your resume at any time. Simply log in to your
        ResuMaker account, access your saved resumes, and make any necessary
        changes. You can update your details, change the design, or adjust the
        layout as needed.
      </p>
    ),
  },
  {
    key: "3",
    label: " Is my resume data saved securely?",
    children: (
      <p>
        Yes, ResuMaker takes data security seriously. Your resume data is stored
        securely on our servers with encryption and access controls in place to
        protect your information. You can access and manage your resumes from
        your account, and you have full control over who can view or download
        your resumes.
      </p>
    ),
  },
  {
    key: "4",
    label: "What types of themes does ResuMaker offer?",
    children: (
      <p>
        ResuMaker offers a diverse range of professionally designed themes to
        suit different industries and styles. Whether you’re looking for a
        classic, modern, or creative design, you’ll find themes that can be
        customized to match your personal brand and career goals.
      </p>
    ),
  },
];
