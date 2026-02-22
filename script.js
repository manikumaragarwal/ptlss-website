document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.getAttribute('data-lucide') === 'menu') {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
    }

    // Gallery Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');

                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (category === 'All' || itemCategory === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Initialize Lucide Icons
    lucide.createIcons();

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.section, .card, .gallery-item, .hero-section h1, .hero-section p, .hero-section .btn');
    animateElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Contact Form Handling (Email via Web3Forms)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            submitBtn.innerHTML = 'Sending... <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 0.5rem;" class="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>';
            submitBtn.disabled = true;

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        showToast('Success', 'Message sent successfully! We will get back to you shortly.');
                        contactForm.reset();
                    } else {
                        console.log(response);
                        showToast('Error', json.message || 'Something went wrong!', true);
                    }
                })
                .catch(error => {
                    console.log(error);
                    showToast('Error', 'Something went wrong. Please try again later.', true);
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    if (window.lucide) {
                        lucide.createIcons();
                    }
                });
        });
    }

    // Admission Popup Logic (Only on pages where it exists)
    const admissionPopup = document.getElementById('admissionPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');

    if (admissionPopup && closePopupBtn) {
        // Show after 2 seconds
        setTimeout(() => {
            // Check if user has seen it recently (optional, using sessionStorage so it resets on new tab)
            if (!sessionStorage.getItem('popupSeen')) {
                admissionPopup.classList.add('show');
                sessionStorage.setItem('popupSeen', 'true');
            }
        }, 2000);

        // Close button
        closePopupBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent triggering the content click
            admissionPopup.classList.remove('show');
        });

        // Click on popup content goes to admissions page
        const popupContent = admissionPopup.querySelector('.popup-content');
        if (popupContent) {
            popupContent.addEventListener('click', () => {
                window.location.href = 'admissions.html';
            });
        }

        // Click outside to close (on the overlay itself)
        admissionPopup.addEventListener('click', (e) => {
            if (e.target === admissionPopup) {
                admissionPopup.classList.remove('show');
            }
        });
    }

    // Toast Notification Logic
    function showToast(title, message, isError = false) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast`;
        if (isError) {
            toast.style.borderLeftColor = '#EF4444'; // Red for error
        }

        toast.innerHTML = `
            <div class="toast-icon">
                <i data-lucide="${isError ? 'x-circle' : 'check-circle'}" size="24" ${isError ? 'color="#EF4444"' : ''}></i>
            </div>
            <div class="toast-content">
                <h4 ${isError ? 'style="color: #EF4444"' : ''}>${title}</h4>
                <p>${message}</p>
            </div>
        `;

        container.appendChild(toast);
        if (window.lucide) {
            lucide.createIcons();
        }

        // Trigger animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // Remove after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 400); // Wait for transition
        }, 4000);
    }
});
