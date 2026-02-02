# 시안 85 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브  
- **UI 구조:** 단일 포커스 입력 흐름  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

어두운 톤·아카이브 느낌의 **다크 아카이브** 무드에, **단일 포커스 입력 흐름**(포커스된 필드만 강조·나머지 필드는 dim)과 **입력 반응형 애니메이션**(포커스 시 라벨·테두리 전환, GSAP 로드 페이드인)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **다크 아카이브:** 배경 #1c1917, 표면 #292524, 테두리 #44403c, Crimson Pro·Source Code Pro, 차분한 아카이브 톤.
- **단일 포커스 입력 흐름:** 포커스된 필드만 `.s85-field--focused`(opacity 1, scale 1). 나머지는 `.s85-field--dim`(opacity 0.45, scale 0.98)로 시각적 주의 집중.
- **입력 반응형 애니메이션:** 포커스 시 라벨 색·입력창 border/box-shadow 전환(CSS transition). 로드 시 GSAP으로 `.s85-wrap` 페이드인 + 위로 이동.
- **중앙 정렬:** `.signup-fixed` + `.s85-wrap`으로 뷰포트 가로·세로 중앙, max-width 400px 반응형.
- **GSAP:** 로드 시 `.s85-wrap` opacity 0 → 1, y 20 → 0.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 대응.
