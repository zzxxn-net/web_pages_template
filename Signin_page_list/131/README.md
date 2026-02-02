# 시안 131 · 회원가입 페이지 템플릿

<!-- MVP: 시안 131 개요 - 현대 판타지 풀스크린 몰입형, 입력 반응형 애니메이션 기반 회원가입 MVP (키워드·콘셉트·반응형 설명) -->

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

웜 베이지 그라데이션 배경·Cinzel 세리프 타이틀·Noto Sans KR 본문 기반의 **현대 판타지** 무드에, **풀스크린 몰입형**(100dvh 전체 화면, 반투명 블러 카드로 폼만 강조)과 **입력 반응형 애니메이션**(포커스 시 필드 scale·border·라벨 색 전환, 유효/에러 시 border·배경·shake·pop 애니메이션)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **현대 판타지:** 배경 linear-gradient(160deg, #f5efe6 → #e8dfd4 → #ddd4c8), 폼 카드 rgba(255,255,255,0.75) + backdrop-filter blur, 골드 악센트 #8b6914, Cinzel + Noto Sans KR.
- **풀스크린 몰입형:** 뷰포트 100dvh, 가로·세로 중앙 정렬, 고정 배경 레이어 + 내부 컨텐츠만 스크롤 가능, max-width 380px 단일 폼 카드.
- **입력 반응형 애니메이션:** 포커스 시 필드 scale(1.01)·border·box-shadow·라벨 색 전환; 유효 시 녹색 border·배경·라벨; 에러 시 빨강 border·ring·배경·s131-shake; 체크 시 s131-pop. GSAP으로 진입 애니메이션(inner·header·formWrap·fields stagger).
- **중앙 정렬:** 가로·세로 중앙, clamp 패딩·max-width 380px.
- **반응형:** clamp·100dvh·max-width 380px로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 380px로 PC·모바일 전 범위 대응.
