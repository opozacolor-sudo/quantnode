export function ComingSoonApps() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-12 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-xs tracking-wide text-accent uppercase">Aplicații mobile</p>
          <h2 className="mt-2 text-xl font-medium tracking-tight">iOS și Android, în curând</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            Dashboard-ul, alertele de execuție și controlul limitelor vor fi disponibile nativ pe iPhone și
            Android. Până atunci, platforma rulează în browser.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full border border-line px-4 py-2 text-sm text-muted">iOS · în curând</span>
          <span className="rounded-full border border-line px-4 py-2 text-sm text-muted">Android · în curând</span>
        </div>
      </div>
    </section>
  );
}
