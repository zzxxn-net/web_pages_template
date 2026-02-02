# 시안 120 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지  
- **UI 구조:** 비대칭 레이아웃  
- **인터랙션:** 스크롤 없는 고정 플로우  

---

## 콘셉트

라벤더 그라데이션(#e8e4f3→#f0ecf8→#e4dfed)·바이올렛 액센트(#7b6b9e)·Cormorant Garamond·Noto Sans KR 기반의 **현대 판타지** 무드에, **비대칭 레이아웃**(PC에서 좌측 타이틀·우측 폼 2열, 모바일에서 세로 스택)과 **스크롤 없는 고정 플로우**(100dvh·한 화면 내 완결·스크롤 최소화)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **현대 판타지:** 배경 그라데이션·세리프 타이틀·이탤릭 태그라인·바이올렛 액센트.
- **비대칭 레이아웃:** .s120-inner flex row, aside 42%·form-wrap 48%, justify-content space-between; 640px 이하에서 column·중앙 정렬.
- **스크롤 없는 고정 플로우:** min-height 100dvh, max-width 960px, 한 뷰포트 내 타이틀+폼 배치.
- **중앙 정렬:** 뷰포트 가로·세로 중앙(inner 전체); 모바일에서 aside·form 모두 중앙.
- **반응형:** clamp·미디어쿼리 640px로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 960px·640px 브레이크포인트로 PC·모바일 전 범위 대응.
