// Authentication and Routing System for AI Business Academy

// User Data Storage
const AuthSystem = {
    // Check if user is logged in
    isLoggedIn() {
        return localStorage.getItem('userSession') !== null;
    },
    
    // Get current user
    getCurrentUser() {
        const session = localStorage.getItem('userSession');
        return session ? JSON.parse(session) : null;
    },
    
    // Login user
    login(email, password) {
        // In a real system, this would validate against a backend
        // For demo purposes, we'll use simple validation
        
        // Check for admin credentials
        if (email === 'admin@aiacademy.com' && password === 'admin123') {
            const adminUser = {
                id: 'admin_1',
                email: email,
                name: 'Admin User',
                role: 'admin',
                avatar: 'A',
                loginTime: new Date().toISOString()
            };
            
            localStorage.setItem('userSession', JSON.stringify(adminUser));
            return { success: true, user: adminUser };
        }
        
        // Check for student credentials (any other email/password combo for demo)
        if (email && password) {
            const studentUser = {
                id: 'student_' + Date.now(),
                email: email,
                name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                role: 'student',
                avatar: email.charAt(0).toUpperCase(),
                loginTime: new Date().toISOString()
            };
            
            localStorage.setItem('userSession', JSON.stringify(studentUser));
            return { success: true, user: studentUser };
        }
        
        return { success: false, message: 'Invalid credentials' };
    },
    
    // Register new user
    register(name, email, password) {
        // In a real system, this would create a new user in the backend
        // For demo purposes, we'll create a student user
        
        if (!name || !email || !password) {
            return { success: false, message: 'All fields are required' };
        }
        
        const newUser = {
            id: 'student_' + Date.now(),
            email: email,
            name: name,
            role: 'student',
            avatar: name.charAt(0).toUpperCase(),
            registeredDate: new Date().toISOString(),
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('userSession', JSON.stringify(newUser));
        return { success: true, user: newUser };
    },
    
    // Logout user
    logout() {
        localStorage.removeItem('userSession');
        window.location.href = 'index.html';
    },
    
    // Route to appropriate dashboard
    routeToDashboard() {
        const user = this.getCurrentUser();

        if (!user) {
            window.location.href = 'index.html';
            return;
        }

        if (user.role === 'admin') {
            window.location.href = 'admin-dashboard.html';
        } else {
            window.location.href = 'student-dashboard.html';
        }
    },
    
    // Check if user has admin role
    isAdmin() {
        const user = this.getCurrentUser();
        return user && user.role === 'admin';
    },
    
    // Protect admin pages
    requireAdmin() {
        if (!this.isAdmin()) {
            alert('Access denied. Admin privileges required.');
            this.routeToDashboard();
        }
    },
    
    // Protect authenticated pages
    requireAuth() {
        if (!this.isLoggedIn()) {
            alert('Please login to access this page.');
            window.location.href = 'index.html';
        }
    }
};

// Login Modal Handler
function setupLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');
    
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
            loginModal.classList.add('flex');
        });
    }
    
    if (closeLoginModal && loginModal) {
        closeLoginModal.addEventListener('click', () => {
            loginModal.classList.add('hidden');
            loginModal.classList.remove('flex');
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            const result = AuthSystem.login(email, password);
            
            if (result.success) {
                // Close modal
                if (loginModal) {
                    loginModal.classList.add('hidden');
                    loginModal.classList.remove('flex');
                }
                
                // Show success message
                showAuthNotification('Login successful! Redirecting...', 'success');
                
                // Redirect to appropriate dashboard
                setTimeout(() => {
                    AuthSystem.routeToDashboard();
                }, 1000);
            } else {
                showAuthNotification(result.message || 'Login failed', 'error');
            }
        });
    }
}

// Signup Modal Handler
function setupSignupModal() {
    const signupBtn = document.getElementById('signupBtn');
    const signupModal = document.getElementById('signupModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const signupForm = document.getElementById('signupForm');
    
    if (signupBtn && signupModal) {
        signupBtn.addEventListener('click', () => {
            signupModal.classList.remove('hidden');
            signupModal.classList.add('flex');
        });
    }
    
    if (closeSignupModal && signupModal) {
        closeSignupModal.addEventListener('click', () => {
            signupModal.classList.add('hidden');
            signupModal.classList.remove('flex');
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const name = `${firstName} ${lastName}`.trim();

            const result = AuthSystem.register(name, email, password);

            if (result.success) {
                // Close modal
                if (signupModal) {
                    signupModal.classList.add('hidden');
                    signupModal.classList.remove('flex');
                }

                // Show success message
                showAuthNotification('Registration successful! Redirecting...', 'success');

                // Redirect to student dashboard
                setTimeout(() => {
                    AuthSystem.routeToDashboard();
                }, 1000);
            } else {
                showAuthNotification(result.message || 'Registration failed', 'error');
            }
        });
    }
}

// Show notification
function showAuthNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-[9999] px-6 py-3 rounded-lg shadow-lg text-white ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize auth system on page load
document.addEventListener('DOMContentLoaded', () => {
    setupLoginModal();
    setupSignupModal();
    
    // Update UI based on login status
    const user = AuthSystem.getCurrentUser();
    if (user) {
        // User is logged in, update navigation
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        
        if (loginBtn && signupBtn) {
            loginBtn.textContent = 'Dashboard';
            loginBtn.onclick = () => AuthSystem.routeToDashboard();
            
            signupBtn.textContent = 'Logout';
            signupBtn.onclick = () => {
                if (confirm('Are you sure you want to logout?')) {
                    AuthSystem.logout();
                }
            };
        }
    }
});

// Export for use in other scripts
window.AuthSystem = AuthSystem;
