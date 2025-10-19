// Student Dashboard JavaScript for AI Business Academy

// Mock Student Data
const studentData = {
    profile: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatar: "J",
        bio: "Aspiring entrepreneur learning business fundamentals and drone technology.",
        joinedDate: "2025-09-15",
        learningStreak: 7,
        totalHours: 45.5,
        coursesCompleted: 2
    },
    
    enrolledCourses: [
        {
            id: 8,
            title: "DIY Drone Development",
            icon: "🚁",
            color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            progress: 33,
            status: "in-progress",
            duration: "27 hours",
            lastAccessed: "2025-10-10",
            modulesCompleted: 3,
            totalModules: 9,
            timeSpent: 8.5
        },
        {
            id: 1,
            title: "New Enterprises (MIT)",
            icon: "🚀",
            color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            progress: 75,
            status: "in-progress",
            duration: "12 hours",
            lastAccessed: "2025-10-09",
            modulesCompleted: 9,
            totalModules: 12,
            timeSpent: 9.0
        },
        {
            id: 2,
            title: "Introduction to Finance (UIUC)",
            icon: "💰",
            color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            progress: 100,
            status: "completed",
            duration: "8 hours",
            lastAccessed: "2025-09-28",
            modulesCompleted: 8,
            totalModules: 8,
            timeSpent: 8.0
        },
        {
            id: 3,
            title: "Resilient Leadership (Harvard)",
            icon: "👔",
            color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            progress: 100,
            status: "completed",
            duration: "2 hours",
            lastAccessed: "2025-09-20",
            modulesCompleted: 4,
            totalModules: 4,
            timeSpent: 2.0
        },
        {
            id: 4,
            title: "Organizational Analysis (Stanford)",
            icon: "📊",
            color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            progress: 0,
            status: "not-started",
            duration: "10 hours",
            lastAccessed: null,
            modulesCompleted: 0,
            totalModules: 10,
            timeSpent: 0
        }
    ],
    
    availableCourses: [
        {
            id: 5,
            title: "Business Plan Fundamentals (MIT)",
            icon: "📋",
            description: "Learn to create comprehensive business plans with frameworks and real-world applications.",
            duration: "6 hours",
            level: "Intermediate",
            rating: 4.7,
            students: 1200,
            category: "entrepreneurship"
        },
        {
            id: 6,
            title: "E-Commerce with Shopify",
            icon: "🛒",
            description: "Build and manage online stores with hands-on Shopify training.",
            duration: "2 hours",
            level: "Beginner",
            rating: 4.5,
            students: 850,
            category: "technology"
        },
        {
            id: 7,
            title: "International Business (UNM)",
            icon: "🌍",
            description: "Explore global business strategies and cross-cultural management.",
            duration: "12 hours",
            level: "Advanced",
            rating: 4.8,
            students: 950,
            category: "entrepreneurship"
        }
    ],
    
    certificates: [
        {
            id: 1,
            courseId: 2,
            courseTitle: "Introduction to Finance",
            issuedDate: "2025-09-28",
            certificateId: "CERT-FIN-2025-001"
        },
        {
            id: 2,
            courseId: 3,
            courseTitle: "Resilient Leadership",
            issuedDate: "2025-09-20",
            certificateId: "CERT-LEAD-2025-002"
        }
    ],
    
    achievements: [
        {
            id: 1,
            title: "First Course Completed",
            description: "Completed your first course",
            icon: "🎉",
            date: "2025-09-20"
        },
        {
            id: 2,
            title: "Week Warrior",
            description: "7-day learning streak",
            icon: "🔥",
            date: "2025-10-10"
        },
        {
            id: 3,
            title: "Knowledge Seeker",
            description: "Enrolled in 5 courses",
            icon: "📚",
            date: "2025-10-05"
        }
    ]
};

