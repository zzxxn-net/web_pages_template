# 회원가입 페이지 템플릿 시안 5

## 콘셉트

**Bento Grid Form** — PC에서는 입력 필드를 **2열 그리드**(이메일 | 이름, 비밀번호 | 비밀번호 확인)로 배치하고, 모바일에서는 1열로 쌓는 구조.

- 시안 1~4(단일 열·스플릿·글래스·인라인 라벨)와 달리 **폼 영역을 그리드**로 나누어, 한 화면에 필드를 더 컴팩트하게 보여 준다.
- 뷰포트는 가로·세로 중앙 정렬을 유지하고, 카드 내부만 그리드 레이아웃이다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 560px. 520px 이상에서 `.bento-grid`가 `grid-template-columns: 1fr 1fr`, 4개 셀(이메일·이름·비밀번호·비밀번호 확인)이 2×2로 배치.
- **반응형**: 520px 미만에서는 1열 그리드로 세로 배치.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.bento-cell` 4개에 stagger(0.06s) 적용, opacity + y 10px, 0.4초.

## 사용 의도

- **필드 수가 많지 않은 회원가입**에서 PC에서 2열로 보기 좋게 쓰고 싶을 때 적합한 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
5/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-bento` > 헤더 + `.bento-form`(.bento-grid > .bento-cell × 4 + .bento-actions) + 푸터.
- **style.scss / style.css**: 520px 브레이크포인트, 2열 그리드, 강조색 #7c3aed.
- **js/main.ts**: 시안 1~4와 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.bento-cell`(stagger).

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
