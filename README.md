# Revitae

A modern, responsive wellness website for **Revitae**, designed with a premium, clean, and feminine visual experience.

The website is implemented from the provided Figma designs with a strong focus on responsive layouts, smooth interactions, product presentation, and polished UI details.

## Live Demo

**Live Website:**
https://beingayandey.github.io/revitae/

## Overview

Revitae is a responsive product and wellness website featuring:

* Product showcase
* Product image gallery
* Subscription options
* Customer reviews
* Product comparison
* FAQ accordion
* Brand story sections
* Promotional sections
* Newsletter subscription
* Responsive navigation
* Responsive footer
* Mobile and desktop optimized layouts

The implementation closely follows the provided Figma design and adapts the layout across desktop, laptop, tablet, and mobile screen sizes.

## Features

* Fully responsive design
* Mobile portrait support
* Mobile landscape support
* Tablet responsive layouts
* Laptop and desktop layouts
* Responsive header/navigation
* Mobile navigation menu
* Product image gallery
* Thumbnail gallery
* Swiper.js sliders
* Continuous autoplay sliders
* Infinite looping sliders
* Responsive active-slide scaling
* Customer review sliders
* Opposite-direction review sliders
* Custom FAQ accordion
* Single-open accordion behavior
* Custom subscription dropdown
* Product comparison section
* Click-to-copy functionality
* Newsletter subscription UI
* Responsive footer
* SEO metadata
* Open Graph metadata
* Twitter/X metadata
* Custom favicon
* W3C HTML validation considerations

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Swiper.js
* CSS Custom Properties
* Responsive CSS
* SVG
* Web Images
* GitHub Pages

## Design

The website is based on the provided **Figma design**.

Figma is treated as the source of truth for:

* Typography
* Colors
* Spacing
* Component dimensions
* Layout
* Image positioning
* Buttons
* Cards
* Accordions
* Sliders
* Responsive behavior

The implementation uses custom CSS instead of Bootstrap.

## Responsive Design

The website has been designed to work across:

* Large desktop
* Desktop
* Laptop
* Tablet
* Mobile landscape
* Mobile portrait

Special attention has been given to the transition between mobile, tablet, and desktop layouts.

The project uses a combination of `rem` and `px`.

The root font size uses:

```css
html {
  font-size: 62.5%;
}
```

Larger layout measurements generally use `rem`, while smaller UI measurements such as `12px` and `14px` may use `px` when required for visual accuracy.

Responsive layouts are implemented using custom CSS media queries.

## Sliders

Swiper.js is used for multiple slider sections throughout the website.

Slider functionality includes:

* Infinite loop
* Autoplay
* Continuous movement
* Responsive slide sizing
* Mobile active-slide scaling
* Thumbnail galleries
* Main image and thumbnail synchronization
* Navigation arrows
* Responsive spacing
* Opposite-direction review sliders

Each slider is initialized independently to prevent conflicts between different sections.

## Product Gallery

The product section includes a responsive image gallery with:

* Main product image
* Thumbnail images
* Previous/next navigation
* Loop functionality
* Responsive thumbnail layout
* Mobile optimization

The main image and thumbnail slider remain synchronized.

## FAQ Accordion

The FAQ section uses a custom JavaScript accordion.

Features:

* Custom open/close functionality
* Only one item open at a time
* Opening another item automatically closes the previous item
* Smooth transitions
* Active/inactive states
* Responsive accordion layout

The accordion does not depend on the native `<details>` element.

## Customer Reviews

The website contains responsive customer review cards and sliders.

Review functionality includes:

* Continuous autoplay
* Infinite looping
* Responsive card sizing
* Mobile active-slide scaling
* Opposite-direction sliders
* Responsive spacing
* Review card styling

## Product Subscription

The product purchase area includes custom subscription options.

Features include:

* Subscribe & Save
* One Time Purchase
* Custom dropdown
* Savings information
* Product benefits
* Responsive pricing layout

The dropdown uses custom styling instead of relying on browser-default select styling.

## Mobile Navigation

The website includes a custom responsive mobile navigation.

The mobile menu is optimized for:

* Mobile portrait
* Mobile landscape
* Tablet layouts

It includes:

* Hamburger menu
* Navigation links
* Responsive menu panel
* Mobile-friendly spacing
* Responsive typography

## SEO

The website includes standard SEO metadata such as:

* Page title
* Meta description
* Keywords
* Author
* Robots directives
* Googlebot directives
* Canonical URL
* Favicon
* Apple touch icon
* Theme color
* Open Graph metadata
* Twitter/X Card metadata

These tags help provide appropriate information to search engines and social media platforms.

## Project Structure

The project follows a standard static website structure similar to:

```text
revitae/
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── fonts/
│
├── index.html
├── README.md
└── .gitignore
```

The exact structure may vary depending on the current implementation.

## Important Assets

The project contains several design-specific assets, including:

```text
why-sec-bg.png
reclaim-bg.png
```

along with:

* Product images
* Banner images
* Review images
* Icons
* Decorative assets
* Background images
* Logos

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd revitae
```

If the project uses npm dependencies:

```bash
npm install
```

## Running Locally

For a static HTML implementation, the project can be opened using a local development server.

For example, using VS Code Live Server:

```text
Open index.html → Run with Live Server
```

If an npm development script exists:

```bash
npm run dev
```

or:

```bash
npm start
```

Use the command defined in the project's `package.json`.

## Deployment

The project is deployed using **GitHub Pages**.

### Live Deployment

```text
https://beingayandey.github.io/revitae/
```

The website is served from the GitHub repository through GitHub Pages.

## GitHub Pages

The project can be deployed through:

```text
GitHub Repository
        ↓
GitHub Pages
        ↓
https://beingayandey.github.io/revitae/
```

When deploying changes, make sure the correct GitHub Pages branch/folder is configured.

## Browser Support

The website is designed for modern browsers including:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari
* Chrome for Android
* Mobile Safari

## Accessibility

The project follows standard accessibility practices where applicable.

This includes:

* Semantic HTML
* Accessible navigation
* Descriptive image `alt` attributes
* Proper button elements
* Accessible form controls
* Appropriate ARIA attributes
* Keyboard-friendly interactions

## Code Quality

The project follows these principles:

* Reusable CSS classes
* CSS custom properties
* Responsive media queries
* Scoped component styles
* Reusable JavaScript functionality
* Semantic HTML
* Minimal duplication
* No Bootstrap dependency

## Development Guidelines

When modifying the project:

1. Use the Figma design as the visual reference.
2. Preserve the existing desktop design.
3. Check mobile portrait separately.
4. Check mobile landscape separately.
5. Check tablet layouts.
6. Check laptop layouts.
7. Check desktop layouts.
8. Verify every Swiper after JavaScript changes.
9. Verify accordion functionality.
10. Check for horizontal overflow.
11. Check typography and spacing.
12. Validate HTML using the W3C validator.

## Git & GitHub

Do not commit sensitive information.

Recommended `.gitignore` entries:

```gitignore
node_modules/
.env
.env.local
.DS_Store
dist/
build/
.vscode/
.idea/
```

Never commit:

* API keys
* Passwords
* Authentication tokens
* Private environment variables
* Secret credentials

## License

This project is proprietary and intended for authorized use only.

All designs, branding, images, content, and other project assets belong to their respective owners unless otherwise specified.

## Live Preview

Visit the deployed website:

**https://beingayandey.github.io/revitae/**
