/* 콘텐츠 설정. 프로젝트 키는 index.html의 data-project와 일치해야 합니다.
 * 상세 필드: role(담당 범위), contribution(기여도), tech(문자열/배열),
 * highlights(문자열/배열). 실제 값을 입력하면 PROJECT DETAIL에 표시됩니다.
 * url은 상세 영역의 '사이트 보기'에만 연결됩니다.
 * 기본 콘텐츠는 HTML에도 있어 JavaScript 없이 읽을 수 있습니다.
 * image, url, title을 비워 두면 HTML 기본값을 사용합니다. */
window.PORTFOLIO_CONTENT = {
  // 공개할 이메일. phone은 공개를 원할 때만 입력합니다(빈 값이면 숨김).
  email: 'jieun@example.com', phone: '010-0000-0000', contactDraft: true, github: '', resume: '',
  // 최신 경력부터 추가: { company: '회사명', period: '2023.03 – 현재', position: '웹 퍼블리셔', tasks: ['담당 업무', '대표 프로젝트'] }
  careers: [
    { company: '회사명 입력 (샘플)', period: 'YYYY.MM – 현재', position: '웹 퍼블리셔', tasks: ['기업·브랜드 웹사이트 구축 및 운영', '디자인 시안 기반 페이지 퍼블리싱과 공통 UI 관리', '반응형 화면 구현 및 브라우저별 검수'], draft: true },
    { company: '이전 회사명 입력 (샘플)', period: 'YYYY.MM – YYYY.MM', position: '웹 퍼블리셔', tasks: ['웹사이트 신규 페이지 제작 및 유지보수', '콘텐츠 수정과 UI 개선, 디자인·개발 담당자 협업'], draft: true }
  ],
  tabs: {
    experience: ['다양한 화면에서 일관된 경험\n반응형 웹사이트 구축', '웹 표준, 웹 접근성을 고려한 마크업\n반응형 웹, 인터랙션 구현', '사용자 경험을 고려한\n유지보수 및 코드 개선'],
    skills: ['HTML5 · 시맨틱 마크업\n읽기 쉬운 구조와 접근성', 'SCSS / CSS3 · Responsive\n다양한 화면에 유연한 레이아웃', 'JavaScript · GSAP\n목적이 분명한 인터랙션'],
    tools: ['Figma · Photoshop\n디자인 의도 이해와 에셋 작업', 'Git / SVN\n소스 관리와 협업', 'Browser DevTools\n반응형 확인과 디버깅']
  },
  projects: {
    institution: {
      title:'글로벌샤인 USA', image:'', imageAlt:'교체 예정인 건축 샘플 이미지 — 실제 글로벌샤인 USA 화면이 아닙니다',
      url:'https://gshineusa.com/', featuredTitle:'글로벌샤인\nUSA', category:'CORPORATE WEBSITE', status:'', compact:true,
      description:'미국 브랜드의 글로벌 비즈니스를 소개하는 기업 웹사이트.',
      role:'메인·서브 페이지 및 공통 UI 전체 구축',
      contribution:'퍼블리싱 100% · 단독 작업',
      // 실제 사용 기술과 핵심 구현 내용을 확인한 뒤 입력. 빈 항목은 표시하지 않습니다.
      tech:'', highlights:''
    },
    public: {title:'',image:'',imageAlt:'',url:'',featuredTitle:'공공서비스\n플랫폼',category:'PUBLIC SERVICE',description:'필요한 정보에 더 쉽게 다가가도록.\n명확한 정보 구조와 공통 UI를\n구성하는 교체용 샘플입니다.'},
    brand: {title:'',image:'',imageAlt:'',url:'',featuredTitle:'브랜드\n웹사이트',category:'BRAND SITE',description:'브랜드의 이야기를 웹의 언어로.\n타이포그래피와 인터랙션을\n탐구하는 교체용 샘플입니다.'},
    campaign: {title:'',image:'',imageAlt:'',url:'',featuredTitle:'캠페인\n사이트',category:'CAMPAIGN',description:'짧은 순간에도 분명한 인상을.\n콘텐츠의 흐름을 설계하는\n캠페인 교체용 샘플입니다.'},
    responsive: {title:'',image:'',imageAlt:'',url:'',featuredTitle:'반응형\n웹사이트',category:'RESPONSIVE',description:'어떤 화면에서도 일관된 경험.\n유연한 레이아웃을 구현하는\n반응형 교체용 샘플입니다.'}
  }
};
