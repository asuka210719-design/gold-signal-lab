export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6 rounded-2xl border border-yellow-500/30 bg-zinc-950 p-6 shadow-lg">
          <p className="text-sm text-yellow-400">XAUUSD Trading Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-white">
            Gold Signal Lab
          </h1>
          <p className="mt-2 text-zinc-400">
            XAUUSD専用の売買シナリオ・ロット計算・成績管理アプリ
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-sm text-zinc-400">今の戦略</p>
            <h2 className="mt-2 text-2xl font-bold text-yellow-400">
              押し目買い待ち
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              4時間足は上昇基調。1時間足の押し目形成を確認中。
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-sm text-zinc-400">方向感スコア</p>
            <h2 className="mt-2 text-2xl font-bold text-white">72 / 100</h2>
            <p className="mt-2 text-sm text-zinc-400">
              買い優勢。ただし重要指標前はロット抑制。
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-sm text-zinc-400">次の注目価格</p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              2,345.00
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              サポート反発なら買いシナリオ検討。
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-yellow-500/30 bg-zinc-950 p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-bold text-yellow-400">
                買いシナリオ
              </h3>
              <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
                信頼度 72
              </span>
            </div>
            <div className="space-y-2 text-sm text-zinc-300">
              <p>エントリー候補：2,345.20〜2,347.00</p>
              <p>TP1：2,352.00</p>
              <p>TP2：2,358.00</p>
              <p>損切り：2,339.00</p>
              <p className="text-zinc-400">
                根拠：4時間足上昇、水平線反発、20MA付近。
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-red-500/30 bg-zinc-950 p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-bold text-red-400">
                売りシナリオ
              </h3>
              <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-400">
                信頼度 38
              </span>
            </div>
            <div className="space-y-2 text-sm text-zinc-300">
              <p>エントリー候補：2,360.00〜2,363.00</p>
              <p>TP1：2,352.00</p>
              <p>TP2：2,345.00</p>
              <p>損切り：2,368.00</p>
              <p className="text-zinc-400">
                根拠：上位足は買い優勢のため、売りは慎重。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <h3 className="text-xl font-bold text-white">
            TradingView XAUUSD Chart
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            次のステップでここにTradingViewチャートを埋め込みます。
          </p>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          本アプリの分析は投資助言ではありません。売買判断は利用者自身の責任で行ってください。
        </p>
      </section>
    </main>
  );
}
