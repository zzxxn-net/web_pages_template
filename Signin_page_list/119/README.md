# 시안 119 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

따뜻한 그라데이션 배경(#fff5f0→#fef7f2)·코랄 액센트(#c97b63)·Noto Sans KR 기반의 **감성 테크** 무드에, **풀스크린 몰입형**(100dvh·한 화면 내 완결·중앙 정렬)과 **입력 반응형 애니메이션**(포커스·값 유무에 따라 라벨 플로팅·테두리·글로우 전환)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **감성 테크:** 배경 그라데이션·반투명 입력면·코랄 액센트·Noto Sans KR·14px 라운드·부드러운 그림자.
- **풀스크린 몰입형:** .s119-inner min-height 100dvh, flex 중앙 정렬, max-width 380px로 한 화면 내 완결.
- **입력 반응형 애니메이션:** 포커스 시 라벨 translateY·scale 전환·액센트 색; 값 있음(has-value) 시 라벨 상단 고정; valid/invalid 시 테두리·배경 전환. CSS transition으로 자연스럽게 연출.
- **중앙 정렬:** 뷰포트 가로·세로 중앙.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 380px로 PC·모바일 전 범위 대응.
