// Admin Dashboard JavaScript for AI Business Academy

// Mock Data
const mockData = {
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "student",
            enrolledCourses: 3,
            progress: 65,
            joined: "2025-09-15",
            status: "active"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            role: "student",
            enrolledCourses: 5,
            progress: 82,
            joined: "2025-08-20",
            status: "active"
        },
        {
            id: 3,
            name: "Mike Johnson",
            email: "mike@example.com",
            role: "student",
            enrolledCourses: 2,
            progress: 45,
            joined: "2025-10-01",
            status: "active"
        },
        {
            id: 4,
            name: "Sarah Williams",
            email: "sarah@example.com",
            role: "admin",
            enrolledCourses: 0,
            progress: 0,
            joined: "2025-07-10",
            status: "active"
        },
        {
            id: 5,
            name: "David Brown",
            email: "david@example.com",
            role: "student",
            enrolledCourses: 4,
            progress: 73,
            joined: "2025-09-05",
            status: "active"
        }
    ],
    
    courses: [
        {
            id: 1,
            title: "New Enterprises (MIT)",
            enrollments: 450,
            completions: 180,
            rating: 4.8,
            status: "active"
        },
        {
            id: 2,
            title: "Introduction to Finance (UIUC)",
            enrollments: 380,
            completions: 150,
            rating: 4.7,
            status: "active"
        },
        {
            id: 3,
            title: "Resilient Leadership (Harvard)",
            enrollments: 320,
            completions: 140,
            rating: 4.9,
            status: "active"
        },
        {
            id: 8,
            title: "DIY Drone Development",
            enrollments: 520,
            completions: 95,
            rating: 4.9,
            status: "active"
        }
    ],
    
    activities: [
        {
            type: "enrollment",
            user: "Emily Davis",
            course: "DIY Drone Development",
            time: "5 minutes ago",
            icon: "📚"
        },
        {
            type: "completion",
            user: "Robert Taylor",
            course: "New Enterprises (MIT)",
            time: "1 hour ago",
            icon: "✅"
        },
        {
            type: "registration",
            user: "Lisa Anderson",
            time: "2 hours ago",
            icon: "👤"
        },
        {
            type: "enrollment",
            user: "James Wilson",
            course: "Resilient Leadership",
            time: "3 hours ago",
            icon: "📚"
        },
        {
            type: "completion",
            user: "Maria Garcia",
            course: "Introduction to Finance",
            time: "5 hours ago",
            icon: "✅"
        }
    ]
};

// Dashboard State
const dashboardState = {
    currentSection: 'overview',
    sidebarOpen: true,
    filters: {
        userRole: '',
        userStatus: '',
        userSearch: ''
    }
};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeSidebar();
    loadOverviewData();
    loadActivityFeed();
    initializeCharts();
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
        overview: 'Dashboard Overview',
        users: 'User Management',
        courses: 'Course Management',
        analytics: 'Analytics & Reports',
        content: 'Content Management',
        settings: 'Settings'
    };
    
    document.getElementById('pageTitle').textContent = titles[section] || 'Dashboard';
    dashboardState.currentSection = section;
    
    // Load section-specific data
    loadSectionData(section);
}

