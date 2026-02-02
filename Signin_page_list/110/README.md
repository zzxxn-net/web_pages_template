# 시안 110 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린  
- **UI 구조:** 카드 분리형 레이아웃  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

밝은 배경·Inter 폰트·블루 액센트 기반의 **미래적 클린** 무드에, **카드 분리형 레이아웃**(좌측 브랜드 카드·우측 폼 카드, grid 1fr 1fr)과 **GSAP 기반 부드러운 전환**(레이아웃·브랜드 카드·폼 카드 진입 애니메이션)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **미래적 클린:** 배경 #f8fafc, 카드 #fff, Inter, 액센트 #3b82f6, 부드러운 그림자·14px 라운드.
- **카드 분리형 레이아웃:** `.s110-layout` grid 1fr 1fr — 좌측 `.s110-card--brand`(회원가입·시작하기), 우측 `.s110-card--form`(이메일·이름·비밀번호·비밀번호 확인·가입하기). 600px 이하에서 1열.
- **GSAP 기반 부드러운 전환:** layout from(y: 16, opacity: 0), cardBrand from(x: -20, opacity: 0), cardForm from(x: 20, opacity: 0), power2.out 이징.
- **중앙 정렬:** `.signup-fixed` + `.s110-layout` 뷰포트 가로·세로 중앙, max-width 680px·600px 브레이크포인트 반응형.
- **반응형:** clamp·100dvh·600px 브레이크포인트로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·600px 브레이크포인트로 PC·모바일 전 범위 대응.
