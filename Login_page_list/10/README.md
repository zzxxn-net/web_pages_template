# Login Page — Design 10

하나의 독립적인 로그인 페이지 템플릿 디자인 시안입니다.

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 미래적 클린

UI 구조: 단일 포커스 입력 흐름

인터랙션: 입력 반응형 애니메이션

## 콘셉트

밝은 배경과 블루 악센트로 미래적 클린 무드를 주고, 한 번에 하나의 입력만 강조하는 단일 포커스 흐름 위에, 포커스 시 라벨·입력창이 반응하는 입력 반응형 애니메이션을 적용한 MVP 로그인 페이지입니다.

## UI/UX 특징

- **미래적 클린:** 밝은 배경(#f0f4f8), 화이트 입력창, 블루 악센트(#0ea5e9), 클린 타이포
- **단일 포커스 입력 흐름:** 포커스된 필드만 scale(1.02)·opacity 1, 나머지 0.88. 한 번에 한 입력이 시각적 초점 (6번과 무드·인터랙션 다름)
- **입력 반응형 애니메이션:** 포커스 시 라벨 색상·입력 padding·border 전환, GSAP scale·opacity 전환
- **중앙 정렬·반응형:** PC·모바일 모두 가로·세로 중앙 정렬, 480px 이하 패딩 조정
- **GSAP:** 포커스 전환·진입 애니메이션

## 사용 의도 및 구조

- **기술 스택:** HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP
- **역할:** Alpine.js(setActive/clearActive), GSAP(포커스 전환·진입), SCSS(미래적 클린·single focus)
- **접근성:** 라벨·placeholder·버튼 비활성/로딩·aria 반영

## 폴더 구조

```
10/
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
