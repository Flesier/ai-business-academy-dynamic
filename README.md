# AI Business Academy - Dynamic Website

A fully dynamic, client-side website for the AI Business Academy that can be deployed to any web hosting service, including GoDaddy shared hosting.

## Features

### 🎓 Complete Learning Management System
- **Course Catalog**: Browse and filter courses by difficulty and category
- **User Registration & Authentication**: Secure client-side user management
- **Progress Tracking**: Track course enrollment and learning progress
- **Personalized Dashboard**: User-specific content and recommendations

### 🤖 AI-Powered Learning
- **AI Business Mentor**: Interactive chat with intelligent responses
- **Personalized Guidance**: Tailored advice based on user profile
- **Business Expertise**: Comprehensive knowledge base covering all business topics
- **Drone Training Specialist**: Expert guidance on DIY drone technology

### 📱 Modern User Experience
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Professional transitions and micro-interactions
- **Intuitive Navigation**: Easy-to-use interface with smooth scrolling
- **Real-time Interactions**: Dynamic content updates without page reloads

### 🚁 Specialized Drone Training
- **Complete Curriculum**: 15-hour comprehensive drone training program
- **9 Detailed Lessons**: From basic components to autonomous flight systems
- **Business Applications**: Focus on profitable drone business opportunities
- **Safety & Regulations**: Comprehensive coverage of FAA requirements

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome
- **Storage**: LocalStorage for client-side data persistence
- **Hosting**: Compatible with any web hosting service

## File Structure

```
ai-business-academy-dynamic/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality
├── favicon.ico         # Website favicon
└── README.md          # This file
```

## Course Catalog

### 1. Business Fundamentals (Beginner - 8 hours)
Learn the core principles of business management and strategy.

### 2. Marketing Essentials (Beginner - 6 hours)
Master the basics of digital marketing and customer acquisition.

### 3. Financial Planning (Intermediate - 10 hours)
Understand financial statements, budgeting, and investment basics.

### 4. DIY Drone Training (Advanced - 15 hours)
Complete guide to building, programming, and operating custom drones for business applications.

## AI Mentor Capabilities

The AI mentor provides intelligent responses on:
- Business planning and strategy
- Marketing and customer acquisition
- Financial management and funding
- Startup advice and entrepreneurship
- Drone technology and business applications
- Component selection and programming
- Safety regulations and compliance
- Autonomous flight development

## User Features

### Registration System
- Secure user registration with validation
- Profile management with business experience tracking
- Industry interests and learning goals
- Terms of service agreement

### Authentication
- Email/password login system
- Session persistence using localStorage
- Secure logout functionality
- User state management

### Course Management
- Course enrollment tracking
- Progress monitoring
- Lesson completion status
- Personalized recommendations

### Interactive Chat
- Real-time AI mentor conversations
- Context-aware responses
- Business and drone expertise
- Conversation history

## Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Touch-optimized interface with adapted layouts
- **Mobile**: Mobile-first design with collapsible navigation

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Fast Loading**: Optimized assets and minimal dependencies
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **Efficient Storage**: Optimized localStorage usage
- **Lazy Loading**: Content loaded as needed
- **Caching**: Browser caching for static assets

## Accessibility

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators

## SEO Optimization

- **Meta Tags**: Comprehensive meta information
- **Semantic HTML**: Proper heading structure
- **Alt Text**: Image descriptions for accessibility
- **Schema Markup**: Structured data for search engines
- **Fast Loading**: Optimized for Core Web Vitals

## Security Features

- **Client-side Validation**: Input validation and sanitization
- **XSS Protection**: Safe HTML rendering
- **Data Encryption**: Secure data storage practices
- **Privacy Protection**: No external tracking

## Deployment Instructions

### For GoDaddy Hosting:

1. **Upload Files**:
   - Log into your GoDaddy hosting control panel
   - Navigate to File Manager
   - Upload all files to the `public_html` directory
   - Ensure `index.html` is in the root directory

2. **Set Permissions**:
   - Set file permissions to 644 for all files
   - Set directory permissions to 755

3. **Test Deployment**:
   - Visit your domain to test the website
   - Test all functionality including registration and chat

### For Other Hosting Services:

1. **Upload Files**: Upload all files to your web root directory
2. **Configure**: Ensure your hosting supports HTML/CSS/JavaScript
3. **Test**: Verify all features work correctly

## Customization

### Adding New Courses
Edit the `courses` array in `script.js`:

```javascript
{
    id: 5,
    title: 'Your Course Title',
    description: 'Course description',
    category: 'Category',
    difficulty: 'Beginner|Intermediate|Advanced',
    duration: 8,
    icon: 'fas fa-icon-name',
    lessons: ['Lesson 1', 'Lesson 2', ...]
}
```

### Updating AI Responses
Edit the `aiResponses` object in `script.js`:

```javascript
'keyword': 'AI response text...'
```

### Styling Changes
Modify `styles.css` or add custom CSS classes.

### Adding Features
Extend the JavaScript functionality in `script.js`.

## Support

For technical support or questions about deployment:
- Check the browser console for any errors
- Ensure all files are uploaded correctly
- Verify file permissions are set properly
- Test in different browsers

## License

This project is created for educational and demonstration purposes.

## Version

Version 1.0 - Initial release with full dynamic functionality and drone training integration.
