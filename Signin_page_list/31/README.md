# 회원가입 페이지 템플릿 시안 31

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 감성 테크

UI 구조: 풀스크린 몰입형

인터랙션: 포커스 이동 중심 UX

---

## 콘셉트

**풀스크린 몰입형 + 감성 테크** — 뷰포트 전체를 쓰는 **풀스크린 몰입** 레이아웃과, **감성 테크** 무드(따뜻한 베이지·브라운 그라데이션·부드러운 글로우·산세리프)를 결합한 시안. **포커스 이동 중심 UX**로 Enter 시 다음 필드로 포커스 이동, focusedField 기반 --focused 시 border·ring·translateY 전환을 적용한다.

- 시안 18(감성 테크+카드 분리형), 시안 24(감성 테크+단계 분할형+스크롤 없는), 시안 25(현대 판타지+풀스크린+입력 반응형)와 달리 **감성 테크 + 풀스크린 몰입형** 조합으로, 카드 없이 .emofull-wrap만 중앙에 두고, **포커스 이동 중심 UX**(focusNext·Enter로 다음 필드 포커스, --focused 시 translateY(-1px)·ring)를 적용한다.
- **포커스 이동 중심 UX**: 이메일 Enter → 이름 포커스, 이름 Enter → 비밀번호 포커스, 비밀번호 Enter → 비밀번호 확인 포커스, 비밀번호 확인 Enter → 제출. .emofull-field--focused 시 border·box-shadow·transform translateY(-1px).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 그라데이션(#faf6f2 → #eae2d9) + 상단 부드러운 글로우(.emofull-bg). .emofull-wrap(max-width 400px). 카드 박스 없이 풀스크린 몰입.
- **감성 테크 톤**: Pretendard/Noto Sans KR, primary #b8734a, 텍스트 #2c2419, 보조 #6b5d52, 부드러운 border·ring.
- **포커스 이동**: @keydown.enter.prevent → focusNext('name'|'password'|'passwordConfirm') 또는 handleSubmit(). .emofull-field--focused 시 border primary, box-shadow 0 0 0 3px primary-soft, transform translateY(-1px). .emofull-field--invalid 시 border·ring 에러 색.
- **반응형**: 480px 이하에서 제목 크기 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .emofull-wrap 등장(opacity + y 14), 0.5초.

## 사용 의도

- **풀스크린 몰입** 레이아웃과 **감성 테크** 무드, **포커스 이동 중심 UX**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·focusNext·검증·제출.

## 구조

```
31/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 풀스크린·포커스 이동)
├── style.scss      # 시안 전용 SCSS (감성 테크·풀스크린·포커스 이동)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, focusNext, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-emotion-full.signup-full > .emofull-bg + .emofull-wrap > 헤더 + form(.emofull-field × 4, --focused/--invalid) + 가입하기 + 푸터.
- **style.scss / style.css**: 감성 테크 그라데이션·글로우, $primary #b8734a, .emofull-field--focused/--invalid, 포커스 translateY·ring.
- **js/main.ts**: focusedField, focusNext, validate*, handleSubmit, GSAP .emofull-wrap.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
