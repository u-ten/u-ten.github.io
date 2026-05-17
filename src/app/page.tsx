import Link from 'next/link';

const apps = [
  {
    id: 'random-qr',
    title: 'ランダムQRコード生成',
    subtitle: 'Random QR Generator',
    description: 'ランダムなQRコードをワンタップで生成。アートとして飾ったり、ユニークなQRコードを楽しめるアプリです。',
    tags: ['QRコード', 'ランダム生成', 'ユニーク'],
    color: 'from-indigo-600 to-violet-600',
    icon: '⊞',
    appStoreUrl: 'https://apps.apple.com/cr/app/ランダムqrコード生成/id6743641682',
    privacyUrl: '/privacy-random-qr-gen',
    status: 'available',
    images: [
      { url: '/qr-generator-screenshot1.PNG', alt: 'QRコード生成画面' },
      { url: '/qr-generator-screenshot2.PNG', alt: 'QRコード一覧画面' },
    ],
  },
  {
    id: 'memoriary',
    title: 'Memoriary',
    subtitle: 'Photo & Video Manager',
    description: '写真・動画を美しく管理・閲覧できるモバイルアプリ。思い出をひとつのアルバムに。現在開発中です。',
    tags: ['Flutter', '写真管理', '動画対応'],
    color: 'from-emerald-600 to-teal-600',
    icon: '◈',
    appStoreUrl: null,
    privacyUrl: '/privacy-memorialy',
    status: 'coming-soon',
    images: [],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-6 opacity-0 animate-fade-up">
            Uten Apps
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-up animation-delay-100">
            シンプルで<br />
            <span className="gradient-text">使いやすい</span>アプリ
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-up animation-delay-200">
            日常をちょっとだけ豊かにする、モバイルアプリを作っています。
          </p>
          <div className="flex gap-4 justify-center opacity-0 animate-fade-up animation-delay-300">
            <Link href="/apps" className="btn-primary">
              アプリを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Apps showcase */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-12 opacity-0 animate-fade-up animation-delay-400">
            アプリ一覧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app, i) => (
              <div
                key={app.id}
                className={`card flex flex-col gap-5 opacity-0 animate-fade-up`}
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {app.icon}
                </div>
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{app.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{app.subtitle}</p>
                    </div>
                    {app.status === 'coming-soon' && (
                      <span className="shrink-0 text-xs px-2.5 py-1 bg-white/10 rounded-full text-gray-400">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {app.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Actions */}
                <div className="flex items-center gap-3 pt-1">
                  {app.appStoreUrl ? (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-store"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600">近日公開予定</span>
                  )}
                  <Link
                    href={app.privacyUrl}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    プライバシーポリシー
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
          <p>© 2025 Uten. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
