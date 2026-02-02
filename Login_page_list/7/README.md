# Login Page — Design 7

하나의 독립적인 로그인 페이지 템플릿 디자인 시안입니다.

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 실험적 인터페이스

UI 구조: 카드 분리형 레이아웃

인터랙션: 입력 반응형 애니메이션

## 콘셉트

모노스페이스 타이포·고대비 그린 악센트·클리핑된 카드 형태로 실험적 인터페이스 무드를 주고, 카드 분리형 레이아웃 위에 입력 포커스 시 라벨 이동·보더 글로우가 반응하는 MVP 로그인 페이지입니다.

## UI/UX 특징

- **실험적 인터페이스:** 모노스페이스 폰트(JetBrains Mono), 그린 악센트(#33ff88)·다크 배경(#0c0c0c), clip-path로 잘린 카드 코너
- **카드 분리형 레이아웃:** 폼이 한 장의 카드로 분리, 실험적 형태(clip-path)로 1번 시안과 구분
- **입력 반응형 애니메이션:** 포커스 시 라벨 translateY·색상 전환, 입력창 border·box-shadow 글로우, GSAP 라벨 애니메이션
- **중앙 정렬·반응형:** PC·모바일 모두 가로·세로 중앙 정렬, 480px 이하에서 clip-path·패딩 조정
- **스크롤 없는 고정 플로우:** 한 화면 내에서 폼 완결

## 사용 의도 및 구조

- **기술 스택:** HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP
- **역할:** Alpine.js(폼 상태·is-active 토글), GSAP(라벨 애니메이션·카드 진입), SCSS(실험 톤·clip-path)
- **접근성:** 라벨·placeholder·버튼 비활성/로딩·aria 반영

## 폴더 구조

```
7/
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
