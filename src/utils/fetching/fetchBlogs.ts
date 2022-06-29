import path from 'path';
import fs from 'fs/promises';

export async function fetchBlogMetadata(blogIds: string[]): Promise<Blog[]> {
  const blogTasks = [];
  for (let i = 0; i < blogIds.length; i++) {
    const filePath = path.join(
      process.cwd(),
      `public/data/blogs/${blogIds[i]}/metadata.json`
    );
    blogTasks.push(fs.readFile(filePath));
  }

  const blogsRaw = await Promise.all(blogTasks);
  return blogsRaw.map((b) => JSON.parse(b.toString()));
}

export async function fetchBlog(
  blogId: string
): Promise<{ content: string; metadata: Blog }> {
  // metadata
  const metadataFilePath = path.join(
    process.cwd(),
    `public/data/blogs/${blogId}/metadata.json`
  );
  const metadataTask = fs.readFile(metadataFilePath);

  // content
  const contentFilePath = path.join(
    process.cwd(),
    `public/data/blogs/${blogId}/content.md`
  );
  const contentTask = fs.readFile(contentFilePath, 'utf8');

  // fetch
  const blog = await Promise.all([metadataTask, contentTask]);

  // prepare data
  const metadata = JSON.parse(blog[0].toString());
  const content = blog[1];
  return {
    content,
    metadata,
  };
}
