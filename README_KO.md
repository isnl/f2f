<div align="center">

# 🚀 F2F.icu

**간단하고 빠르며 안전한 P2P 파일 전송 도구**

[English](./README.md) | [简体中文](./README_ZH.md) | [日本語](./README_JA.md) | 한국어 | [Français](./README_FR.md) | [Español](./README_ES.md) | [Deutsch](./README_DE.md)

[![GitHub stars](https://img.shields.io/github/stars/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/network)
[![GitHub issues](https://img.shields.io/github/issues/isnl/f2f?style=flat-square&logo=github)](https://github.com/isnl/f2f/issues)
[![GitHub license](https://img.shields.io/github/license/isnl/f2f?style=flat-square)](https://github.com/isnl/f2f/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/isnl/f2f/pulls)

[![Deploy with Cloudflare Pages](https://img.shields.io/badge/Deploy%20with-Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)
[![Powered by Workers](https://img.shields.io/badge/Powered%20by-Cloudflare%20Workers-F38020?style=flat-square&logo=cloudflare)](https://workers.cloudflare.com/)

[🌐 라이브 데모](https://f2f.icu) | [📖 문서](https://github.com/isnl/f2f) | [🐛 버그 신고](https://github.com/isnl/f2f/issues) | [💡 기능 제안](https://github.com/isnl/f2f/issues/new)

</div>

---

## ✨ 주요 기능

<table>
  <tr>
    <td align="center">🚀</td>
    <td><b>초고속 전송</b><br/>Cloudflare 글로벌 엣지 네트워크 기반, 밀리초 단위의 응답 속도</td>
    <td align="center">🔐</td>
    <td><b>6자리 공유 코드</b><br/>간단하고 기억하기 쉬우며, 21.8억 가지 조합으로 보안 보장</td>
  </tr>
  <tr>
    <td align="center">📦</td>
    <td><b>대용량 파일 지원</b><br/>단일 파일 최대 25MB, 일상적인 사용에 충분</td>
    <td align="center">📝</td>
    <td><b>다양한 형식</b><br/>파일, 텍스트, 이미지 등 다양한 콘텐츠 유형 지원</td>
  </tr>
  <tr>
    <td align="center">📚</td>
    <td><b>일괄 업로드</b><br/>다중 파일(최대 100개) 및 다중 이미지(최대 25장) 동시 업로드 지원</td>
    <td align="center">📦</td>
    <td><b>ZIP 다운로드</b><br/>다중 파일/이미지를 하나의 ZIP 패키지로 다운로드</td>
  </tr>
  <tr>
    <td align="center">⏱️</td>
    <td><b>자동 삭제</b><br/>다운로드 후 1분 뒤 자동 삭제되어 개인정보 보호</td>
    <td align="center">🆓</td>
    <td><b>완전 무료</b><br/>Cloudflare 무료 플랜 기반, 신용카드 불필요</td>
  </tr>
  <tr>
    <td align="center">🎨</td>
    <td><b>아름다운 인터페이스</b><br/>모던 UI 디자인으로 최고의 사용자 경험 제공</td>
    <td align="center">📱</td>
    <td><b>반응형 디자인</b><br/>모바일, 태블릿, 데스크톱 완벽 지원</td>
  </tr>
</table>

## 🎯 라이브 데모

👉 **방문: [https://f2f.icu](https://f2f.icu)**

<div align="center">
  <img src="https://img.shields.io/badge/Demo-Available-success?style=for-the-badge" alt="Demo Available"/>
</div>

## 📸 미리보기

<details>
<summary>인터페이스 스크린샷 보기</summary>

### 보내기 화면
![보내기 화면](./docs/imgs/send.png)

### 받기 화면
![받기 화면](./docs/imgs/receive.png)

</details>

## 🛠️ 기술 스택

<div align="center">

| 기술 | 설명 |
|------|------|
| ⚡️ **Cloudflare Pages** | 프론트엔드 정적 웹사이트 호스팅, 글로벌 CDN 가속 |
| 🔥 **Cloudflare Workers** | Serverless 백엔드 API, 엣지 컴퓨팅 |
| 💾 **Cloudflare KV** | 키-값 저장소, 네이티브 TTL 지원 |
| 🎨 **Tailwind CSS** | 모던 CSS 프레임워크로 빠른 UI 개발 |
| 📝 **TypeScript** | 타입 안전한 JavaScript 상위 집합 |

</div>

## 🚀 빠른 시작

### 사전 요구 사항

- ✅ Node.js 16+
- ✅ Cloudflare 계정 (무료 플랜으로 충분)
- ✅ Git

### 원클릭 배포

#### 방법 1: Fork 후 배포 (권장)

1. **이 저장소를 Fork**

   오른쪽 상단의 `Fork` 버튼을 클릭하세요

2. **Cloudflare Pages에 연결**

   - [Cloudflare Dashboard](https://dash.cloudflare.com/)에 로그인
   - `Workers & Pages` → `Create application` → `Pages` → `Connect to Git`으로 이동
   - Fork한 저장소 선택
   - 빌드 설정:
     - **빌드 명령어**: 비워두기 (또는 `npm run build`)
     - **출력 디렉토리**: `public`
   - `Save and Deploy` 클릭

3. **KV 스토리지 설정**

   - Dashboard에서 `Workers & Pages` → `KV`로 이동
   - `Create a namespace` 클릭, 이름을 `f2f-transfers`로 지정
   - Pages 프로젝트로 돌아가서 `Settings` → `Functions` → `KV namespace bindings`
   - 바인딩 추가:
     - **변수명**: `TRANSFERS`
     - **KV namespace**: `f2f-transfers` 선택
   - 저장 후 다시 배포

4. **완료! 🎉**

   Cloudflare에서 제공하는 도메인으로 접속하세요

#### 방법 2: 로컬 개발

```bash
# 저장소 클론
git clone https://github.com/isnl/f2f.git
cd f2f

# 의존성 설치
npm install

# KV namespace 생성
wrangler kv:namespace create "TRANSFERS"

# wrangler.toml 설정
# 생성된 namespace ID를 wrangler.toml에 추가

# 로컬 개발 서버 시작
npm run dev

# http://localhost:8788 접속
```

### 설정 파일

`wrangler.toml` 편집:

```toml
name = "f2f-transfer"
compatibility_date = "2025-11-20"

pages_build_output_dir = "public"

[[kv_namespaces]]
binding = "TRANSFERS"
id = "your_kv_namespace_id_here"          # 프로덕션 KV ID로 교체
preview_id = "your_preview_kv_id_here"    # 미리보기 KV ID로 교체
```

## 📖 사용 가이드

### 📤 파일/텍스트 보내기

1. **보내기** 탭으로 전환
2. 6자리 공유 코드를 입력하거나 생성 (대문자 A-Z 및 숫자 0-9 지원)
3. 콘텐츠 유형 선택:
   - **파일**: 클릭하여 업로드하거나 드래그 앤 드롭 (다중 파일 지원, 최대 100개, 총 크기 ≤25MB)
   - **텍스트**: 텍스트 내용을 직접 입력
   - **이미지**: 이미지를 선택하거나 Ctrl/Cmd + V로 스크린샷 붙여넣기 (다중 이미지 지원, 최대 25장)
4. **공유 생성** 클릭
5. 공유 코드 또는 링크를 복사하여 수신자에게 전달

### 📥 파일/텍스트 받기

1. **받기** 탭으로 전환
2. 6자리 수령 코드 입력
3. **콘텐츠 가져오기** 클릭
4. 다운로드 옵션:
   - **단일 파일**: 자동 다운로드
   - **다중 파일/이미지**: 개별 다운로드 또는 ZIP 패키지로 일괄 다운로드 선택
   - **텍스트/이미지**: 직접 미리보기 표시
5. ⚠️ 콘텐츠는 **1분 후 자동 삭제**됩니다. 즉시 저장해 주세요

## ⚙️ 작동 원리

```mermaid
graph LR
    A[발신자 업로드] --> B[Base64로 변환]
    B --> C[KV에 저장]
    C --> D[공유 코드 생성]
    D --> E[수신자 코드 입력]
    E --> F[KV에서 읽기]
    F --> G[다운로드 완료 표시]
    G --> H[1분 TTL 설정]
    H --> I[자동 삭제]
```

### 데이터 흐름

1. **업로드 단계**
   - 파일 → Base64 인코딩 → KV에 저장
   - 기본 TTL: 1시간 (다운로드되지 않으면 1시간 후 자동 삭제)

2. **다운로드 단계**
   - 공유 코드 확인 → 데이터 읽기
   - 다운로드 완료로 표시 → TTL을 1분으로 업데이트
   - 브라우저 다운로드 자동 실행(파일) 또는 표시(텍스트/이미지)

3. **정리 단계**
   - KV가 TTL에 따라 만료된 데이터를 자동 삭제
   - 유지보수 비용 제로

### KV 스토리지를 선택한 이유

| 기능 | KV 스토리지 | R2 오브젝트 스토리지 | D1 데이터베이스 |
|------|------------|-------------------|-------------|
| 단일 값 크기 | **25MB** ✅ | 5GB | 1MB (샤딩 필요) |
| TTL 지원 | **네이티브** ✅ | ❌ 수동 구현 필요 | ❌ 수동 구현 필요 |
| 읽기/쓰기 지연 | **매우 낮음** ✅ | 낮음 | 더 낮음 |
| 무료 할당량 | **10만 읽기/일** ✅ | 신용카드 필요 | 10개 데이터베이스 |
| 사용 사례 | **임시 파일 저장** ✅ | 대용량 파일 저장 | 구조화된 데이터 |

## 🔒 보안

| 항목 | 설명 |
|------|------|
| 🔢 **코드 강도** | 6자리 문자 (A-Z, 0-9), 약 21.8억 가지 조합 |
| ⏰ **데이터 보관** | 미다운로드: 1시간 / 다운로드 후: 1분 |
| ⚠️ **개인정보 알림** | 민감한 정보(비밀번호, 신분증 등) 전송은 권장하지 않음 |
| 🔐 **전송 보안** | 전 구간 HTTPS 암호화 |

## 📊 제한 사항

- **파일 크기**: 총 크기 최대 25MB
- **파일 수**: 1회 전송당 최대 100개 파일 또는 25장 이미지
- **공유 코드 형식**: 6자리 대문자 또는 숫자 (A-Z, 0-9)
- **데이터 보관 기간**:
  - 미다운로드: 1시간 후 자동 삭제
  - 다운로드 후: 1분 후 자동 삭제
- **KV 무료 할당량**:
  - 하루 100,000회 읽기
  - 하루 1,000회 쓰기
  - 개인 사용에는 충분

## 📝 API 문서

### POST `/api/upload`

파일 또는 텍스트 업로드

**요청 매개변수 (FormData):**

```typescript
{
  code: string,       // 6자리 공유 코드 (필수)
  type: 'file' | 'text' | 'files' | 'images',  // 콘텐츠 유형 (필수)
  content: string,    // 콘텐츠 (필수)
                      // - file: Base64 인코딩된 파일 내용
                      // - text: 일반 텍스트 내용
                      // - files: JSON 배열 [{dataUrl, name, size, type}, ...]
                      // - images: JSON 배열 [{dataUrl, name}, ...]
  fileName?: string   // 파일명 (type=file일 때 필수)
}
```

**응답:**

```typescript
{
  success: true,
  code: string,       // 공유 코드
  message: string     // 상태 메시지
}
```

### GET `/api/download`

파일 다운로드 또는 텍스트 가져오기

**요청 매개변수:**

```
?code=ABC123  // 6자리 수령 코드
```

**응답:**

```typescript
{
  success: true,
  type: 'file' | 'text' | 'files' | 'images',
  content: string,      // Base64, 텍스트 또는 JSON 배열
  contentType: string,  // MIME 유형
  fileName?: string     // 파일명 (type=file일 때 반환)
}
```

## 🎨 커스터마이징

### 파일 크기 제한 변경

`functions/api/upload.ts` 편집:

```typescript
const maxSize = 25 * 1024 * 1024; // 원하는 크기(바이트)로 변경
```

### 데이터 보관 시간 변경

**업로드 TTL** (미다운로드 상태):

```typescript
// functions/api/upload.ts
expirationTtl: 3600 // 1시간 = 3600초, 커스터마이징 가능
```

**다운로드 TTL** (다운로드 완료 상태):

```typescript
// functions/api/download.ts
expirationTtl: 60 // 1분 = 60초, 커스터마이징 가능
```

## 🚀 성능 최적화

### 프론트엔드 최적화

- ✅ Tailwind CSS 온디맨드 로딩
- ✅ 아이콘 지연 로딩 (Lucide Icons)
- ✅ 반응형 이미지 미리보기
- ✅ 디바운싱 및 쓰로틀링

### 백엔드 최적화

- ✅ 엣지 컴퓨팅 (Cloudflare Workers)
- ✅ 글로벌 CDN 가속
- ✅ 저지연 KV 스토리지

### 권장 사항

1. Cloudflare의 Brotli 압축 활성화
2. 커스텀 도메인 설정 및 HTTPS 활성화
3. Cloudflare Analytics를 활성화하여 트래픽 모니터링
4. Cloudflare Workers Analytics를 사용하여 API 성능 모니터링

## 🤝 기여하기

모든 형태의 기여를 환영합니다! 🎉

### 기여 방법

1. **이 저장소를 Fork**
2. **기능 브랜치 생성** (`git checkout -b feature/AmazingFeature`)
3. **변경 사항 커밋** (`git commit -m 'Add some AmazingFeature'`)
4. **브랜치에 푸시** (`git push origin feature/AmazingFeature`)
5. **Pull Request 제출**

### 기여 유형

- 🐛 버그 신고
- 💡 새로운 기능 제안
- 📖 문서 개선
- 🎨 UI/UX 최적화
- ⚡️ 성능 최적화
- 🌍 다국어 지원

### 개발 가이드라인

- TypeScript 규칙 준수
- 코드를 깔끔하고 읽기 쉽게 유지
- 필요한 주석 추가
- 제출 전 기능 테스트 수행

## 🌟 감사의 말

다음 기술과 프로젝트에 감사드립니다:

- [Cloudflare Pages](https://pages.cloudflare.com/) - 정적 웹사이트 호스팅
- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless 컴퓨팅 플랫폼
- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크
- [Lucide Icons](https://lucide.dev/) - 오픈 소스 아이콘 라이브러리

## 📄 라이선스

이 프로젝트는 [MIT](LICENSE) 라이선스에 따라 배포됩니다 - 자세한 내용은 LICENSE 파일을 참조하세요

## 💬 연락처

- 🐛 **버그 신고**: [GitHub Issues](https://github.com/isnl/f2f/issues)
- 💡 **기능 제안**: [GitHub Discussions](https://github.com/isnl/f2f/discussions)
- 📧 **이메일 연락**: [GitHub를 통해](https://github.com/isnl)

## ❓ 자주 묻는 질문

<details>
<summary><b>왜 R2 오브젝트 스토리지를 사용하지 않나요?</b></summary>

R2 오브젝트 스토리지는 신용카드 등록이 필요하지만, KV 스토리지는 완전 무료이며 바로 사용할 수 있습니다. 25MB 이하의 임시 파일 전송에는 KV 스토리지가 충분하며, 지연 시간도 더 낮습니다.
</details>

<details>
<summary><b>파일 크기 제한은 어떻게 변경하나요?</b></summary>

`functions/api/upload.ts`에서 `maxSize` 상수를 수정하면 됩니다. 주의 사항:
- KV 단일 값 최대 크기는 25MB입니다
- 25MB 초과 시 R2 오브젝트 스토리지가 필요합니다
- 파일이 클수록 업로드/다운로드 시간이 길어집니다
</details>

<details>
<summary><b>데이터는 정말 안전한가요?</b></summary>

- ✅ 모든 데이터는 Cloudflare 엣지 노드에 저장되어 물리적 보안이 보장됩니다
- ✅ 전 구간 HTTPS 암호화 전송
- ✅ 자동 삭제 메커니즘으로 개인정보 보호
- ⚠️ 6자리 공유 코드가 추측될 수 있는 극히 낮은 확률이 존재합니다
- ⚠️ 고도로 민감한 정보(비밀번호, 개인키 등) 전송은 권장하지 않습니다
</details>

<details>
<summary><b>다운로드 후 즉시 삭제가 아닌 1분 후 삭제인 이유는?</b></summary>

사용자에게 오류 복구 시간을 제공합니다:
- 네트워크 지연으로 인한 다운로드 실패 방지
- 사용자가 한 번 더 다운로드할 수 있도록 허용
- 1분 후 자동 삭제는 편의성과 보안의 균형을 맞춥니다

코드에서 이 시간을 직접 커스터마이징할 수 있습니다.
</details>

<details>
<summary><b>무료 할당량으로 충분한가요?</b></summary>

개인 사용에는 충분하고도 남습니다:
- **KV 읽기**: 하루 100,000회
- **KV 쓰기**: 하루 1,000회
- **Workers 요청**: 하루 100,000회

팀이나 고빈도 사용의 경우 유료 플랜으로 업그레이드해야 할 수 있습니다.
</details>

<details>
<summary><b>자체 호스팅이 가능한가요?</b></summary>

물론입니다! 이 프로젝트는 오픈 소스이므로 다음과 같이 할 수 있습니다:
1. 이 저장소를 Fork
2. 본인의 Cloudflare 계정에 배포
3. 커스텀 도메인 및 설정 구성
4. 데이터와 서비스를 완전히 제어
</details>

<details>
<summary><b>일괄 업로드를 지원하나요?</b></summary>

✅ **네!** 현재 버전은 일괄 업로드를 지원합니다:
- **다중 파일**: 최대 100개 파일, 총 크기 25MB 이하
- **다중 이미지**: 최대 25장 이미지, 총 크기 25MB 이하
- **다운로드 옵션**: 개별 다운로드 또는 ZIP 패키지로 일괄 다운로드
</details>

<details>
<summary><b>사용 통계는 어떻게 확인하나요?</b></summary>

Cloudflare Dashboard에서 확인할 수 있습니다:
- **Workers Analytics**: API 호출 횟수, 응답 시간 등
- **KV Metrics**: 읽기/쓰기 횟수, 스토리지 사용량 등
- **Pages Analytics**: 트래픽, 지역 분포 등
</details>

---


## ⭐ Star 히스토리

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=isnl/f2f&type=Date)](https://star-history.com/#isnl/f2f&Date)

</div>

---

<div align="center">

### 🌟 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!

**Made with ❤️ by [isnl](https://github.com/isnl)**

[⬆ 맨 위로 돌아가기](#-f2ficu)

</div>
