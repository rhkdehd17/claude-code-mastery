# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화 및 README**: 한국어로 작성
- **변수명, 함수명, 클래스명**: 영어 (코드 표준 준수)

### 예시
```javascript
// ✅ 올바른 방식
const calculateUserAge = (birthDate) => {
  // 사용자의 나이를 계산하는 함수
  return new Date().getFullYear() - birthDate.getFullYear();
};

// ❌피할 방식
const 사용자나이계산 = (birthDate) => {
  return new Date().getFullYear() - birthDate.getFullYear();
};
```

## 초기 설정

프로젝트가 아직 초기 단계입니다. 필요에 따라 다음을 추가하면 됩니다:
- 빌드/개발 명령어
- 코드 아키텍처 가이드
- 주요 파일 구조 설명
- 개발 워크플로우

---

프로젝트가 진행되면서 이 가이드를 업데이트합니다.
