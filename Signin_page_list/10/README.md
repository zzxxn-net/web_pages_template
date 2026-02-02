# 회원가입 페이지 템플릿 시안 10

## 콘셉트

**Two-tone Card** — 카드를 **상단 컬러 밴드**와 **하단 화이트 폼** 두 영역으로 나누어, 헤더만 강조색으로 채운 구조.

- 시안 1~9(단일 카드·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필)와 달리 **카드 상단에 단색 밴드**를 두고, 제목·설명을 밴드 안에 배치한다. 폼은 하단 흰색 영역에만 둔다.
- 뷰포트는 가로·세로 중앙 정렬을 유지한다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 420px. `.twotone-band`(min-height 100px, 모바일 88px) + `.twotone-body`(padding 2rem).
- **밴드**: 배경 #be185d(핑크), 제목·설명 흰색/반투명 흰색, 중앙 정렬.
- **반응형**: 480px 이하에서 밴드·바디 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.twotone-band`(y -12), `.twotone-body`(y 12, delay 0.1) 순차 등장.

## 사용 의도

- **브랜드 컬러를 상단에서 강조**하고 싶을 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
10/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-twotone` > `.twotone-band`(헤더) + `.twotone-body`(form + footer).
- **style.scss / style.css**: 밴드 배경·높이, 바디 패딩, 강조색 #be185d.
- **js/main.ts**: 시안 1~9와 동일 검증 로직, Alpine `signupForm`, GSAP 밴드·바디 순차 등장.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
