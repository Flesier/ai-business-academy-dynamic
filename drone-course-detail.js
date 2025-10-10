// Drone Course Detail Page JavaScript

// Get drone course data from main script
const droneCourse = AppData.courses.find(c => c.id === 8);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('droneModulesList')) {
        renderDroneModules();
        setupDroneEnrollment();
    }
});

// Render drone modules
function renderDroneModules() {
    const container = document.getElementById('droneModulesList');
    if (!container || !droneCourse || !droneCourse.modules) return;
    
    container.innerHTML = '';
    
    droneCourse.modules.forEach((module, index) => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300';
        
        const colorClasses = [
            'bg-blue-600',
            'bg-orange-600',
            'bg-green-600',
            'bg-purple-600',
            'bg-blue-600',
            'bg-orange-600',
            'bg-green-600',
            'bg-purple-600',
            'bg-blue-600'
        ];
        
        const bgColor = colorClasses[index % colorClasses.length];
        
        moduleCard.innerHTML = `
            <div class="${bgColor} text-white p-6">
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <div class="text-sm font-semibold mb-2 opacity-90">Module ${module.id}</div>
                        <h3 class="text-2xl font-bold mb-2">${module.title}</h3>
                        <p class="text-blue-100 mb-4">${module.description}</p>
                    </div>
                    <div class="bg-white bg-opacity-20 rounded-lg px-4 py-2 ml-4">
                        <i class="fas fa-clock mr-2"></i>
                        <span class="font-semibold">${module.duration}h</span>
                    </div>
                </div>
            </div>
            
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
                            <i class="fas fa-list-ul text-blue-600 mr-2"></i>
                            Key Topics
                        </h4>
                        <ul class="space-y-2">
                            ${module.topics.slice(0, 4).map(topic => 
                                `<li class="flex items-start text-gray-700">
                                    <i class="fas fa-check text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                                    <span class="text-sm">${topic}</span>
                                </li>`
                            ).join('')}
                            ${module.topics.length > 4 ? 
                                `<li class="text-blue-600 text-sm font-medium ml-6">
                                    +${module.topics.length - 4} more topics
                                </li>` : ''}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
                            <i class="fas fa-target text-orange-600 mr-2"></i>
                            Learning Objectives
                        </h4>
                        <ul class="space-y-2">
                            ${module.learningObjectives.map(objective => 
                                `<li class="flex items-start text-gray-700">
                                    <i class="fas fa-arrow-right text-orange-600 mr-2 mt-1 flex-shrink-0"></i>
                                    <span class="text-sm">${objective}</span>
                                </li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 class="font-semibold text-gray-900 mb-2 flex items-center">
                        <i class="fas fa-wrench text-purple-600 mr-2"></i>
                        Practical Exercise
                    </h4>
                    <p class="text-gray-700 text-sm">${module.practicalExercise}</p>
                </div>
                
                <div class="flex flex-wrap gap-3">
                    <button onclick="showModuleDetail(${module.id})" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        <i class="fas fa-play mr-2"></i>Start Module
                    </button>
                    <button onclick="toggleModuleExpand(${module.id})" class="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        <i class="fas fa-info-circle mr-2"></i>Full Details
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(moduleCard);
    });
}

// Show module detail
function showModuleDetail(moduleId) {
    const module = droneCourse.modules.find(m => m.id === moduleId);
    if (!module) return;
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.id = 'moduleDetailModal';
    
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="text-sm text-gray-600 mb-1">Module ${module.id}</div>
                        <h2 class="text-2xl font-bold text-gray-900">${module.title}</h2>
                    </div>
                    <button onclick="document.getElementById('moduleDetailModal').remove()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-2xl"></i>
                    </button>
                </div>
            </div>
            
            <div class="p-6">
                <div class="mb-6">
                    <p class="text-lg text-gray-700">${module.description}</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <i class="fas fa-book text-blue-600 mr-3"></i>
                            Complete Topic List
                        </h3>
                        <ul class="space-y-3">
                            ${module.topics.map(topic => 
                                `<li class="flex items-start">
                                    <i class="fas fa-check-circle text-green-600 mr-3 mt-1"></i>
                                    <span class="text-gray-700">${topic}</span>
                                </li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <i class="fas fa-bullseye text-orange-600 mr-3"></i>
                            Learning Outcomes
                        </h3>
                        <ul class="space-y-3">
                            ${module.learningObjectives.map(objective => 
                                `<li class="flex items-start">
                                    <i class="fas fa-star text-orange-600 mr-3 mt-1"></i>
                                    <span class="text-gray-700">${objective}</span>
                                </li>`
                            ).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 class="text-xl font-bold text-gray-900 mb-3 flex items-center">
                        <i class="fas fa-tools text-purple-600 mr-3"></i>
                        Hands-On Project
                    </h3>
                    <p class="text-gray-700 text-lg">${module.practicalExercise}</p>
                </div>
                
                <div class="flex justify-center gap-4">
                    <button class="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg">
                        <i class="fas fa-graduation-cap mr-2"></i>Enroll to Access
                    </button>
                    <button onclick="document.getElementById('moduleDetailModal').remove()" class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Toggle module expand
function toggleModuleExpand(moduleId) {
    showModuleDetail(moduleId);
}

// Setup drone enrollment
function setupDroneEnrollment() {
    const enrollBtns = document.querySelectorAll('#enrollDroneBtn, button:contains("Enroll")');
    const modal = document.getElementById('enrollmentModal');
    const closeModal = document.getElementById('closeModal');
    const form = document.getElementById('enrollmentForm');
    
    // Open modal on any enroll button click
    document.addEventListener('click', function(e) {
        if (e.target.textContent.includes('Enroll') || 
            e.target.textContent.includes('Start Learning')) {
            if (modal) {
                modal.classList.remove('hidden');
            }
        }
    });
    
    // Close modal
    if (closeModal && modal) {
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }
    
    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleDroneEnrollment(this);
        });
    }
}

// Handle drone enrollment
function handleDroneEnrollment(form) {
    const formData = new FormData(form);
    const inputs = form.querySelectorAll('input, select');
    
    const enrollmentData = {
        course: 'DIY Drone Development',
        name: inputs[0].value,
        email: inputs[1].value,
        experience: inputs[2].value,
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
    submitBtn.disabled = true;
    
    // Simulate enrollment process
    setTimeout(() => {
        // Store enrollment data
        localStorage.setItem('droneAcademyEnrollment', JSON.stringify(enrollmentData));
        
        // Show success message
        showSuccessMessage(enrollmentData.name);
        
        // Reset form
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Close modal
        document.getElementById('enrollmentModal').classList.add('hidden');
    }, 2000);
}

// Show success message
function showSuccessMessage(name) {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-600 text-white p-6 rounded-lg shadow-2xl z-50 animate-slide-in';
    successDiv.innerHTML = `
        <div class="flex items-center space-x-4">
            <div class="bg-white bg-opacity-20 rounded-full p-3">
                <i class="fas fa-check-circle text-2xl"></i>
            </div>
            <div>
                <div class="font-bold text-lg">Enrollment Successful!</div>
                <div class="text-sm text-green-100">Welcome to DIY Drone Academy, ${name}!</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.opacity = '0';
        successDiv.style.transform = 'translateX(100%)';
        setTimeout(() => successDiv.remove(), 300);
    }, 5000);
}

// Add custom styles for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slide-in {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .animate-slide-in {
        animation: slide-in 0.3s ease-out;
    }
`;
document.head.appendChild(style);

