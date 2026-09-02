import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display mt-10 text-2xl font-semibold text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-display mt-8 text-xl font-semibold text-ink"
      {...props}
    />
  ),
  p: (props) => <p className="mt-4 leading-relaxed text-ink-muted" {...props} />,
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-ink-muted" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-ink-muted" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  a: (props) => (
    <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  table: (props) => (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="border-b border-border-soft text-left" {...props} />,
  th: (props) => <th className="px-3 py-2 font-semibold text-ink" {...props} />,
  td: (props) => <td className="border-b border-border-soft px-3 py-2 text-ink-muted" {...props} />,
};
