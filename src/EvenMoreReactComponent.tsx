export interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return <h3>{title}</h3>;
}
function TestComponent() {
  return <Heading title="working with Props" />;
}

export default TestComponent;
