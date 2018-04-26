# Running:
- npm install
- npm run build
- Open ./html/index.html in browser

# Testing:
- npm run test

# ToDo:
- ESLint
- Performance:
    - Next gen image formats (webp, jpeg2000, jpegXR)
    - Use `<picture>` polyfill (picturefill)
    - srcset to serve correctly sized images
    - IntersectionObserver / lazy load images when needed
    - Minify JS and CSS
- Compatibility (Polyfills, Babel, fallbacks for older supported browsers)
- CSS bundling (split out into smaller files)
- Framework (React)
- BEM (block element modifier)
- CSS preprocessor (SASS)
- Mobile responsive (Putting the navigation links behind a hamburger icon)
- Templating (avoid duplicationg html e.g. header)
- PostCSS / Autoprefixer to avoid adding prefixes in css files
- Russian characters aren't supported by the font. Would look into a font with full support

# First part
- Subtle movement animation to bring attention to the important sale code. Using TranslateX() would be more performant than animating margin. 
- Fading images allows for more content to be shown, and isn't too distracting for users.
- Both use CSS animations:
    - widely supported
    - more declarative/less code than JavaScript animations
    - more performant
    - graceful degradation e.g. no animation rather than a JavaScript error in older browsers

# Second part
- Dynamic translation in JavaScript (avoids requiring further network requests)
- Easy to refactor into an Ajax request or `import` if content to translate grows and the bundle size becomes too large (e.g. > 300kb)
- Can use `navigator.language` to assume a good starting language
- Would need to implement a loading state if we fetch translations
- A disadvantage would be SEO. A server side rendered html file could be an alternative.

![Skeleton](skeleton.gif)

