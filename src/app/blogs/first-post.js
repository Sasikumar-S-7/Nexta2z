// app/blogs/first-post.js

import Head from 'next/head';

const blogPost = {
  title: "WhatsApp Business API Use Cases Transforming Healthcare in India",
  description: "Explore how WhatsApp Business API is revolutionizing the healthcare industry in India.",
  category: "WhatsApp Service",
  date: "December 24, 2024",
  image: "/images/healthcare-whatsapp.jpg",
  content: (
    <>
      <div className="lead mb-4">
        The healthcare sector in India is witnessing a dramatic transformation through 
        the integration of WhatsApp Business API.
      </div>

      <h2>Appointment Management</h2>
      <p>
        One of the primary applications of WhatsApp Business API in healthcare is 
        streamlining appointment management. Healthcare providers can:
      </p>
      <ul>
        <li>Send automated appointment reminders</li>
        <li>Allow patients to schedule appointments through WhatsApp</li>
        <li>Enable instant rescheduling options</li>
        <li>Provide real-time updates about doctor availability</li>
      </ul>

      <h2>Patient Care Coordination</h2>
      <p>
        WhatsApp Business API enables seamless patient care coordination through 
        various features and capabilities.
      </p>
      {/* Add more content sections */}

      <h2>Conclusion</h2>
      <p>
        WhatsApp Business API is proving to be a game-changer in Indian healthcare...
      </p>
    </>
  ),
};

const BlogPage = () => {
  const { title, description, image, date } = blogPost;
  const url = `http://localhost:3000//blogs/first-post`;

  return (
    <>
      {/* SEO metadata */}
      <Head>
        {/* Meta Title */}
        <title>{`${title} | Your Company Name`}</title>

        {/* Meta Description */}
        <meta name="description" content={`${description} Learn about appointment management, patient care coordination, and more innovative healthcare solutions using WhatsApp Business API.`} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:published_time" content={date} />
        <meta property="og:author" content="Your Company Name" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Your Company Name" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@yourcompanyhandle" />

        {/* Canonical link */}
        <link rel="canonical" href={url} />

        {/* Additional metadata */}
        <meta name="keywords" content="WhatsApp Business API, Healthcare Technology, Digital Healthcare, Patient Care, Appointment Management, Healthcare Communication, India Healthcare, WhatsApp Healthcare Solutions" />
      </Head>

      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        {blogPost.content}
      </main>
    </>
  );
};

export default BlogPage;
