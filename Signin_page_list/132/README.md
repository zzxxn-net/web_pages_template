# 시안 132 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브  
- **UI 구조:** 비대칭 레이아웃  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

다크 배경(#0d0d0d)·IBM Plex Mono/Sans·골드 악센트(#c9a227) 기반의 **다크 아카이브** 무드에, **비대칭 레이아웃**(PC에서 좌측 브랜딩·우측 폼 2열 그리드, 모바일에서 상하 배치)과 **GSAP 기반 부드러운 전환**(inner 페이드 인 → aside 왼쪽에서 슬라이드 → formWrap 오른쪽에서 슬라이드 → 필드 stagger 등장)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **다크 아카이브:** 배경 #0d0d0d, 폼 카드 #1a1a1a, border rgba(255,255,255,0.08), 골드 악센트 #c9a227, IBM Plex Mono + Sans + Noto Sans KR.
- **비대칭 레이아웃:** max-width 960px 2열 그리드(1fr 1fr), 좌측 aside(Archive 라벨·타이틀·태그라인), 우측 form-wrap(입력 폼). 640px 이하에서 1열·상하 배치·중앙 정렬.
- **GSAP 기반 부드러운 전환:** 로드 시 inner opacity 0→1, aside x -24→0, formWrap x 24→0, fields y 12→0 stagger. 포커스/유효/에러 시 border·box-shadow·라벨 색 transition.
- **중앙 정렬:** signup-fixed·s132-inner 가로·세로 중앙, 모바일에서 aside·form 모두 중앙.
- **반응형:** clamp·100dvh·max-width 960px·640px 브레이크포인트로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 960px·640px 미디어쿼리로 PC·모바일 전 범위 대응.
