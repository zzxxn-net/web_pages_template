# 시안 86 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

밝고 깔끔한 **미래적 클린** 무드에, **단계 분할형(Progressive Form)**(1단계 기본 정보 → 2단계 비밀번호)과 **GSAP 기반 부드러운 전환**(로드 시 wrap 페이드인, 다음/이전 시 패널 fromTo 전환)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **미래적 클린:** 배경 #f8fafc, 카드 흰색·#e2e8f0 테두리, Inter·JetBrains Mono, 액센트 #0ea5e9, 미니멀한 라운드·섀도우.
- **단계 분할형(Progressive Form):** 1단계(이메일·이름) → 다음 → 2단계(비밀번호·비밀번호 확인) → 이전/가입하기. .s86-steps 인디케이터(1·2·연결선)로 진행 상태 표시.
- **GSAP 기반 부드러운 전환:** 로드 시 `.s86-wrap` 페이드인 + 위로 이동. goNext/goPrev 시 해당 `.s86-panel` fromTo(opacity 0, y 12 → opacity 1, y 0) 부드러운 전환.
- **중앙 정렬:** `.signup-fixed` + `.s86-wrap`으로 뷰포트 가로·세로 중앙, max-width 400px 반응형.
- **Enter:** 1단계에서 Enter 시 goNext()로 2단계 이동.

## 사용 의도 및 구조

- **MVP 회원가입:** 2단계 폼(기본 정보 → 비밀번호), 유효성 검사, 다음/이전/가입하기. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 대응.
