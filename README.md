# 개발자 웹이력서 (Developer Web Portfolio)

> HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 포트폴리오 웹사이트

## 📋 프로젝트 개요

이 프로젝트는 개발자를 위한 현대적이고 반응형의 웹 포트폴리오 사이트입니다.
자신의 경력, 기술, 프로젝트를 효과적으로 소개할 수 있는 공간입니다.

### ✨ 주요 기능

- 📱 완벽한 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🎨 TailwindCSS를 활용한 현대적 UI
- ⚡ Vanilla JavaScript로 동적 기능 구현
- 🔗 부드러운 스크롤 네비게이션
- 📱 모바일 친화적 메뉴
- 🚀 빠른 로딩 속도

## 🛠 기술 스택

- **마크업**: HTML5
- **스타일링**: CSS3, TailwindCSS (CDN)
- **스크립트**: Vanilla JavaScript
- **배포**: GitHub Pages

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
├── CLAUDE.md                 # Claude Code 지침
└── README.md                 # 이 파일
```

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone <repository-url>
cd developer-portfolio
```

### 2. 로컬 서버 실행
```bash
# Python 3 사용
python -m http.server 8000

# 또는 Node.js 사용
npx http-server
```

### 3. 브라우저 접속
```
http://localhost:8000
```

## 📝 컨텐츠 수정

### 프로필 정보 수정
`index.html`의 프로필 섹션을 수정합니다:
```html
<h2 class="text-4xl font-bold">개발자 이름</h2>
<p class="text-lg text-gray-600">직책 / 직무</p>
```

### 프로필 이미지 추가
1. `assets/images/` 폴더에 이미지 파일 추가
2. `index.html`에서 이미지 경로 업데이트

### 경력 추가
`index.html`의 Experience 섹션에 추가:
```html
<div class="border-l-4 border-blue-600 pl-4">
    <h4 class="text-xl font-semibold">직책</h4>
    <p class="text-sm text-gray-600">회사명 · 기간</p>
    <p class="text-gray-700 mt-2">설명</p>
</div>
```

### 기술 스택 수정
Skills 섹션의 태그를 추가/수정합니다.

### 프로젝트 추가
Projects 섹션에 프로젝트 카드를 추가합니다.

## 🎨 스타일링 가이드

### TailwindCSS 유틸리티 클래스
- **반응형 클래스**: `sm:`, `md:`, `lg:`, `xl:` 접두사 사용
- **여백**: `p-`, `m-`, `gap-` 클래스
- **색상**: `bg-blue-500`, `text-gray-700` 등
- [TailwindCSS 문서](https://tailwindcss.com/docs)

### 커스텀 CSS
복잡한 스타일은 `css/styles.css`에 추가합니다.

## 🌐 반응형 디자인 기준

| 화면 크기 | 기준 | 용도 |
|----------|------|------|
| ≤480px | `sm:` | 모바일 폰 |
| 481-768px | `md:` | 태블릿 |
| 769-1024px | `lg:` | 소형 데스크톱 |
| ≥1025px | `xl:` | 대형 데스크톱 |

## 📱 브라우저 호환성

- ✅ Chrome (최신)
- ✅ Firefox (최신)
- ✅ Safari (최신)
- ✅ Edge (최신)
- ✅ Mobile browsers

## 🚀 배포

### GitHub Pages 배포
1. GitHub 저장소 설정 → Pages
2. Source를 `main` 브랜치로 설정
3. 저장소가 `https://github.com/username/portfolio` 형식일 경우:
   - 배포 URL: `https://username.github.io/portfolio`

### 배포 전 체크리스트
- [ ] 모든 이미지 경로 확인 (상대 경로 사용)
- [ ] 외부 링크 동작 확인
- [ ] 모든 디바이스에서 레이아웃 확인
- [ ] 브라우저 호환성 테스트
- [ ] 메타 태그 설정 (title, description)
- [ ] 연락처 링크 확인

## 📚 참고 자료

- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/) - 브라우저 호환성 확인
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - 성능 분석

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 💬 문의

연락처: your.email@example.com

---

**행운을 빕니다! 멋진 포트폴리오를 완성하세요! 🎉**
