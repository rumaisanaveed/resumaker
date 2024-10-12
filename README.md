# 📄 ResuMaker Documentation

Welcome to the ResuMaker repository! This documentation provides an overview of the project, its features, and how to get started.

## 🚀 Introduction

ResuMaker is a user-friendly resume builder that allows users to create, view, and manage their resumes effortlessly. You can just enter the information in the forms and you'll get your resume ready within minutes.

## 🌟 Features

- **Customizable Theme:** Choose any color which best suites you. 
- **Easy to use:** Setup your account within few minutes, and you can easily create, view and delete your resumes. 
- **Real-Time Preview:** See live changes as you edit your resume for a seamless experience.

## 🔧 Tech Stack

ResuMaker is built using the following technologies:

- **Next.js**
- **React.js**
- **Tailwind CSS**
- **Clerk**
- **Firebase**

## 🛠️ Getting Started

To run ResuMaker locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rumaisanaveed/resumaker.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd resumaker
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Set up environment variables:**
   Create a `.env.local` file and add your environment variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=<your-clerk-sign-in-url>
   ```
5. **Run the development server:**
   ```bash
   npm run dev
   ```
6. **Open your browser:**  
   Navigate to `http://localhost:3000` to see ResuMaker in action!

## 🛡️ Authentication

ResuMaker uses Clerk for user authentication. To get started, sign up for a Clerk account and set up your application. Refer to the [Clerk documentation](https://clerk.dev/docs) for detailed instructions.

## 📱 Limitations

- Users currently cannot generate resumes on mobile devices.
- The editing functionality is still under development.
- Resumes are limited to one page without options for adding more sections.

## 📝 Future Enhancements

- Support for downloadable resume formats (PDF, DOCX).
- Variety of cutomizable templates. 

## 💻 Live Demo

Try out ResuMaker live at: [ResuMaker Live](https://resume-maker-kit.netlify.app/)

## 🔗 Contributing

Contributions are welcome! Feel free to submit issues or pull requests. For detailed guidelines, please refer to the `CONTRIBUTING.md` file.

## 📧 Contact

For questions or feedback, please reach out to me at [rumaisanaveed@example.com](mailto:rumaisanaveed@example.com).