// Dashboard State
const dashboardState = {
    currentSection: 'dashboard',
    courseFilter: 'all',
    chatHistory: []
};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSidebar();
    loadDashboardData();
    setupEventListeners();
});

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            switchSection(section);
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function switchSection(section) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Show selected section
    const sectionElement = document.getElementById(`${section}Section`);
    if (sectionElement) {
        sectionElement.classList.add('active');
    }
    
    // Update page title
    const titles = {
        dashboard: 'My Dashboard',
        'my-courses': 'My Courses',
        progress: 'Learning Progress',
        browse: 'Browse Courses',
        certificates: 'My Certificates',
        profile: 'My Profile'
    };
    
    document.getElementById('pageTitle').textContent = titles[section] || 'Dashboard';
    dashboardState.currentSection = section;
    
    // Load section-specific data
    loadSectionData(section);
}

function loadSectionData(section) {
    switch(section) {
        case 'my-courses':
            loadMyCoursesGrid();
            break;
        case 'progress':
            loadProgressData();
            break;
        case 'browse':
            loadBrowseCourses();
            break;
        case 'certificates':
            loadCertificates();
            break;
    }
}

// Sidebar
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}

// Dashboard Data
function loadDashboardData() {
    // Update welcome stats
    document.getElementById('learningStreak').textContent = studentData.profile.learningStreak;
    document.getElementById('totalHours').textContent = studentData.profile.totalHours;
    document.getElementById('coursesCompleted').textContent = studentData.profile.coursesCompleted;
    
    // Load continue learning card
    loadContinueLearningCard();
    
    // Load courses quick grid
    loadCoursesQuickGrid();
    
    // Load achievements
    loadAchievements();
    
    // Load recommended courses
    loadRecommendedCourses();
}

function loadContinueLearningCard() {
    const continueCard = document.getElementById('continueCard');
    if (!continueCard) return;
    
    // Find the course with highest progress that's not completed
    const inProgressCourses = studentData.enrolledCourses.filter(c => c.status === 'in-progress');
    if (inProgressCourses.length === 0) {
        continueCard.innerHTML = '<p style="text-align: center; padding: 2rem; color: #6B7280;">No courses in progress</p>';
        return;
    }
    
    const course = inProgressCourses[0]; // Most recently accessed
    
    continueCard.innerHTML = `
        <div class="continue-course-info">
            <div class="continue-course-label">Continue Learning</div>
            <div class="continue-course-title">${course.title}</div>
            <div class="continue-course-progress">
                <div class="continue-progress-bar">
                    <div class="continue-progress-fill" style="width: ${course.progress}%"></div>
                </div>
                <div class="continue-progress-text">${course.progress}%</div>
            </div>
            <div style="font-size: 0.875rem; opacity: 0.9;">
                ${course.modulesCompleted} of ${course.totalModules} modules completed
            </div>
        </div>
        <button class="continue-btn" onclick="continueCourse(${course.id})">
            Continue →
        </button>
    `;
}

function loadCoursesQuickGrid() {
    const grid = document.getElementById('coursesQuickGrid');
    if (!grid) return;
    
    const displayCourses = studentData.enrolledCourses.slice(0, 4);
    
    grid.innerHTML = displayCourses.map(course => `
        <div class="course-quick-card" onclick="viewCourseDetail(${course.id})">
            <div class="course-quick-header">
                <div class="course-quick-icon" style="background: ${course.color};">
                    ${course.icon}
                </div>
                <div class="course-quick-title">${course.title}</div>
            </div>
            <div class="course-quick-progress">
                <div class="course-quick-progress-bar">
                    <div class="course-quick-progress-fill" style="width: ${course.progress}%"></div>
                </div>
                <div class="course-quick-progress-text">${course.progress}% complete</div>
            </div>
            <div class="course-quick-meta">
                <span>${course.duration}</span>
                <span>${course.modulesCompleted}/${course.totalModules} modules</span>
            </div>
        </div>
    `).join('');
}

function loadAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    if (!achievementsList) return;
    
    achievementsList.innerHTML = studentData.achievements.map(achievement => `
        <div class="achievement-item">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-content">
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-date">${formatDate(achievement.date)}</div>
            </div>
        </div>
    `).join('');
}

