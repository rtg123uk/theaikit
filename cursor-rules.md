# AISolopreneur Development Rules

## Code Organization
- All components go in `/components`
- All pages go in `/app`
- All utilities go in `/lib`
- All content goes in `/content`
- All assets go in `/public`

## Naming Conventions
- Components: PascalCase (e.g., `HeroSection.tsx`)
- Files: kebab-case (e.g., `about-page.tsx`)
- Functions: camelCase (e.g., `getMarkdownContent`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_WIDTH`)

## Component Structure
1. Imports
2. Types/Interfaces
3. Component Definition
4. Exports

## Styling Guidelines
- Use Tailwind CSS for all styling
- Follow mobile-first approach
- Use semantic HTML elements
- Maintain consistent spacing using Tailwind's spacing scale
- Use the provided color palette in `tailwind.config.js`

## SEO Best Practices
- Use semantic HTML5 elements
- Include proper meta tags
- Use descriptive alt text for images
- Implement proper heading hierarchy
- Include structured data where appropriate

## Performance Guidelines
- Optimize images using Next.js Image component
- Implement proper loading states
- Use dynamic imports for heavy components
- Minimize client-side JavaScript
- Implement proper caching strategies

## Accessibility
- Maintain proper color contrast
- Use ARIA labels where necessary
- Ensure keyboard navigation works
- Include proper focus states
- Test with screen readers

## Git Workflow
- Create feature branches for new features
- Write descriptive commit messages
- Keep commits atomic and focused
- Review code before merging
- Maintain clean git history

## Testing
- Test all components
- Ensure responsive design works
- Verify accessibility
- Check performance metrics
- Test across browsers

## Documentation
- Document complex logic
- Include JSDoc comments for functions
- Keep README up to date
- Document API endpoints
- Include setup instructions 