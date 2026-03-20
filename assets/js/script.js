// ============================================
// SCRIPT PRINCIPAL - Dra. Fernanda Aguiar v2.0
// Otimizado para Performance e Acessibilidade
// ============================================

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.style.display = 'none';
        });
    });
}

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Validação básica
        if (!name || !email || !phone || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Enviar para WhatsApp
        const whatsappMessage = `Olá Dra. Fernanda! Meu nome é ${name}. Email: ${email}. Telefone: ${phone}. Mensagem: ${message}`;
        const whatsappUrl = `https://wa.me/5542991638636?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        
        // Limpar formulário
        contactForm.reset();
        alert('Redirecionando para WhatsApp...');
    });
}

// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador a cards e seções
document.querySelectorAll('.service-card, .treatment-item, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Navbar sticky com shadow
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }
});

// Animação de contadores (se necessário)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Lazy loading de imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Analytics e tracking (comentado - descomentar se usar Google Analytics)
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/

// Função para rastrear cliques em botões
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Botão clicado:', this.textContent);
    });
});

// Verificar suporte a recursos modernos
console.log('Site carregado com sucesso!');
console.log('Navegador suporta CSS Grid:', CSS.supports('display', 'grid'));
console.log('Navegador suporta Flexbox:', CSS.supports('display', 'flex'));
