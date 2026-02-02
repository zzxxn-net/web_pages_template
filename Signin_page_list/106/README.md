# 시안 106 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크  
- **UI 구조:** 단일 포커스 입력 흐름  
- **인터랙션:** 스크롤 없는 고정 플로우  

---

## 콘셉트

따뜻한 그라데이션 배경과 Noto Sans KR 기반의 **감성 테크** 무드에, **단일 포커스 입력 흐름**(한 번에 한 필드만 노출·다음/이전으로 단계 이동)과 **스크롤 없는 고정 플로우**(100dvh·overflow hidden, 카드 내 고정 높이)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **감성 테크:** 배경 linear-gradient(#fef7f4→#f8f0ed→#f0e8e4), 반투명 카드·backdrop-filter, 액센트 #c97b63, Noto Sans KR.
- **단일 포커스 입력 흐름:** step 1~4로 이메일→이름→비밀번호→비밀번호 확인 순 한 필드씩 노출, 다음/이전 버튼으로 이동, 단계 인디케이터(1~4 점) 표시.
- **스크롤 없는 고정 플로우:** `.signup-fixed` overflow hidden, `.s106-layout` max-width 380px·고정 뷰포트 내 완결, 스크롤 없음.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, clamp·100dvh 반응형.
- **반응형:** PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 단계별 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 380px로 PC·모바일 전 범위 대응.
