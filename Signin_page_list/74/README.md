# 시안 74 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- **세계관/무드:** 실험적 인터페이스
- **UI 구조:** 단일 포커스 입력 흐름
- **인터랙션:** 스크롤 없는 고정 플로우

---

## 콘셉트

실험적 인터페이스 톤과 단일 포커스 입력 흐름, 스크롤 없는 고정 플로우를 결합한 회원가입 MVP 시안입니다. 그리드 배경·넘버드 라벨(01·02·03·04)·Syne·JetBrains Mono로 실험적 분위기를 주고, 한 번에 하나의 필드만 활성화·나머지는 dim 처리하며, 100dvh·overflow hidden으로 한 화면 고정을 유지합니다.

## UI/UX 특징

- **실험적 인터페이스:** 배경 #0a0a0b·20px 그리드 패턴, Syne·JetBrains Mono, 틸 액센트(#00d4aa), 넘버드 라벨(01·02·03·04), border-radius 0 버튼
- **단일 포커스 입력 흐름:** 포커스된 필드만 s74-field--active(테두리·라벨 색·scale 1), 나머지는 s74-field--dim(opacity 0.35·scale 0.98)
- **스크롤 없는 고정 플로우:** 100dvh·overflow hidden·컴팩트 gap·padding으로 PC·태블릿에서 스크롤 없이 표시, 480px 이하에서만 overflow auto

## 사용 의도 및 구조

- **index.html:** 메인 마크업, Alpine.js `signupForm()` 바인딩, HTMX 속성, s74-viewport·s74-field--active/dim/invalid
- **style.scss / style.css:** 시안 전용 스타일, 반응형(480px)
- **js/main.ts, js/main.js:** 검증·제출·GSAP viewport 등장
- PC~모바일 전 범위 중앙 정렬·반응형 대응
