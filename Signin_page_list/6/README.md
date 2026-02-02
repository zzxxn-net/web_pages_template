# 회원가입 페이지 템플릿 시안 6

## 콘셉트

**Dark Theme Centered** — 전체 뷰포트를 다크 배경(#0f0f14)으로 채우고, 중앙에 다크 톤 카드(#1a1a24) 하나만 두어 폼을 배치한 구조.

- 시안 1~5(라이트 카드·스플릿·글래스·인라인·벤토)와 달리 **페이지 전체가 다크 테마**이고, 카드도 다크 톤으로 통일한다.
- 강조색은 시안(cyan) 계열(#22d3ee)로, 버튼·링크·포커스에만 사용해 대비를 준다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0f0f14, 카드 #1a1a24, 최대 너비 400px.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-dark-card` 등장(opacity + y 14px), 0.5초.

## 사용 의도

- **다크 모드 선호** 또는 **브랜드가 다크 톤**인 서비스의 회원가입에 맞춘 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
6/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-dark-card` > `.dark-header` + `.dark-form` + `.dark-footer`. 이메일·이름·비밀번호·비밀번호 확인·가입하기·로그인 링크.
- **style.scss / style.css**: 다크 배경·카드·입력 필드 반투명, 강조색 #22d3ee.
- **js/main.ts**: 시안 1~5와 동일 검증 로직, Alpine `signupForm`, GSAP 대상 `.signup-dark-card`.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
