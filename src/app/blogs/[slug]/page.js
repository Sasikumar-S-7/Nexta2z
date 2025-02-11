// src/app/blogs/[slug]/page.js

export async function generateStaticParams() {
  // This should return an array of all possible slug values
  const posts = [
    { slug: 'first-post' },
    { slug: 'second-post' },
    { slug: 'third-post' }
  ];
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fixed page component
export default async function BlogPost({ params: pageParams }) {
  // Await the params before destructuring
  const params = await Promise.resolve(pageParams);
  const { slug } = params;

  try {
    // Import the corresponding blog post file
    const post = await import(`../${slug}.js`);

    return (
      <div>
        {post.default ? <post.default /> : <p>Post not found</p>}
      </div>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    return <p>Error loading post</p>;
  }
}