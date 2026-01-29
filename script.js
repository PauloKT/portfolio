// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Efeito de scroll na navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animação de scroll suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animação de fade-in ao fazer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .objective-card, .about-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Adicionar efeito de hover nos cards de projeto
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Atualizar ano no footer
const currentYear = new Date().getFullYear();
const footer = document.querySelector('.footer p');
if (footer) {
    footer.textContent = `© ${currentYear} Meu Portfólio. Todos os direitos reservados.`;
}

// Copiar email ao clicar (fallback caso o mailto não esteja configurado no Windows)
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

document.addEventListener('click', async (e) => {
    const link = e.target.closest && e.target.closest('a[data-email]');
    if (!link) return;

    const email = link.getAttribute('data-email');
    if (!email) return;

    try {
        if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(email);
            showToast(`Email copiado: ${email}`);
        } else {
            // Fallback antigo
            window.prompt('Copie o email:', email);
        }
    } catch {
        // Se clipboard falhar (permissão/arquivo local), ainda facilita a cópia
        window.prompt('Copie o email:', email);
    }
});

// Galeria de Imagens Modal
const galleryImages = [
    'Img/captura_reviva_1.png',
    'Img/captura_reviva_2.png',
    'Img/captura_on_1.png',
    'Img/captura_on_2.png',
    'Img/captura_quiz_2.png',
    'Img/captura_quiz_3.png'
];

let currentGalleryIndex = 0;

// Inicializar indicadores de slides do carrossel
function initGalleryDots() {
    const dotsContainer = document.getElementById('galleryDots');
    if (dotsContainer) {
        galleryImages.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = (e) => {
                e.stopPropagation();
                scrollToCarouselItem(index);
            };
            dotsContainer.appendChild(dot);
        });
    }
}

// Atualizar dots ao fazer scroll no carrossel
function updateCarouselDots() {
    const carousel = document.querySelector('.gallery-carousel');
    if (carousel) {
        const dots = document.querySelectorAll('.gallery-dot');
        const itemWidth = carousel.children[0]?.offsetWidth || 0;
        const scrollLeft = carousel.scrollLeft;
        const activeIndex = Math.round(scrollLeft / (itemWidth + 24)); // 24 é o gap
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }
}

// Rolar para item específico do carrossel
function scrollToCarouselItem(index) {
    const carousel = document.querySelector('.gallery-carousel');
    if (carousel) {
        const items = carousel.children;
        if (items[index]) {
            items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }
}

// Event listener para atualizar dots ao fazer scroll
const carousel = document.querySelector('.gallery-carousel');
if (carousel) {
    carousel.addEventListener('scroll', updateCarouselDots);
    carousel.addEventListener('touchend', updateCarouselDots);
}

// Inicializar dots ao carregar a página
window.addEventListener('load', initGalleryDots);
document.addEventListener('DOMContentLoaded', initGalleryDots);

function openGallery(index) {
    currentGalleryIndex = index;
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImg');
    modalImg.src = galleryImages[currentGalleryIndex];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeGallery(direction) {
    currentGalleryIndex += direction;
    
    // Loop nas imagens
    if (currentGalleryIndex >= galleryImages.length) {
        currentGalleryIndex = 0;
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = galleryImages.length - 1;
    }
    
    const modalImg = document.getElementById('galleryModalImg');
    modalImg.src = galleryImages[currentGalleryIndex];
}

// Fechar modal ao clicar no background
const galleryModal = document.getElementById('galleryModal');
if (galleryModal) {
    galleryModal.addEventListener('click', function(event) {
        if (event.target === this) {
            closeGallery();
        }
    });
}

// Suporte a teclas de navegação
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('galleryModal');
    if (modal.classList.contains('active')) {
        if (event.key === 'ArrowLeft') {
            changeGallery(-1);
        } else if (event.key === 'ArrowRight') {
            changeGallery(1);
        } else if (event.key === 'Escape') {
            closeGallery();
        }
    }
});
