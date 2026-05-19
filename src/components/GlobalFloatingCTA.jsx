/**
 * GlobalFloatingCTA — the lime "Talk to us" button fixed to the right edge.
 * Exists here once so no section needs its own copy.
 */
export default function GlobalFloatingCTA() {
  return (
    <a
      href="#contact"
      aria-label="Talk to us — contact Studio Elemento"
      className="fixed right-0 top-1/2 z-50 -translate-y-1/2 bg-[#d9ef57] px-5 py-8 text-xl font-semibold text-black transition hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-black focus-visible:ring-offset-2"
    >
      <span className="vertical-text">Talk to us</span>
    </a>
  );
}
