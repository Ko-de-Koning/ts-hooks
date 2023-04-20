import { ReactElement, ReactNode } from "react";

export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return <div> {title} </div>;
};

//een andere manier om onderstaande functie te definieren - gebruik makend van const en type

export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement;

export const List: ListComponent = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

/* export function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
} */

function TestComponent() {
  return (
    <div>
      <Heading title="Working with Props" />
      <List
        items={["Nice", "Generic", "List"]}
        render={(str) => <strong> {str} </strong>}
      />
    </div>
  );
}

export default TestComponent;
