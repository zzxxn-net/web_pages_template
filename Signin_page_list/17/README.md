# 회원가입 페이지 템플릿 시안 17

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 미래적 클린

UI 구조: 비대칭 레이아웃

인터랙션: 마이크로 인터랙션 중심, 스크롤 없는 고정 플로우

---

## 콘셉트

**비대칭 레이아웃 + 미래적 클린** — PC에서 **좌측 비주얼·우측 폼**으로 2열 비대칭을 이루고, **미래적 클린** 무드(라이트 배경·미니멀·테크 톤)로 일관된 UI를 구성한 시안.

- 시안 1~16(카드·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅·뉴모피즘·단계형·풀스크린 몰입형)과 달리 **그리드 2열 비대칭**(좌: 비주얼, 우: 폼)을 적용한다.
- **마이크로 인터랙션**: 입력 포커스 시 translateY·box-shadow, 버튼 hover 시 translateY·box-shadow, 폼 포커스 시 비주얼 아이콘 scale·색 변화(`:has()`). **스크롤 없는 고정 플로우**: 뷰포트 100dvh, overflow hidden, 폼 영역만 overflow auto.

## UI/UX 특징

- **레이아웃**: PC 2열 그리드(1fr 1fr). 좌: 비주얼(그라데이션 배경·아이콘·문구), 우: 폼(화이트 배경·중앙 정렬, max-width 380px). 모바일(768px 이하): 상단 비주얼(180px) + 하단 폼.
- **미래적 클린 톤**: 라이트 그라데이션(#e0f2fe → #f0f9ff → #e0e7ff), 화이트 폼, primary #0ea5e9, 얇은 보더 #e2e8f0.
- **마이크로 인터랙션**: input focus 시 translateY(-1px)·ring, pw-btn hover scale(1.02), submit hover translateY(-2px)·box-shadow, `:has(.asym-form-wrap:focus-within)` 시 비주얼 아이콘 scale(1.05)·색 강화.
- **스크롤 없는 고정 플로우**: main min-height 100dvh, overflow hidden. 폼 영역만 overflow auto로 내용 초과 시 스크롤.
- **반응형**: 768px 이하에서 1열, 비주얼 상단 고정 높이.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 .asym-visual-content(opacity + y 12), .asym-form-inner(opacity + x 16, delay 0.08) 스태거 등장.

## 사용 의도

- **비대칭·2열** 레이아웃과 **미래적 클린** 무드를 원할 때 활용.
- HTMX hx-post 연동 가능, Alpine.js로 검증·제출. 마이크로 인터랙션은 CSS transition·:has()로 처리.

## 구조

```
17/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 비대칭 2열)
├── style.scss      # 시안 전용 SCSS (미래적 클린·비대칭 그리드·마이크로 인터랙션)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (검증), GSAP 비주얼·폼 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-asym.signup-clean > .asym-visual(비주얼) + .asym-form-wrap > .asym-form-inner(헤더 + form + 푸터).
- **style.scss / style.css**: 그리드 2열, $visual-bg 그라데이션, :has() 비주얼 아이콘 반응, 입력·버튼 마이크로 인터랙션.
- **js/main.ts**: validate*, handleSubmit, GSAP .asym-visual-content, .asym-form-inner 스태거.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
