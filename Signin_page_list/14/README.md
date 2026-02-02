# 회원가입 페이지 템플릿 시안 14

## 콘셉트

**Neumorphism (Soft UI)** — 배경과 같은 톤의 카드·입력에 **부드러운 그림자**(raised/inset)만으로 입체감을 주는 구조.

- 시안 1~13(플랫·스플릿·글래스·인라인·벤토·다크·섹션·언더라인·필·투톤·좌 액센트·아이콘·플로팅 라벨)과 달리 **border 없이 box-shadow만** 사용하고, 카드·입력 배경을 페이지 배경(#e8ecf1)과 동일하게 둔다.
- 카드는 바깥쪽 그림자(8px 8px 16px 다크, -8px -8px 16px 라이트), 입력은 inset 그림자로 "눌린" 느낌을 준다.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 카드·입력 배경 #e8ecf1, 카드 최대 너비 400px.
- **카드**: box-shadow 8px 8px 16px #c5cad1, -8px -8px 16px #ffffff (raised).
- **입력**: box-shadow inset 4px 4px 8px #c5cad1, inset -4px -4px 8px #ffffff. 포커스 시 inset을 약하게 + primary 링.
- **버튼**: primary 배경 + 바깥쪽 soft shadow, hover 시 그림자 축소, active 시 inset.
- **반응형**: 480px 이하에서 패딩·라운드·그림자 축소.
- **접근성**: 라벨–입력 연결, `aria-invalid`, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP으로 `.signup-neu` 등장(opacity + scale 0.98), 0.5초.

## 사용 의도

- **Neumorphism/Soft UI** 스타일을 원할 때 쓰기 좋은 시안.
- HTMX `hx-post` 연동 가능, Alpine.js로 클라이언트 검증·토글.

## 구조

```
14/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js)
├── style.scss      # 시안 전용 SCSS
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine 데이터·폼 검증 (TypeScript)
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: `.signup-neu` > 헤더 + form(.neu-field × 4 + .neu-btn) + 푸터.
- **style.scss / style.css**: $shadow-dark, $shadow-light, 카드 raised, 입력 inset, 버튼 raised/active inset, 강조색 #4f46e5.
- **js/main.ts**: 시안 1~13과 동일 검증 로직, Alpine `signupForm`, GSAP `.signup-neu`(scale 0.98).

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
