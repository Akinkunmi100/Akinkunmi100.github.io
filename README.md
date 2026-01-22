# Portfolio Website

A world-class portfolio website for showcasing expertise in Research, Data Analysis, and AI/ML Engineering.

## 🚀 Live Demo

Deploy to GitHub Pages: `https://yourusername.github.io`

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── css/
│   └── styles.css      # Custom styles
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── images/         # Profile & project images
│   │   └── projects/   # Project screenshots
│   └── icons/          # Technology icons
└── README.md           # This file
```

## ✨ Features

- **6 Complete Sections**: Hero, About (tabbed), Services, Projects, Expertise, Contact
- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Dark Theme**: Professional dark aesthetic with blue accents
- **Interactive Elements**:
  - Tabbed About section (About, Experience, Education, Skills)
  - Filterable project gallery
  - Animated statistics counters
  - Skill progress bars
  - Smooth scroll navigation
- **Performance Optimized**: Tailwind CSS via CDN, minimal dependencies
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🛠️ Technologies Used

- HTML5 (semantic)
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- AOS (Animate On Scroll)

## 📦 Quick Start

1. Clone/download this repository
2. Open `index.html` in your browser
3. Customize content (see below)

## 🎨 Customization

### Personal Information
Edit `index.html` and update:
- Name and title in the hero section
- Bio in the About tab
- Experience and Education timelines
- Skills and percentages
- Contact information and social links

### Profile Image
Replace the placeholder in the hero and about sections:
```html
<img src="assets/images/profile.jpg" alt="Your Name" class="...">
```

### Projects
Update the project cards in the Projects section:
- Change category (`data-category="ai"`)
- Update title, description, and links
- Add project images to `assets/images/projects/`

### Colors
Modify the Tailwind config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',    // Change primary color
                secondary: '#8b5cf6',  // Change secondary color
            }
        }
    }
}
```

