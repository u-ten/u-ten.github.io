'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AppInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  images: { url: string; alt: string }[];
  appStoreUrl: string | null;
  websiteUrl: string | null;
  technologies: string[];
  color: string;
  icon: string;
  privacyUrl: string;
  status: 'available' | 'coming-soon';
}

const apps: AppInfo[] = [
  {
    id: 'random-qr',
    title: 'ランダムQRコード生成',
    subtitle: 'Random QR Generator',
    description: 'ランダムなQRコードをワンタップで生成するiOSアプリです。ユニークなQRコードを楽しんだり、アートとして壁紙にしたりと、自由な使い方ができます。',
    details: [
      'ワンタップでランダムなQRコードを生成',
      '生成したQRコードを画像として保存',
      'シンプルで直感的なUI',
    ],
    images: [
      { url: '/qr-generator-screenshot1.PNG', alt: 'QRコード生成画面' },
      { url: '/qr-generator-screenshot2.PNG', alt: 'QRコード一覧画面' },
    ],
    appStoreUrl: 'https://apps.apple.com/cr/app/ランダムqrコード生成/id6743641682',
    websiteUrl: null,
    technologies: ['Swift', 'QRコード生成', 'iOS'],
    color: 'from-indigo-600 to-violet-600',
    icon: '⊞',
    privacyUrl: '/privacy-random-qr-gen',
    status: 'available',
  },
  {
    id: 'memoriary',
    title: 'Memoriary',
    subtitle: '大切な思い出を、美しいストーリーに',
    description: '写真・テキスト・BGM・アニメーションを組み合わせて、大切な思い出を美しいスライドショーにできるiOSアプリです。誕生日・結婚式・卒業式など特別な瞬間を、動画として保存・共有できます。',
    details: [
      '写真とテキストをストーリー形式で編集',
      'BGM（背景音楽）の設定',
      '各フレームへのアニメーション効果',
      '動画として書き出し・保存',
      'オフライン完結・プライバシー重視（データはデバイス内に保存）',
    ],
    images: [
      { url: 'https://memorialy.jp/web/app_screen/IMG_5372.png', alt: 'Memorialy スクリーンショット1' },
      { url: 'https://memorialy.jp/web/app_screen/IMG_5374.png', alt: 'Memorialy スクリーンショット2' },
      { url: 'https://memorialy.jp/web/app_screen/IMG_5376.png', alt: 'Memorialy スクリーンショット3' },
      { url: 'https://memorialy.jp/web/app_screen/IMG_5378.png', alt: 'Memorialy スクリーンショット4' },
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/memorialy/id6760036241',
    websiteUrl: 'https://memorialy.jp/',
    technologies: ['Swift', 'iOS', 'オフライン対応'],
    color: 'from-amber-600 to-orange-500',
    icon: '◈',
    privacyUrl: '/privacy-memorialy',
    status: 'available',
  },
];

export default function Apps() {
  return (
    <main className="min-h-screen pt-28 pb-20">
      <section className="px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">アプリ一覧</h1>
          <p className="text-gray-400">開発しているモバイルアプリの一覧です。</p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {apps.map((app) => (
            <div key={app.id} className="card">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left: screenshots */}
                <div className="lg:w-64 shrink-0">
                  {app.images.length > 0 ? (
                    <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="h-full w-full"
                      >
                        {app.images.map((image, i) => (
                          <SwiperSlide key={i}>
                            <div className="relative w-full h-full">
                              <Image
                                src={image.url}
                                alt={image.alt}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : (
                    <div className={`w-full aspect-[9/16] rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center opacity-20`}>
                      <span className="text-7xl">{app.icon}</span>
                    </div>
                  )}
                </div>

                {/* Right: info */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-3xl shadow-lg shrink-0`}>
                      {app.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl md:text-3xl font-bold">{app.title}</h2>
                        {app.status === 'coming-soon' && (
                          <span className="text-xs px-2.5 py-1 bg-white/10 rounded-full text-gray-400">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">{app.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{app.description}</p>

                  <ul className="space-y-2">
                    {app.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-indigo-400 mt-0.5">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2 flex-wrap">
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
                        App Storeで入手
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600 italic">近日公開予定</span>
                    )}
                    {app.websiteUrl && (
                      <a
                        href={app.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        公式サイト
                      </a>
                    )}
                    <Link
                      href={app.privacyUrl}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      プライバシーポリシー
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 pt-20">
        <div className="max-w-5xl mx-auto border-t border-white/[0.06] pt-8 text-center text-gray-600 text-sm">
          <p>© 2025 Uten. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