function loadRecommendedCourses() {
    const grid = document.getElementById('recommendedGrid');
    if (!grid) return;
    
    grid.innerHTML = studentData.availableCourses.map(course => `
        <div class="recommended-card" onclick="viewCourseDetail(${course.id})">
            <span class="recommended-badge">Recommended</span>
            <div class="recommended-title">${course.title}</div>
            <div class="recommended-description">${course.description}</div>
            <div class="recommended-meta">
                <span class="recommended-rating">⭐ ${course.rating}</span>
                <span>${course.students} students</span>
            </div>
            <button class="recommended-enroll" onclick="event.stopPropagation(); enrollCourse(${course.id})">
                Enroll Now
            </button>
        </div>
    `).join('');
}

// My Courses
function loadMyCoursesGrid() {
    const grid = document.getElementById('myCoursesGrid');
    if (!grid) return;
    
    const filteredCourses = filterCourses(studentData.enrolledCourses);
    
    grid.innerHTML = filteredCourses.map(course => `
        <div class="my-course-card">
            <div class="my-course-header">
                <div class="my-course-icon" style="background: ${course.color};">
                    ${course.icon}
                </div>
                <span class="my-course-status status-${course.status}">
                    ${course.status.replace('-', ' ')}
                </span>
            </div>
            <h3 class="my-course-title">${course.title}</h3>
            <div class="my-course-meta">
                <span>⏱️ ${course.duration}</span>
                <span>📚 ${course.totalModules} modules</span>
            </div>
            <div class="my-course-progress-section">
                <div class="my-course-progress-label">
                    <span>Progress</span>
                    <span>${course.progress}%</span>
                </div>
                <div class="my-course-progress-bar">
                    <div class="my-course-progress-fill" style="width: ${course.progress}%"></div>
                </div>
            </div>
            <div class="my-course-actions">
                ${course.status === 'completed' 
                    ? '<button class="btn-secondary" style="flex: 1;" onclick="viewCertificate(' + course.id + ')">View Certificate</button>'
                    : '<button class="btn-primary" style="flex: 1;" onclick="continueCourse(' + course.id + ')">Continue</button>'
                }
                <button class="btn-secondary" onclick="viewCourseDetail(${course.id})">Details</button>
            </div>
        </div>
    `).join('');
}

function filterCourses(courses) {
    if (dashboardState.courseFilter === 'all') {
        return courses;
    }
    return courses.filter(c => c.status === dashboardState.courseFilter);
}

// Progress
function loadProgressData() {
    const progressList = document.getElementById('progressList');
    if (!progressList) return;
    
    progressList.innerHTML = studentData.enrolledCourses.map(course => `
        <div class="progress-item">
            <div class="progress-item-header">
                <div class="progress-item-title">${course.icon} ${course.title}</div>
                <div class="progress-item-percentage">${course.progress}%</div>
            </div>
            <div class="progress-item-bar">
                <div class="progress-item-fill" style="width: ${course.progress}%"></div>
            </div>
            <div class="progress-item-details">
                <span>${course.modulesCompleted} of ${course.totalModules} modules completed</span>
                <span>${course.timeSpent} hours spent</span>
            </div>
        </div>
    `).join('');
}

