import { createClient } from '@supabase/supabase-js';

const supabase = createClient(undefined, undefined);
console.log('client created', !!supabase);

(async () => {
  try {
    const {data, error} = await supabase.from('test').select('*');
    console.log('result', data, error);
  } catch (e) {
    console.error('caught error', e);
  }
})();
