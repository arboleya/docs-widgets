import { createConfig } from 'fuels';

export default createConfig({
  workspace: './sway',
  output: './src/sway',
  useBuiltinForc: false,
  useBuiltinFuelCore: false,
  fuelCorePort: 4000,
  forcBuildFlags: ['--release']
});

/**
 * Check the docs:
 * https://docs.fuel.network/docs/fuels-ts/fuels-cli/abi-typegen/
 */
