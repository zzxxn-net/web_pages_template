# 시안 109 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 상태 변화 강조  

---

## 콘셉트

다크 배경·보라 액센트·Syne 폰트와 좌우 보더가 강조된 **실험적 인터페이스** 무드에, **풀스크린 몰입형**(100dvh·좌우 보더로 화면 전체 몰입)과 **상태 변화 강조**(touched·valid·invalid 시 테두리·배경·라벨 색·굵기 변화)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **실험적 인터페이스:** 배경 #0f0f12, Syne, 좌우 3px 보라(#a78bfa) 보더, border-radius 0, 비대칭적 강조.
- **풀스크린 몰입형:** `.s109-inner` min-height 100dvh, 좌우 보더로 뷰포트 전체 몰입, 폼 중앙 정렬.
- **상태 변화 강조:** `.s109-field--touched`(보라 테두리), `.s109-field--valid`(녹색 테두리·배경·라벨 굵게), `.s109-field--invalid`(빨간 테두리·배경·라벨 굵게), 제출 중 `.s109-btn--busy`.
- **중앙 정렬:** `.signup-fixed` + `.s109-inner` 뷰포트 가로·세로 중앙, max-width 380px 폼.
- **반응형:** clamp·100dvh·600px 보더 두께 조정으로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·600px 브레이크포인트로 PC·모바일 전 범위 대응.
