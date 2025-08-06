import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getMarkdownContent(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html as any)
    .process(content)
  
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data
  }
}

export function getAllMarkdownFiles() {
  const fileNames = fs.readdirSync(contentDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
} 