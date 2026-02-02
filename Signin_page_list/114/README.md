# 시안 114 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 네오 브루탈리즘  
- **UI 구조:** 단일 포커스 입력 흐름  
- **인터랙션:** 상태 변화 강조  

---

## 콘셉트

두꺼운 테두리(3px)·고대비(검정/회색/흰색)·Space Grotesk 볼드 타이포의 **네오 브루탈리즘** 무드에, **단일 포커스 입력 흐름**(포커스된 필드만 강한 테두리·풀 opacity, 나머지 필드는 opacity 0.85로 약화; Enter로 다음 필드 포커스 이동)과 **상태 변화 강조**(valid 시 녹색 테두리·배경·✓ 표시, invalid 시 빨간 테두리·배경·에러 문구)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **네오 브루탈리즘:** 배경 #f2f2f2, 필드 배경 #fff, 테두리 3px #1a1a1a, Space Grotesk 700 타이틀·라벨 uppercase·버튼 블랙 블록.
- **단일 포커스 입력 흐름:** focusedField 상태로 현재 포커스 필드에 .s114-field--focused 적용(테두리·box-shadow·opacity 1); 비포커스 필드는 opacity 0.85; Enter 키로 focusNext() 호출해 다음 필드로 이동.
- **상태 변화 강조:** .s114-field--valid 시 녹색 테두리·배경·라벨 색·✓ 아이콘; .s114-field--invalid 시 빨간 테두리·배경·라벨 색·에러 메시지.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 400px 폼.
- **반응형:** clamp·100dvh로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
