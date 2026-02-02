# Login Page — Design 6

하나의 독립적인 로그인 페이지 템플릿 디자인 시안입니다.

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 현대 판타지

UI 구조: 단일 포커스 입력 흐름

인터랙션: GSAP 기반 부드러운 전환

## 콘셉트

어두운 배경과 부드러운 보라·인디고 글로우로 현대 판타지 무드를 주고, 한 번에 하나의 입력만 강조하는 단일 포커스 흐름으로 구성한 MVP 로그인 페이지입니다.  
포커스 이동 시 GSAP으로 스케일·투명도 전환이 적용됩니다.

## UI/UX 특징

- **현대 판타지:** 다크 배경(#0f0e17), 블러 글로우 오브, 세리프 타이틀·보라 악센트(#a78bfa)
- **단일 포커스 입력 흐름:** 포커스된 필드만 scale(1.02)·opacity 1, 나머지는 0.85. 한 번에 한 입력이 시각적 초점
- **GSAP 기반 부드러운 전환:** 포커스 시 해당 필드 scale·opacity 애니메이션, 블러 시 이전 필드 복귀, 카드 진입 애니메이션
- **중앙 정렬·반응형:** PC·모바일 모두 가로·세로 중앙 정렬, 480px 이하 패딩 조정
- **스크롤 없는 고정 플로우:** 한 화면 내에서 폼 완결

## 사용 의도 및 구조

- **기술 스택:** HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP
- **역할:** Alpine.js(activeField·focusField/blurField), GSAP(포커스 전환·진입), SCSS(판타지 톤·single-focus)
- **접근성:** 라벨·placeholder·버튼 비활성/로딩·aria 반영

## 폴더 구조

```
6/
├── index.html
├── style.scss
├── style.css
├── js/
│   ├── login.ts
│   └── login.js
└── README.md
```

## 실행 방법

`index.html`을 로컬 서버 또는 정적 호스팅으로 열면 됩니다. CDN으로 Alpine.js, HTMX, GSAP을 불러옵니다.
