# CLAUDE.md

이 파일은 이 저장소의 코드 작업 시 Claude Code(claude.ai/code)에 대한 지침을 제공합니다.

---

## 프로젝트 개요

**개발자 웹이력서(Developer Web Portfolio)**

HTML, CSS, JavaScript, TailwindCSS를 활용하여 반응형 개발자 웹이력서를 개발하는 프로젝트입니다. 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 포트폴리오 사이트입니다.

---

## 📋 기술 스택

- **마크업**: HTML5
- **스타일링**: CSS3, TailwindCSS (CDN)
- **동적 기능**: Vanilla JavaScript (No Framework)
- **배포**: GitHub Pages (예정)

---

## 📁 프로젝트 구조

```
.
├── index.html                 # 메인 HTML 파일
├── css/
│   └── styles.css            # 커스텀 CSS 스타일
├── js/
│   └── script.js             # JavaScript 기능
├── assets/
│   ├── images/               # 이미지 자산
│   └── icons/                # 아이콘 자산
├── ROADMAP.md                # 개발 로드맵
├── CLAUDE.md                 # 이 파일
└── README.md                 # 프로젝트 설명 (예정)
```

### 주요 섹션 구조 (index.html)
- **Header**: 네비게이션, 프로필 정보
- **About**: 자기소개
- **Experience**: 경력 기록
- **Skills**: 기술 스택
- **Projects**: 프로젝트 포트폴리오
- **Education**: 학력
- **Contact**: 연락처

---

## 🔧 개발 명령어

### 로컬 서버 실행 (선택)
```bash
# Python 3 사용
python -m http.server 8000

# Node.js 사용
npx http-server
```
브라우저에서 `http://localhost:8000` 접속

### 파일 변경 확인
- 개발 중 `index.html`, `css/styles.css`, `js/script.js` 직접 편집
- 브라우저에서 새로고침(Cmd+R 또는 F5)하여 변경 사항 확인

### TailwindCSS 유틸리티 클래스
- CDN 방식 사용 (빌드 프로세스 없음)
- 필요시 커스텀 CSS를 `css/styles.css`에 추가

---

## 🎨 스타일링 가이드

### Tailwind 활용
- 반응형 클래스 활용: `sm:`, `md:`, `lg:`, `xl:`
- 색상 팔레트: `bg-blue-500`, `text-gray-700` 등
- 간격 유틸리티: `p-4`, `m-2`, `gap-6` 등

### 커스텀 CSS
- 복잡한 애니메이션이나 고급 스타일은 `css/styles.css`에 작성
- TailwindCSS로 표현 불가능한 경우만 커스텀 CSS 사용

---

## 🧠 JavaScript 구조

```javascript
// js/script.js 기본 구조
// 1. DOM 요소 선택
// 2. 이벤트 리스너 등록
// 3. 함수 정의
// 4. 초기화 코드

// 예상 기능:
// - 모바일 메뉴 토글
// - 스무스 스크롤
// - 활성 네비게이션 업데이트
// - 프로젝트 필터링 (선택)
// - 다크 모드 토글 (선택)
```

---

## 🌐 반응형 디자인 기준

| 화면 크기 | Tailwind 클래스 | 용도 |
|----------|-----------------|------|
| ≤480px | 기본 + `sm:` | 모바일 폰 |
| 481-768px | `md:` | 태블릿 |
| 769-1024px | `lg:` | 소형 데스크톱 |
| ≥1025px | `xl:` | 대형 데스크톱 |

---

## 🌍 배포 준비

### GitHub Pages 배포 체크리스트
- [ ] 모든 이미지 경로가 상대 경로인지 확인
- [ ] 외부 링크 (GitHub, LinkedIn 등) 정상 동작 확인
- [ ] 모바일, 태블릿, 데스크톱에서 레이아웃 확인
- [ ] 모든 브라우저 호환성 테스트 완료
- [ ] 메타 태그 (title, description) 설정
- [ ] favicon 추가 (선택)

---

## 📝 언어 및 커뮤니케이션 규칙

### 기본 응답 언어
**한국어로 모든 응답을 작성합니다.**

### 코드 주석
```javascript
// 한국어로 작성합니다
// 함수의 목적, 매개변수, 반환값을 명확히 설명합니다
function toggleMenu() {
  // 모바일 메뉴 표시/숨김 토글
}
```

```html
<!-- HTML 주석도 한국어로 작성합니다 -->
<!-- 네비게이션 섹션 -->
<nav class="navbar">
  <!-- 메뉴 항목 -->
</nav>
```

```css
/* CSS 주석 - 한국어 작성 */
/* 프로필 섹션 스타일링 */
.profile {
  /* 배경색 설정 */
}
```

### 커밋 메시지
모든 커밋 메시지는 **한국어**로 작성합니다.

```
예시:
- "HTML 마크업 초기 구조 작성"
- "About 섹션 스타일링 완료"
- "모바일 메뉴 토글 기능 추가"
- "반응형 디자인 적용 (태블릿 최적화)"
- "프로젝트 카드 컴포넌트 개선"
```

### 문서화
- README.md, ROADMAP.md 등 모든 마크다운 문서: **한국어**
- 주석, 설명글: **한국어**

### 변수명과 함수명
**JavaScript, CSS 클래스 등 코드 식별자는 영어로 작성합니다.**

```javascript
// 권장 ✅
const mainNavigation = document.querySelector('.nav');
function toggleMobileMenu() {}
function filterProjects(category) {}

// 비권장 ❌
const 주메뉴 = document.querySelector('.nav');
function 모바일메뉴토글() {}
```

```css
/* 권장 ✅ */
.profile-section { }
.skill-tag { }
.project-card { }

/* 비권장 ❌ */
.프로필섹션 { }
.스킬태그 { }
```

---

## 📚 ROADMAP 참조

자세한 개발 계획은 `ROADMAP.md`를 참조하세요. 다음 5가지 Phase로 진행됩니다:

1. **Phase 1**: 프로젝트 초기화 및 구조 설계
2. **Phase 2**: UI/UX 디자인 및 레이아웃 구현
3. **Phase 3**: JavaScript 기능 추가
4. **Phase 4**: 반응형 디자인 및 최적화
5. **Phase 5**: 테스트 및 배포

---

## 💡 개발 팁

- 한 번에 한 섹션씩 집중적으로 개발하기
- 각 섹션 완성 후 모든 디바이스에서 테스트하기
- TailwindCSS 유틸리티 우선 사용 (커스텀 CSS는 필요할 때만)
- 성능 최적화: 이미지 압축, 불필요한 CSS 제거 등

---

## 🔗 유용한 링크

- [TailwindCSS 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - 브라우저 호환성 확인