// Browse Courses
function loadBrowseCourses() {
    const grid = document.getElementById('browseGrid');
    if (!grid) return;
    
    const allCourses = [...studentData.enrolledCourses, ...studentData.availableCourses];
    
    grid.innerHTML = allCourses.map(course => {
        const isEnrolled = studentData.enrolledCourses.some(c => c.id === course.id);
        
        return `
            <div class="my-course-card" onclick="viewCourseDetail(${course.id})">
                <div class="my-course-header">
                    <div class="my-course-icon" style="background: ${course.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};">
                        ${course.icon}
                    </div>
                    ${isEnrolled ? '<span class="my-course-status status-in-progress">Enrolled</span>' : ''}
                </div>
                <h3 class="my-course-title">${course.title}</h3>
                <div class="my-course-meta">
                    <span>⏱️ ${course.duration}</span>
                    ${course.rating ? `<span>⭐ ${course.rating}</span>` : ''}
                </div>
                ${course.description ? `<p style="font-size: 0.875rem; color: #6B7280; margin: 1rem 0;">${course.description}</p>` : ''}
                <div class="my-course-actions">
                    ${isEnrolled 
                        ? '<button class="btn-primary" style="flex: 1;" onclick="event.stopPropagation(); continueCourse(' + course.id + ')">Continue</button>'
                        : '<button class="btn-primary" style="flex: 1;" onclick="event.stopPropagation(); enrollCourse(' + course.id + ')">Enroll Now</button>'
                    }
                    <button class="btn-secondary" onclick="event.stopPropagation(); viewCourseDetail(${course.id})">Details</button>
                </div>
            </div>
        `;
    }).join('');
}

// Certificates
function loadCertificates() {
    const grid = document.getElementById('certificatesGrid');
    const emptyState = document.getElementById('emptyCertificates');
    
    if (!grid || !emptyState) return;
    
    if (studentData.certificates.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    grid.innerHTML = studentData.certificates.map(cert => `
        <div class="certificate-card">
            <div class="certificate-badge">🏆</div>
            <div class="certificate-title">Certificate of Completion</div>
            <div class="certificate-course">${cert.courseTitle}</div>
            <div class="certificate-date">Issued on ${formatDate(cert.issuedDate)}</div>
            <div class="certificate-id" style="font-size: 0.75rem; opacity: 0.8; margin-bottom: 1.5rem;">
                ID: ${cert.certificateId}
            </div>
            <div class="certificate-actions">
                <button class="certificate-btn" onclick="downloadCertificate(${cert.id})">
                    📥 Download
                </button>
                <button class="certificate-btn" onclick="shareCertificate(${cert.id})">
                    🔗 Share
                </button>
            </div>
        </div>
    `).join('');
}

// Event Listeners
function setupEventListeners() {
    // Course filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            dashboardState.courseFilter = filter;
            
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            loadMyCoursesGrid();
        });
    });
    
    // AI Mentor button
    const aiMentorBtn = document.getElementById('aiMentorBtn');
    if (aiMentorBtn) {
        aiMentorBtn.addEventListener('click', openAIMentor);
    }
    
    // Chat functionality
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatInput = document.getElementById('chatInput');
    
    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', sendChatMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}

