# 시안 97 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 포커스 이동 중심 UX  

---

## 콘셉트

딥 퍼플·앰버 골드 톤의 **현대 판타지** 무드에, **풀스크린 몰입형**(100dvh 뷰포트·중앙 정렬)과 **포커스 이동 중심 UX**(로드 시 이메일 필드 자동 포커스, 유효성 오류 시 첫 오류 필드로 포커스 이동)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **현대 판타지:** 배경 그라데이션(#1a1625→#2d2438), 앰버·퍼플 글로우, Cormorant Garamond·Outfit, 글래스 카드(backdrop-filter), 액센트 #d4af37.
- **풀스크린 몰입형:** main 높이 100dvh, overflow hidden, flex 중앙 정렬로 폼이 뷰포트 전체에 몰입 배치.
- **포커스 이동 중심 UX:** DOMContentLoaded 후 이메일 입력에 자동 포커스; 제출 시 유효성 실패하면 첫 오류 필드(이메일→이름→비밀번호→비밀번호 확인 순)로 포커스 이동.
- **중앙 정렬:** `.signup-fixed` + `.s97-layout`으로 가로·세로 중앙, max-width 400px 반응형.
- **반응형:** clamp·100dvh로 PC·모바일 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh로 PC·모바일 전 범위 대응.
