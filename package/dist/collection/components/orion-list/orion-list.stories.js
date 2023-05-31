export default {
  title: 'Components/orion-list',
  component: 'orion-list',
  parameters: {
    docs: {
      description: {
        component:
          'List is a container for list items. It is also known as `ul` or `Unordered List`. This component is styled to resemble a list and semantically renders an `<ul>`. Use in conjunction with `orion-list-item` component. Additional documentation available at [orion.united.com](https://orion.united.com/)',
      },
    },
  },
};

/**
 * This function will remove empty lines from the template string
 * @param {string} text
 * @returns {string} text without empty lines
 */
const removeEmptyLines = (text = '') => text
  .split('\n')
  .filter((textPart) => Boolean(textPart.trim()))
  .join('\n');

const Template = (args) => removeEmptyLines(`
    <orion-list>
      <orion-list-item>
        List item one
      </orion-list-item>
      <orion-list-item>
        List item two
      </orion-list-item>
      <orion-list-item>
        List item three
      </orion-list-item>
    </orion-list>
  `);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'Default list',
    },
  },
};
