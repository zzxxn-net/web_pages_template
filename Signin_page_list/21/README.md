# 회원가입 페이지 템플릿 시안 21

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 실험적 인터페이스

UI 구조: 풀스크린 몰입형

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**실험적 인터페이스 + 풀스크린 몰입형** — **카드/박스 없이** 뷰포트 전체를 쓰는 **풀스크린 몰입**과, **미니멀·라인 기반** 입력(하단 선만, 배경 없음) 등 **실험적 인터페이스**를 적용한 시안.

- 시안 1~20(카드·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅·뉴모피즘·단계형·풀스크린·비대칭·카드 분리형·단일 포커스·네오 브루탈리즘)과 달리 **카드 컨테이너 없이** .exp-canvas만 중앙에 두고, **입력 필드는 border-bottom만** 사용하는 **라인 기반** 구조로 실험적 인터페이스를 적용한다.
- **GSAP 기반 부드러운 전환**: 헤더 → 필드 4개 스태거(0.06s) → 액션 → 푸터 순으로 opacity + y 등장.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0a0a0f, .exp-canvas(max-width 380px). 카드 박스 없이 풀스크린 몰입.
- **실험적 인터페이스**: 입력 필드에 **테두리 없이 하단 선만**(border-bottom), 배경 투명. 포커스 시 하단 선·box-shadow primary(#60a5fa). 라벨 대문자·letter-spacing.
- **풀스크린 몰입형**: 별도 카드 없이 폼만 중앙 배치, 다크 배경으로 몰입감 강조.
- **반응형**: 480px 이하에서 제목·패딩 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .exp-header(opacity + y 16) → .exp-field 스태거(opacity + y 12, stagger 0.06, delay 0.12) → .exp-actions(delay 0.4) → .exp-footer(delay 0.52).

## 사용 의도

- **실험적·미니멀** 인터페이스와 **풀스크린 몰입** 레이아웃이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 검증·제출. GSAP으로 등장 전환만 적용.

## 구조

```
21/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 라인 기반 입력)
├── style.scss      # 시안 전용 SCSS (실험적·풀스크린·라인 입력)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (검증), GSAP 부드러운 전환 스태거
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-exp.signup-fullscreen > .exp-canvas > .exp-inner > 헤더 + form(.exp-field × 4) + 액션 + 푸터.
- **style.scss / style.css**: 배경 #0a0a0f, 입력 border-bottom만, primary #60a5fa, 포커스/에러 box-shadow.
- **js/main.ts**: validate*, handleSubmit, GSAP 헤더·필드 스태거·액션·푸터 순차 등장.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
