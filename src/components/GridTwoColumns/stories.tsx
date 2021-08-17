import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns ',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis reprehenderit eos, repudiandae repellat natus esse, qui fugiat inventore odit sint et aperiam? Odit mollitia qui natus rerum ullam impedit! Provident!',
    srcImg: 'assets/images/javascript.png',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
