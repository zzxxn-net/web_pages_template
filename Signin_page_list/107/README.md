# 시안 107 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 사이버 미니멀  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

클린한 그레이·시안 액센트와 DM Sans 기반의 **사이버 미니멀** 무드에, **단계 분할형(Progressive Form)**(1단계: 이메일·이름 / 2단계: 비밀번호·비밀번호 확인, 진행 바 표시)과 **입력 반응형 애니메이션**(포커스 시 scale·글로우, valid 시 녹색·invalid 시 흔들림 애니메이션)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **사이버 미니멀:** 배경 #f4f6f8, 카드 #fff, DM Sans, 액센트 #0ea5e9, 미니멀 그림자·라운드.
- **단계 분할형:** step 1(기본 정보) → step 2(비밀번호), 진행 바(50% / 100%), 다음/이전/가입하기 버튼.
- **입력 반응형 애니메이션:** `.s107-field:focus-within` 시 입력 scale(1.005)·border·box-shadow 전환; valid 시 녹색 테두리·배경; invalid 시 빨간 테두리·배경·s107-shake 애니메이션.
- **중앙 정렬:** `.signup-fixed` + `.s107-layout` 뷰포트 가로·세로 중앙, max-width 400px 반응형.
- **반응형:** clamp·100dvh로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 단계별 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
