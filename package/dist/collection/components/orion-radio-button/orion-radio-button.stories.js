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
  title: 'Components/orion-radio-button',
  component: 'orion-radio-button',
  parameters: {
    actions: {
      handles: ['valueChanged'],
    },
    docs: {
      description: {
        component:
          'Radio button is a component that displays a radio button. It is used to select a single option from a set of options. Use in conjunction with the `orion-radio-group` component. Additional documentation available at [orion.united.com](https://orion.united.com/)',
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
  <orion-radio-button
  ${args.checked ? 'checked' : ''}
  ${args.disabled ? 'disabled' : ''}
  ${args.value ? `value="${args.value}"` : ''}
  >
    ${args.slotContent}
  </orion-radio-button>
`);

export const Default = Template.bind({});
Default.args = {
  value: 'value-1',
  slotContent: 'Radio button item',
};
Default.parameters = {
  docs: {
    description: {
      story: 'The default state',
    },
  },
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
};
Checked.parameters = {
  docs: {
    description: {
      story: 'The checked state',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'The disabled state',
    },
  },
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  ...Default.args,
  checked: true,
  disabled: true,
};
DisabledChecked.parameters = {
  docs: {
    description: {
      story: 'The disabled and checked state',
    },
  },
};
