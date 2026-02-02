# 시안 126 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 사이버 미니멀  
- **UI 구조:** 비대칭 레이아웃  
- **인터랙션:** 스크롤 없는 고정 플로우  

---

## 콘셉트

다크(#0a0c10)·시안 악센트(#22d3ee)·JetBrains Mono·Outfit 기반의 **사이버 미니멀** 무드에, **비대칭 레이아웃**(좌측 52% 타이틀·태그라인, 우측 42% 폼·모바일 시 세로 스택)과 **스크롤 없는 고정 플로우**(100dvh·overflow hidden·뷰포트 내 고정·모바일만 auto)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **사이버 미니멀:** 배경 #0a0c10, 입력 #12141a, JetBrains Mono(라벨·입력·버튼), 시안 #22d3ee, 8px 라운드.
- **비대칭 레이아웃:** PC에서 aside 52%·form-wrap 42%, gap clamp; 모바일에서 column·aside 위·form 아래.
- **스크롤 없는 고정 플로우:** main min-height 100dvh·overflow hidden, inner flex로 중앙·컴팩트 폼으로 스크롤 최소화.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 920px inner·360px form.
- **반응형:** clamp·640px 미디어쿼리로 PC·모바일 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·640px breakpoint로 PC·모바일 전 범위 대응.
