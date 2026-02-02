# 시안 111 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

따뜻한 크림·앰버 톤과 Cormorant Garamond·Source Sans 3 기반의 **현대 판타지** 무드에, **풀스크린 몰입형**(100dvh·그라데이션 배경으로 뷰포트 전체 몰입)과 **입력 반응형 애니메이션**(포커스 시 scale·글로우, valid 시 녹색·invalid 시 s111-pulse 애니메이션)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **현대 판타지:** 배경 linear-gradient(#fdf8f4→#f5ede6), Cormorant Garamond 이탤릭 타이틀·Source Sans 3 본문, 앰버 액센트 #b8860b.
- **풀스크린 몰입형:** `.s111-inner` min-height 100dvh, 그라데이션 배경으로 뷰포트 전체 몰입, 폼 중앙 정렬.
- **입력 반응형 애니메이션:** `.s111-field:focus-within` 시 입력 scale(1.008)·border·box-shadow 글로우; valid 시 녹색 테두리·배경; invalid 시 빨간 테두리·배경·s111-pulse 애니메이션; 버튼 hover/active scale.
- **중앙 정렬:** `.signup-fixed` + `.s111-inner` 뷰포트 가로·세로 중앙, max-width 400px 폼.
- **반응형:** clamp·100dvh로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
