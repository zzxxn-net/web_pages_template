# 회원가입 페이지 템플릿 시안 11

## 콘셉트

**Left Accent Card** — 카드 **좌측에 두꺼운 강조 테두리**만 두고, 나머지는 일반 카드와 동일한 구조.

- 시안 1~10(단일·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤)과 달리 **카드 전체 박스가 아닌 왼쪽만** 강조색(border-left 4px)으로 구분한다.
- 뷰포트는 가로·세로 중앙 정렬을 유지하고, 카드 내부 패딩은 좌측을 accent 두께만큼 더 준다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 400px. `border-left: 4px solid #16a34a`, 나머지 border 1px neutral.
- **패딩**: 좌측만 accent 두께(4px)만큼 더해 `padding-left: calc(2rem + 4px)`.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-accent` 등장(opacity + x -16), 0.45초.

## 사용 의도

- **미니멀하게 액센트만** 주고 싶을 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
11/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-accent` > 헤더 + form(.accent-field × 4 + .accent-btn) + 푸터.
- **style.scss / style.css**: border-left 4px #16a34a, padding-left calc(2rem + 4px), 강조색 #16a34a.
- **js/main.ts**: 시안 1~10과 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.signup-accent`(x -16).

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
