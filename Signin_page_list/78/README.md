# 시안 78 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 스크롤 없는 고정 플로우  

---

## 콘셉트

밝고 깔끔한 **미래적 클린** 무드에, **풀스크린 몰입형** 레이아웃과 **스크롤 없는 고정 플로우**를 결합한 회원가입 MVP 시안입니다. 한 화면에 모든 필드가 들어가 스크롤 없이 가입을 완료할 수 있습니다.

## UI/UX 특징

- **미래적 클린:** 배경 #f8fafc, DM Sans·JetBrains Mono, 액센트 #0ea5e9, 흰색 입력창·부드러운 테두리·미니멀한 라벨.
- **풀스크린 몰입형:** `.signup-fixed`·`.s78`가 100vh/100dvh 전체 사용, `.s78-viewport`가 max-height 100%·flex center로 화면 중앙에 폼 배치.
- **스크롤 없는 고정 플로우:** main·viewport에 overflow hidden, gap·padding 최소화(clamp 0.75~1.25rem, gap 0.45~0.5rem)로 한 화면에 헤더·4필드·제출 버튼 수용.
- **중앙 정렬:** 가로·세로 중앙, max-width 360px로 PC·모바일 반응형.
- **GSAP:** 로드 시 `.s78-viewport` 페이드인 + 위로 이동.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh로 디바이스별 높이·패딩 대응. 스크롤 없이 한 화면 유지.
