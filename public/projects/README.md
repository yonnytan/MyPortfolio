# Project Images Directory

This directory contains images and GIFs for your portfolio projects. Each subdirectory is organized by project type.

## Directory Structure

```
projects/
├── mobile-apps/     # Mobile application screenshots and GIFs
├── websites/        # Website screenshots
└── web-apps/       # Web application screenshots and GIFs
```

## Image Requirements

- **Recommended Size**: 750x400 pixels
- **Format**: PNG or GIF
- **File Naming**: Use descriptive names (e.g., `project-name-preview.png`)

### Mobile Apps

Place mobile app screenshots and GIFs in the `mobile-apps/` directory.
Example: `mobile-apps/fitness-app-demo.gif`

### Websites

Place website screenshots in the `websites/` directory.
Example: `websites/portfolio-site.png`

### Web Apps

Place web application screenshots and GIFs in the `web-apps/` directory.
Example: `web-apps/task-manager-demo.gif`

## Usage in Code

When adding images to your portfolio, update the Image component in `src/app/page.tsx`:

```tsx
<Image
  src="/projects/mobile-apps/your-image.png"
  alt="Project preview"
  fill
  className="object-cover"
/>
```