// AI Mentor
function openAIMentor() {
    const modal = document.getElementById('aiMentorModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const messagesContainer = document.getElementById('chatMessages');
    
    if (!input || !messagesContainer) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    const userMessageHTML = `
        <div class="chat-message user-message">
            <div class="message-avatar">👤</div>
            <div class="message-content">
                <p>${message}</p>
            </div>
        </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', userMessageHTML);
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "That's a great question! Based on your current progress in the DIY Drone Development course, I recommend focusing on the flight controller setup module next. It builds directly on what you've learned.",
            "I can help you with that! The business applications module in the drone course will be particularly relevant to your entrepreneurship goals.",
            "Excellent progress so far! You're 33% through the drone course. Would you like some tips for the autonomous flight module?",
            "I recommend checking out the Business Plan Fundamentals course next. It complements your drone training perfectly for building a drone services business."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const botMessageHTML = `
            <div class="chat-message bot-message">
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <p>${randomResponse}</p>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', botMessageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Course Actions
function continueCourse(courseId) {
    showNotification(`Continuing course... Redirecting to course player.`, 'info');
    // In a real implementation, this would navigate to the course player
    setTimeout(() => {
        window.location.href = `course-player.html?id=${courseId}`;
    }, 1000);
}

function enrollCourse(courseId) {
    const course = studentData.availableCourses.find(c => c.id === courseId);
    if (!course) return;
    
    showNotification(`Successfully enrolled in ${course.title}!`, 'success');
    
    // Add to enrolled courses
    studentData.enrolledCourses.push({
        ...course,
        progress: 0,
        status: 'not-started',
        lastAccessed: null,
        modulesCompleted: 0,
        totalModules: 10,
        timeSpent: 0
    });
    
    // Remove from available courses
    const index = studentData.availableCourses.findIndex(c => c.id === courseId);
    if (index > -1) {
        studentData.availableCourses.splice(index, 1);
    }
    
    // Reload relevant sections
    loadDashboardData();
    if (dashboardState.currentSection === 'browse') {
        loadBrowseCourses();
    }
}

function viewCourseDetail(courseId) {
    const course = [...studentData.enrolledCourses, ...studentData.availableCourses].find(c => c.id === courseId);
    if (!course) return;
    
    const modal = document.getElementById('courseDetailModal');
    const modalBody = document.getElementById('courseDetailBody');
    
    const isEnrolled = studentData.enrolledCourses.some(c => c.id === courseId);
    
    modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 80px; height: 80px; border-radius: 1rem; background: ${course.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">
                    ${course.icon}
                </div>
                <div style="flex: 1;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${course.title}</h3>
                    <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #6B7280;">
                        <span>⏱️ ${course.duration}</span>
                        ${course.level ? `<span>📊 ${course.level}</span>` : ''}
                        ${course.rating ? `<span>⭐ ${course.rating}</span>` : ''}
                    </div>
                </div>
            </div>
            
            ${course.description ? `
                <div>
                    <strong>Description:</strong>
                    <p style="margin-top: 0.5rem; color: #6B7280;">${course.description}</p>
                </div>
            ` : ''}
            
            ${isEnrolled ? `
                <div>
                    <strong>Your Progress:</strong>
                    <div style="margin-top: 0.5rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>${course.modulesCompleted} of ${course.totalModules} modules</span>
                            <span>${course.progress}%</span>
                        </div>
                        <div style="height: 8px; background-color: #F3F4F6; border-radius: 1rem; overflow: hidden;">
                            <div style="height: 100%; width: ${course.progress}%; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); border-radius: 1rem;"></div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <strong>Time Spent:</strong>
                    <p style="margin-top: 0.5rem;">${course.timeSpent} hours</p>
                </div>
            ` : ''}
            
            <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
                ${isEnrolled 
                    ? '<button class="btn-primary" style="flex: 1;" onclick="closeModal(\'courseDetailModal\'); continueCourse(' + courseId + ')">Continue Learning</button>'
                    : '<button class="btn-primary" style="flex: 1;" onclick="closeModal(\'courseDetailModal\'); enrollCourse(' + courseId + ')">Enroll Now</button>'
                }
                <button class="btn-secondary" onclick="closeModal(\'courseDetailModal\')">Close</button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function viewCertificate(courseId) {
    const cert = studentData.certificates.find(c => c.courseId === courseId);
    if (cert) {
        showNotification('Opening certificate...', 'info');
        // In real implementation, would open certificate viewer
    }
}

function downloadCertificate(certId) {
    showNotification('Downloading certificate...', 'success');
    // In real implementation, would trigger download
}

function shareCertificate(certId) {
    showNotification('Share link copied to clipboard!', 'success');
    // In real implementation, would copy share link
}

// Modal Functions
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('userSession');
        window.location.href = 'index.html';
    }
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10B981' : type === 'info' ? '#4F46E5' : '#F59E0B'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function switchToSection(section) {
    const navItem = document.querySelector(`.nav-item[data-section="${section}"]`);
    if (navItem) {
        navItem.click();
    }
}

// Export functions for global access
window.continueCourse = continueCourse;
window.enrollCourse = enrollCourse;
window.viewCourseDetail = viewCourseDetail;
window.viewCertificate = viewCertificate;
window.downloadCertificate = downloadCertificate;
window.shareCertificate = shareCertificate;
window.closeModal = closeModal;
window.switchToSection = switchToSection;

