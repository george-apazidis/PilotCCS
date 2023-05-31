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
  title: 'Components/orion-checkbox',
  component: 'orion-checkbox',
  parameters: {
    actions: {
      handles: ['valueChanged'],
    },
    docs: {
      description: {
        component:
          'Checkbox is a component that allows users to select one or more options from a set. Use in conjunction with the `orion-checkbox-group` component to control layout. Use in conjunction with `orion-label`, `orion-error` and `orion-note` components. Additional documentation available at [orion.united.com](https://orion.united.com/)',
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
  <orion-checkbox
  ${args.checked ? 'checked' : ''}
  ${args.disabled ? 'disabled' : ''}
  >
    ${args.slotContent}
  </orion-checkbox>
`);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  slotContent: 'Checkbox item',
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
