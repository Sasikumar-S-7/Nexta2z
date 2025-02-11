// app/blogs/page.js
'use client';

import Link from 'next/link';
import { useState } from 'react';

const blogData = [
  {
    "id": 1,
    "title": "Streamlined Bulk Voice Calling System",
    "description": "The Streamlined Bulk Voice Calling System is designed to help businesses reach a large audience with ease and efficiency. This system allows companies to send personalized voice messages to thousands of customers in just a few clicks, enhancing customer engagement and improving communication strategies.",
    "category": "Voice Call",
    "date": "December 12, 2024",
    "link" : "first-post"
  },
  {
    "id": 8,
    "title": "How WhatsApp Chatbots Can Revolutionize Customer Support for Indian SMEs",
    "description": "Learn how WhatsApp chatbots can transform customer support for Indian SMEs with instant responses, 24/7 availability, multilingual support, and cost-effective solutions.",
    "category": "WhatsApp Service",
    "date": "December 13, 2024",
    "link":"second-post"
  },
  {
    "id": 2,
    "title": "What is WhatsApp Business API? A Complete Guide for Indian Businesses ",
    "description": "Learn about WhatsApp Business API and how it empowers Indian businesses to streamline communication, boost sales, and enhance customer support.",
    "category": "WhatsApp Service",
    "date": "December 14, 2024",
    "link" : "third-post"
  },
  {
    "id": 3,
    "title": "How to Use WhatsApp Business API to Automate Customer Communication  ",
    "description": "Discover how to automate customer communication with WhatsApp Business API. Learn key features, benefits, and steps to streamline interactions and boost efficiency.",
    "category": "WhatsApp Service",
    "date": "December 15, 2024",
    "link" : "how-to-use-whatsApp-business-aPI-to-automate-customer-communication"
  },{
    "id": 4,
    "title": "WhatsApp Business API Pricing in India: Everything You Need to Know  ",
    "description": "Discover everything about WhatsApp Business API pricing in India. Learn about session and template messaging costs, BSP fees, and tips to optimize your communication expenses",
    "category": "WhatsApp Service",
    "date": "December 16, 2024",
    "link" : "whatsApp-business-aPI-pricing-in-india-everything-you-need-to-know "
  },
  {
    "id": 5,
    "title": "Top 10 Benefits of WhatsApp Chatbots for Small Businesses in Bangalore  ",
    "description": "Discover how WhatsApp chatbots can transform small businesses in Bangalore with 24/7 customer support, cost-effective automation, personalized interactions, and more. ",
    "category": "WhatsApp Service",
    "date": "December 17, 2024",
    "link" : "top-10-benefits-of-whatsApp-chatbots-for-small-businesses-in-bangalore "
  },
  {
    "id": 6,
    "title": "Step-by-Step Guide to Integrating WhatsApp Business API with Your CRM  ",
    "description": "Learn how to integrate WhatsApp Business API with your CRM. Follow this step-by-step guide to streamline communication, automate workflows, and boost customer engagement. ",
    "category": "WhatsApp Service",
    "date": "December 18, 2024",
    "link" : "step-by-step-guide-to-integrating-whatsApp-business-aPI-with-your-cRM "
  },
  {
    
    "id": 7,
    "title": "WhatsApp Business API vs. Free WhatsApp Business App: Which One Is Right for You?   ",
    "description": "Discover the key differences between WhatsApp Business API and the free WhatsApp Business App to determine which solution best fits your business needs and growth plans.  ",
    "category": "WhatsApp Service",
    "date": "December 19, 2024",
    "link" : "whatsApp-business-aPI-vs-free-whatsApp-business-app-which-one-is-right-for-you "
  },
  
  {
    "id": 9,
    "title": "10 Game-Changing Marketing Strategies with WhatsApp Business API",
    "description": "Discover 10 effective marketing strategies using WhatsApp Business API. Learn how to boost sales, engage customers, and streamline communication effortlessly. ",
    "category": "WhatsApp Service",
    "date": "December 20, 2024",
    "link":"10-game-changing-marketing-strategies-with-whatsApp-business-aPI"
  },
  {
    "id": 10,
    "title": "How Bangalore's Small Businesses are Unlocking Growth with WhatsApp Business API",
    "description": "Discover how small businesses in Bangalore are using WhatsApp Business API to streamline communication, build stronger customer relationships, and drive growth." ,
    "category": "WhatsApp Service",
    "date": "December 21, 2024",
    "link":"how-bangalore's-small-businesses-are-unlocking-growth-with-whatsApp-business-aPI"
  },
  {
    "id": 11,
    "title":"WhatsApp Business API Integration Essential tools and platforms for small business growth ",
    "description": "Discover the top tools and platforms for integrating WhatsApp Business API. Learn how to streamline communication, enhance customer engagement, and grow your business effortlessly.",
    "category": "WhatsApp Service",
    "date": "December 22, 2024",
    "link":"whatsApp-business-aPI-integration-essential-tools-and-platforms-for-small-business-growth"
  },
  

{
  "id": 12,
  "title": "Why WhatsApp Business API is Revolutionizing E-commerce in India",
  "description": "Discover why WhatsApp Business API is shaping the future of e-commerce in India. Learn how this tool enhances customer engagement, streamlines operations, and drives growth." ,
  "category": "WhatsApp Service",
  "date": "December 23, 2024",
  "link":"why-whatsApp-business-aPI-is-revolutionizing-e-commerce-in-india"
},
{
  "id": 13,
  "title": "WhatsApp Business API Use Cases Transforming Healthcare in India ",
  "description": "Explore how WhatsApp Business API is revolutionizing the healthcare industry in India. Learn about its use cases in patient care, appointment management, and beyond." ,
  "category": "WhatsApp Service",
  "date": "December 24, 2024",
  "link":"whatsApp-business-aPI-use-cases-transforming-healthcare-in-india"
}
];

export default function BlogsPage() {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'WhatsApp Service', 'Bulk SMS Service', 'OTP Service', 'Voice Call'];
  
  const filteredBlogs = activeCategory === 'All' 
    ? blogData 
    : blogData.filter(blog => blog.category === activeCategory);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="container py-5">
      {/* Page Title */}
      <h1 className="text-center mb-5 fw-bold">Our Blog</h1>

      {/* Category Filters */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
            className={`btn ${
              activeCategory === category
                ? 'btn-primary'
                : 'btn-outline-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {paginatedBlogs.map((blog) => (
          <div key={blog.id} className="col">
            <Link 
              href={`/blogs/${blog.link}`}
              className="text-decoration-none"
            >
              <div className="card h-100 shadow-sm hover-shadow">
                <img
                  src="/api/placeholder/400/300"
                  className="card-img-top"
                  alt={blog.title}
                  style={{
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div className="card-body">
                  <div className="mb-3">
                    <span className="badge bg-primary me-2">
                      {blog.category}
                    </span>
                    <small className="text-muted">
                      {blog.date}
                    </small>
                  </div>
                  <h5 className="card-title text-dark">
                    {blog.title}
                  </h5>
                  <p className="card-text text-secondary">
                    {blog.description.length > 150
                      ? `${blog.description.substring(0, 150)}...`
                      : blog.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-5">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          
          {[...Array(totalPages)].map((_, index) => (
            <li 
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}