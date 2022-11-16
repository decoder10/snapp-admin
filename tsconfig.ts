export interface CompilerOptions {
  baseUrl: string;
}

export interface tsconfig {
  compilerOptions: CompilerOptions;
  include: string[];
  exclude: string[];
}