### Contact Form
For a working contact form, integrate with:
- [EmailJS](https://www.emailjs.com/) (recommended)
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## 🌐 GitHub Pages Deployment

### Option 1: User/Organization Site

1. Create repository named `yourusername.github.io`
2. Push all files to the `main` branch
3. Your site will be live at `https://yourusername.github.io`

### Option 2: Project Site

1. Create any repository name
2. Push files to `main` branch
3. Go to Settings → Pages
4. Set Source to `main` branch and `/` (root)
5. Site will be at `https://yourusername.github.io/repo-name`

### Custom Domain (Optional)

1. Create a `CNAME` file with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   ```
   A Records → GitHub IPs:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   
   CNAME → www → yourusername.github.io
   ```

3. Enable HTTPS in repository Settings → Pages

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format, compress with TinyPNG
2. **Lazy Load**: Images below fold have `loading="lazy"`
3. **Minify**: For production, minify CSS/JS files

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

## 🤝 Support

For questions or customization help, open an issue or contact via the website.




# 🚀 Professional Portfolio Website

> World-class portfolio website for Akinkunmi Akinlabi Taofeek - Researcher, Data Analyst & AI Engineer

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://Akinkunmi100.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📸 Preview

A modern, responsive portfolio website showcasing expertise in Research, Data Analysis, and AI/ML Engineering with smooth animations and elegant design.

## ✨ Features

### Design & UX
- ✅ **Modern Dark Theme** with lime green (#c1ff00) accents
- ✅ **Alaia-Style Smooth Animations** - elegant scroll-triggered effects
- ✅ **Codespot Floating Shapes** - 5 dynamic background shapes
- ✅ **Beverr-Style Contact Section** - minimalist, clean design
- ✅ **Responsive Design** - perfect on mobile, tablet, desktop
- ✅ **Accessibility Compliant** - WCAG 2.1 AA standards

### Typography
- 🎨 **Playfair Display** (Serif) - for name and headings
- 🎨 **Inter** (Sans-serif) - for body text
- 🎨 Elegant typewriter effect for hero name

### Sections (8 Total)
1. **Home** - Hero with typewriter effect, profile image, CTAs
2. **About** - Tabbed interface (About | Experience | Education)
3. **Services** - 3 numbered service cards (Research | Data | AI)
4. **Skills** - Standalone section with:
   - Donut charts for software proficiency
   - Progress bars for analytical skills
   - Technology logos with hover effects
5. **Projects** - Filterable gallery (All | Research | Data | AI)
6. **Expertise** - Certifications and awards
7. **Contact** - Working form with EmailJS integration
8. **Footer** - Links and copyright

### Technical Features
- ⚡ **Performance Optimized** - Lighthouse score 90+
- 🔍 **SEO Ready** - Complete meta tags, structured data
- 📱 **Mobile First** - Responsive on all devices
- ♿ **Accessible** - Screen reader friendly, keyboard navigation
- 🎯 **Analytics Ready** - Google Analytics 4 integration
- 📧 **Working Contact Form** - EmailJS integration

## 🛠️ Technologies Used

### Core
- HTML5 (Semantic markup)
- Tailwind CSS v3.x (Utility-first CSS)
- Vanilla JavaScript (ES6+)

### Libraries & Tools
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
- [EmailJS](https://www.emailjs.com/) - Contact form handling
- [Font Awesome 6](https://fontawesome.com/) - Icons
- [Devicon](https://devicon.dev/) - Technology logos
- [Google Fonts](https://fonts.google.com/) - Playfair Display & Inter

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Custom CSS with animations
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   ├── images/
│   │   ├── profile.jpg     # Profile photo
│   │   └── projects/       # Project screenshots
│   └── icons/              # Custom icons (if any)
├── favicon-16x16.png       # Favicon 16x16
├── favicon-32x32.png       # Favicon 32x32
├── apple-touch-icon.png    # Apple touch icon
├── README.md               # This file
└── CNAME                   # Custom domain (optional)
```

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/Akinkunmi100/Akinkunmi100.github.io.git
cd Akinkunmi100.github.io
```

### 2. Add Your Content

#### Profile Image
- Replace `assets/images/profile.jpg` with your photo
- Recommended size: 400x400px (square)
- Format: JPG or PNG

#### Update Personal Information
Edit `index.html`:
- Name (line ~150, ~200)
- Bio (line ~550-560)
- Experience timeline (line ~600-650)
- Education (line ~680-720)
- Projects (line ~1100-1400)
- Contact info (line ~1600-1650)
- Social links (throughout)

#### Customize Colors (Optional)
In `index.html` (line ~30-40):
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#c1ff00',    // Change this
                secondary: '#a8e000',  // And this
            }
        }
    }
}
```

### 3. Set Up EmailJS (Contact Form)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials:
   - Public Key
   - Service ID
   - Template ID

5. Update `index.html` (line ~50):
```html
<script>
  (function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Add your key here
  })();
</script>
```

6. Update `js/main.js` (line ~290):
```javascript
await emailjs.sendForm(
    'YOUR_SERVICE_ID',   // Add your service ID
    'YOUR_TEMPLATE_ID',  // Add your template ID
    contactForm
);
```

### 4. Generate Favicons

Use [Favicon.io](https://favicon.io/):
1. Upload your logo or use text
2. Download the package
3. Replace favicon files in root directory

### 5. Test Locally

Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (install http-server globally)
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Visit: `http://localhost:8000`

## 🌐 GitHub Pages Deployment

### Method 1: User/Organization Site (Recommended)

1. **Repository Name**: Must be `yourusername.github.io`
   - Example: `Akinkunmi100.github.io`

2. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial portfolio launch"
git remote add origin https://github.com/Akinkunmi100/Akinkunmi100.github.io.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Click "Pages" in left sidebar
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Click Save

4. **Access Your Site**:
   - URL: `https://Akinkunmi100.github.io`
   - Usually live in 2-3 minutes

### Method 2: Project Site

If you want a different repository name:
1. Create any repository (e.g., `my-portfolio`)
2. Follow same steps as above
3. Your site will be at: `https://yourusername.github.io/repository-name`

## 🔧 Customization Guide

### Adding Projects

1. **Open `index.html`**
2. **Find Projects Section** (around line 1100)
3. **Copy a project card**:
```html
<div class="project-card group relative overflow-hidden rounded-2xl" 
     data-category="ai" 
     data-aos="fade-up">
    <div class="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-6xl font-bold border border-white/10">
        AI
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span class="text-primary text-sm font-semibold">AI/ML</span>
        <h4 class="text-xl font-bold mt-1">Your Project Title</h4>
        <p class="text-white/70 text-sm mt-2">Project description here</p>
        <div class="flex gap-3 mt-4">
            <a href="#" class="px-4 py-2 bg-primary text-dark text-sm rounded-full hover:bg-primary/90 transition font-semibold">View</a>
            <a href="#" class="px-4 py-2 border border-white/30 text-sm rounded-full hover:bg-white/10 transition">GitHub</a>
        </div>
    </div>
</div>
```

4. **Update**:
   - `data-category`: ai, data, or research
   - Gradient colors
   - Title, description, links

### Adding Skills

**Software Proficiency (Donut Charts)**:
```html
<div class="flex flex-col items-center group">
    <div class="donut-chart relative w-32 h-32 mb-4" data-percent="95">
        <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#1a1a1a" stroke-width="8" fill="none" />
            <circle class="donut-ring" cx="50" cy="50" r="40" stroke="#c1ff00" stroke-width="8" fill="none" stroke-dasharray="251.2" stroke-dashoffset="251.2" stroke-linecap="round" />
        </svg>
        <span class="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary">95%</span>
    </div>
    <i class="devicon-python-plain text-4xl text-white/80 group-hover:text-primary transition-colors mb-2"></i>
    <span class="font-medium">Python</span>
</div>
```

**Analytical Skills (Progress Bars)**:
```html
<div>
    <div class="flex justify-between mb-2">
        <span class="font-medium">Skill Name</span>
        <span class="text-primary font-semibold">90%</span>
    </div>
    <div class="h-3 bg-dark rounded-full overflow-hidden">
        <div class="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full" 
             style="width: 0%" 
             data-width="90%"></div>
    </div>
</div>
```

### Adding Technology Logos

Find icon names at [Devicon.dev](https://devicon.dev/):
```html
<div class="tech-logo group flex flex-col items-center">
    <div class="w-16 h-16 flex items-center justify-center rounded-lg bg-dark-alt border border-white/10 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
        <i class="devicon-TECHNOLOGY-plain colored text-4xl"></i>
    </div>
    <span class="text-xs mt-2 text-white/60 group-hover:text-primary transition-colors">Technology Name</span>
</div>
```

Replace `TECHNOLOGY` with: python, javascript, react, tensorflow, etc.

## 🎨 Design Customization

### Fonts
Change fonts in `index.html` (line ~25):
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;700&display=swap" rel="stylesheet">
```

Update Tailwind config (line ~35):
```javascript
fontFamily: {
    playfair: ['Your Heading Font', 'serif'],
    inter: ['Your Body Font', 'sans-serif'],
}
```

### Animations
Adjust animation speed in `js/main.js` (line ~30):
```javascript
AOS.init({
    duration: 1200,  // Change this (milliseconds)
    easing: 'ease-out-cubic',
    once: true,
});
```

### Colors
All colors are in Tailwind config. Main ones:
- `primary`: #c1ff00 (lime green)
- `dark`: #0a0a0a (background)
- `dark-alt`: #111111 (alternating sections)

## 📊 SEO & Analytics

### Google Analytics 4

Add before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Search Console

1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://yourusername.github.io`
3. Verify ownership
4. Submit sitemap (optional)

### Social Sharing

Update Open Graph tags in `index.html` (line ~15-25):
```html
<meta property="og:image" content="URL_TO_YOUR_SHARE_IMAGE">
```

Create a share image (1200x630px) and upload to `assets/images/og-image.jpg`

## ✅ Pre-Launch Checklist

### Content
- [ ] Profile photo added (`assets/images/profile.jpg`)
- [ ] All personal information updated
- [ ] Projects added with descriptions
- [ ] Skills and proficiencies accurate
- [ ] Social media links updated
- [ ] Resume link working
- [ ] All content proofread

### Technical
- [ ] EmailJS configured and tested
- [ ] Favicons generated and added
- [ ] All images optimized (< 200KB each)
- [ ] Meta tags updated (title, description)
- [ ] Structured data (JSON-LD) updated
- [ ] Google Analytics added
- [ ] All links tested (internal and external)
- [ ] Contact form working

### Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on Edge
- [ ] Tested on mobile (iOS)
- [ ] Tested on mobile (Android)
- [ ] Tested on tablet
- [ ] Lighthouse audit score > 90
- [ ] Accessibility check (WAVE)
- [ ] No console errors

### Deployment
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Site live and accessible

## 🐛 Troubleshooting

### Issue: Contact form not sending

**Solution**: 
1. Check EmailJS credentials in `index.html` and `js/main.js`
2. Verify EmailJS account is active
3. Check browser console for errors
4. Test with browser that allows third-party cookies

### Issue: Images not loading

**Solution**:
1. Check file paths (case-sensitive)
2. Ensure images are in `assets/images/`
3. Check image file names match HTML exactly
4. Clear browser cache

### Issue: Animations not working

**Solution**:
1. Ensure AOS library is loaded (check console)
2. Verify internet connection (AOS loads from CDN)
3. Check for JavaScript errors in console

### Issue: Site not deploying to GitHub Pages

**Solution**:
1. Verify repository name is `username.github.io`
2. Check branch is set to `main` in Pages settings
3. Wait 2-5 minutes after pushing
4. Check GitHub Pages status in repository settings

## 📈 Performance Optimization

### Current Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Tips
1. **Compress images**: Use [TinyPNG](https://tinypng.com/)
2. **Convert to WebP**: Better compression
3. **Minimize CSS/JS**: Use minifiers for production
4. **Enable caching**: GitHub Pages handles this
5. **Lazy load images**: Already implemented

## 🔐 Security

- ✅ HTTPS enabled by default (GitHub Pages)
- ✅ No sensitive data in code
- ✅ Form input sanitization implemented
- ✅ External links use `rel="noopener noreferrer"`
- ✅ Content Security Policy compatible

## 📝 License

MIT License - feel free to use for personal or commercial projects.

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Support

**Email**: akinlabiakinkunmi100@gmail.com  
**LinkedIn**: [Akinkunmi Akinlabi](https://www.linkedin.com/in/akinlabi-akinkunmi-b388b3194)  
**GitHub**: [@Akinkunmi100](https://github.com/Akinkunmi100)

## 🎉 Acknowledgments

- Design inspiration: Alaia, Beverr, Codespot, Mone templates
- Icons: Font Awesome, Devicon
- Fonts: Google Fonts (Playfair Display, Inter)
- Animations: AOS library
- Form handling: EmailJS

---

**Built with ❤️ by Akinkunmi Akinlabi**

⭐ If you found this helpful, please star the repository!

🔗 **Live Demo**: [https://Akinkunmi100.github.io](https://Akinkunmi100.github.io)