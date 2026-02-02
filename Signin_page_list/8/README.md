# 회원가입 페이지 템플릿 시안 8

## 콘셉트

**Underline Inputs (Material-style)** — 입력 필드를 **전체 박스가 아닌 하단 선만** 표시하는 Material Design 스타일로 구성한 구조.

- 시안 1~7(박스형 입력)과 달리 **border 없이 하단 2px 선**만 두고, 포커스/입력 시 선 색상만 변경한다.
- 라벨은 입력 위에 고정 배치하고, 카드는 중앙 정렬을 유지한다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 400px. 입력 필드는 `border: none`, `.underline-line`(가상 하단선)으로만 구분.
- **입력 스타일**: `.underline-input` + `.underline-line`(absolute bottom). 포커스 또는 `:not(:placeholder-shown)` 시 선 색상 primary. `aria-invalid` 시 선 색상 error.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.underline-field` 4개에 stagger(0.05s), opacity + x -8px, 0.35초.

## 사용 의도

- **미니멀·Material 스타일**을 원할 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
8/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-underline` > 헤더 + form(.underline-field × 4, 각 필드에 .underline-line) + 가입하기 + 푸터.
- **style.scss / style.css**: 박스 없음, 하단 선만, 포커스/에러 시 선 색상, 강조색 #7c3aed.
- **js/main.ts**: 시안 1~7과 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.underline-field`(stagger, x -8).

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
