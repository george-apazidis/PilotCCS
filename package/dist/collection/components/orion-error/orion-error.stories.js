/**
 * This function creates a Storybook ArgsTable settings object.
 * The goal is to organize the Storybook only controls under
 * the same category in the ArgsTable
 * @param {string} slotContent
 */
const getTableSettings = (slotContent) => ({
  description: `**NOT PART OF COMPONENT API**. Modify the \`${slotContent}\` slot content in this storybook story`,
  table: {
    category: 'Story Controls. Not component API',
  },
});

export default {
  title: 'Components/orion-error',
  component: 'orion-error',
  parameters: {
    docs: {
      description: {
        component:
          'Error is a component that displays an error message. It is used to display errors in forms. Use in conjunction with the `orion-text-input` component and other form components. Additional documentation available at [orion.united.com](https://orion.united.com/)',
      },
    },
  },
  // Configuring the these Storybook only controls to appear under
  // the same category in the ArgsTable
  argTypes: {
    slotContent: getTableSettings('default'),
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
  <orion-error>
    ${args.slotContent}
  </orion-error>
`);

export const Default = Template.bind({});
Default.args = {
  slotContent: 'This is an error message',
};
Default.parameters = {
  docs: {
    description: {
      story: 'The default state',
    },
  },
};
