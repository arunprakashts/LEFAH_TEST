await page.locator('.coreSelectDropdown-selection__rendered').first().click();
await page.locator('#MemberFirmID').fill('poland');
await page.getByRole('option', { name: 'Poland' }).click();
await page.locator('.inputWrapperContainer.inputContainer.InputWrapper-inputContainer-0-2-15.error > #dropdownParentContainer > .coreSelectDropdown > .coreSelectDropdown-selection > .coreSelectDropdown-selection__rendered').first().click();
await page.locator('#RequestLevelID').fill('poland RL');
await page.getByRole('option', { name: 'Poland RL' }).click();
await page.locator('#LegalEntityName').click();
await page.locator('.inputWrapperContainer.inputContainer.InputWrapper-inputContainer-0-2-15.error > #dropdownParentContainer > .coreSelectDropdown > .coreSelectDropdown-selection > .coreSelectDropdown-selection__rendered').first().click();
await page.getByRole('option', { name: 'Investment' }).click();