# 시안 82 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브  
- **UI 구조:** 비대칭 레이아웃  
- **인터랙션:** 포커스 이동 중심 UX  

---

## 콘셉트

어두운 아카이브 감성(**다크 아카이브**)과 **비대칭 레이아웃**(좌측 안내 패널 · 우측 폼 카드)을 결합하고, **포커스 이동 중심 UX**(Enter·다음 버튼으로 필드 간 이동, 마지막 필드에서 Enter 시 제출)를 적용한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **다크 아카이브:** 배경 #0f0e0d, 서피스 #1a1918, 얇은 그리드 패턴, Cormorant Garamond·JetBrains Mono, 액센트 골드 #c9a227, 에러 #c75c5c. 아카이브 라벨(Archive · 82)과 짧은 안내 문구로 문서/아카이브 무드 강화.
- **비대칭 레이아웃:** `.s82-layout`이 grid `1fr 1.2fr`로 좌측 aside(타이틀·설명·데코)와 우측 `.s82-form-section`(폼 카드) 분리. 640px 이하에서 1열 스택, aside 중앙 정렬.
- **포커스 이동 중심 UX:** 각 필드 옆 ‘다음’ 버튼 클릭 또는 입력 후 Enter 시 다음 필드로 포커스 이동. 마지막 필드(비밀번호 확인)에서 Enter 시 유효성 검사 후 제출. `:focus-visible` 포커스 링(2px 배경 + 4px 액센트)으로 키보드 사용자 가시성 확보.
- **중앙 정렬:** `.signup-fixed`·`.s82`로 뷰포트 기준 가로·세로 중앙, max-width 720px로 PC·모바일 반응형.
- **GSAP:** 로드 시 `.s82-layout` 페이드인·위로 이동, `.s82-aside` 좌측에서, `.s82-form-section` 우측에서 각각 등장(stagger 느낌).

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·640px 미디어로 디바이스별 패딩·그리드·aside 정렬 대응.
