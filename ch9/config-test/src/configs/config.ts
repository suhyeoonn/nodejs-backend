import common from './common';
import dev from './dev';
import local from './local';

const phase = process.env.NODE_ENV;

let conf = {};
if (phase === 'local') {
  conf = local;
} else if (phase === 'dev') {
  conf = dev;
}

export default () => ({
  ...common,
  ...conf,
});
