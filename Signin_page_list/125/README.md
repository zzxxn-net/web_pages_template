# 시안 125 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브  
- **UI 구조:** 풀스크린 몰입형  
- **인터랙션:** GSAP 기반 부드러운 전환  

---

## 콘셉트

어두운 배경(#0d0e12)·골드 악센트(#c4a35a)·IBM Plex Serif/Sans 기반의 **다크 아카이브** 무드에, **풀스크린 몰입형**(뷰포트 전체·가로·세로 중앙·스크롤 최소화)과 **GSAP 기반 부드러운 전환**(진입 시 inner·header·form 순차 fade·slide)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **다크 아카이브:** 배경 #0d0e12, 입력 #16181e, 텍스트 #e4e2dc, 골드 #c4a35a, IBM Plex Serif 이탤릭(제목·버튼)·Sans(본문).
- **풀스크린 몰입형:** min-height 100dvh·flex 중앙 정렬, 폼 영역만 max-width 400px로 제한해 몰입감 유지.
- **GSAP 부드러운 전환:** DOMContentLoaded 시 inner opacity 0→1, header y -14→0, formWrap y 18→0 순차 delay로 진입.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 400px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
