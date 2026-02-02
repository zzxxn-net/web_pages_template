# 시안 70 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 감성 테크
- **UI 구조:** 카드 분리형 레이아웃
- **인터랙션:** 스크롤 없는 고정 플로우

---

## 콘셉트

감성 테크 톤과 카드 분리형 레이아웃, 스크롤 없는 고정 플로우를 결합한 회원가입 MVP 시안입니다. 따뜻한 그라데이션 배경 위에 타이틀 카드와 폼 카드를 분리해 배치하고, 한 뷰포트 내에서 스크롤 없이 완결되도록 설계했습니다.

## UI/UX 특징

- **감성 테크:** 밝은 피치·오렌지 그라데이션(#fef7ed → #fce7d4), Outfit·Noto Sans KR, 앰버 액센트(#d97706), 반투명 카드·backdrop-filter
- **카드 분리형:** 상단 헤더 카드(타이틀·설명)와 하단 폼 카드(입력 필드·제출)로 영역 분리, 각 카드에 border·shadow·radius 적용
- **스크롤 없는 고정 플로우:** 100dvh·overflow hidden으로 한 화면 고정, 컴팩트한 gap·padding으로 PC·태블릿에서 스크롤 없이 표시, 480px 이하에서만 overflow auto 허용

## 사용 의도 및 구조

- **index.html:** 메인 마크업, Alpine.js `signupForm()` 바인딩, HTMX 속성, s70-viewport·s70-card--head·s70-card--form 구조
- **style.scss / style.css:** 시안 전용 스타일, 반응형(480px 브레이크포인트)
- **js/main.ts, js/main.js:** 검증·제출·GSAP viewport·cardHead·cardForm 순차 등장
- PC~모바일 전 범위 중앙 정렬·반응형 대응
