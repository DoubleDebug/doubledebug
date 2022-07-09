import path from 'path';
import fs from 'fs/promises';

export async function fetchBlog(
  blogId: string
): Promise<{ content: string; metadata: Blog }> {
  // metadata
  const metadataFilePath = path.join(
    process.cwd(),
    `public/data/blogs/metadata.json`
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
  const metadata = JSON.parse(blog[0].toString()).blogs.find(
    (b: Blog) => b.id === blogId
  );
  const content = blog[1];
  return {
    content,
    metadata,
  };
}
