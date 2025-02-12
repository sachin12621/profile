import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  BookOpen,
  Briefcase,
  Code,
  User,
  Send,
  ExternalLink
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('php');

  const projects = {
    php: [
      {
        name: "Shareio",
        description: "Shareio — Empower Digital Asset | Digital Asset Secure, Share and Sell by Shareio",
        image: "https://i.ibb.co/ch2m88PD/Shareio-Empower-Digital-Asset-Digital-Asset-Secure-Share-and-Sell-by-Shareio-02-12-2025-02-03-PM.jpg",
        link: "https://shareio.com/"
      }
    ],
    codeigniter: [
      {
        name: "Ethicalhire",
        description: "Job Portal",
        image: "https://i.ibb.co/G42twPzq/Home-02-12-2025-03-08-PM.jpg",
        link: "https://ethicalhire.com.au/"
      },
      {
        name: "Providers Pro",
        description: "Customer relationship management system (CRM)",
        image: "https://i.ibb.co/3yYVpHKp/Login-02-12-2025-03-10-PM.jpg",
        link: "#"
      }
    ],
    laravel: [
      {
        name: "Registerybook",
        description: "Customer relationship management system (CRM)",
        image: "https://i.ibb.co/gMDcQ0gQ/Login-expense-tool-02-12-2025-03-28-PM.jpg",
        link: "https://www.registerybook.com/"
      }
    ],
    wordpress: [
      {
        name: "Lux",
        description: "E-commerce",
        image: "https://i.ibb.co/m5mR80cf/Lux-diteur-maison-d-dition-ind-pendante-publication-d-ouvrages-caract-re-critique-en-sciences-humain.jpg",
        link: "https://luxediteur.com/"
      },
      {
        name: "Comfort Insurance",
        description: "Insurance Agency",
        image: "https://i.ibb.co/8DYSs9W2/Campervan-Motorhome-Insurance-Specialists-Comfort-Insurance-02-12-2025-03-17-PM.jpg",
        link: "https://www.comfort-insurance.co.uk/"
      },
      {
        name: "Sparknfly",
        description: "E-commerce",
        image: "https://i.ibb.co/k6XCPQPJ/Spark-NFly-Just-Spark-It-02-12-2025-03-18-PM.jpg",
        link: "https://www.sparknfly.ca/"
      },
      {
        name: "Digitalindia",
        description: "Goverment informative site",
        image: "https://i.ibb.co/kVqxqcv8/Digital-India-gov-in-Digital-India-Meit-Y-Government-of-India-02-12-2025-03-21-PM.jpg",
        link: "https://www.digitalindia.gov.in/"
      },
      {
        name: "Chaaipani",
        description: "Blogging site",
        image: "https://i.ibb.co/d4RyD642/Chaaipani-Making-Stories-Matter-02-12-2025-03-21-PM.jpg",
        link: "https://chaaipani.com/"
      }
    ],
    magento: [
      {
        name: "Ostomysale",
        description: "Magento 2 e-commerce store",
        image: "https://i.ibb.co/k6VmL1yC/Home-page-02-12-2025-03-23-PM.jpg",
        link: "https://ostomysale.ca/"
      },
      {
        name: "Starkmans",
        description: "Magento 2 e-commerce store",
        image: "https://i.ibb.co/mV8NS5VF/Starkmans-Health-Care-Depot-02-12-2025-03-24-PM.jpg",
        link: "https://starkmans.com/"
      }
    ],
    react: [
      {
        name: "Shareio",
        description: "Marketplace",
        image: "https://i.ibb.co/PvC9cjC8/Shareio-Marketplace-02-12-2025-03-25-PM.jpg",
        link: "https://shareio.com/market/"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="https://i.ibb.co/kZMVShg/DALL-E-2025-02-12-15-44-00-A-modern-professional-logo-for-Sachin-Makwana-The-design-should-be-sleek.webp"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl font-bold mb-4">Sachin Makwana</h1>
            <p className="text-xl mb-6">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/sachin12621" className="hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sachin-makwana-548b5626a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-6">
            <User className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Passionate software engineer with 2+ years of experience in building scalable web applications.
            Focused on creating elegant solutions to complex problems while maintaining code quality and performance.
          </p>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['PHP', 'Codeigniter', 'Laravel', 'React', 'TypeScript', 'Node.js', 'Wordpress', 'Magento', 'Shopify', 'MySQL', 'MongoDB'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-gray-600 mb-2">Webile Technologies • Aug, 2022 - Present</p>
              <p className="text-gray-600">Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript, React, and Core PHP. Worked with REST APIs to retrieve and display data from databases.</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Diploma in Computer Engineering</h3>
            <p className="text-gray-600 mb-2">GTU • 2018 - 2021</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-2">
            <h3 className="text-xl font-semibold mb-2">Bachelor in Engineering (ICT)</h3>
            <p className="text-gray-600 mb-2">PDEU • 2021 - 2024</p>
          </div>
        </section>

        {/* Projects Section */}
        <div className="mb-8">
            <div className="overflow-x-auto -mx-4 px-4 pb-2">
              <div className="flex space-x-1 border-b border-gray-200 min-w-max">
                {Object.keys(projects).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects[activeTab].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Contact Section */}
        {/* <section className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Mail className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold">Contact Me</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2024 Sachin Makwana. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:smakwana1261@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918780227531" className="hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;