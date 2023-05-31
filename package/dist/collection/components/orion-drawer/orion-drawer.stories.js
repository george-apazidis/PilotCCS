/**
 * This function creates a Storybook ArgsTable settings object.
 * The goal is to organize the Storybook only controls under
 * the same category in the ArgsTable
 * @param {string} slotName
 */
const getTableSettings = (slotName) => ({
  description: `**NOT PART OF COMPONENT API**. Toggle the \`${slotName}\` slot in this storybook story`,
  table: {
    category: 'Story Controls. Not component API',
  },
});

export default {
  title: 'Modules/orion-drawer',
  component: 'orion-drawer',
  parameters: {
    docs: {
      description: {
        component:
          'Drawer is a component that allows users to display content in a temporary sidebar. Additional documentation available at [orion.united.com](https://orion.united.com/)',
      },
    },
  },
  // Configuring the these Storybook only controls to appear under
  // the same category in the ArgsTable
  argTypes: {
    showTitleSlot: getTableSettings('orion-drawer-title'),
    showBodySlot: getTableSettings('orion-drawer-body'),
    showFooterSlot: getTableSettings('orion-drawer-footer-content'),
    showSecondaryButtonSlot: getTableSettings('orion-drawer-secondary-button'),
    showPrimaryButtonSlot: getTableSettings('orion-drawer-primary-button'),
    slotContentTitle: getTableSettings('title'),
    slotContentBody: getTableSettings('body'),
    slotContentFooter: getTableSettings('footer'),
    slotContentSecondaryButton: getTableSettings('secondary button'),
    slotContentPrimaryButton: getTableSettings('primary button'),
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
  <orion-button>Open drawer</orion-button>

  <orion-drawer id="drawer1"

    ${args.openFrom ? `open-from="${args.openFrom}"` : ''}
    ${args.isOpen ? 'is-open' : ''}
  >

    ${
  args.showTitleSlot
    ? `<span slot="orion-drawer-title">
      ${args.slotContentTitle}
    </span>`
    : ''
}

    ${
  args.showBodySlot
    ? `
    <div slot="orion-drawer-body">
      ${args.slotContentBody}
    </div>
      `
    : ''
}

    ${
  args.showFooterSlot
    ? `
      <span slot="orion-drawer-footer-content">
        ${args.slotContentFooter}
      </span>
      `
    : ''
}

    ${
  args.showSecondaryButtonSlot
    ? `
      <span slot="orion-drawer-secondary-button">
        ${args.slotContentSecondaryButton}
      </span>
      `
    : ''
}

    ${
  args.showPrimaryButtonSlot
    ? `
      <span slot="orion-drawer-primary-button">
        ${args.slotContentPrimaryButton}
      </span>
      `
    : ''
}
  </orion-drawer>

  <script>
  (function () {

    const trigger = document.querySelector('orion-button');

    trigger.onclick = () => {
      const drawer = document.querySelector('orion-drawer');
      drawer.isOpen = !drawer.isOpen;
    };
  })()
  </script>

  <script>
  (function () {
      document.getElementById('drawer1').addEventListener('orionDrawerFooterBtnClicked', ev => {
      if (ev.detail.variant === 'primary') {
        console.log('primary button clicked');
      }

      if (ev.detail.variant === 'secondary') {
        console.log('secondary button clicked');
      }
    })
  })()
</script>
`);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  showTitleSlot: true,
  showBodySlot: true,
  showFooterSlot: false,
  showSecondaryButtonSlot: true,
  showPrimaryButtonSlot: true,
  slotContentTitle: 'Drawer title',
  slotContentBody: 'Lorem ipsum dolor sit amet, consetetur adipisicing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
  slotContentFooter: 'Optional footer content',
  slotContentSecondaryButton: 'Secondary',
  slotContentPrimaryButton: 'Primary',
};

export const OpenFromLeft = Template.bind({});
OpenFromLeft.args = {
  ...Default.args,
  openFrom: 'left',
};

export const OpenFromBottom = Template.bind({});
OpenFromBottom.args = {
  ...Default.args,
  openFrom: 'bottom',
};
