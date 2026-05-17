'use client';

export default function PrivacyMemorialy() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Memoriary プライバシーポリシー</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">1. はじめに</h2>
              <p className="text-gray-300 leading-relaxed">
                本プライバシーポリシーは、memorialy（以下「本アプリ」）の利用において、
                ユーザーの個人情報およびデータの取り扱いについて説明するものです。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">2. 収集する情報</h2>
              <p className="text-gray-300 leading-relaxed">
                本アプリでは、以下の情報を収集する場合があります：
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>アプリの利用状況に関する統計情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">3. アクセス権限</h2>
              <p className="text-gray-300 leading-relaxed">
                本アプリは以下のデバイス機能へのアクセスを求める場合があります：
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>カメラ：写真・動画の撮影のため</li>
                <li>フォトライブラリ：写真・動画の選択および保存のため</li>
                <li>ストレージ：ファイルの読み込みおよび保存のため</li>
                <li>マイク：動画撮影時の音声録音のため</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                これらの権限はアプリの機能提供に必要な範囲でのみ使用され、ユーザーの同意なく他の目的に利用されることはありません。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">4. 情報の利用目的</h2>
              <p className="text-gray-300 leading-relaxed">
                収集した情報は、以下の目的で利用されます：
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>アプリの機能提供および改善</li>
                <li>ユーザーサポートの提供</li>
                <li>アプリのパフォーマンス分析</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">5. 情報の保管</h2>
              <p className="text-gray-300 leading-relaxed">
                写真・動画・音声などのメディアデータおよびアプリ内で作成されたすべてのデータは、
                ユーザーのデバイス上にのみ保存され、外部サーバーには送信されません。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">6. 第三者への提供</h2>
              <p className="text-gray-300 leading-relaxed">
                収集した情報は、法令に基づく場合を除き、ユーザーの同意なく第三者に提供されることはありません。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">7. セキュリティ</h2>
              <p className="text-gray-300 leading-relaxed">
                ユーザーのデータを保護するため、適切なセキュリティ対策を実施しています。
                ただし、インターネットを通じた情報の送受信には常にリスクが伴うことをご理解ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">8. お問い合わせ</h2>
              <p className="text-gray-300 leading-relaxed">
                本プライバシーポリシーに関するお問い合わせは、アプリ内の問い合わせフォームまたは
                以下の連絡先までお願いいたします。
              </p>
              <div className="mt-4 text-gray-300">
                <p>メールアドレス: [1tree.add@gmail.com]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">9. プライバシーポリシーの変更</h2>
              <p className="text-gray-300 leading-relaxed">
                本プライバシーポリシーは、必要に応じて変更される場合があります。
                重要な変更がある場合は、アプリ内で通知または告知を行います。
              </p>
            </section>

            <div className="mt-12 text-gray-400 text-sm">
              最終更新日: 2026年3月7日
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
