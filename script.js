// AI Business Academy - Dynamic Website JavaScript

// Data Storage
const AppData = {
    courses: [
        {
            id: 1,
            title: 'New Enterprises (MIT)',
            description: 'Learn the complete process of creating innovation-based new ventures. Develop business plans, analyze markets, and master entrepreneurial skills.',
            category: 'Entrepreneurship',
            difficulty: 'Beginner',
            duration: 12,
            icon: 'fas fa-rocket',
            source: 'MIT OpenCourseWare',
            sourceUrl: 'https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/',
            instructor: 'William Aulet, Howard Anderson, Prof. Matt Marx',
            rating: 4.8,
            lessons: [
                'Introduction to Entrepreneurship',
                'Market Opportunity Analysis',
                'Business Model Development',
                'Technology Viability Assessment',
                'Competitive Positioning',
                'Team Building and Leadership',
                'Product Life-Cycle Planning',
                'Marketing Strategy Development',
                'Sales Channel Analysis',
                'Legal and Organizational Issues',
                'Investor Pitching',
                'Final Business Plan Presentation'
            ]
        },
        {
            id: 2,
            title: 'Introduction to Finance: The Basics (UIUC)',
            description: 'Master fundamental financial concepts including financial statements, cash flows, and investment management from University of Illinois.',
            category: 'Finance',
            difficulty: 'Beginner',
            duration: 8,
            icon: 'fas fa-chart-line',
            source: 'Coursera - University of Illinois',
            sourceUrl: 'https://www.coursera.org/learn/introduction-to-finance-the-basics',
            instructor: 'University of Illinois Faculty',
            rating: 4.7,
            lessons: [
                'Financial Statements Overview',
                'Balance Sheet Analysis',
                'Income Statement Fundamentals',
                'Cash Flow Management',
                'Financial Ratio Analysis',
                'Investment Basics',
                'Corporate Finance Principles',
                'Return on Investment Calculations'
            ]
        },
        {
            id: 3,
            title: 'Resilient Leadership (Harvard)',
            description: 'Develop skills to lead with courage and conviction through challenging times. Interactive Harvard Business School content.',
            category: 'Leadership',
            difficulty: 'Intermediate',
            duration: 2,
            icon: 'fas fa-users',
            source: 'Harvard Business School Online',
            sourceUrl: 'https://lessons.online.hbs.edu/',
            instructor: 'Harvard Business School Faculty',
            rating: 4.9,
            lessons: [
                'Leadership in Crisis',
                'Building Resilient Teams',
                'Decision Making Under Pressure',
                'Communication During Uncertainty',
                'Adaptive Leadership Strategies'
            ]
        },
        {
            id: 4,
            title: 'Organizational Analysis (Stanford)',
            description: 'Understand organizational structure, strategic decision-making, and leadership dynamics from Stanford University.',
            category: 'Management',
            difficulty: 'Intermediate',
            duration: 10,
            icon: 'fas fa-sitemap',
            source: 'Coursera - Stanford University',
            sourceUrl: 'https://www.coursera.org/learn/organizational-analysis',
            instructor: 'Stanford Faculty',
            rating: 4.6,
            lessons: [
                'Organizational Structure Design',
                'Social Network Analysis',
                'Strategic Decision-Making',
                'Organizational Leadership',
                'Change Management',
                'Resource Management',
                'Coordination and Negotiation',
                'Case Study Analysis'
            ]
        },
        {
            id: 5,
            title: 'Business Plan Fundamentals (MIT)',
            description: 'Master the nuts and bolts of creating comprehensive business plans with practical frameworks and real-world applications.',
            category: 'Planning',
            difficulty: 'Beginner',
            duration: 6,
            icon: 'fas fa-clipboard-list',
            source: 'MIT OpenCourseWare',
            sourceUrl: 'https://ocw.mit.edu/courses/15-s21-nuts-and-bolts-of-business-plans-january-iap-2014/',
            instructor: 'Joseph Hadzima',
            rating: 4.7,
            lessons: [
                'Business Plan Components',
                'Market Analysis Framework',
                'Financial Projections',
                'Executive Summary Writing',
                'Investor Presentation Skills',
                'Legal Considerations'
            ]
        },
        {
            id: 6,
            title: 'E-Commerce with Shopify (Coursera)',
            description: 'Build your own e-commerce store using Shopify. Learn inventory management, customer relations, and online retail strategies.',
            category: 'Digital Business',
            difficulty: 'Beginner',
            duration: 2,
            icon: 'fas fa-shopping-cart',
            source: 'Coursera Project Network',
            sourceUrl: 'https://www.coursera.org/projects/create-your-e-commerce-store-with-shopify',
            instructor: 'Coursera Project Network',
            rating: 4.5,
            lessons: [
                'Shopify Setup and Configuration',
                'Product Catalog Management',
                'Payment Processing Setup',
                'Inventory Management Systems',
                'Customer Relationship Tools',
                'Marketing and Analytics'
            ]
        },
        {
            id: 7,
            title: 'International Business (UNM)',
            description: 'Explore global marketing, international relations, and cross-cultural business strategies from University of New Mexico.',
            category: 'Global Business',
            difficulty: 'Intermediate',
            duration: 12,
            icon: 'fas fa-globe',
            source: 'Coursera - University of New Mexico',
            sourceUrl: 'https://www.coursera.org/learn/international-business',
            instructor: 'University of New Mexico Faculty',
            rating: 4.7,
            lessons: [
                'International Trade Fundamentals',
                'Global Marketing Strategies',
                'Cross-Cultural Communication',
                'International Finance',
                'Supply Chain Management',
                'Political and Economic Factors',
                'Market Entry Strategies',
                'Global Business Ethics'
            ]
        },
        {
            id: 8,
            title: 'DIY Drone Training',
            description: 'Complete guide to building, programming, and operating custom drones for business applications. From components to autonomous systems.',
            category: 'Technology',
            difficulty: 'Advanced',
            duration: 15,
            icon: 'fas fa-helicopter',
            source: 'AI Business Academy Original',
            sourceUrl: 'https://instructables.com/drone-building',
            instructor: 'AI Business Academy',
            rating: 4.8,
            lessons: [
                'Introduction to Drone Technology',
                'Drone Components and Hardware',
                'Flight Controllers and Programming',
                'Building Your First Drone',
                'Flight Safety and Regulations',
                'Advanced Programming and Automation',
                'Business Applications and Use Cases',
                'Maintenance and Troubleshooting',
                'Final Project: Custom Drone Build'
            ]
        }
    ],
    
    curriculumSteps: [
        {
            number: 1,
            title: 'Ideation & Validation',
            description: 'Learn how to generate business ideas, validate market needs, and identify your target audience.'
        },
        {
            number: 2,
            title: 'Business Model Design',
            description: 'Create sustainable business models, define value propositions, and structure revenue streams.'
        },
        {
            number: 3,
            title: 'Market Research & Analysis',
            description: 'Master techniques for analyzing competition, understanding customer behavior, and identifying market trends.'
        },
        {
            number: 4,
            title: 'Minimum Viable Product (MVP)',
            description: 'Learn how to build and test your MVP efficiently to gather valuable user feedback.'
        },
        {
            number: 5,
            title: 'Funding & Finance',
            description: 'Understand different funding options, create financial projections, and learn investor pitching techniques.'
        },
        {
            number: 6,
            title: 'Growth & Scaling',
            description: 'Develop strategies for customer acquisition, retention, and scaling your operations effectively.'
        },
        {
            number: 7,
            title: 'DIY Drone Technology',
            description: 'Master drone building, programming, and business applications. From components to autonomous flight systems.'
        }
    ],
    
    testimonials: [
        {
            name: 'Jessica Smith',
            role: 'Founder, EcoStyle Boutique',
            avatar: 'JS',
            text: 'The AI mentor helped me refine my business idea and avoid costly mistakes. I launched my e-commerce store 3 months ago and already hit $10k in monthly revenue!'
        },
        {
            name: 'Michael Rodriguez',
            role: 'CEO, TechSolve Solutions',
            avatar: 'MR',
            text: 'As a first-time entrepreneur, I was overwhelmed. The personalized learning path and AI guidance gave me the confidence and knowledge to pitch successfully to investors.'
        },
        {
            name: 'Amanda Patel',
            role: 'Founder, HealthPlus App',
            avatar: 'AP',
            text: 'The business simulations were incredibly realistic. I was able to test different strategies risk-free before implementing them in my actual business.'
        }
    ],
    
    aiResponses: {
        // Business Planning & Strategy
        'business plan': 'A solid business plan should include market analysis, financial projections, competitive analysis, and a clear value proposition. I recommend checking out our MIT New Enterprises course which covers the complete business planning process used by successful entrepreneurs.',
        'entrepreneurship': 'Entrepreneurship is about identifying opportunities and creating value. Our MIT New Enterprises course teaches you to become an entrepreneur, not just study them. You\'ll learn market analysis, technology assessment, and team building from professors who\'ve helped create companies like HubSpot and A123 Systems.',
        'startup': 'Starting a business requires careful planning, market research, and adequate funding. Begin with a minimum viable product and iterate based on customer feedback. Our Business Plan Fundamentals course from MIT provides practical frameworks for this process.',
        
        // Finance & Investment
        'finance': 'Financial management is crucial for business success. Track your cash flow, understand your profit margins, and plan for both growth and unexpected expenses. Our Introduction to Finance course from University of Illinois covers financial statements, investment management, and corporate finance principles.',
        'financial statements': 'Financial statements are the foundation of business analysis. Learn about balance sheets, income statements, and cash flow statements in our University of Illinois finance course. Understanding these will help you make better business decisions and communicate with investors.',
        'investment': 'Investment decisions require understanding risk, return, and financial analysis. Our finance courses cover investment basics, portfolio management, and corporate finance to help you make informed decisions about funding and growth.',
        
        // Leadership & Management
        'leadership': 'Effective leadership is about inspiring others and making tough decisions. Our Harvard Resilient Leadership course teaches you to lead with courage and conviction through challenging times. It\'s based on real Harvard Business School case studies.',
        'management': 'Good management involves organizing resources, coordinating teams, and achieving objectives. Our Stanford Organizational Analysis course covers organizational structure, strategic decision-making, and change management.',
        'team building': 'Building strong teams requires understanding organizational dynamics and leadership principles. Both our MIT entrepreneurship and Stanford management courses address team formation and leadership development.',
        
        // Marketing & Sales
        'marketing': 'Effective marketing starts with understanding your target audience. Focus on creating value for your customers and building strong relationships. Our courses cover digital marketing, brand development, and customer acquisition strategies.',
        'e-commerce': 'E-commerce success requires understanding online retail, customer experience, and digital marketing. Our Shopify course teaches you to build and manage an online store, including inventory management and customer relations.',
        
        // International & Global Business
        'international business': 'Global business involves understanding cultural differences, international trade, and cross-border operations. Our University of New Mexico International Business course covers global marketing, international finance, and market entry strategies.',
        'global marketing': 'Global marketing requires adapting your message for different cultures and markets. Consider factors like local preferences, regulations, and competitive landscapes when expanding internationally.',
        
        // Drone Technology & Business
        'drone': 'Drones offer incredible business opportunities! Consider aerial photography, surveying, agriculture monitoring, or delivery services. Our DIY Drone Training course covers everything from building drones to business applications. Start with understanding FAA regulations and getting your Part 107 certification.',
        'drone business': 'Drone businesses are booming! Popular niches include real estate photography ($200-500/shoot), construction site monitoring, agricultural surveys, and inspection services. Our comprehensive drone course covers business applications and market opportunities. Initial investment is typically $5,000-15,000.',
        'drone components': 'Key drone components include: flight controller (brain), motors and ESCs (propulsion), battery (power), frame (structure), and sensors (navigation). Our drone course covers component selection and assembly. Start with quality components from DJI, Pixhawk, or similar manufacturers.',
        'drone programming': 'Drone programming involves flight controller software like ArduPilot or PX4, mission planning with QGroundControl or Mission Planner, and custom applications using Python or C++. Our course covers programming fundamentals and autonomous flight systems.',
        'drone regulations': 'In the US, commercial drone operations require Part 107 certification. Key rules: fly below 400ft, maintain visual line of sight, avoid airports, and respect no-fly zones. Our course includes a complete regulatory overview and certification guidance.',
        'drone safety': 'Drone safety is paramount! Always conduct pre-flight checks, monitor weather conditions, maintain visual contact, have emergency procedures ready, and carry insurance. Our course emphasizes safety protocols and risk management.',
        'flight controller': 'Flight controllers are the brain of your drone. Popular options include Pixhawk (open-source), DJI flight controllers (user-friendly), and Betaflight (racing). Our course covers programming and configuring different flight controller systems.',
        'autonomous flight': 'Autonomous flight enables advanced applications like mapping and surveying. Our course covers waypoint missions, complex flight patterns, and safety systems. Always maintain manual override capability.',
        
        // Course-Specific Questions
        'mit courses': 'We feature excellent MIT OpenCourseWare content including New Enterprises and Business Plan Fundamentals. These courses are taught by world-class faculty and have helped create numerous successful companies.',
        'harvard courses': 'Our Harvard Business School content includes Resilient Leadership and other sample lessons. These provide real-world case studies and interactive learning experiences from one of the world\'s top business schools.',
        'stanford courses': 'We include Stanford\'s Organizational Analysis course, which covers organizational structure, strategic decision-making, and leadership dynamics. Stanford\'s approach combines theory with practical application.',
        'coursera courses': 'We partner with Coursera to bring you courses from top universities including University of Illinois finance courses, practical Shopify training, and international business from University of New Mexico.',
        
        // General Help
        'courses': 'We offer 8 comprehensive courses covering entrepreneurship, finance, leadership, management, international business, e-commerce, and our signature DIY drone training. All courses include content from top universities like MIT, Harvard, and Stanford.',
        'help': 'I can help you with business planning, entrepreneurship, finance, leadership, marketing, international business, and drone technology. Ask me about any of our courses or specific business topics you\'d like to learn about!'
    },
    
    users: JSON.parse(localStorage.getItem('aiBusinessAcademyUsers') || '[]'),
    currentUser: JSON.parse(localStorage.getItem('aiBusinessAcademyCurrentUser') || 'null')
};

