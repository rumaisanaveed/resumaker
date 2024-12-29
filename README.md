---

### 📝 **Resumaker**
A resume generator built with **Next.js** and **Tailwind CSS**, focusing on theme customization and ease of use. This project emphasizes functionality and user experience over templates by providing editable themes for professional resumes.

---

### 📦 **Technologies**
- **Next.js 13** (App directory)
- **React.js**
- **JavaScript**
- **Tailwind CSS**
- **Firebase**
- **Clerk** (for authentication)

---

### 🦄 **Features**
Here's what you can do with **Resumaker**:

- **Customizable Themes**: Personalize colors to fit your style.
- **Live Preview**: Instantly see changes in your resume as you edit.
- **User Authentication**: Secure sign-in and data management powered by Clerk.
- **Auto-Save**: Automatically save your progress to avoid losing work.
- **Responsive Design**: Optimized for all devices to deliver a seamless user experience.

---

### 👩🏽‍🍳 **The Process**
1. **Setting Up Firebase**:
   - Integrated Firebase for secure storage and retrieval of user resumes and theme configurations. Made the backend structure to ensure the process will be easier later.

2. **Home Page UI Design:**
   - I generated the UI of the home page using Relume and afterwards, I coded that UI.

3. **UI Design of the Whole App:**
   - I took the UI design from a Youtube video and developed that by watching the UI from that video. 
   
4. **Authentication with Clerk**:
   - Used Clerk to implement a seamless sign-in/sign-out flow and protected routes.

5. **Designing the Editor**:
   - Developed a user-friendly editor for theme customization, using Tailwind CSS for flexibility.

6. **Creating Private Routes**:
   - Ensured the `create-resume` page is only accessible to authenticated users by redirecting unauthenticated users to the sign-in page.

7. **Real-Time Updates**:
   - Implemented live preview functionality to reflect edits immediately on the resume layout.

8. **Saving Resume**:
   - I used html canvas and pdfjs to help the users download their created resumes.

9. **Performance Optimization:**
   - Leveraged lazy loading and dynamic imports to improve the performance of the overall app.

10. **The Deployment:**
   - First, I deployed the app on Vercel but due to some issues I deployed the app on Netlify. 

---

### 📚 **What I Learned**
- **Next.js App Router**:
  - How to manage the client and server components and routing in Next.js. 
- **React State Management**:
  - As the live preview of the resume was a bit difficult task for me, I learned complex state management using Context. 
- **Authentication Workflows**:
  - Gained hands-on experience with Clerk's SDK for secure user management.
- **Firebase Integration**:
  - As it was new for me to use firebase in a project, I learned how to configure firebase in a Next.js project and
  how to use that database to retrieve data.
- **Rendering Html Canvas:**
  - The overall preview once the user entered all the information of his resume was quite challenging for me due to
  different screen sizes (laptop, mobile etc). In the end I selected A4 sized layout to display and download the
  resume on all screens.
-  **Resume Saving:**
  - The usage of pdfjs and html canvas wasn't a good choice for me but even after searching the decent react pdf libraries
  I'd to stick with the html canvas and pdfjs for rendering and saving of resume due to the challenges each library had. 
- **Constant State Persistent:**
  - The choice between saving the data all at once vs. to save the data after each step was a difficult task for me,
  though I made the decision to save the data after each step to prevent data loss.
- **API Handling:**
  - I was familiar with API integration but I used best practices for integrating APIs so that my code doesn't break
  due to unhandled edge cases.
-- 

---

### 💭 **How can it be improved?**
- Add drag-and-drop functionality for rearranging sections.
- Add and remove sections of their choice. 
- Provide a library of sample content for quick inspiration.
- Support exporting resumes in various formats like PDF and Word.
- Add advanced text formatting options (e.g., bullet points, line spacing).
- Preview and download the resume on all screen sizes. 

---

### 🚦 **Running the Project**
To run **Resumaker** in your local environment, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd resumaker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the app.

---

### 🍿 **Video**


---
