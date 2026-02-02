# 시안 105 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브  
- **UI 구조:** 마이크로 인터랙션 중심  
- **인터랙션:** 포커스 이동 중심 UX  

---

## 콘셉트

어두운 배경(#0d0d0d, #1a1a1a)과 모노스페이스·산세리프 조합의 **다크 아카이브** 무드에, **마이크로 인터랙션**(포커스 시 글로우·라벨 색 변화, 버튼 호버 시 살짝 떠오름·그림자, 비밀번호 토글 버튼 active 스케일)과 **포커스 이동 중심 UX**(Enter로 다음 필드로 이동, focusedField 상태로 현재 포커스 필드 강조)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **다크 아카이브:** 배경 #0d0d0d, 카드 #1a1a1a, IBM Plex Mono·Sans, 민트 액센트 #6ee7b7.
- **마이크로 인터랙션:** 입력 포커스 시 border·box-shadow 글로우, 라벨 색상 전환; 버튼 hover 시 translateY(-1px)·그림자; 비밀번호 보기 버튼 active 시 scale(0.97).
- **포커스 이동:** Enter 키로 이메일→이름→비밀번호→비밀번호 확인 순 이동, 마지막에서 Enter 시 제출; `.s105-field--focused`로 현재 포커스 필드 시각 강조.
- **중앙 정렬:** `.signup-fixed` + `.s105-layout`으로 뷰포트 가로·세로 중앙, max-width 420px 반응형.
- **반응형:** clamp·100dvh로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 420px로 PC·모바일 전 범위 대응.