// Utility Functions
const Utils = {
    // Save data to localStorage
    saveToStorage: (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    },
    
    // Get data from localStorage
    getFromStorage: (key, defaultValue = null) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    },
    
    // Generate unique ID
    generateId: () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    // Validate email
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Validate password
    validatePassword: (password) => {
        const minLength = password.length >= 8;
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        
        return {
            valid: minLength && hasUpper && hasLower && hasNumber,
            errors: {
                minLength,
                hasUpper,
                hasLower,
                hasNumber
            }
        };
    },
    
    // Show notification
    showNotification: (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transition-all transform translate-x-full`;
        
        const bgColor = {
            'success': 'bg-green-500',
            'error': 'bg-red-500',
            'warning': 'bg-yellow-500',
            'info': 'bg-blue-500'
        }[type] || 'bg-blue-500';
        
        notification.className += ` ${bgColor} text-white`;
        notification.innerHTML = `
            <div class="flex items-center justify-between">
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    },
    
    // Smooth scroll to element
    scrollToElement: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Authentication System
const Auth = {
    // Register new user
    register: (userData) => {
        // Validate required fields
        if (!userData.firstName || !userData.lastName || !userData.username || !userData.email || !userData.password) {
            throw new Error('All required fields must be filled');
        }
        
        // Validate email
        if (!Utils.validateEmail(userData.email)) {
            throw new Error('Please enter a valid email address');
        }
        
        // Validate password
        const passwordValidation = Utils.validatePassword(userData.password);
        if (!passwordValidation.valid) {
            throw new Error('Password must be at least 8 characters with uppercase, lowercase, and number');
        }
        
        // Check if user already exists
        const existingUser = AppData.users.find(user => 
            user.email === userData.email || user.username === userData.username
        );
        
        if (existingUser) {
            throw new Error('User with this email or username already exists');
        }
        
        // Create new user
        const newUser = {
            id: Utils.generateId(),
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
            email: userData.email,
            password: userData.password, // In real app, this would be hashed
            businessExperience: userData.businessExperience || '',
            industryInterest: userData.industryInterest || '',
            learningGoals: userData.learningGoals || '',
            createdAt: new Date().toISOString(),
            progress: {}
        };
        
        // Add to users array
        AppData.users.push(newUser);
        Utils.saveToStorage('aiBusinessAcademyUsers', AppData.users);
        
        // Auto login
        Auth.login(userData.email, userData.password);
        
        return newUser;
    },
    
    // Login user
    login: (email, password) => {
        const user = AppData.users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            throw new Error('Invalid email or password');
        }
        
        AppData.currentUser = user;
        Utils.saveToStorage('aiBusinessAcademyCurrentUser', user);
        
        return user;
    },
    
    // Logout user
    logout: () => {
        AppData.currentUser = null;
        Utils.saveToStorage('aiBusinessAcademyCurrentUser', null);
        UI.updateAuthState();
    },
    
    // Check if user is logged in
    isLoggedIn: () => {
        return AppData.currentUser !== null;
    }
};

