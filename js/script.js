/**
 * 개발자 포트폴리오 메인 JavaScript 파일
 * 동적 기능 및 상호작용을 담당합니다.
 */

// DOM 요소 선택
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const darkModeBtn = document.getElementById('darkModeBtn');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const filterButtons = document.getElementById('filterButtons');
const navLinks = document.querySelectorAll('a[href^="#"]');

/**
 * 모바일 메뉴 토글 함수
 * 모바일 화면에서 메뉴의 표시/숨김을 전환합니다.
 */
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

/**
 * 다크 모드 아이콘 업데이트 함수
 * 다크 모드 상태에 따라 해/달 아이콘을 전환합니다.
 */
function updateDarkModeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

/**
 * 다크 모드 토글 함수
 * 라이트 모드와 다크 모드를 전환하고 localStorage에 저장합니다.
 */
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    updateDarkModeIcon();
}

/**
 * 프로젝트 필터링 함수
 * 프로젝트를 데이터 카테고리로 필터링합니다.
 * @param {string} category - 필터 카테고리
 */
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden-by-filter');
        } else {
            card.classList.add('hidden-by-filter');
        }
    });

    // 필터 버튼 활성화 상태 업데이트
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
}

/**
 * 스크롤 애니메이션 초기화 함수
 * Intersection Observer API를 사용하여 요소가 뷰포트에 진입할 때 애니메이션을 시작합니다.
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');

    // IntersectionObserver 지원 여부 확인
    if (!('IntersectionObserver' in window)) {
        // 미지원 브라우저: 모든 요소에 즉시 is-visible 클래스 추가
        animatedElements.forEach(el => {
            el.classList.add('is-visible');
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Profile 섹션은 초기 로드 시 항상 보이도록 설정
    const profileSection = document.getElementById('profile');
    if (profileSection) {
        profileSection.classList.add('is-visible');
    }
}

/**
 * 스무스 스크롤 처리
 * 네비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤합니다.
 */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // 모바일 메뉴 닫기
        if (window.innerWidth < 768) {
            mobileMenu.classList.remove('active');
        }

        // 대상 섹션으로 스크롤
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/**
 * 활성 네비게이션 업데이트
 * 현재 스크롤 위치에 따라 활성 네비게이션을 업데이트합니다.
 */
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('a[href^="#"]');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    allNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * 초기화 코드
 * 페이지 로드 시 필요한 초기 설정을 수행합니다.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 모바일 메뉴 버튼 이벤트 리스너
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // 다크 모드 버튼 이벤트 리스너
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }

    // 필터 버튼 이벤트 위임
    if (filterButtons) {
        filterButtons.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const category = e.target.dataset.filter;
                filterProjects(category);
            }
        });
    }

    // 스크롤 이벤트 리스너 (활성 네비게이션 업데이트)
    window.addEventListener('scroll', updateActiveNavigation);

    // 초기 활성 네비게이션 업데이트
    updateActiveNavigation();

    // 초기 다크 모드 아이콘 동기화
    updateDarkModeIcon();

    // 스크롤 애니메이션 초기화
    initScrollAnimations();
});

/**
 * 윈도우 리사이즈 이벤트
 * 윈도우 크기 변경 시 모바일 메뉴를 닫습니다.
 */
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.remove('active');
    }
});
