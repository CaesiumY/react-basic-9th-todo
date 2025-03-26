# 📝 React Basic Todo App

Next.js의 App Router와 Supabase, TanStack Query를 기반으로 한 **기본 투두 리스트 애플리케이션**입니다. 이 프로젝트는 프론트엔드 입문자가 실제 서비스를 구축하는 흐름을 익히고, SSR/CSR, 인증, API 요청 관리 등 핵심 기능들을 연습할 수 있도록 설계되었습니다.

---

## 🚀 주요 기능

- **투두 기능**
  - 할 일 등록, 완료 처리, 삭제
  - 완료 여부에 따른 필터링 기능 (전체 / 완료된 항목만 보기)
  - 각 항목의 상세 페이지 진입 가능
- **인증 기능**
  - 이메일 및 비밀번호를 활용한 회원가입 / 로그인
  - 로그인된 사용자에 한해 작성, 조회, 삭제 가능
  - 마이페이지에서 본인의 정보와 작성한 투두 목록 확인
- **UX 개선 요소**
  - 입력 유효성 검사 및 오류 메시지 출력 (Zod, React Hook Form 활용)
  - 삭제 시 확인 다이얼로그 제공
  - 처리 성공/실패 시 토스트 알림 노출
- **기술적 특징**
  - SSR을 활용한 첫 페이지 데이터 선로딩
  - TanStack Query를 이용한 클라이언트 캐싱 및 상태관리
  - Zustand 기반의 전역 상태 관리 (투두 필터링)
  - 컴포넌트 기반 설계 및 Tailwind CSS 디자인 적용

---

## 🧰 기술 스택

| 영역       | 사용 기술                            |
| ---------- | ------------------------------------ |
| 프레임워크 | Next.js 14 (App Router)              |
| 인증/DB    | Supabase                             |
| 상태 관리  | TanStack Query, Zustand              |
| 폼 처리    | React Hook Form + Zod                |
| UI         | Tailwind CSS, Radix UI 기반 컴포넌트 |
| 기타       | ESLint, TypeScript, Prettier 등      |

---

## 📁 주요 폴더 구조

```bash
.
├── app/               # 라우트 구성 (App Router 방식)
│   ├── (main)/        # 메인 페이지 및 상세 보기
│   └── auth/          # 로그인 / 회원가입 관련 페이지
├── components/        # UI 및 도메인 컴포넌트
│   ├── todo/          # 투두 관련 컴포넌트
│   ├── auth/          # 로그인, 회원가입 폼 등
│   └── ui/            # 공통 UI 요소 (Button, Card 등)
├── api/               # Supabase API 래퍼 함수
├── query/             # TanStack Query 관련 커스텀 훅
├── store/             # Zustand 스토어
├── utils/             # Supabase 클라이언트 등 유틸
├── types/             # TypeScript 타입 정의
```

---

## 📌 Supabase 관련 안내

> ⚠️ **Supabase는 일정 기간(보통 일주일) 사용이 없을 경우 프로젝트가 자동으로 휴면 상태에 들어갑니다.**

이로 인해 접속 시 **500 오류** 또는 **인증 관련 문제**가 발생할 수 있습니다:

---

## 🛠️ 로컬 실행 방법

1. **환경변수 설정**

`.env.local` 파일 생성 후 다음 내용을 입력하세요:

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLIC_ANON_KEY
```

2. **패키지 설치**

```bash
npm install
```

3. **개발 서버 실행**

```bash
npm run dev
```

4. **접속 주소**

```
http://localhost:3000
```

---

## 📄 라이선스

이 프로젝트는 [MIT License](./LICENSE)를 따릅니다.
