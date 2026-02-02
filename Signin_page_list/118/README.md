# 시안 118 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린  
- **UI 구조:** 단일 포커스 입력 흐름  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

밝은 배경(#f8fafc)·스카이 액센트(#0ea5e9)·Outfit 폰트 기반의 **미래적 클린** 무드에, **단일 포커스 입력 흐름**(포커스된 필드만 강조·나머지 필드 디밍)과 **GSAP 기반 부드러운 전환**(포커스 이동 시 opacity·scale 애니메이션, 진입 시 from 애니메이션)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **미래적 클린:** 배경 #f8fafc, 입력 #fff, 액센트 #0ea5e9, Outfit, 12px 라운드·미니멀 라인.
- **단일 포커스:** 포커스된 필드만 .s118-field--active(풀 opacity·scale 1·테두리·글로우); 나머지는 .s118-field--dimmed(opacity 0.55·scale 0.995).
- **GSAP 전환:** onFocus 시 활성 필드 to(1, 1), 디밍 필드 to(0.55, 0.995); DOMContentLoaded 시 inner·header·formWrap from 애니메이션.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 400px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
