// AI Business Academy - Dynamic Website JavaScript

// Data Storage
const AppData = {
    courses: [
        {
            id: 1,
            title: 'Business Fundamentals',
            description: 'Learn the core principles of business management and strategy.',
            category: 'Foundation',
            difficulty: 'Beginner',
            duration: 8,
            icon: 'fas fa-building',
            lessons: [
                'Introduction to Business Fundamentals',
                'Key Concepts in Foundation',
                'Practical Applications',
                'Case Studies and Examples',
                'Assessment and Next Steps'
            ]
        },
        {
            id: 2,
            title: 'Marketing Essentials',
            description: 'Master the basics of digital marketing and customer acquisition.',
            category: 'Marketing',
            difficulty: 'Beginner',
            duration: 6,
            icon: 'fas fa-bullhorn',
            lessons: [
                'Introduction to Marketing Essentials',
                'Key Concepts in Marketing',
                'Practical Applications',
                'Case Studies and Examples',
                'Assessment and Next Steps'
            ]
        },
        {
            id: 3,
            title: 'Financial Planning',
            description: 'Understand financial statements, budgeting, and investment basics.',
            category: 'Finance',
            difficulty: 'Intermediate',
            duration: 10,
            icon: 'fas fa-chart-pie',
            lessons: [
                'Introduction to Financial Planning',
                'Key Concepts in Finance',
                'Practical Applications',
                'Case Studies and Examples',
                'Assessment and Next Steps'
            ]
        },
        {
            id: 4,
            title: 'DIY Drone Training',
            description: 'Complete guide to building, programming, and operating custom drones for business applications.',
            category: 'Technology',
            difficulty: 'Advanced',
            duration: 15,
            icon: 'fas fa-helicopter',
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
        'business plan': 'A good business plan should include: executive summary, market analysis, organization structure, products/services, marketing strategy, funding request, and financial projections.',
        'marketing': 'Effective marketing starts with understanding your target audience. Focus on creating value for your customers and building strong relationships.',
        'finance': 'Financial management is crucial for business success. Track your cash flow, understand your profit margins, and plan for both growth and unexpected expenses.',
        'startup': 'Starting a business requires careful planning, market research, and adequate funding. Begin with a minimum viable product and iterate based on customer feedback.',
        'drone': 'Drones offer incredible business opportunities! Consider aerial photography, surveying, agriculture monitoring, or delivery services. Start with understanding FAA regulations and getting your Part 107 certification.',
        'drone business': 'Drone businesses are booming! Popular niches include real estate photography ($200-500/shoot), construction site monitoring, agricultural surveys, and inspection services. Initial investment is typically $5,000-15,000.',
        'drone components': 'Key drone components include: flight controller (brain), motors and ESCs (propulsion), battery (power), frame (structure), and sensors (navigation). Start with quality components from DJI, Pixhawk, or similar manufacturers.',
        'drone programming': 'Drone programming involves flight controller software like ArduPilot or PX4, mission planning with QGroundControl or Mission Planner, and custom applications using Python or C++. Start with basic waypoint missions.',
        'drone regulations': 'In the US, commercial drone operations require Part 107 certification. Key rules: fly below 400ft, maintain visual line of sight, avoid airports, and respect no-fly zones. Always check local regulations.',
        'drone safety': 'Drone safety is paramount! Always conduct pre-flight checks, monitor weather conditions, maintain visual contact, have emergency procedures ready, and carry insurance. Safety first, profits second.',
        'flight controller': 'Flight controllers are the brain of your drone. Popular options include Pixhawk (open-source), DJI flight controllers (user-friendly), and Betaflight (racing). Choose based on your application and skill level.',
        'autonomous flight': 'Autonomous flight enables advanced applications like mapping and surveying. Start with simple waypoint missions, then progress to complex patterns. Always have manual override capability for safety.'
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
                    <p class="text-gray-600 mb-4 line-clamp-3">
                        ${course.description}
                    </p>
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span><i class="fas fa-clock mr-1"></i> ${course.duration} hours</span>
                        <span><i class="fas fa-tag mr-1"></i> ${course.category}</span>
                    </div>
                    <button 
                        onclick="UI.enrollInCourse(${course.id})" 
                        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        ${Auth.isLoggedIn() && AppData.currentUser.progress[course.id] ? 'Continue Learning' : 'Enroll Now'}
                    </button>
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
