# 회원가입 페이지 템플릿 시안 9

## 콘셉트

**Pill Inputs** — 입력 필드와 버튼을 **풀 라운드(필 형태)**로 두고, 카드도 큰 border-radius로 부드럽게 둔 구조.

- 시안 1~8(박스형·스플릿·글래스·인라인·벤토·다크·섹션·언더라인)과 달리 **입력·버튼에 border-radius: 9999px(필)** 를 적용해 둥근 캡슐 형태로 통일한다.
- 카드도 20px(모바일 16px) 라운드로 시안 9만의 톤을 준다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 400px, border-radius 20px.
- **입력 스타일**: `.pill-input` · `.pill-pw-wrap` · `.pill-btn` 모두 `border-radius: 9999px`. 입력 배경 #f8fafc, 포커스 시 primary 색상 링.
- **반응형**: 480px 이하에서 패딩·제목 크기·카드 라운드 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-pill` 등장(opacity + scale 0.98 + y 10), 0.5초.

## 사용 의도

- **부드럽고 친숙한 톤**을 원할 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
9/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-pill` > 헤더 + form(.pill-field × 4 + .pill-btn) + 푸터.
- **style.scss / style.css**: $radius-pill: 9999px, $radius-card: 20px, 강조색 #0891b2(시안).
- **js/main.ts**: 시안 1~8과 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.signup-pill`(scale + y).

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
