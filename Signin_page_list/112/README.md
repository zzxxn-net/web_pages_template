# 시안 112 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브  
- **UI 구조:** 마이크로 인터랙션 중심  
- **인터랙션:** 스크롤 없는 고정 플로우  

---

## 콘셉트

다크 배경(#1a1a1c)과 IBM Plex Mono·Sans 기반의 **다크 아카이브** 무드에, **마이크로 인터랙션**(포커스 시 라벨 색·underline scaleX, 입력 포커스 시 GSAP scale, 버튼 hover/active 피드백)과 **스크롤 없는 고정 플로우**(overflow: hidden, 100dvh 내 고정·컴팩트 간격으로 한 화면 완결)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **다크 아카이브:** 배경 #1a1a1c, 서페이스 #252528, 앰버 액센트 #c9a227, IBM Plex Mono 타이틀·라벨·버튼, IBM Plex Sans 본문.
- **마이크로 인터랙션:** 포커스 시 라벨 색·입력 border/box-shadow; 필드 하단 ::after underline scaleX(1); 입력 포커스 시 GSAP으로 필드 scale(1.002); 버튼 hover translateY(-1px)·box-shadow, active 눌림; invalid 시 s112-shake.
- **스크롤 없는 고정 플로우:** `.signup-fixed` overflow: hidden, `.s112-inner` min-height 100dvh, padding·gap·폰트 크기 축소로 한 뷰포트 내 완결.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 360px 폼.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 360px로 PC·모바일 전 범위 대응, 스크롤 없이 한 화면 유지.
