declare module '*.png' {
  const content: any;
  export default content;
}
declare module '*.webp' {
  const content: any;
  export default content;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.jpg' {
  const content: any;
  export default content;
}
declare module '*.gif' {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
