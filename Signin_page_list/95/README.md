# 시안 95 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 네오 브루탈리즘  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

블랙·화이트 고대비의 **네오 브루탈리즘** 무드에, **풀스크린 몰입형**(100dvh 뷰포트·중앙 정렬)과 **GSAP 기반 부드러운 전환**(로드 시 레이아웃·헤더·폼 블록 순차 페이드·슬라이드)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **네오 브루탈리즘:** 배경 #fafafa, 카드 #ffffff, 3px 블랙 테두리·6px 오프셋 그림자, Space Grotesk 볼드·대문자 라벨·버튼, Raw. Bold. Simple. 태그라인.
- **풀스크린 몰입형:** main 높이 100dvh, overflow hidden, flex 중앙 정렬로 폼이 뷰포트 전체에 몰입 배치.
- **GSAP 기반 부드러운 전환:** 로드 시 `.s95-layout` 페이드인 후, `.s95-header` from(y: -16), `.s95-form` from(y: 20)으로 위·아래에서 부드럽게 등장.
- **중앙 정렬:** `.signup-fixed` + `.s95-layout`으로 가로·세로 중앙, max-width 400px 반응형.
- **반응형:** clamp·100dvh·컴팩트 패딩으로 PC·모바일 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh로 PC·모바일 전 범위 대응.
