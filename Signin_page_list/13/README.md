# 회원가입 페이지 템플릿 시안 13

## 콘셉트

**Floating Label** — 라벨이 **입력 필드 안쪽**에 있다가, 포커스 또는 값이 있으면 **위로 올라가며 작아지는** 형태.

- 시안 1~12(단일·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘 접두사)와 달리 **라벨이 입력과 겹쳐 있다가** 상단으로 이동·축소되는 플로팅 라벨을 사용한다.
- Alpine으로 `focusEmail` 등 포커스 상태와 `email` 등 값을 묶어 `.float-input-wrap--active` 클래스를 적용하고, CSS로 라벨 위치·크기를 전환한다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드 최대 너비 400px.
- **플로팅 라벨**: `.float-label`은 absolute로 입력 위에 겹침. 기본 top 50%, translateY(-50%). `--active` 시 top 0.75rem, scale(0.85), color primary.
- **placeholder**: `placeholder=" "`(공백)으로 두어 브라우저 자동 플레이스홀더는 쓰지 않고, 라벨만 표시.
- **반응형**: 480px 이하에서 패딩·제목 크기 축소.
- **접근성**: label for–input id 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-float` 등장(opacity + y 14), 0.5초.

## 사용 의도

- **Material/플로팅 라벨 스타일**을 원할 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 포커스·값 상태와 클라이언트 검증·토글.

## 구조

```
13/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-float` > 헤더 + form(.float-field × 4, 각각 .float-input-wrap :class="--active" when value or focus + input + label) + 가입하기 + 푸터.
- **style.scss / style.css**: .float-label 위치·전환, .float-input-wrap--active 시 라벨 이동·축소, 강조색 #9333ea.
- **js/main.ts**: focusEmail/focusName/focusPassword/focusPasswordConfirm 추가, 시안 1~12와 동일 검증 로직, Alpine `signupForm`, GSAP `.signup-float`.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
