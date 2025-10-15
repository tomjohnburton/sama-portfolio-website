# Sama Mirshahvalad - Portfolio Website

A contemporary sculpture artist's portfolio website featuring a dark, minimalist design showcasing Sama's three-dimensional art and sculpture work.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Professional dark aesthetic with carefully chosen color palette
- **Portfolio Gallery**: Multiple sections showcasing sculpture work
- **Smooth Animations**: Subtle entrance effects and hover interactions
- **Modern Typography**: Clean, readable fonts with proper scaling
- **Image Optimization**: High-quality sculpture photography with proper loading

## Technology Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Smooth scrolling and interactive elements
- **Vercel**: Static site hosting and deployment

## Deployment

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd "sama portfolio website"
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a static site and deploy

### Option 3: Drag & Drop Deployment

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your project folder directly onto the dashboard
3. Vercel will automatically deploy your site

## Project Structure

```
sama-portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
├── public/             # Image assets
│   ├── sama_profile.jpeg
│   ├── still_standing_front.JPG
│   ├── self_sabotage_close_up.jpeg
│   ├── inner_chaos_front.JPG
│   ├── self_sabotage_angle.jpeg
│   ├── inner_chaos_angle.JPG
│   ├── self_sabotage_close_up_center.jpeg
│   ├── untitled_clay_front.JPG
│   └── vortex_front.JPG
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata
└── README.md          # This file
```

## Customization

### Colors
The website uses a comprehensive color system defined in CSS custom properties. Edit the `:root` section in `styles.css` to modify colors:

```css
:root {
  --color-background-dark: #0a0a0a;
  --color-text-light: #ffffff;
  --color-about-bg: #3a3a2a;
  --color-contact-bg: #4a2a2a;
  /* ... more colors */
}
```

### Spacing
Consistent spacing is managed through CSS variables:

```css
:root {
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 40px;
  --spacing-xl: 60px;
  --spacing-xxl: 80px;
}
```

### Images
All images are hosted via GitHub raw content links for easy updates. To change images, simply update the `src` attributes in `index.html`.

## Performance

- Optimized for Core Web Vitals
- Responsive images with proper aspect ratios
- Minimal JavaScript for fast loading
- CSS-only animations for smooth performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this template for your own portfolio projects.

## Contact

For questions about this portfolio website, contact Sama Mirshahvalad through the contact section on the website.