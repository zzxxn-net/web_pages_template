# 시안 116 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 사이버 미니멀  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 포커스 이동 중심 UX  

---

## 콘셉트

클린한 그레이(#f4f6f8)·시안 액센트(#06b6d4)·DM Sans 기반의 **사이버 미니멀** 무드에, **풀스크린 몰입형**(100dvh·뷰포트 전체 중앙 정렬·스크롤 최소화)과 **포커스 이동 중심 UX**(focusedField 상태·Enter로 다음 필드 이동·포커스 시 시안 링·valid 시 ✓ 표시)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **사이버 미니멀:** 배경 #f4f6f8, 입력·버튼 #fff·시안 #06b6d4, DM Sans, 미니멀 그림자·라운드 10px.
- **풀스크린 몰입형:** .s116-inner min-height 100dvh, flex 중앙 정렬, max-width 380px 폼으로 한 화면 내 완결.
- **포커스 이동 중심 UX:** focusedField로 .s116-field--focused 적용(시안 border·box-shadow); Enter로 focusNext() 호출; valid 시 녹색 테두리·✓ 아이콘.
- **중앙 정렬:** 뷰포트 가로·세로 중앙.
- **반응형:** clamp·100dvh로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 380px로 PC·모바일 전 범위 대응.
