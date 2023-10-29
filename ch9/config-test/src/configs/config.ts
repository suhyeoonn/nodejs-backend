import { readFileSync } from 'fs';
import common from './common';
import dev from './dev';
import local from './local';
import * as yaml from 'js-yaml';

const phase = process.env.NODE_ENV;

let conf = {};
if (phase === 'local') {
  conf = local;
} else if (phase === 'dev') {
  conf = dev;
}

const yamlConfig: Record<string, any> = yaml.load(
  readFileSync(`${process.cwd()}/envs/config.yaml`, 'utf8'),
);

export default () => ({
  ...common,
  ...conf,
  ...yamlConfig,
});
