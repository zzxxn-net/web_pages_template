# 시안 80 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

다크 톤·그리드 배경·보라 액센트(#a78bfa)의 **실험적 인터페이스** 무드에, **2단계 분할**(기본 정보 → 비밀번호)과 **GSAP 기반 부드러운 전환**(카드 등장·단계 전환 시 패널 페이드인)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **실험적 인터페이스:** 배경 #0d0d0f·24px 그리드 패턴, Syne·JetBrains Mono, 카드 반투명·backdrop-filter, 액센트 #a78bfa, 에러 #f87171.
- **단계 분할형(Progressive Form):** 1단계(이메일·이름) → 다음 → 2단계(비밀번호·비밀번호 확인) → 이전/가입하기. 인디케이터 점(1·2)·연결선으로 진행 상태 표시.
- **GSAP 기반 부드러운 전환:** 로드 시 `.s80-wrap` 페이드인 + 위로 이동. `goNext`/`goPrev` 시 해당 패널 `fromTo(opacity 0, y 12 → opacity 1, y 0)` 부드러운 전환.
- **중앙 정렬:** `.signup-fixed` + `.s80`로 뷰포트 기준 가로·세로 중앙, PC·모바일 반응형.
- **Enter:** 1단계에서 Enter 시 `goNext()`로 2단계 이동.

## 사용 의도 및 구조

- **MVP 회원가입:** 2단계 폼(기본 정보 → 비밀번호), 유효성 검사, 다음/이전/가입하기. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 대응.
