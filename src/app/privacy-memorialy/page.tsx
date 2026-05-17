'use client';

export default function PrivacyMemorialy() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Memorialy プライバシーポリシー</h1>

          <div className="space-y-8">
            <section>
              <p className="text-gray-300 leading-relaxed">
                本アプリケーション（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">1. 収集する情報</h2>
              <p className="text-gray-300 leading-relaxed">
                本アプリは、以下の情報を収集する場合があります：
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>アプリの使用状況</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">2. 情報の使用目的</h2>
              <p className="text-gray-300 leading-relaxed">
                収集した情報は、以下の目的で使用されます：
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>アプリの機能提供</li>
                <li>ユーザー体験の向上</li>
                <li>サービスの改善</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">3. 情報の保存</h2>
              <p className="text-gray-300 leading-relaxed">
                すべてのデータはお使いのデバイス上にローカルに保存されます。外部サーバーへのデータ送信は行いません。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">4. 第三者への情報提供</h2>
              <p className="text-gray-300 leading-relaxed">
                本アプリは、ユーザーの個人情報を第三者と共有することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4">5. プライバシーポリシーの変更</h2>
              <p className="text-gray-300 leading-relaxed">
                本ポリシーは予告なく変更される場合があります。変更後のポリシーは、アプリ内で公開された時点で効力を生じます。
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
