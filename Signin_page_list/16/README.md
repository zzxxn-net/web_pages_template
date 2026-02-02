# 회원가입 페이지 템플릿 시안 16

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 다크 아카이브

UI 구조: 풀스크린 몰입형

인터랙션: 입력 반응형 애니메이션, 상태 변화 강조

---

## 콘셉트

**풀스크린 몰입형 + 다크 아카이브** — 카드 박스 없이 **뷰포트 전체**를 사용하고, **다크·아카이브** 무드(세피아·다크 브라운 톤)로 일관된 UI를 구성한 시안.

- 시안 1~15(카드·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅·뉴모피즘·단계형)와 달리 **별도 카드 컨테이너 없이** 폼만 중앙에 배치하여 **풀스크린 몰입형** 레이아웃을 적용한다.
- **입력 반응형 애니메이션**: 포커스 시 입력 필드 border·box-shadow·transform(translateY) 전환, **상태 변화 강조**: 유효/무효 시 테두리·그림자 색으로 즉시 피드백.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0d0c0a, 내부 컨테이너(.archive-inner) 최대 너비 440px. 카드 박스 없이 풀스크린 몰입.
- **다크 아카이브 톤**: 세리프 제목(Georgia), 산세리프 본문. 텍스트 #e8e4dc, 보조 #9a948a, 보더 #2a2620, 강조 #a08060(브론즈).
- **입력 반응형**: 포커스 시 border-color·box-shadow·transform translateY(-1px). blur 시 검증 후 상태(유효/무효)에 따라 border·box-shadow 강조.
- **상태 변화 강조**: .archive-field--focused(포커스 링), .archive-field--invalid(에러 링). transition 0.2~0.25s로 자연스럽게 전환.
- **반응형**: 480px 이하에서 제목 크기·패딩 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 .archive-inner 등장(opacity + y 16), 0.5초.

## 사용 의도

- **풀스크린·몰입형** 레이아웃과 **다크 아카이브** 무드를 원할 때 활용.
- HTMX hx-post 연동 가능, Alpine.js로 포커스·검증·상태 클래스 제어.

## 구조

```
16/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 풀스크린·카드 없음)
├── style.scss      # 시안 전용 SCSS (다크 아카이브 변수·입력 반응·상태 강조)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusEmail 등, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-full.signup-archive > .archive-inner > 헤더 + form(.archive-field × 4, --focused/--invalid 클래스) + 가입하기 + 푸터.
- **style.scss / style.css**: $bg/$surface/$border, $primary(브론즈), .archive-field--focused/--invalid, 입력 focus transform·box-shadow.
- **js/main.ts**: focusEmail/focusName/focusPassword/focusPasswordConfirm, validate*, handleSubmit, GSAP .archive-inner.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