function loadSectionData(section) {
    switch(section) {
        case 'users':
            loadUsersTable();
            break;
        case 'courses':
            loadCoursesGrid();
            break;
        case 'analytics':
            loadAnalyticsCharts();
            break;
        case 'content':
            loadContentManagement();
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

// Overview Data
function loadOverviewData() {
    // Update stat cards
    document.getElementById('totalUsers').textContent = '1,250';
    document.getElementById('totalEnrollments').textContent = '3,420';
    document.getElementById('totalCompletions').textContent = '1,180';
    document.getElementById('activeStudents').textContent = '890';
}

function loadActivityFeed() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;
    
    activityList.innerHTML = mockData.activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                ${activity.icon}
            </div>
            <div class="activity-content">
                <div class="activity-title">
                    ${activity.user}
                    ${activity.course ? `enrolled in ${activity.course}` : 'joined the platform'}
                </div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

// Charts
function initializeCharts() {
    // Check if Chart.js is available
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded, using mock charts');
        createMockCharts();
        return;
    }
    
    createEnrollmentChart();
    createPopularCoursesChart();
}

function createMockCharts() {
    // Create simple visual representations without Chart.js
    const enrollmentChart = document.getElementById('enrollmentChart');
    const popularCoursesChart = document.getElementById('popularCoursesChart');
    
    if (enrollmentChart) {
        enrollmentChart.parentElement.innerHTML = '<div style="padding: 2rem; text-align: center; color: #6B7280;">Chart visualization (Chart.js library required)</div>';
    }
    
    if (popularCoursesChart) {
        popularCoursesChart.parentElement.innerHTML = '<div style="padding: 2rem; text-align: center; color: #6B7280;">Chart visualization (Chart.js library required)</div>';
    }
}

function createEnrollmentChart() {
    const ctx = document.getElementById('enrollmentChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Enrollments',
                data: [120, 145, 180, 195, 220, 250],
                borderColor: '#4F46E5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function createPopularCoursesChart() {
    const ctx = document.getElementById('popularCoursesChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Drone Dev', 'MIT Enterprise', 'Finance', 'Leadership'],
            datasets: [{
                label: 'Enrollments',
                data: [520, 450, 380, 320],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Users Table
function loadUsersTable() {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;
    
    const filteredUsers = filterUsers(mockData.users);
    
    tbody.innerHTML = filteredUsers.map(user => `
        <tr>
            <td>
                <div class="user-cell">
                    <div class="user-avatar">${user.name.charAt(0)}</div>
                    <div class="user-info">
                        <div class="user-name">${user.name}</div>
                        <div class="user-email">${user.email}</div>
                    </div>
                </div>
            </td>
            <td>${user.email}</td>
            <td>
                <span class="badge badge-${user.role}">${user.role}</span>
            </td>
            <td>${user.enrolledCourses}</td>
            <td>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${user.progress}%"></div>
                </div>
                <span style="font-size: 0.75rem; color: #6B7280;">${user.progress}%</span>
            </td>
            <td>${formatDate(user.joined)}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn" onclick="viewUser(${user.id})">View</button>
                    <button class="action-btn" onclick="editUser(${user.id})">Edit</button>
                    <button class="action-btn" onclick="deleteUser(${user.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterUsers(users) {
    return users.filter(user => {
        const roleMatch = !dashboardState.filters.userRole || user.role === dashboardState.filters.userRole;
        const statusMatch = !dashboardState.filters.userStatus || user.status === dashboardState.filters.userStatus;
        const searchMatch = !dashboardState.filters.userSearch || 
            user.name.toLowerCase().includes(dashboardState.filters.userSearch.toLowerCase()) ||
            user.email.toLowerCase().includes(dashboardState.filters.userSearch.toLowerCase());
        
        return roleMatch && statusMatch && searchMatch;
    });
}

// Courses Grid
function loadCoursesGrid() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;
    
    grid.innerHTML = mockData.courses.map(course => {
        const completionRate = ((course.completions / course.enrollments) * 100).toFixed(1);
        
        return `
            <div class="course-card">
                <div class="course-header">
                    <div class="course-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                        📚
                    </div>
                    <button class="course-menu">⋮</button>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">
                    ${course.enrollments} students enrolled • ${course.completions} completed
                </p>
                <div class="course-stats">
                    <div class="course-stat">
                        <span class="course-stat-label">Completion Rate</span>
                        <span class="course-stat-value">${completionRate}%</span>
                    </div>
                    <div class="course-stat">
                        <span class="course-stat-label">Rating</span>
                        <span class="course-stat-value">⭐ ${course.rating}</span>
                    </div>
                </div>
                <div class="course-actions">
                    <button class="btn-secondary" style="flex: 1;" onclick="viewCourse(${course.id})">View</button>
                    <button class="btn-primary" style="flex: 1;" onclick="editCourse(${course.id})">Edit</button>
                </div>
            </div>
        `;
    }).join('');
}

// Analytics Charts
function loadAnalyticsCharts() {
    // Load additional analytics charts
    console.log('Loading analytics charts...');
}

// Content Management
function loadContentManagement() {
    const modulesList = document.getElementById('modulesList');
    if (modulesList) {
        modulesList.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: #6B7280;">
                <p>Content management interface will be loaded here</p>
                <p style="margin-top: 1rem;">Manage course modules, resources, and announcements</p>
            </div>
        `;
    }
}

// Event Listeners
function setupEventListeners() {
    // User filters
    const userSearch = document.getElementById('userSearch');
    const roleFilter = document.getElementById('roleFilter');
    const statusFilter = document.getElementById('statusFilter');
    
    if (userSearch) {
        userSearch.addEventListener('input', (e) => {
            dashboardState.filters.userSearch = e.target.value;
            loadUsersTable();
        });
    }
    
    if (roleFilter) {
        roleFilter.addEventListener('change', (e) => {
            dashboardState.filters.userRole = e.target.value;
            loadUsersTable();
        });
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', (e) => {
            dashboardState.filters.userStatus = e.target.value;
            loadUsersTable();
        });
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabName) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const targetTab = document.getElementById(`${tabName}Tab`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// User Actions
function viewUser(userId) {
    const user = mockData.users.find(u => u.id === userId);
    if (!user) return;
    
    const modal = document.getElementById('userModal');
    const modalBody = document.getElementById('userModalBody');
    
    modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
                <strong>Name:</strong> ${user.name}
            </div>
            <div>
                <strong>Email:</strong> ${user.email}
            </div>
            <div>
                <strong>Role:</strong> <span class="badge badge-${user.role}">${user.role}</span>
            </div>
            <div>
                <strong>Enrolled Courses:</strong> ${user.enrolledCourses}
            </div>
            <div>
                <strong>Progress:</strong> ${user.progress}%
            </div>
            <div>
                <strong>Joined:</strong> ${formatDate(user.joined)}
            </div>
            <div>
                <strong>Status:</strong> ${user.status}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function editUser(userId) {
    alert(`Edit user ${userId} - Feature coming soon`);
}

function deleteUser(userId) {
    if (confirm('Are you sure you want to delete this user?')) {
        alert(`User ${userId} deleted - Feature coming soon`);
    }
}

// Course Actions
function viewCourse(courseId) {
    const course = mockData.courses.find(c => c.id === courseId);
    if (!course) return;
    
    const modal = document.getElementById('courseModal');
    const modalBody = document.getElementById('courseModalBody');
    
    const completionRate = ((course.completions / course.enrollments) * 100).toFixed(1);
    
    modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
                <strong>Title:</strong> ${course.title}
            </div>
            <div>
                <strong>Enrollments:</strong> ${course.enrollments}
            </div>
            <div>
                <strong>Completions:</strong> ${course.completions}
            </div>
            <div>
                <strong>Completion Rate:</strong> ${completionRate}%
            </div>
            <div>
                <strong>Rating:</strong> ⭐ ${course.rating}
            </div>
            <div>
                <strong>Status:</strong> ${course.status}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function editCourse(courseId) {
    alert(`Edit course ${courseId} - Feature coming soon`);
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
        // Clear session data
        localStorage.removeItem('adminSession');
        // Redirect to login page
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
    // Simple notification system
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10B981' : '#4F46E5'};
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

// Export functions for global access
window.viewUser = viewUser;
window.editUser = editUser;
window.deleteUser = deleteUser;
window.viewCourse = viewCourse;
window.editCourse = editCourse;
window.closeModal = closeModal;

