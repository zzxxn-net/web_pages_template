# 시안 123 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스  
- **UI 구조:** 카드 분리형 레이아웃  
- **인터랙션:** 포커스 이동 중심 UX  

---

## 콘셉트

다크 톤(#0f0f14)·티얼 악센트(#00d4aa)·DM Sans 기반의 **실험적 인터페이스** 무드에, **카드 분리형 레이아웃**(필드별 독립 카드·간격·border-radius 14px)과 **포커스 이동 중심 UX**(포커스 시 해당 카드만 scale·glow·강조, 나머지 카드 dim·Enter로 다음 필드 이동 시 GSAP 전환)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **실험적 인터페이스:** 배경 #0f0f14, 카드 #22222e, 악센트 #00d4aa, 포커스 시 글로우·스케일로 시선 집중.
- **카드 분리형 레이아웃:** 이메일·이름·비밀번호·비밀번호 확인을 각각 하나의 카드로 분리, gap 0.85rem, 14px 라운드.
- **포커스 이동 중심 UX:** 포커스 카드만 scale(1.02)·border·box-shadow 강조, 비포커스 카드 opacity 0.72; Enter 시 다음 필드로 포커스 이동 + GSAP scale 연출.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 420px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 420px로 PC·모바일 전 범위 대응.
