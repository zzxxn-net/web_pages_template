# 시안 88 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스  
- **UI 구조:** 마이크로 인터랙션 중심  
- **인터랙션:** 상태 변화 강조  

---

## 콘셉트

다크 톤·그리드 배경·퍼플 액센트의 **실험적 인터페이스** 무드에, **마이크로 인터랙션 중심**(포커스 시 필드 scale·라벨 색·테두리 글로우·버튼 호버 scale)과 **상태 변화 강조**(invalid 시 빨간 테두리/메시지, valid 시 녹색 ✓ 표시)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **실험적 인터페이스:** 배경 #0c0c0e·20px 그리드 패턴, Syne·JetBrains Mono, 카드 반투명·backdrop-filter, 액센트 #8b5cf6.
- **마이크로 인터랙션 중심:** 포커스 시 `.s88-field--focused`로 필드 scale(1.01)·라벨 액센트 색·입력창 테두리·글로우. 비밀번호 보기 버튼 호버 시 scale(1.03). 제출 버튼 호버 시 translateY(-2px)·shadow 강화.
- **상태 변화 강조:** invalid 시 `.s88-field--invalid`(빨간 테두리·에러 문구). valid 시 `.s88-field--valid`(우측 녹색 ✓ 표시).
- **중앙 정렬:** `.signup-fixed` + `.s88-wrap`으로 뷰포트 가로·세로 중앙, max-width 400px 반응형.
- **GSAP:** 로드 시 `.s88-wrap` 페이드인 + `.s88-field` stagger 순차 등장.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 대응.
