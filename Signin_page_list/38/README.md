# 회원가입 페이지 템플릿 시안 38

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 감성 테크

UI 구조: 비대칭 레이아웃

인터랙션: 포커스 이동 중심 UX

---

## 콘셉트

**감성 테크 + 비대칭 레이아웃 + 포커스 이동 중심 UX** — **감성 테크** 무드(따뜻한 그라데이션 #fef3f2→#fce7f3→#ede9fe→#e0e7ff·퍼플 primary #8b5cf6·부드러운 그림자·Noto Sans KR)와 **비대칭 레이아웃** 구조(좌측 감성 비주얼 영역 1fr + 우측 폼 영역 1.15fr)를 결합한 시안. **포커스 이동 중심 UX**로 Enter·「다음 필드로」 버튼 시 다음 입력란으로 포커스가 이동하고, 포커스 시 3px primary 링이 적용된다.

- 시안 18(감성 테크+카드 분리형), 시안 17·32(비대칭)와 달리 **감성 테크 + 비대칭 레이아웃** 조합으로, **좌측 감성 비주얼**(따뜻한 그라데이션·문구 「시작은 작은 한 걸음으로」) + **우측 폼**에 **포커스 이동**(focusNext·Enter·다음 필드로 버튼)을 적용한다.
- **포커스 이동 중심 UX**: 각 필드 하단에 「다음 필드로」 버튼, Enter 시 focusNext('name'|'password'|'passwordConfirm')로 해당 input에 .focus(). 포커스 시 .emasym-field--focused로 border·box-shadow primary 링.

## UI/UX 특징

- **레이아웃**: 뷰포트 2열 그리드(1fr 1.15fr). 좌측 .emasym-visual(감성 그라데이션·문구), 우측 .emasym-form-wrap(폼·중앙 정렬). 768px 이하에서 1열(비주얼 상단·폼 하단).
- **감성 테크 톤**: 배경 그라데이션(핑크·퍼플·인디고), 비주얼 영역 #fdf2f8→#f5f3ff→#eef2ff, 폼 영역 반투명·backdrop-filter, primary #8b5cf6(퍼플), Noto Sans KR.
- **비대칭**: 좌측 비주얼(따뜻한 그라데이션·문구·서브 텍스트), 우측 폼(max-width 360px).
- **포커스 이동**: 「다음 필드로」 버튼·Enter로 다음 input에 포커스. .emasym-field--focused 시 입력 border·3px primary ring.
- **반응형**: 768px 이하에서 1열, 비주얼 140px, 폼 상단 정렬.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .emasym-form-inner(x 10 → 0), .emasym-visual-content(y 8).

## 사용 의도

- **감성 테크** 톤과 **비대칭** 레이아웃, **포커스 이동 중심 UX**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·focusNext·검증·제출.

## 구조

```
38/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 비대칭 2열 + 포커스 이동)
├── style.scss      # 시안 전용 SCSS (감성 테크·비대칭·포커스 링)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, focusNext, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-emotion-asym > .emasym-visual + .emasym-form-wrap > .emasym-form-inner(헤더 + form .emasym-field × 4, --focused/--invalid, 다음 필드로 버튼) + .emasym-submit.
- **style.scss / style.css**: 감성 그라데이션·비주얼·폼, .emasym-field--focused/--invalid, .emasym-focus-btn.
- **js/main.ts**: focusedField, focusNext, validate*, handleSubmit, GSAP .emasym-form-inner·.emasym-visual-content.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