// Course Management
const CourseManager = {
    // Get all courses
    getAllCourses: () => {
        return AppData.courses;
    },
    
    // Filter courses
    filterCourses: (searchTerm = '', difficulty = '') => {
        return AppData.courses.filter(course => {
            const matchesSearch = !searchTerm || 
                course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.category.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesDifficulty = !difficulty || course.difficulty === difficulty;
            
            return matchesSearch && matchesDifficulty;
        });
    },
    
    // Get course by ID
    getCourseById: (id) => {
        return AppData.courses.find(course => course.id === parseInt(id));
    },
    
    // Enroll in course
    enrollInCourse: (courseId) => {
        if (!Auth.isLoggedIn()) {
            throw new Error('Please log in to enroll in courses');
        }
        
        const course = CourseManager.getCourseById(courseId);
        if (!course) {
            throw new Error('Course not found');
        }
        
        // Add to user's progress
        if (!AppData.currentUser.progress[courseId]) {
            AppData.currentUser.progress[courseId] = {
                enrolled: true,
                enrolledAt: new Date().toISOString(),
                completedLessons: [],
                progress: 0
            };
            
            // Update stored user data
            const userIndex = AppData.users.findIndex(u => u.id === AppData.currentUser.id);
            if (userIndex !== -1) {
                AppData.users[userIndex] = AppData.currentUser;
                Utils.saveToStorage('aiBusinessAcademyUsers', AppData.users);
                Utils.saveToStorage('aiBusinessAcademyCurrentUser', AppData.currentUser);
            }
        }
        
        return true;
    }
};

