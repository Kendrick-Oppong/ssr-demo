# Angular SSR Presentation

## Overview

This project is a web-based presentation built with HTML, CSS, and JavaScript to demonstrate the concepts and implementation of **Server-Side Rendering (SSR)** in modern Angular applications (version 16+). The presentation covers key topics such as SSR benefits, architecture, setup, hydration, SEO optimization, and performance improvements, with a focus on Angular's modern SSR capabilities introduced in version 19+.

The presentation consists of 19 slides, designed with a clean, professional look using the Roboto, Poppins, and Fira Code fonts, and styled with a gradient theme inspired by Angular's branding. It includes code snippets, comparison tables, and feature grids to illustrate technical concepts effectively.

## Project Structure

The project includes the following files:

- **index.html**: The main HTML file containing the 19-slide presentation. Each slide includes a slide number (e.g., "1/19") and content such as text, code blocks, tables, and feature cards.
- **styles.css**: The CSS file defining the presentation's styling, including slide layouts, typography, code block formatting, and navigation buttons.
- **script.js**: The JavaScript file handling slide navigation and updating the slide counter (displaying "X/19" in the top-right corner).

### Slide Content

The presentation covers the following topics in this order:

1. **Title Slide**: Introduction to Angular SSR and its focus on performance and SEO.
2. **Agenda**: Overview of the topics covered.
3. **What is SSR?**: Definition and workflow of Server-Side Rendering.
4. **Why use SSR in Angular?**: Benefits and considerations, including Core Web Vitals and SEO.
5. **Rendering Modes**: Comparison of CSR, SSR, and SSG (Static Site Generation).
6. **SSR vs CSR: File Comparison**: Detailed comparison of file structures in CSR and SSR applications.
7. **Hybrid Rendering (v19+)**: Overview of route-level rendering control in Angular v19+.
8. **Angular SSR Overview**: Architecture and core components of Angular SSR.
9. **Step-by-Step Setup**: Instructions for setting up SSR in new and existing Angular projects.
10. **Full-Application Hydration**: Explanation of full hydration and its benefits.
11. **Incremental Hydration (v19+)**: Details on granular hydration control.
12. **Event Replay**: How user interactions are captured and replayed during hydration.
13. **Static Site Generation (SSG)**: Build-time prerendering for static content.
14. **HTTP Transfer State & Caching**: Avoiding duplicate network requests in SSR.
15. **Server Route Configuration**: Advanced server-side routing features.
16. **Handling Browser-Specific Code**: Techniques for safe API usage in SSR.
17. **SEO Optimization**: Strategies for meta tags and search engine performance.
18. **Performance Benefits**: Impact on Core Web Vitals (LCP, FID, CLS, TTI).
19. **Common Pitfalls & Debugging**: Common issues and debugging tools for SSR.

## Setup Instructions

To run the presentation locally, follow these steps:

1. **Clone or Download the Project**:
   - Clone the repository or download the project files (`index.html`, `styles.css`, `script.js`).

2. **Serve the Presentation**:
   - Option 1: Open `index.html` directly in a web browser (e.g., Chrome, Firefox) by double-clicking the file or dragging it into the browser.
   - Option 2: Use a local development server for a better experience:
     ```bash
     npx http-server