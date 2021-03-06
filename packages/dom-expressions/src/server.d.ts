// forward declarations
declare namespace NodeJS {
  interface ReadableStream {}
}

type RenderToStringResults = {
  html: string;
  script: string
}

type RenderToStreamResults<T> = {
  stream: T;
  script: string;
}

export function renderToString<T>(
  fn: () => T,
  options?: {
    eventNames?: string[];
  }
): RenderToStringResults;
export function renderToStringAsync<T>(
  fn: () => T,
  options?: {
    eventNames?: string[];
    timeoutMs?: number;
  }
): Promise<RenderToStringResults>;
export function renderToNodeStream<T>(
  fn: () => T,
  options?: {
    eventNames?: string[];
  }
): RenderToStreamResults<NodeJS.ReadableStream>;
export function renderToWebStream<T>(
  fn: () => T,
  options?: {
    eventNames?: string[];
  }
): RenderToStreamResults<ReadableStream>;
export function ssr(template: string[] | string, ...nodes: any[]): { t: string };
export function resolveSSRNode(node: any): string;
export function ssrClassList(value: { [k: string]: boolean }): string;
export function ssrStyle(value: { [k: string]: string }): string;
export function ssrSpread(accessor: any): () => string;
export function ssrBoolean(key: string, value: boolean): string;
export function escape(html: string): string;
export function getHydrationKey(): string;
export function effect<T>(fn: (prev?: T) => T, init?: T): void;
export function memo<T>(fn: () => T, equal: boolean): () => T;
export function createComponent<T>(Comp: (props: T) => JSX.Element, props: T): JSX.Element;
export function mergeProps(...sources: unknown[]): unknown;
export function getOwner(): unknown;
