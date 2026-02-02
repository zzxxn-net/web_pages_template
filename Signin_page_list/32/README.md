# 회원가입 페이지 템플릿 시안 32

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 다크 아카이브

UI 구조: 비대칭 레이아웃

인터랙션: 입력 반응형 애니메이션

---

## 콘셉트

**비대칭 레이아웃 + 다크 아카이브** — **다크 아카이브** 무드(다크 배경·모노스페이스·아카이브 톤·primary 브라운)와 **비대칭** 구조(좌측 비주얼 영역 + 우측 폼 영역, 1.2fr 비율)를 결합한 시안. **입력 반응형 애니메이션**으로 포커스 시 필드 border·ring·translateX 전환을 적용한다.

- 시안 17(미래적 클린+비대칭), 시안 16/22/26(다크 아카이브+풀스크린/카드/단계)과 달리 **다크 아카이브 + 비대칭 레이아웃** 조합으로, 2열 그리드(비주얼 + 폼)에 **입력 반응형 애니메이션**(--focused 시 translateX(4px)·ring)을 적용한다.
- **입력 반응형 애니메이션**: 포커스 시 해당 필드 border-color primary, box-shadow 0 0 0 2px primary-soft, transform translateX(4px). 폼 영역 focus-within 시 비주얼 아이콘 scale·color 전환. invalid 시 border·ring 에러 색.

## UI/UX 특징

- **레이아웃**: 뷰포트 2열 그리드(1fr 1.2fr). 좌측 .archasym-visual(다크 그라데이션·아이콘·텍스트), 우측 .archasym-form-wrap(폼·중앙 정렬). 768px 이하에서 1열(비주얼 상단·폼 하단).
- **다크 아카이브 톤**: IBM Plex Mono 제목·라벨·버튼·비주얼, Inter 입력. 텍스트 #e6e2dc, 보조 #8a847c, primary #8b7355, 배경 #0c0a09·#0f0d0b, 보더 #2c2824.
- **비대칭**: 좌측 비주얼(그라데이션·▣ 아이콘·"회원가입" 텍스트), 우측 폼. 폼 영역 focus-within 시 비주얼 아이콘 scale(1.08)·색 강조.
- **입력 반응형**: .archasym-field--focused 시 .archasym-input·.archasym-pw-wrap border primary, box-shadow ring, transform translateX(4px). .archasym-field--invalid 시 border·ring 에러 색.
- **반응형**: 768px 이하에서 1열, 비주얼 160px, 폼 상단 정렬.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .archasym-form-inner(x 12 → 0), .archasym-visual-content(y 8), 0.5s·0.45s.

## 사용 의도

- **다크 아카이브** 톤과 **비대칭** 레이아웃, **입력 반응형 애니메이션**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
32/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 비대칭 2열)
├── style.scss      # 시안 전용 SCSS (다크 아카이브·비대칭·입력 반응)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-arch-asym > .archasym-visual + .archasym-form-wrap > .archasym-form-inner(헤더 + form .archasym-field × 4, --focused/--invalid) + 푸터.
- **style.scss / style.css**: 다크 아카이브 그라데이션·비주얼·폼, $primary #8b7355, .archasym-field--focused/--invalid, focus-within 비주얼 아이콘.
- **js/main.ts**: focusedField, validate*, handleSubmit, GSAP .archasym-form-inner·.archasym-visual-content.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
