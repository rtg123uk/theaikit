# AISolopreneur Website

A modern, high-converting landing page for the AISolopreneur mastermind program, built with Next.js 14, shadcn/ui, and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 🎨 shadcn/ui for premium component design
- 🌟 Tailwind CSS for styling
- 📱 Fully responsive design
- 🔍 SEO optimized with metadata
- 🎯 High-converting landing page design
- 🏗️ Component-based architecture

## Placeholders

This project uses placeholder images that should be replaced before deployment:

- `/public/mockup-video.jpg` - Hero video thumbnail
- `/public/logo-*.png` - Brand logos
- `/public/avatar*.png` - User avatars
- `/public/mockup-chart.png` - Stats chart

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aisolopreneur.git
cd aisolopreneur
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Content

1. Replace the placeholder images in `/public/` directory
2. Update the content in the component files:
   - `HeroSection.tsx`
   - `SocialProofBar.tsx`
   - `StatsSection.tsx`
   - `HowItWorksSection.tsx`
   - `ProgramDetailsSection.tsx`
   - `TestimonialsSection.tsx`
   - `FAQSection.tsx`
   - `FinalCTASection.tsx`

## Project Structure

```
aisolopreneur/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── program/           # Program page
│   ├── testimonials/      # Testimonials page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Layout.tsx        # Main layout component
│   ├── HeroSection.tsx   # Hero section component
│   └── ...               # Other components
├── content/              # Markdown content
│   ├── program.md       # Program details
│   └── testimonials.md  # Testimonials
├── lib/                  # Utility functions
│   └── md.ts            # Markdown processing
├── public/              # Static assets
│   ├── images/         # Image assets
│   └── favicon.ico     # Favicon
└── styles/             # Global styles
    └── globals.css     # Global CSS
```

## Development Guidelines

Please refer to [cursor-rules.md](cursor-rules.md) for detailed development guidelines, including:

- Code organization
- Naming conventions
- Component structure
- Styling guidelines
- SEO best practices
- Performance guidelines
- Accessibility standards

## Deployment

The site can be deployed to Vercel with zero configuration:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 