// AI Mentor System
const AIMentor = {
    // Get response from AI mentor
    getResponse: (message) => {
        const lowerMessage = message.toLowerCase();
        
        // Find matching response
        for (const [keyword, response] of Object.entries(AppData.aiResponses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        // Default response
        return "I'm here to help you with your business questions! Ask me about business planning, marketing, finance, startup advice, or our new DIY drone training program.";
    },
    
    // Send message to AI mentor
    sendMessage: (message) => {
        return new Promise((resolve) => {
            // Simulate AI processing delay
            setTimeout(() => {
                const response = AIMentor.getResponse(message);
                resolve(response);
            }, 1000 + Math.random() * 2000); // 1-3 second delay
        });
    }
};

// UI Management
const UI = {
    // Initialize the application
    init: () => {
        UI.loadCurriculumSteps();
        UI.loadCourses();
        UI.loadTestimonials();
        UI.setupEventListeners();
        UI.updateAuthState();
        UI.setupSmoothScrolling();
    },
    
    // Load curriculum steps
    loadCurriculumSteps: () => {
        const container = document.getElementById('curriculumSteps');
        if (!container) return;
        
        container.innerHTML = AppData.curriculumSteps.map(step => `
            <div class="curriculum-step flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div class="step-number">
                    ${step.number}
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                        ${step.title}
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                        ${step.description}
                    </p>
                </div>
            </div>
        `).join('');
    },
    
    // Load courses
    loadCourses: (courses = null) => {
        const container = document.getElementById('courseGrid');
        const noCourses = document.getElementById('noCourses');
        
        if (!container) return;
        
        const coursesToShow = courses || AppData.courses;
        
        if (coursesToShow.length === 0) {
            container.innerHTML = '';
            noCourses?.classList.remove('hidden');
            return;
        }
        
        noCourses?.classList.add('hidden');
        
        container.innerHTML = coursesToShow.map(course => `
            <div class="course-card bg-white rounded-xl shadow-sm hover:shadow-lg transition-all relative">
                <div class="course-image">
                    <i class="${course.icon} text-6xl"></i>
                </div>
                <div class="difficulty-badge difficulty-${course.difficulty.toLowerCase()}">
                    ${course.difficulty}
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                        ${course.title}
                    </h3>
                    <p class="text-gray-600 mb-3 line-clamp-3">
                        ${course.description}
                    </p>
                    
                    <!-- Course Source and Rating -->
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span class="flex items-center">
                            <i class="fas fa-university mr-1"></i> 
                            ${course.source}
                        </span>
                        ${course.rating ? `
                        <span class="flex items-center">
                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                            ${course.rating}
                        </span>
                        ` : ''}
                    </div>
                    
                    <!-- Instructor -->
                    ${course.instructor ? `
                    <div class="text-sm text-gray-600 mb-3">
                        <i class="fas fa-chalkboard-teacher mr-1"></i>
                        ${course.instructor}
                    </div>
                    ` : ''}
                    
                    <!-- Duration and Category -->
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span><i class="fas fa-clock mr-1"></i> ${course.duration} hours</span>
                        <span><i class="fas fa-tag mr-1"></i> ${course.category}</span>
                    </div>
                    
                    <!-- Action Buttons -->
                    <div class="space-y-2">
                        <button 
                            onclick="UI.enrollInCourse(${course.id})" 
                            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            ${Auth.isLoggedIn() && AppData.currentUser.progress[course.id] ? 'Continue Learning' : 'Enroll Now'}
                        </button>
                        ${course.sourceUrl && course.sourceUrl !== '#' ? `
                        <a 
                            href="${course.sourceUrl}" 
                            target="_blank" 
                            class="w-full block text-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                        >
                            <i class="fas fa-external-link-alt mr-1"></i>
                            View Original Course
                        </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    },
    
    // Load testimonials
    loadTestimonials: () => {
        const container = document.getElementById('testimonials');
        if (!container) return;
        
        container.innerHTML = AppData.testimonials.map(testimonial => `
            <div class="testimonial-card bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div class="flex items-center mb-4">
                    <div class="testimonial-avatar mr-4">
                        ${testimonial.avatar}
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-900">${testimonial.name}</h4>
                        <p class="text-sm text-gray-600">${testimonial.role}</p>
                    </div>
                </div>
                <p class="text-gray-700 italic">
                    "${testimonial.text}"
                </p>
            </div>
        `).join('');
    },
    
    // Setup event listeners
    setupEventListeners: () => {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn?.addEventListener('click', () => {
            mobileMenu?.classList.toggle('hidden');
        });
        
        // Modal controls
        UI.setupModalControls();
        
        // Course search and filter
        UI.setupCourseFilters();
        
        // Chat functionality
        UI.setupChatFunctionality();
        
        // Button click handlers
        UI.setupButtonHandlers();
    },
    
    // Setup modal controls
    setupModalControls: () => {
        // Login modal
        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        
        loginBtn?.addEventListener('click', () => {
            UI.showModal('loginModal');
        });
        
        // Signup modal
        const signupBtn = document.getElementById('signupBtn');
        const signupModal = document.getElementById('signupModal');
        
        signupBtn?.addEventListener('click', () => {
            UI.showModal('signupModal');
        });
        
        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                UI.hideModal(modal.id);
            });
        });
        
        // Click outside to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    UI.hideModal(modal.id);
                }
            });
        });
        
        // Switch between login and signup
        document.getElementById('switchToSignup')?.addEventListener('click', () => {
            UI.hideModal('loginModal');
            UI.showModal('signupModal');
        });
        
        document.getElementById('switchToLogin')?.addEventListener('click', () => {
            UI.hideModal('signupModal');
            UI.showModal('loginModal');
        });
        
        // Form submissions
        document.getElementById('loginForm')?.addEventListener('submit', UI.handleLogin);
        document.getElementById('signupForm')?.addEventListener('submit', UI.handleSignup);
    },
    
    // Setup course filters
    setupCourseFilters: () => {
        const searchInput = document.getElementById('courseSearch');
        const difficultyFilter = document.getElementById('difficultyFilter');
        
        const filterCourses = () => {
            const searchTerm = searchInput?.value || '';
            const difficulty = difficultyFilter?.value || '';
            const filteredCourses = CourseManager.filterCourses(searchTerm, difficulty);
            UI.loadCourses(filteredCourses);
        };
        
        searchInput?.addEventListener('input', filterCourses);
        difficultyFilter?.addEventListener('change', filterCourses);
    },
    
    // Setup chat functionality
    setupChatFunctionality: () => {
        const chatMentorBtn = document.getElementById('chatMentorBtn');
        const chatInput = document.getElementById('chatInput');
        const sendMessage = document.getElementById('sendMessage');
        
        chatMentorBtn?.addEventListener('click', () => {
            UI.showModal('chatModal');
        });
        
        const handleSendMessage = () => {
            const message = chatInput?.value.trim();
            if (message) {
                UI.sendChatMessage(message);
                chatInput.value = '';
            }
        };
        
        sendMessage?.addEventListener('click', handleSendMessage);
        
        chatInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    },
    
    // Setup button handlers
    setupButtonHandlers: () => {
        // CTA buttons
        document.getElementById('startLearningBtn')?.addEventListener('click', () => {
            if (Auth.isLoggedIn()) {
                Utils.scrollToElement('courses');
            } else {
                UI.showModal('signupModal');
            }
        });
        
        document.getElementById('exploreCoursesBtn')?.addEventListener('click', () => {
            Utils.scrollToElement('courses');
        });
        
        document.getElementById('exploreDroneBtn')?.addEventListener('click', () => {
            Utils.scrollToElement('courses');
            // Filter to show drone course
            const difficultyFilter = document.getElementById('difficultyFilter');
            if (difficultyFilter) {
                difficultyFilter.value = 'Advanced';
                difficultyFilter.dispatchEvent(new Event('change'));
            }
        });
        
        document.getElementById('getStartedBtn')?.addEventListener('click', () => {
            UI.showModal('signupModal');
        });
    },
    
    // Setup smooth scrolling for navigation
    setupSmoothScrolling: () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },
    
    // Show modal
    showModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    },
    
    // Hide modal
    hideModal: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    },
    
    // Handle login
    handleLogin: (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        try {
            Auth.login(email, password);
            UI.hideModal('loginModal');
            Utils.showNotification('Welcome back!', 'success');
            UI.updateAuthState();
        } catch (error) {
            Utils.showNotification(error.message, 'error');
        }
    },
    
    // Handle signup
    handleSignup: (e) => {
        e.preventDefault();
        
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            businessExperience: document.getElementById('businessExperience').value,
            industryInterest: document.getElementById('industryInterest').value,
            learningGoals: document.getElementById('learningGoals').value
        };
        
        // Check terms agreement
        const agreeTerms = document.getElementById('agreeTerms').checked;
        if (!agreeTerms) {
            Utils.showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
            return;
        }
        
        try {
            Auth.register(formData);
            UI.hideModal('signupModal');
            Utils.showNotification('Welcome to AI Business Academy!', 'success');
            UI.updateAuthState();
        } catch (error) {
            Utils.showNotification(error.message, 'error');
        }
    },
    
    // Update authentication state
    updateAuthState: () => {
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        
        if (Auth.isLoggedIn()) {
            // Update buttons to show user menu
            if (loginBtn) {
                loginBtn.textContent = 'Dashboard';
                loginBtn.onclick = () => Utils.scrollToElement('courses');
            }
            
            if (signupBtn) {
                signupBtn.textContent = 'Logout';
                signupBtn.onclick = () => {
                    Auth.logout();
                    Utils.showNotification('Logged out successfully', 'info');
                };
            }
        } else {
            // Reset to default state
            if (loginBtn) {
                loginBtn.textContent = 'Log In';
                loginBtn.onclick = () => UI.showModal('loginModal');
            }
            
            if (signupBtn) {
                signupBtn.textContent = 'Sign Up Free';
                signupBtn.onclick = () => UI.showModal('signupModal');
            }
        }
        
        // Reload courses to update enrollment status
        UI.loadCourses();
    },
    
    // Enroll in course
    enrollInCourse: (courseId) => {
        try {
            CourseManager.enrollInCourse(courseId);
            Utils.showNotification('Successfully enrolled in course!', 'success');
            UI.loadCourses(); // Refresh course display
        } catch (error) {
            if (error.message.includes('log in')) {
                UI.showModal('loginModal');
            } else {
                Utils.showNotification(error.message, 'error');
            }
        }
    },
    
    // Send chat message
    sendChatMessage: async (message) => {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;
        
        // Add user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chat-message user-message mb-4';
        userMessageDiv.innerHTML = `
            <div class="message-content">
                ${message}
            </div>
        `;
        chatMessages.appendChild(userMessageDiv);
        
        // Add loading indicator
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'chat-message ai-message mb-4';
        loadingDiv.innerHTML = `
            <div class="flex items-start space-x-3">
                <div class="bg-blue-600 rounded-full p-2">
                    <i class="fas fa-robot text-white"></i>
                </div>
                <div class="message-content">
                    <span class="loading-dots">Thinking</span>
                </div>
            </div>
        `;
        chatMessages.appendChild(loadingDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        try {
            // Get AI response
            const response = await AIMentor.sendMessage(message);
            
            // Remove loading indicator
            loadingDiv.remove();
            
            // Add AI response
            const aiMessageDiv = document.createElement('div');
            aiMessageDiv.className = 'chat-message ai-message mb-4';
            aiMessageDiv.innerHTML = `
                <div class="flex items-start space-x-3">
                    <div class="bg-blue-600 rounded-full p-2">
                        <i class="fas fa-robot text-white"></i>
                    </div>
                    <div class="message-content">
                        ${response}
                    </div>
                </div>
            `;
            chatMessages.appendChild(aiMessageDiv);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
        } catch (error) {
            loadingDiv.remove();
            Utils.showNotification('Error getting AI response', 'error');
        }
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    UI.init();
});

// Export for global access (if needed)
window.AiBusinessAcademy = {
    Auth,
    CourseManager,
    AIMentor,
    UI,
    Utils
};
