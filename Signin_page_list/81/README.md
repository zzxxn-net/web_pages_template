# 시안 81 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미니멀 라이트  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

라이트 배경(#f0fdfa)·티얼 액센트(#0d9488)의 **미니멀 라이트** 무드에, **2단계 분할**(기본 정보 → 비밀번호)과 **GSAP 기반 부드러운 전환**을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **미니멀 라이트:** 배경 #f0fdfa, 흰색 카드, Plus Jakarta Sans·JetBrains Mono, 틸 액센트 #0d9488, 에러 #dc2626.
- **단계 분할형:** 1단계(이메일·이름) → 다음 → 2단계(비밀번호·비밀번호 확인) → 이전/가입하기. 인디케이터 점(1·2)·연결선으로 진행 상태 표시.
- **GSAP 전환:** 로드 시 `.s81-wrap` 페이드인, 단계 전환 시 패널 부드러운 전환.
- **반응형:** clamp·100dvh·max-width 400px.

## 사용 의도 및 구조

- **MVP 회원가입:** 2단계 폼, 유효성 검사, HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.
