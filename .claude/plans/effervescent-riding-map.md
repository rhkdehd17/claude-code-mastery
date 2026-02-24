# 모던 다크 디자인 리디자인 계획

## Context
현재 포트폴리오는 라이트 모드 기반의 파란색/회색 팔레트를 사용하는 평범한 디자인입니다.
참고 이미지(Nuvé 패션 사이트)처럼 대담한 타이포그래피, 일관된 그리드, 세련된 다크 미학으로 전면 리디자인합니다.

## 디자인 방향

### 색상 팔레트 (다크 퍼스트)
- **배경**: `#0d0d0d` (거의 검정)
- **표면**: `#1a1a1a` (카드/섹션 구분)
- **보더**: `#2a2a2a` (subtle 구분선)
- **액센트**: `#e8ff00` (형광 yellow-green - 모던/포인트)
- **텍스트 기본**: `#f0f0f0` (거의 흰색)
- **텍스트 보조**: `#888888` (회색)

### 타이포그래피
- Google Fonts: **Inter** (본문) + **Space Grotesk** (헤딩)
- 히어로 헤딩: clamp(3rem, 8vw, 7rem) - 대담하고 크게
- 섹션 헤딩: 2.5rem~3rem, font-weight: 700~900
- 상단 라벨: 소문자 트래킹 와이드, 형광 액센트 색

### 레이아웃 일관성
- 전체 max-width: `1100px`, `mx-auto`
- 섹션 패딩: `py-24` (일관)
- 그리드 gap: `gap-6` 통일
- 반응형 기준점 동일하게 유지

---

## 수정 파일

### 1. `index.html` — 주요 변경사항

#### `<head>` 섹션
- Google Fonts 추가: Inter, Space Grotesk
- `<html class="dark">` 기본값으로 다크 모드 설정
- meta theme-color 다크 색으로 업데이트

#### `<nav>` 리디자인
- 배경: `bg-[#0d0d0d] border-b border-[#2a2a2a]`
- 로고: 텍스트 기반, 형광 액센트 점(·) 추가
- 메뉴: 간격 넓히고 소문자 트래킹 스타일
- 다크모드 토글 버튼 유지 (라이트/다크 전환용)

#### `#profile` → Hero 섹션 리디자인
- 대형 헤딩: "FRONTEND DEVELOPER" — clamp 폰트, 대문자
- 서브: 이름 + 소개 한줄 요약
- CTA 버튼 2개: 형광 배경 버튼 + 아웃라인 버튼
- 배경: 미묘한 노이즈 텍스처 or 그리드 패턴 (CSS only)
- 하단 스크롤 인디케이터 추가

#### `#about` 섹션
- 통계 카드: 큰 숫자 + 보더 라인 스타일 (배경 없이 언더라인)
- 텍스트: 2컬럼 레이아웃 (데스크톱)
- 섹션 라벨: `[ 01 — ABOUT ]` 스타일 번호 부여

#### `#experience` 섹션
- 타임라인 왼쪽 세로 선: `border-l-2 border-[#2a2a2a]`
- 각 항목: 연도 레이블(형광) + 회사명(크게) + 역할(보조)
- 호버 시 왼쪽 보더 형광으로 변환

#### `#skills` 섹션
- 3그룹 → 단일 플렉스 랩 레이아웃으로 통합
- 기술 태그: 아웃라인 스타일 (`border border-[#2a2a2a]`) 기본, 호버 시 형광 보더
- 카테고리 헤딩 제거 or 소형 라벨로 변경

#### `#projects` 섹션
- 카드: 배경 `#1a1a1a`, 보더 `#2a2a2a`
- 썸네일: 현재 그라디언트 유지하되 색상 조정 (모노크롬/형광 계열)
- 필터 버튼: 언더라인 스타일 탭으로 변경
- 프로젝트 번호 표시: `01 / 02 / 03`

#### `#education` 섹션
- 아이콘 없애고 텍스트 중심 레이아웃
- 수평 구분선으로 항목 구분

#### `#contact` 섹션
- 대형 CTA 텍스트: "LET'S WORK TOGETHER"
- 3개 카드 → 수평 링크 리스트로 단순화
- 이메일 크게 표시

#### `<footer>`
- 단순 1줄: 이름 + 저작권 + 현재 연도

---

### 2. `css/styles.css` — 전면 교체

```css
/* 추가/변경 내용 */
:root {
  --bg: #0d0d0d;
  --surface: #1a1a1a;
  --border: #2a2a2a;
  --accent: #e8ff00;
  --text: #f0f0f0;
  --muted: #888888;
}

/* 폰트 패밀리 적용 */
body { font-family: 'Inter', sans-serif; background: var(--bg); }
h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }

/* 히어로 대형 텍스트 */
.hero-title { font-size: clamp(3rem, 8vw, 7rem); line-height: 0.95; }

/* 섹션 번호 라벨 */
.section-label { /* [ 01 — SECTION ] 스타일 */ }

/* 기술 태그 재스타일링 */
.skill-tag { border: 1px solid var(--border); background: transparent; }
.skill-tag:hover { border-color: var(--accent); color: var(--accent); }

/* 프로젝트 카드 */
.card { background: var(--surface); border: 1px solid var(--border); }
.card:hover { border-color: var(--accent); }

/* 필터 탭 */
.filter-btn { border-bottom: 2px solid transparent; }
.filter-btn.active { border-color: var(--accent); color: var(--accent); }

/* 경력 타임라인 */
.timeline-item:hover { border-left-color: var(--accent); }

/* CTA 버튼 */
.btn-primary { background: var(--accent); color: #000; }
.btn-outline { border: 1px solid var(--border); color: var(--text); }

/* 라이트 모드 오버라이드 (토글 시) */
html:not(.dark) { --bg: #f8f8f8; --surface: #fff; ... }
```

---

### 3. `js/script.js` — 최소 변경
- 기존 로직 그대로 유지
- 다크모드 토글: 기본 상태를 `dark`로 시작하도록 초기화 로직 수정
- `localStorage` 기본값 `'dark'`로 변경

---

## 구현 순서

1. `<head>` — Google Fonts 링크 + CSS 변수 기반 팔레트 추가
2. `css/styles.css` — CSS 변수 + 핵심 컴포넌트 스타일 전면 교체
3. `index.html` — 섹션별 순차 리디자인 (nav → hero → about → experience → skills → projects → education → contact → footer)
4. `js/script.js` — 다크모드 기본값 수정

---

## 검증 방법

1. `python -m http.server 8000` 실행 후 `http://localhost:8000` 접속
2. 각 섹션 스크롤하며 레이아웃/간격 확인
3. 브라우저 개발자 도구에서 모바일(375px), 태블릿(768px), 데스크톱(1280px) 확인
4. 다크/라이트 토글 버튼 동작 확인
5. 스크롤 애니메이션, 프로젝트 필터, 네비게이션 활성화 상태 확인
